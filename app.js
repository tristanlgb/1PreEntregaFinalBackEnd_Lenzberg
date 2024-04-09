import express from 'express';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';

const app = express();
const port = 8080;

app.use(express.json());

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.use((err, req, res, next) => {
  console.error(err);
  const errorMessage = err.message || 'Internal Server Error';
  const statusCode = err.statusCode || 500;
  const errorDetails = err.details || null;
  res.status(statusCode).json({ error: errorMessage, details: errorDetails });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});