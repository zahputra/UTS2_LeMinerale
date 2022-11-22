import car from '../models/userModel.js';

export const getCars = async (req, res) => {
    try {
        const cars = await car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const getCarsById = async (req, res) => {
    try {
        const carq = await car.findById(req.params.id);
        res.json(carq);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const saveCar = async (req, res) => {
    const carq = new car(req.body);
    try {
        const insertedcar = await carq.save();
        res.status(201).json(insertedcar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const updateCar = async (req, res) => {
    try {
        const updatedcar = await car.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updatedcar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const deleteCar = async (req, res) => {
    try {
        const deletedcar = await car.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedcar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}