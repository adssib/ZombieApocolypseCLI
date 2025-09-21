import axios from 'axios';

interface Location {
    location_id: number;
    zombie_count: number;
    medical_supplies: number;
    location_name: string;
}

interface SurvivolItems {
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

axios.get(country_api)
  .then(response => console.log(response.data));

async function GetItems(): Promise<SurvivolItems[]> {
    
    return [];
}

async function GetLocations(): Promise<Location[]> {
    
    return [];
}

function CreateDB() {

}

function PopulateDB(loations: Location[], items: SurvivolItems[]){

}

