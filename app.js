const express = require('express');

const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');

const userRouter = require('./routes/userRoutes');

const app = express();

//1) Middleware
// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// app.use(morgan('dev'));

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middlewware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this endpoint...');
// });

//2) route handlers

// app.get('/api/v1/tours', getAllTours);

// app.get('/api/v1/tours/:id', getTour);

// app.post('/api/v1/tours', createTour);

// app.patch('/api/v1/tours/:id', updateTour);

// app.delete('/api/v1/tours/:id', deleteTour);

//3) routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

//4) Start server
module.exports = app;
