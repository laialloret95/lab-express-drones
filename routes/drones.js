const express = require('express');
const Drone = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then(drones => {
      res.render('drones/list', { drones })
    })
    .catch(error => console.log(error));
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const drone = req.body;
  Drone.create({
    name: drone.name,
    propellers: drone.propellers,
    maxSpeed: drone.maxSpeed
  })
  .then((drone) => {
    console.log('drone create', drone)
    // URL completa a la que redirigimos
    res.redirect('/drones');
  })
  .catch(err => {
    console.log(err);
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
  .then((drone) => {
    console.log(drone);
    res.redirect('/drones')
  })
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;
