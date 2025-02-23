import express from 'express';
import { getRoutes, createRoute } from '../controllers/routeController';

const router = express.Router();

/**
 * @swagger
 * /api/routes:
 *   get:
 *     summary: Get all routes
 *     responses:
 *       200:
 *         description: A list of routes
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
 *                   startPosition:
 *                     type: number
 *                   endPosition:
 *                     type: number
 *                   durationTime:
 *                     type: number
 *                   difficultyLevel:
 *                     type: number
 *                   checkpointsPosition:
 *                     type: array
 *                     items:
 *                          type: number
 *                   recommendedSongs:
 *                     type: array
 *                     items:
 *                          type: string
 */
router.get('/', getRoutes);

/**
 * @swagger
 * /api/routes:
 *   post:
 *     summary: Create a new route
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               startPosition:
 *                 type: number
 *               endPosition:
 *                 type: number
 *               durationTime:
 *                 type: number
 *               difficultyLevel:
 *                 type: number
 *               checkpointsPosition:
 *                 type: array
 *                 items:
 *                      type: number
 *               recommendedSongs:
 *                 type: array
 *                 items:
 *                      type: string
 *     responses:
 *       201:
 *         description: The created route
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 startPosition:
 *                   type: number
 *               endPosition:
 *                   type: number
 *               durationTime:
 *                   type: number
 *               difficultyLevel:
 *                   type: number
 *               checkpointsPosition:
 *                   type: array
 *                   items:
 *                      type: number
 *               recommendedSongs:
 *                   type: array
 *                   items:
 *                      type: string
 */
router.post('/', createRoute);

export default router;
