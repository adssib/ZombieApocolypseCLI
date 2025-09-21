## Zombie Apocolypse CLI 

### Items Class

item_id integer
item_name string
category string 
durability integer (1 to 10) TAKEN FROM COUNT
zombie_effictivness integer (1 to 10) RANDOM
location 
rarity (1 to 5) TAKEN FROM RATE

### Location Class

location_id
zombie_count GOT IT FROM POPULATION
medical_supplies RANDOM 

### Things to add after the MVP

location_type 
make rarity a String (another table in the DB)
is_silent
kills_count
low_ammunation (depeneds on the item)
mission_type
supplies (is_food, is_med)
Another table for categories