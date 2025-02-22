import express from 'express';
import { getDrones, createDrone } from '../controllers/droneController';

const router = express.Router();

/**
 * @swagger
 * /api/drones:
 *   get:
 *     summary: Get all drones
 *     responses:
 *       200:
 *         description: A list of drones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   droneModel:
 *                     type: string
 *                   manufacturer:
 *                     type: string
 *                   serialNumber:
 *                     type: string
 *                   batteryLife:
 *                     type: number
 *                   maxSpeed:
 *                     type: number
 *                   range:
 *                     type: number
 *                   weight:
 *                     type: number
 */
router.get('/', getDrones);

/**
 * @swagger
 * /api/drones:
 *   post:
 *     summary: Create a new drone
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               droneModel:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               serialNumber:
 *                 type: string
 *               batteryLife:
 *                 type: number
 *               maxSpeed:
 *                 type: number
 *               range:
 *                 type: number
 *               weight:
 *                 type: number
 *     responses:
 *       201:
 *         description: The created drone
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 droneModel:
 *                   type: string
 *                 manufacturer:
 *                   type: string
 *                 serialNumber:
 *                   type: string
 *                 batteryLife:
 *                   type: number
 *                 maxSpeed:
 *                   type: number
 *                 range:
 *                   type: number
 *                 weight:
 *                   type: number
 */
router.post('/', createDrone);

export default router;
