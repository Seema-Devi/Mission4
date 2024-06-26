import mongoose from 'mongoose';

// cars schema
const carSchema = mongoose.Schema({
    tag: { type: String },
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    image: { type: String },
    });  

// constructor
const Car = mongoose.model('Car', carSchema);

export default Car;