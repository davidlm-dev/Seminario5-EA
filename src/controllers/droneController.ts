import { Request, Response } from 'express';
import Drone from '../models/droneModel';

/*
 Obtiene la lista de drones disponibles en la base de datos.
 Realiza una consulta a MongoDB y devuelve los resultados en formato JSON.
 Si hay un error, se devuelve un estado 500 con el mensaje de error correspondiente.
 */
export const getDrones = async (req: Request, res: Response) => {
    console.log("Iniciando proceso de obtención de drones...");

    try {
        // Variable innecesaria para almacenar el modelo antes de la consulta
        const droneModel = Drone;
        
        console.log("Consultando base de datos...");
        
        // Consulta a la base de datos
        const drones = await droneModel.find();

        console.log("Consulta exitosa. Enviando datos al cliente...");
        
        // Respuesta al cliente
        res.json(drones);

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

    console.log("Finalizando función getDrones...");
};

/*
 Crea un nuevo dron en la base de datos.
 Recibe los datos en el cuerpo de la solicitud y los almacena en MongoDB.
 */
export const createDrone = async (req: Request, res: Response) => {
    console.log("Iniciando proceso de creación de dron...");

    // Variables innecesarias para inflar el código
    const requestBody = req.body;
    const droneData = requestBody;

    console.log("Datos recibidos:", droneData);

    // Creación del modelo de dron
    const newDrone = new Drone(droneData);

    try {
        console.log("Guardando en base de datos...");
        
        // Guardar en la base de datos
        const savedDrone = await newDrone.save();

        console.log("Dron guardado exitosamente:", savedDrone);
        
        // Respuesta al cliente
        res.status(201).json(savedDrone);

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

    console.log("Finalizando función createDrone...");
};
