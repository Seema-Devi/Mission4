import mongoose from 'mongoose';
import Car from './schemas/cars.js';
import fs from 'fs/promises';
import path from 'path';
import url from 'url';

// connect to database
let db;
mongoose.connect('mongodb://localhost:27017/cars-m4')
.then((connection) => {
    db = connection.connections[0];
})
.catch(err => console.log(err));

// add car
export const addCar = (car) => {
    Car.create(car).then(car => {
        console.info('New Car Added');
        db.close();
    });
}

// remove car by id
export const removeCar = (_id) => {
    Car.findOneAndDelete({ _id })
    .then(car => {
        console.info('Car Removed');
        db.close();
    })
}

// list all cars
export const listCars = () => {
    Car.find()
    .then(car => {
        console.info(car);
        console.info(`${car.length} car(s) in the database`);
        db.close();
    })
}

//seed database with cars sample data from json file
export const seedCars = async () => {
    try {
        const moduleDir = path.dirname(url.fileURLToPath(import.meta.url));
        const carDataPath = path.resolve(moduleDir, './data/cars.json');
        const carData = await fs.readFile(carDataPath);
        const seedCars = JSON.parse(carData).cars;

        await Car.insertMany(seedCars);
        console.log('Cars added');
        db.close();
    }
    catch (err) {
        console.error('Not possible to read and/or seed data.', err);
        db.close();
    }
}