// ===============================
// SCHOOL MANAGEMENT API
// Single File Complete Code
// File Name: server.js
// ===============================

require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());


// ===============================
// MYSQL CONNECTION
// ===============================

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'school_management'
});

db.connect((err) => {

    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("MySQL Connected Successfully");
    }
});


// ===============================
// ADD SCHOOL API
// ===============================

app.post('/addSchool', (req, res) => {

    const { name, address, latitude, longitude } = req.body;

    // Validation
    if (!name || !address || latitude == null || longitude == null) {

        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    // Check datatype
    if (isNaN(latitude) || isNaN(longitude)) {

        return res.status(400).json({
            success: false,
            message: "Latitude and Longitude must be numbers"
        });
    }

    const sql = `
        INSERT INTO schools
        (name, address, latitude, longitude)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, address, latitude, longitude],
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    success: false,
                    message: "Database Error",
                    error: err
                });
            }

            res.status(201).json({
                success: true,
                message: "School added successfully",
                schoolId: result.insertId
            });
        }
    );
});


// ===============================
// LIST SCHOOLS API
// ===============================

app.get('/listSchools', (req, res) => {

    const userLatitude = parseFloat(req.query.latitude);
    const userLongitude = parseFloat(req.query.longitude);

    // Validation
    if (isNaN(userLatitude) || isNaN(userLongitude)) {

        return res.status(400).json({
            success: false,
            message: "Valid latitude and longitude are required"
        });
    }

    const sql = `SELECT * FROM schools`;

    db.query(sql, (err, results) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: "Database Error",
                error: err
            });
        }

        // Calculate distance
        const schoolsWithDistance = results.map((school) => {

            const distance = calculateDistance(
                userLatitude,
                userLongitude,
                school.latitude,
                school.longitude
            );

            return {
                id: school.id,
                name: school.name,
                address: school.address,
                latitude: school.latitude,
                longitude: school.longitude,
                distance: distance.toFixed(2) + " KM"
            };
        });

        // Sort by nearest distance
        schoolsWithDistance.sort((a, b) => {

            return parseFloat(a.distance) - parseFloat(b.distance);
        });

        res.status(200).json({
            success: true,
            totalSchools: schoolsWithDistance.length,
            schools: schoolsWithDistance
        });
    });
});


// ===============================
// HAVERSINE FORMULA
// ===============================

function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371;

    const dLat = degreeToRadian(lat2 - lat1);
    const dLon = degreeToRadian(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +

        Math.cos(degreeToRadian(lat1)) *
        Math.cos(degreeToRadian(lat2)) *

        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    return distance;
}

function degreeToRadian(degree) {

    return degree * (Math.PI / 180);
}


// ===============================
// HOME ROUTE
// ===============================

app.get('/', (req, res) => {

    res.send("School Management API Running Successfully");
});


// ===============================
// SERVER
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running On Port ${PORT}`);
});