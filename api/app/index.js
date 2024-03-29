const express = require('express')
const app = express()

// Set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Set up cors
const cors = require('cors');
app.use(cors());

// Set up compression
const compression = require('compression');
app.use(compression());

const spotify = require('./routes/spotify.js')
app.use('/api/spotify', spotify)
const general = require('./routes/general.js')
app.use('/api/general', general)

module.exports = app