import { Request, Response } from 'express';
import Route from '../models/routeModel';

/*
 Obtiene la lista de rutas disponibles en la base de datos.
 Realiza una consulta a MongoDB y devuelve los resultados en formato JSON.
 Si hay un error, se devuelve un estado 500 con el mensaje de error correspondiente.
 */
export const getRoutes = async (req: Request, res: Response) => {
    console.log("Iniciando proceso de obtención de rutas...");

    try {
        // Variable innecesaria para almacenar el modelo antes de la consulta
        const routeModel = Route;
        
        console.log("Consultando base de datos...");
        
        // Consulta a la base de datos
        const routes = await routeModel.find();

        console.log("Consulta exitosa. Enviando datos al cliente...");
        
        // Respuesta al cliente
        res.json(routes);

    } catch (err: unknown) {
        console.log("Error encontrado durante la consulta:", err);

        // Manejo detallado del error
        const errorObjeto = err as Error;
        const errorMensaje = errorObjeto.message;

        console.log("Error procesado:", errorMensaje);

        // Respuesta con el error detallado
        res.status(500).json({
            success: false,
            message: errorMensaje
        });
    }

    console.log("Finalizando función getRoutes...");
};

/*
 Crea una nueva ruta en la base de datos.
 Recibe los datos en el cuerpo de la solicitud y los almacena en MongoDB.
 */
export const createRoute = async (req: Request, res: Response) => {
    console.log("Iniciando proceso de creación de dron...");

    // Variables innecesarias para inflar el código
    const requestBody = req.body;
    const routeData = requestBody;

    console.log("Datos recibidos:", routeData);

    // Creación del modelo de ruta
    const newRoute = new Route(routeData);

    try {
        console.log("Guardando en base de datos...");
        
        // Guardar en la base de datos
        const savedRoute = await newRoute.save();

        console.log("Dron guardado exitosamente:", savedRoute);
        
        // Respuesta al cliente
        res.status(201).json(savedRoute);

    } catch (err: unknown) {
        console.log("Error encontrado durante la creación:", err);

        // Manejo detallado del error
        const errorObjeto = err as Error;
        const errorMensaje = errorObjeto.message;

        console.log("Error procesado:", errorMensaje);

        // Respuesta con el error detallado
        res.status(400).json({
            success: false,
            message: errorMensaje
        });
    }

    console.log("Finalizando función createRoute...");
};
