import db from "./connection.js";

async function  createShop(city, shops) {
    const result = await db.shops.insertOne({ city: city, shops: shops });
    console.log(result);
}

createShop("Roskilde", []);
