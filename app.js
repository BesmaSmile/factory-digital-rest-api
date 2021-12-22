const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const swaggerJSDoc = require('swagger-jsdoc');

const jwt = require('./middlewares/jwt');
require('dotenv').config();

const port = process.env.PORT || 3000;

console.log('-+-+-REST API');
console.log('-+-+-Powred by RABIA CHERIF BESMA');

const userRouter = require('./routes/userRouter');
const paymentRouter = require('./routes/paymentRouter');

const mongoUrl = process.env.MONGODB_URL;
console.log(mongoUrl);
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('[*] Database connected...');
  require('./models');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const swaggerDefinition = {
  info: {
    title: 'REST API',
    version: '1.0.0',
  },
  host: process.env.NODE_ENV === 'dev' ? 'factory-digital-rest-api.herokuapp.com' : 'localhost:4000',
  basePath: '/',
};

const options = {
  swaggerDefinition,
  apis: [
    './doc/user.js',
    './doc/payment.js',
  ],
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', express.static('public/api-docs'));
app.use(cors());
app.use(jwt());
app.use((r, res, next) => {
  const route = r.originalUrl;
  const timestamp = Date.now();
  const user = r.user != undefined ? r.user._id : null;
  const dbg = ` > [ ${timestamp} ], [ ${r.method} ], ${route}, ${r.ip}\n   --| [ ${timestamp} ], Headers: ${JSON.stringify(r.headers)}\n   --| [ ${timestamp} ], Body: ${JSON.stringify(r.body) || 'null'}\n   --| [ ${timestamp} ], User: ${user}\n`;
  // console.log(dbg);
  next();
});
app.use('/user', userRouter);
app.use('/payment', paymentRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my REST API');
});

app.listen(port, () => {
  console.log(`[*] Running on port ${port}`);
  console.log(`[!] Envirenment: ${process.env.NODE_ENV}`);
});
