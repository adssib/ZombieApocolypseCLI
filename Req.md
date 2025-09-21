Requirements:

1. Data Fetching & Storage (20 mins)
- Fetch data from a public API like Fake Store API and REST Countries API
- Transform products into “survival items” and countries into “raid locations”
- Store in SQLite with fields like: item_name, category, durability, zombie_effectiveness, location, rarity
- Include at least 20 different items/locations

2. Custom Query Language (30 mins)
Create “SurvivalQL” a query language to query the data.

Example Query Language:
FIND items WHERE category IS weapon AND durability ABOVE 7
RAID locations WHERE zombie_count BELOW 50 AND supplies CONTAINS food
COUNT items WHERE rarity IS legendary
EQUIP items FOR mission_type stealth

3. CLI Interface (10 mins)
Create a CLI to interact with the query language and the data.

Example Interactions:
$ ./survival-cli
💀 BUNKER TERMINAL - DAY 847 OF THE APOCALYPSE 💀
Enter SurvivalQL command (or 'help' for manual):

> FIND items WHERE zombie_effectiveness ABOVE 8
🔫 Reinforced Crowbar - Durability: 9/10, Silent: YES
🗡️ Tactical Machete - Durability: 8/10, Zombie Kills: 247
⚠️ WARNING: Low ammunition detected in sector 7!

> RAID locations WHERE supplies CONTAINS medical
🏥 Abandoned Hospital - Zombie Count: 23, Medical Supplies: HIGH
🏪 Pharmacy District - Zombie Count: 67, Medical Supplies: MEDIUM
💀 Recommend waiting for nightfall before raid attempt!