import db from "./connection.js"

db.exec(`CREATE TABLE Planets (
    id   INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    size FLOAT, 
    is_habitable BOOLEAN
    )`);