// native imports

// external imports
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import 'express-async-errors';
import morgan from 'morgan';

// local imports
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';
// import routers
import buildingRouter from './routes/buildingRoutes.js';

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Mount Routers
app.use('/api/v1/building', buildingRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const bootstrap = async () => {
  await connectDB();
  app.listen(port, () =>
    console.log(`Server is running on port ${port}`.yellow.bold),
  );
};

bootstrap();
