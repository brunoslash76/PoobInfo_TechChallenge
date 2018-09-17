module.exports = function (application) {

    application.get('/all_customers', function (req, res) {
        application.app.controllers.customer_controller.allCustomers(application, req, res);
    });

    application.post('/customer', function(req, res) {
        application.app.controllers.customer_controller.customerById(application, req, res);
    });

    application.put('/edit_customer', function (req, res) {
        application.app.controllers.customer_controller.alterCustomer(application, req, res);
    });

    application.post('/add_customer', function (req, res) {
        application.app.controllers.customer_controller.addCustomer(application, req, res);
    });

    application.delete('/remove_customer', function (req, res) {
        application.app.controllers.customer_controller.removeCustumer(application, req, res);
    });
};