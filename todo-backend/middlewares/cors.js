var express = require('express');
var cors = require('cors');
var app = express();
// app.use(cors());

app.use(cors({
    origin: 'http://localhost:3001'
}));

// var express = require('express')
// var cors = require('cors')
// var app = express()

// var allowlist = ['http://localhost:3001']
// var corsOptionsDelegate = function (req, callback) {
//   var corsOptions;
//   if (allowlist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }

// app.get('/products/:id', cors(corsOptionsDelegate), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for an allowed domain.'})
// })

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })

