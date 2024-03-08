const express = require('express');
// cors provide EXPRESS middleware to enable CORS with various options.
const cors = require('cors');
const db = require("./models");
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// EXPRESS is used to build the REST apis
const app = express();
// app.use(express.static(path));
var corsOptions = {
    origin: "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  };
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
require("./routes/tutorial.routes")(app);

// Routing the requests
app.get("/", (req, res) => {
    res.json({ status: 200, message: "Welcome to Sample MERN Stack example"});
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})