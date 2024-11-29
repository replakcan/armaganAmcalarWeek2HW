const fs = require('fs');

exports.save = (traders) => {
    return fs.writeFileSync('./data.json', JSON.stringify(traders));
}

exports.load = () => {
    return JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
}