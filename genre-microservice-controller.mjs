import 'dotenv/config';
import express from 'express';
import * as genreMSModel from './genre-microservice-model.mjs';

// Configure express server
const PORT = process.env.PORT;
const app = express();
app.use(express.json());


// RETRIEVE controller ****************************************************

    // GET /jobtitlecheck
    // Request: Job title path parameter, Request body is a JSON object with the job title
    // Response: Success - Request is valid and returns true or false
        // Body: JSON object containing true or false
        // Status Code: 201
    // Response: Failure - Request is invalid
        // Body: JSON object Error
        // Status Code: 400

    app.get ('/genre/:_genre', (req,res) => { 
        genreMSModel.getRecommendationsByGenre(
            req.params._genre
            )
            .then(songRecommendations => {
                res.status(201).json(songRecommendations.result);
            })
            // Catch will occur if one of the fields is invalid
            .catch(error => {
                res.status(400).json(error);
            });
        }
    );

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});