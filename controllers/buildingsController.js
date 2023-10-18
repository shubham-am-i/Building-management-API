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

// @desc    Get building by id
// @route   GET /api/v1/building/:id
export const getBuildingById = async (req, res) => {
  const building = await Building.findById(req.params.id);

  if (!building) {
    throw new ErrorResponse(`building with id ${req.params.id} not found`, 404);
  }

  res.json({
    status: 'Success',
    building,
  });
};

// @desc    Update building by id
// @route   PATCH /api/v1/building/:id
export const updateBuildingById = async (req, res) => {
  const { name, floors, location, description, owner } = req.body;
  const building = await Building.findById(req.params.id);

  if (building) {
    building.name = name;
    building.floors = floors;
    building.location = location;
    building.description = description;
    building.owner = owner;
    const updatedBuilding = await building.save();
    res.json({
      status: 'Update Successfull',
      updatedBuilding,
    });
  } else {
    throw new ErrorResponse(`building with id ${req.params.id} not found`, 404);
  }
};

// @desc    Delete building by id
// @route   DELETE /api/v1/building/:id
export const deleteBuildingById = async (req, res) => {
  await Building.deleteOne({ _id: req.params.id });

  res.json({
    status: 'Delete Successfull',
    message: 'Building Removed',
  });
};
