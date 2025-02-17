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

app.get('/api/divisions', (req, res) => {
    const allDivisions = divisions.map(division => ({
        id: division.id,
        name: division.name,
        bengaliName: division.bengaliName
    }));
    res.send(allDivisions);
});

app.get('/api/districts', (req, res) => {
    const allDistricts = divisions.flatMap(division => 
        division.districts.map(district => ({
            id: district.id,
            name: district.name,
            bengaliName: district.bengaliName
        }))
    );
    res.send(allDistricts);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
