import mongoose, { Document, Schema } from 'mongoose';

interface IDrone extends Document {
  name: string;
  droneModel: string; // Cambiado de 'model' a 'droneModel'
  manufacturer: string;
  serialNumber: string;
  batteryLife: number;
  maxSpeed: number;
  range: number;
  weight: number;
}

const droneSchema: Schema = new Schema({
  name: { type: String, required: true },
  droneModel: { type: String, required: true }, // Cambiado de 'model' a 'droneModel'
  manufacturer: { type: String, required: true },
  serialNumber: { type: String, required: true, unique: true },
  batteryLife: { type: Number, required: true },
  maxSpeed: { type: Number, required: true },
  range: { type: Number, required: true },
  weight: { type: Number, required: true },
});

export { IDrone };
export default mongoose.model<IDrone>('Drone', droneSchema);
