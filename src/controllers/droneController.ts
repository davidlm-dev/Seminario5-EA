import { Request, Response } from 'express';
import Drone from '../models/droneModel';

export const getDrones = async (req: Request, res: Response) => {
  try {
    const drones = await Drone.find();
    res.json(drones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createDrone = async (req: Request, res: Response) => {
  const { name, droneModel, manufacturer, serialNumber, batteryLife, maxSpeed, range, weight } = req.body;
  const newDrone = new Drone({ name, droneModel, manufacturer, serialNumber, batteryLife, maxSpeed, range, weight });

  try {
    const savedDrone = await newDrone.save();
    res.status(201).json(savedDrone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
