import db from "./connection.js"

// Table creation
db.exec(`CREATE TABLE IF NOT EXISTS plantes (
    id   INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    size FLOAT, 
    is_habitable BOOLEAN
    )`);

db.exec(`CREATE TABLE IF NOT EXISTS people (
    id   INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT
    )`);