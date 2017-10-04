const express = require('express');
const router = express.Router();
const models = require('../models');
const Place = models.Place;
const Hotel = models.Hotel;
const Activity = models.Activity;
const Restaurant = models.Restaurant;

router.get('/', (req, res, next) => {
    const proArr = [];
    proArr.push(Activity.findAll({include: [{all: true}]})); //include {[Place]}
    proArr.push(Restaurant.findAll({include: [{all: true}]}));
    proArr.push(Hotel.findAll({include: [{all: true}]}));
    Promise.all(proArr)
    .then(([activities, restaurants, hotels]) => {
        // allAttractions.Activity = proArr[0];
        // allAttractions.Restaurant = proArr[1];
        // allAttractions.Hotel = proArr[2];
        res.json({activities, restaurants, hotels});
    })
    .catch(next);
})


module.exports = { router  };