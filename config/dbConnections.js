const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./sqlite.db');

const init = function() {
    db.run(
        'CREATE TABLE if not exists company(' +
            'company_id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'create_date INTEGER,' +
            'name TEXT' +
            ')'
    );
    db.run(
        'CREATE TABLE if not exists customer(' +
            'custome_id INTEGER PRIMARY KEY AUTOINCREMENT,' +
            'company_id INTEGER,' +
            'create_date INTEGER,' +
            'rewards_number TEXT,' +
            'name TEXT,' +
            'email TEXT,' +
            'dob INTERGER,' + 
            'FOREIGN KEY (company_id) REFERENCES company(company_id)' +
        ')'
    );
}

module.exports = {
    init: init,
    db: db
};