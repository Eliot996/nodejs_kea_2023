import db from "./connection.js";

db.shops.updateMany({ city: "Ishøj" }, { $set: {members: [1, 14, 2, 515]} });