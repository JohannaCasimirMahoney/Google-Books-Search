const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// STATIC FOR HEROKU
if (process.env.NODE_ENV ==="production") {
    app.use(express.static("client/build"));
}

// FOR API ROUTES
app.use(routes)

// CONNECT MONGOOSE
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true});

// SERVER CONNECTION
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});

