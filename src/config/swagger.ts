import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API',
            version: '1.0.0',
            description: 'Documentación de la API para gestionar clases varias',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
        components: {
            schemas: {
                Drone: {
                    type: 'object',
                    required: ['name', 'droneModel', 'manufacturer', 'serialNumber', 'batteryLife', 'maxSpeed', 'range', 'weight'],
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        droneModel: { type: 'string' },
                        manufacturer: { type: 'string' },
                        serialNumber: { type: 'string' },
                        batteryLife: { type: 'number' },
                        maxSpeed: { type: 'number' },
                        range: { type: 'number' },
                        weight: { type: 'number' },
                    },
                },
                Route: {
                    type: 'object',
                    required: ['name', 'startPosition', 'endPosition', 'durationTime', 'difficultyLevel', 'checkpointsPosition', 'recommendedSongs'],
                    properties: {
                        _id: { type: 'string' },
                        name: { type: 'string' },
                        startPosition: { type: 'number' },
                        endPosition: { type: 'number' },
                        durationTime: { type: 'number' },
                        difficultyLevel: { type: 'number' },
                        checkpointsPosition: { type: 'array', items: { type: 'number' } },
                        recommendedSongs: { type: 'array', items: { type: 'string' } },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'], // Asegúrate de que las rutas están en `src/routes/`
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Application): void {
    console.log('Configurando Swagger en /api-docs');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
