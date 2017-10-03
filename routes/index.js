const express = require('express');
const router = express.Router();
const models = require('../models');
const Place = models.Place;
const Hotel = models.Hotel;
const Activity = models.Activity;
const Restaurant = models.Restaurant;

models.export = router;


router.get('/api',function(req,res,next){
  var allAttractions = {};

  Hotel.findAll()
  .then(function(hotels) {
    allAttractions.hotels = hotels;
    return Restaurant.findAll();
  })
  .then(function(restaurants) {
    allAttractions.restaurants = restaurants;
    return Activity.findAll();
  })
  .then(function(activities) {
    allAttractions.activities = activities;
  })
  .then(function() {
    res.json(allAttractions);
  })
  .catch(next);
});
