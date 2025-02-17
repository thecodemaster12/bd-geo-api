import express from "express";
import divisions from "./data.js";
const app = express();
const port = 3000

app.get('/api/divisions', (req, res) => {
    const allDivisions = divisions.map(division => {
        return {
            id: division.id,
            name: division.name,
            bengaliName: division.bengaliName
        }
    })
    res.send(allDivisions)
})

app.get('/api/districts', (req, res) => {
    const allDistricts = divisions.flatMap(division => {
        return division.districts.map(district => {
            return {
                id: district.id,
                name: district.name,
                bengaliName: district.bengaliName,
            }
        })
    })
    res.send(allDistricts)
})

app.listen(port, () => {
    console.log(`Listening to Port: ${port}`);
})