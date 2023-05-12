import db from "./connection.js";

db.shops.deleteMany({ city: {$exists: false}});