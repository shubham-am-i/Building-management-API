import express from 'express';
const router = express.Router();

// import controllers
import {
  createBuilding,
  getBuildingById,
  getBuildings,
  deleteBuildingById,
  updateBuildingById,
} from '../controllers/buildingsController.js';

router.route('/').get(getBuildings).post(createBuilding);
router
  .route('/:id')
  .get(getBuildingById)
  .patch(updateBuildingById)
  .delete(deleteBuildingById);

export default router;
