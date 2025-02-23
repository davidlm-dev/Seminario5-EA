import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import corsMiddleware from './middleware/cors';
import droneRoutes from './routes/droneRoutes';

dotenv.config();

const app = express();
app.use(express.json());
app.use(corsMiddleware);
app.use('/api/drones', droneRoutes);

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos antes de iniciar el servidor
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('No se pudo iniciar el servidor:', error);
});
