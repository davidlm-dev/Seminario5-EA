import mongoose, { Document, Schema } from 'mongoose';

interface IRoute extends Document {
  name: string;
  startPosition: number;
  endPosition: number;
  durationTime: number;
  difficultyLevel: number;
  checkpointsPosition: number[];
  recommendedSongs: string[];
}

const routeSchema: Schema = new Schema({
  name: { type: String, required: true },
  startPosition: { type: Number, required: true },
  endPosition: { type: Number, required: true },
  durationTime: { type: Number, required: true },
  difficultyLevel: { type: Number, required: true },
  checkpointsPosition: { type: [Number], default: [] },
  recommendedSongs: { type: [String], default: [] }
}, { timestamps: true });

export { IRoute };
export default mongoose.model<IRoute>('Route', routeSchema);
