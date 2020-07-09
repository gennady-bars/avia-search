const fs = require('fs');

const json = JSON.parse(fs.readFileSync('./flights.json', 'utf8'));

console.log(json.result.flights[0]);

// так и не получилось декодировать Русские Слова из этого json-файла...
