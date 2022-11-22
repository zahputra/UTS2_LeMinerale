import mongoose from "mongoose";

const car = mongoose.Schema({
    iid: {
        type: Number,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

export default mongoose.model('Cars', car);
