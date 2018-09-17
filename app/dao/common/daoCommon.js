const database = require('../../../config/dbConnections');
const Prom = require('bluebird');
const DaoError = require('./daoError');

function Common() {

}

Common.prototype.findAll = function (sqlRequest) {
    return new Prom(function (resolve, reject) {
        database.db.all(sqlRequest, function (error, result) {
            if (error) {
                reject(
                    new DaoError(20, 'Internal Server Error!')
                );
            } else if (result === null || result.length === 0) {
                reject(
                    new DaoError(21, 'Entity not found')
                );
            } else {
                resolve(result);
            }
        })
    })
}

Common.prototype.findOne = function (sqlRequest, sqlParams) {
    return new Prom(function (resolve, reject) {
        let stmt = database.db.prepare(sqlRequest);
        stmt.all(sqlParams, function (error, result) {
            if (error) {
                reject(
                    new DaoError(11, 'Invalid arguments')
                );
            } else if (result === null || result.length === 0) {
                reject(
                    new DaoError(21, 'Entity not found')
                );
            } else {
                const row = result[0];
                resolve(row);
            }
        })
    })
}

Common.prototype.existsOne = function (sqlRequest, sqlParams) {
    return new Prom(function (reject, resolve) {
        const stmt = database.db.prepare(sqlRequest);
        stmt.each(sqlParams, function (error, result) {
            if (error) {
                reject(
                    new DaoError(20, 'Internal Server Error')
                );
            } else if (result || result.found === 1) {
                resolve(result);
            } else {
                reject(
                    new DaoError(21, 'Entity not found')
                )
            }
        })
    })
}

Common.prototype.run = function (sqlRequest, sqlParams) {
    return new Promise(function (resolve, reject) {
        let stmt = database.db.prepare(sqlRequest);
        stmt.run(sqlParams, function (err) {
            if (this.changes === 1) {
                resolve(true);
            } else if (this.changes === 0) {
                reject(
                    new DaoError(21, "Entity not found")
                )
            } else {
                console.log(err);
                reject(
                    new DaoError(11, "Invalid arguments")
                )
            }
        })
    });
}

module.exports = function () {
    return Common;
};