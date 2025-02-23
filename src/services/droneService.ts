import Drone, { IDrone } from '../models/droneModel';

export class DroneService {
  
  async createDrone(data: Partial<IDrone>): Promise<IDrone> {
    const drone = new Drone(data);
    console.log("Creating drone at the service:", drone);
    return await drone.save();
  }

  async getDroneBySerialNumber(serialNumber: string): Promise<IDrone | null> {
    return await Drone.findOne({ serialNumber });
  }  

  async deleteDroneBySerialNumber(serialNumber: string): Promise<IDrone | null> {
    return await Drone.findOneAndDelete({ serialNumber });
  }

  async updateDroneBySerialNumber(serialNumber: string, data: Partial<IDrone>): Promise<IDrone | null> {
    console.log("Updating drone at the service:", data, serialNumber);
    return await Drone.findOneAndUpdate({ serialNumber }, data, { new: true });
  }

  async listDrones(): Promise<IDrone[]> {
    return await Drone.find({});
  }
}
