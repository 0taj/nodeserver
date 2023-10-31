import * as mysql from 'mysql2';
const http = require('http');
const path = require('path');
const express = require("express");
const oasTools = require("@oas-tools/core");
const app = express();

app.use(express.json());
var serverPort = 8080;

const apiSpec = path.join(__dirname, './api/openapi.yaml');


const config = {
    middleware: {
        oasFile: apiSpec,
        middleware: {
            router: {
                controllers: path.join(__dirname, './controllers')
            }   
        }
        // security: {
        //     disable: false,
        //     auth: {
        //         apikey: (token) => { /* ApiKey security handler */ }
        //     }
        // }
    }
}

oasTools.initialize(app, config).then(() => {
    http.createServer(app).listen(serverPort, () => console.log("Server started!"));
})

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb',
    connectionLimit: 5, // Adjust as needed
});

export { pool };

// import * as mysql from 'mysql2';
// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// // const logger = require('morgan');
// const http = require('http');
// const swaggerUi = require('swagger-ui-express');
// const OpenApiValidator = require('express-openapi-validator');

// //Can remove for production
// const fs = require("fs")
// const YAML = require('yaml')

// const serverPort = 3000;
// const app = express();
// const apiSpec = path.join(__dirname, './api/openapi.yaml');
// console.log(apiSpec);


// // 1. Install bodyParsers for the request types your API will support
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.text());
// app.use(bodyParser.json());

// // app.use(logger('dev'));

// //Can delete for production
// const file  = fs.readFileSync(apiSpec, 'utf8')
// const swaggerDocument = YAML.parse(file)
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// //  2. Install the OpenApiValidator on your express app
// app.use(
//   OpenApiValidator.middleware({
//     apiSpec,
//     validateResponses: true, // default false
//     // 3. Provide the base path to the operation handlers directory
//     operationHandlers: path.join(__dirname, './controllers') // default false
//   }),
// );



// // 4. Woah sweet! With auto-wired operation handlers, I don't have to declare my routes!
// //    See api.yaml for x-eov-* vendor extensions

// // 5. Create a custom error handler
// app.use((err: any, req:any, res:any, next:any) => {
//     // format errors
//     res.status(500).json({
//       message: err.message,
//     });
//   });
  

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'mydb',
//     connectionLimit: 5, // Adjust as needed
// });

// export { pool };

// http.createServer(app).listen(serverPort, function () {
//     console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
//     console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
// });

// module.exports = app;