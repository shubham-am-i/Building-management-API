import express from 'express';
const router = express.Router();

// import controllers
import { createBuilding } from '../controllers/buildingsController.js';

router.route('/').post(createBuilding);
// router.route('/:id').patch(updateBuilding).delete(deleteBuilding);

export default router;
