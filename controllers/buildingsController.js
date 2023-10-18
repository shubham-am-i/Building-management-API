import mongoose from 'mongoose';

import Building from '../models/buildingModel.js';
import ErrorResponse from '../utils/errorResponse.js';

// @desc    Create building
// @route   POST /api/v1/building/
export const createBuilding = async (req, res) => {
  const { name, floors, location, description, owner } = req.body;
  if (!name || !floors || !location) {
    throw new ErrorResponse(
      'Please provide all values [name, floors, location]',
      400,
    );
  }

  const building = await Building.create(req.body);
  // If any error occured during creation, will be handled by global error middleware
  // this eliminate use of try-catch block in project
  res.status(201).json({
    status: 'Success',
    building,
  });
};

// @desc    Get all buildings
// @route   GET /api/v1/building/
export const getBuildings = async (req, res) => {
  const buildings = await Building.find({});

  res.json({
    status: 'Success',
    length: buildings.length,
    buildings,
  });
};

// @desc    Get building bt id
// @route   GET /api/v1/building/:id
export const getBuildingById = async (req, res) => {
  const building = await Building.findById(req.params.id);

  console.log(building);

  if(!building){
    throw new ErrorResponse(`building with id ${req.params.id} not found`, 404)
  }

  res.json({
    status: 'Success',
    building,
  });
};

export const deleteBuildingById = async (req, res) => {
  // 
}