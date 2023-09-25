import express from 'express';
import { PORT, mongoDbURL } from './config.js'
import mongoose  from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to MERN Stack')
})

mongoose
    .connect(mongoDbURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log('App is listening to port ' + PORT)
        });
    })
    .catch((error) => {
        console.log(`Failed to connect to database ${error}`);
    });