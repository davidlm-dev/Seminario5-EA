import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import corsMiddleware from './middleware/cors';
import droneRoutes from './routes/droneRoutes';
import { setupSwagger } from './config/swagger';

dotenv.config();

const app = express();
app.use(express.json());
app.use(corsMiddleware);
setupSwagger(app); // Agrega Swagger a la aplicación
app.use('/api/drones', droneRoutes);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`Swagger disponible en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => {
    console.error('No se pudo iniciar el servidor:', error);
  });

export default app;
