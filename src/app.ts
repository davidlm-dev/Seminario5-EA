import express from 'express';
import corsMiddleware from './middleware/cors';
import userRoutes from './routes/droneRoutes';

const app = express();

app.use(express.json());
app.use(corsMiddleware);

app.use('/api/users', userRoutes);

export default app;
