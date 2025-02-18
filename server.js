import express from "express";
import divisions from "./data.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Get all the divisions
app.get('/api/divisions', (req, res) => {
    const allDivisions = divisions.map(division => ({
        id: division.id,
        name: division.name,
        bengaliName: division.bengaliName
    }));
    res.send(allDivisions);
});


// Get all the districts
app.get('/api/districts', (req, res) => {
    const allDistricts = divisions.flatMap(division => 
        division.districts.map(district => ({
            id: district.id,
            name: district.name,
            bengaliName: district.bengaliName
        }))
    );
    res.json(allDistricts);
});

// Get districts of a division
app.get('/api/division/:division_name', (req, res) => {
    const divisionName = req.params.division_name.charAt(0).toUpperCase() + req.params.division_name.slice(1).toLowerCase();
    
    const division = divisions.find(division => division.name === divisionName);

    if (!division) {
        return res.status(404).json({
            status: {
                code: 404,
                message: "Division Not Found",
            }
        });
    }

    res.json(division.districts);
});

// Get upazila of a district
app.get('/api/district/:district_name', (req, res) => {
    const districtName = req.params.district_name.charAt(0).toUpperCase() + req.params.district_name.slice(1).toLowerCase();

    for (const division of divisions) {
        const district = division.districts.find(dis => dis.name === districtName);

        if (district) {
            return res.json(district.upazilas);
        }
    }

    return res.status(404).json({
        status: {
            code: 404,
            message: "District Not Found",
        }
    });

});



// Catch-all route for undefined endpoints
app.use((req, res) => {
    res.status(404).json({
        status: {
            code: 404,
            message: "Not Found",
        },
        error: "The requested route was not found. Please check the API documentation."
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
