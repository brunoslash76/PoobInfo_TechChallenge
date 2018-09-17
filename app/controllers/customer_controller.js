module.exports.allCustomers = function (app, req, res) {

    let customerDao = new app.app.dao.customerDao(app);

    const customers = customerDao.findAll()
        .then(result => {
            let customers = [];

            for (const customer of result) {
                customers.push(customer);
            }

            res.send(customers)
        });;

};

module.exports.customerById = function (app, req, res) {
    const customerDao = new app.app.dao.customerDao(app);
    const id = req.body.id;

    if (id) {
        customerDao.findById(id)
            .then(customer => {
                res.send(customer)
            })
    }
};

module.exports.alterCustomer = function (app, req, res) {
    const customerDao = new app.app.dao.customerDao(app);
    const customer = req.body;

    if (customer) {
        customerDao.update(customer)
            .then(result => console.log(result))
    }
};

module.exports.addCustomer = function (app, req, res) {

    const customerDao = new app.app.dao.customerDao(app);
    const customer = req.body;

    if (customer) {
        customerDao.create(customer)
            .then(result => {
                if (!result) {
                    res.send(result)
                }
                res.send(result);
            });
    }

}
module.exports.removeCustumer = function (app, req, res) {
    res.send('REMOVE CUSTOMER');
}