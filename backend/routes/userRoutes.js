import Express from "express";
import {
    getCars,
    getCarsById,
    saveCar,
    updateCar,
    deleteCar
} from "../controller/userController.js"

const router = Express.Router();

router.get('/cars', getCars);
router.get('/cars/:id', getCarsById);
router.post('/cars', saveCar);
router.patch('/cars/:id', updateCar);
router.delete('/cars/:id', deleteCar);



export default router;