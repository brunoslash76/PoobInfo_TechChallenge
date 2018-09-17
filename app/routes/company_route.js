module.exports = function (application) {

    application.get('/all_companies', function (req, res) {
        application.app.controllers.company_controller.allCompanies(application, req, res);
    });

    application.post('/company', function (req, res) {
        application.app.controllers.company_controller.companyById(application, req, res);
    });

    application.put('/edit_company', function (req, res) {
        application.app.controllers.company_controller.alterCompany(application, req, res);
    });

    application.post('/add_company', function (req, res) {
        application.app.controllers.company_controller.addCompany(application, req, res);
    });

    application.delete('/remove_company', function(req, res){
        application.app.controllers.company_controller.removeCompany(application, req, res)
    });
}