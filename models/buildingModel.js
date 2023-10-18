import mongoose, { mongo } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// Define the Building Schema
const buildingSchema = mongoose.Schema(
  {
    building_id: {
      type: String,
      default: uuidv4(),
    },
    name: {
      type: String,
      required: [true, 'Please provide building name'],
    },
    floors: {
      type: Number,
      required: [true, 'Please provide building floors'],
    },
    location: {
      type: String,
      required: [true, 'Please provide building location'],
    },
    // Additional fields
    description: {
      type: String,
    },
    owner: {
      type: String,
    },
  },
  { timestamps: true },
);

// create the building model
export default new mongoose.model('Building', buildingSchema);
