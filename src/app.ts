import express from 'express';
import corsMiddleware from './middleware/cors';
import droneRoutes from './routes/droneRoutes';

const app = express();

app.use(express.json());
app.use(corsMiddleware);

app.use('/api/drones', droneRoutes); // Ruta corregida

export default app;
