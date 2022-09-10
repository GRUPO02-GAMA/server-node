const db = require('database/config.js')

function list() {
    db.query('select * from agenda', function() {
        console.log('run list');
    });
}
