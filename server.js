const express = require('express');
// const cors = require('cors');
// const bpdyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');
const businessRoute = require('./controllers/businessesController');

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));



// routes
app.use(businessRoute);

// Warning handler
process.on('warning', (warning) => {
    console.log(warning.stack);
});

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`Business Relationship Manager ==> API server now listening on PORT ${PORT}!`);
    });
});
