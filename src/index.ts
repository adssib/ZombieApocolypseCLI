import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

interface Location {
    location_id: number;
    zombie_count: number;
    medical_supplies: number;
    location_name: string;
}

interface SurvivalItems {
    item_id: number;
    item_name: string;
    category: string;
    durability: number;
    zombie_effectivenss: number;
    location: Location;
    rarity: number;
}

const country_api = "https://restcountries.com/v3.1/all";
const items_api = "https://fakestoreapi.com/products"

// axios.get(country_api)
//   .then(response => console.log(response.data));

async function GetItems(locations: Location[]) {
    try {
        const res = await fetch(items_api); 

        if (!res.ok) {
            throw new Error(`API call failed with status: ${res.status}`);
        }

        const json = await res.json(); 
        
        const items = json.map((p, index) => {
            return {
                item_id: p.id || index, // Use the original ID or the index as a fallback
                item_name: p.title,
                category: p.category,
                durability: Math.floor((p.rating.count / 1000) * 60),
                zombie_effectivenss: Math.floor(Math.random()*10),
                location: GetRandomLocation(locations),
                rarity: p.rating.rate,        
            };
        });

        console.log("Generated Items:", items);
        return items;

    } catch (error) {
        console.error("Failed to fetch or process items:", error);
        return [];
    }
}

async function GetLocations(): Promise<Location[]> {
        try {
        const res = await fetch(country_api); 

        if (!res.ok) {
            throw new Error(`API call failed with status: ${res.status}`);
        }

        const json = await res.json(); 
        
        const locations = json.map((p, index) => {
            return {
                location_id: p.id || index,
                zombie_count: Math.floor(p.population /100000),
                medical_supplies: Math.floor(Math.random() * 10), 
            };
        });

        console.log("Generated Items:", locations);
        return locations;

    } catch (error) {
        console.error("Failed to fetch or process items:", error);
        return [];
    }
    return [];
}

function GetRandomLocation(locations: Location[]): Location {
    if (!locations || locations.length === 0) {
        console.error("The array is empty. Cannot get a random item.");
        return null;
    }

    const randomIndex = Math.floor(Math.random() * locations.length);

    return locations[randomIndex];
}

async function CreateDB(db: any) {
// SQL STATEMNTS TO CREATE THE DB
// RUN SQL STATEMENTS WITHIN A FOR EACH ON EACH ARRAY 
    console.log("Creating 'items' table if it doesn't exist...");
    await db.exec(`
        CREATE TABLE IF NOT EXISTS items (
            item_id INTEGER PRIMARY KEY,
            item_name TEXT,
            category TEXT,
            durability INTEGER,
            zombie_effectiveness INTEGER,
            location_id INTEGER,
            location_name TEXT,
            rarity INTEGER
        );
    `);
    console.log("Table 'items' created successfully.");

    // TO-DO add the other TABLE
}

async function getDatabase() {
    const db = await open({
        filename: './survival_items.db',
        driver: sqlite3.Database
    });
    console.log("Database 'survival_items.db' opened and connected.");
    return db;
}

function PopulateDB(locations: Location[], items: SurvivalItems[]){
    locations.forEach(element => {
       //RUN SCRIPT TO POPULATE DB ON EACH TABLE 
    });

    items.forEach(elements =>{
        //RUN SCRIPT TO POPULATE DB ON EACH TABLE

        // INSERT INTO items (item_id, item_na.....) VALUES(.....)
    });
}

(async () => {
    console.log("Starting game item generation...");
    const locations = await GetLocations();

    if (locations.length > 0) {
        const gameItems = await GetItems(locations);
        console.log("Successfully generated", gameItems.length, "game items.");
        console.log(gameItems);
    } else {
        console.error("No locations found. Cannot generate items.");
    }

    // CREATE DB
    // GET DB
    // POPULATE DB with the 2 above arrays

    // RUN IN INFINITE LOOP

    // CATCH STATEMENTS and run logic for the SQL statements
})();

