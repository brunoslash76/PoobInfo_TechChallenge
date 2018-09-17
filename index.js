const app = require('./config/server');
const database = require('./config/dbConnections');

database.init();

app.listen(3000, function () {
    console.log('SERVER ONLINE... LISTENING ON PORT 3000');
})