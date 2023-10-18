import mongoose from 'mongoose';

import Building from '../models/buildingModel.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    Create building
// @route   POST /api/v1/building/
export const createBuilding = async (req, res) => {
  const { name, floors, location, description, owner } = req.body;
  if (!name || !floors || !location) {
    throw new ErrorResponse('Please provide all values', 400);
  }

  const building = Building.create(req.body);

  res.status(201).json({
    status: 'Success',
    building,
  });
};
