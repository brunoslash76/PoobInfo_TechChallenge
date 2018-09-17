// const common = require('./common/daoCommon');
const errorHandle = require('./common/daoError');

function CustomerDao(app) {
    this.common = new app.app.dao.common.daoCommon();
}

CustomerDao.prototype.findAll = function () {
    const sql = 'SELECT * FROM customer';
    return this.common.findAll(sql);
};

CustomerDao.prototype.findById = function (id) {
    const sql = 'SELECT * FROM customer WHERE custome_id = $id;';
    const sqlParams = { $id: id };
    return this.common.findOne(sql, sqlParams)
};

CustomerDao.prototype.update = function (customer) {
    console.log(customer)
    const sql = 'UPDATE customer SET ' +
        'rewards_number = $rewards_number,' +
        'name = $name,' +
        'email = $email,' +
        'dob = $dob ' +
        'where custome_id = $customer_id;';
    const sqlParams = {
        $rewards_number: customer.rewards_number,
        $name: customer.name,
        $email: customer.email,
        $dob: customer.dob,
        $customer_id: customer.customer_id
    };

    return this.common.run(sql, sqlParams);
};

CustomerDao.prototype.create = function (customer) {
    const sql = 'INSERT INTO customer (dob, name, email, rewards_number, create_date, company_id)' +
        'VALUES ($dob, $name, $email, $rewards_number, $create_date, $company_id);';
    const sqlParams = {
        $dob: customer.dob,
        $name: customer.name,
        $email: customer.email,
        $rewards_number: customer.rewards_number,
        $create_date: customer.create_date,
        $company_id: customer.company_id
    };

    return this.common.run(sql, sqlParams);
}


module.exports = function () {
    return CustomerDao;
}