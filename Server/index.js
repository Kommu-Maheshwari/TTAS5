import express from 'express';
import cors from 'cors';
import { adminRouter } from './Routes/AdminRoute.js';

const app = express();

// CORS setup
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
}));

// Middleware
app.use(express.json());

// Routes
app.use('/auth', adminRouter);
app.use('/auth', adminRouter);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
