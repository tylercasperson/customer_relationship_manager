const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');
const usersRoute = require('./controllers/users');
const authRoute = require('./controllers/auth');
const businessesRoute = require('./controllers/businesses');
const contactsRoute = require('./controllers/contacts');
const industriesRoute = require('./controllers/industries');
const servicesRoute = require('./controllers/services');

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// use cors
app.use(cors());

// routes
app.use(usersRoute);
app.use(authRoute);
app.use(businessesRoute);
app.use(contactsRoute);
app.use(industriesRoute);
app.use(servicesRoute);

// Warning handler
process.on('warning', (warning) => {
  console.log(warning.stack);
});

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log(
      `Business Relationship Manager ==> API server now listening on PORT ${PORT}!`
    );
  });
});
