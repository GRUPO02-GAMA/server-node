const db = require('database/config.js')

console.log(db);

function list() {
    db.query('select * from agenda', function() {
        console.log('run list');
    });
}

module.exports = list