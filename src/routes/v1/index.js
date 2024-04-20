const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController=require('../../controllers/flight-controller')
const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.patch('/city/:id',CityController.update);
router.get('/city',CityController.getall);

router.post('/flights',FlightController.create)

// router.post('/cities',CityController.creates);
module.exports = router;
