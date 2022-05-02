const { Router } = require('express');

const { Date, Truck } = require('../db');

const router = Router();

router.get('/', async (req, res, next) => {
  let dates = await Date.findAll({});
  res.json(dates);
});

router.get('/trucks', async (req, res, next) => {
  let trucks = await Truck.findAll({});
  res.json(trucks);
  console.log(trucks);
});

router.post('/', async (req, res, next) => {
  const { date, time, location, load, truckId } = req.body;

  try {
    const createTrip = await Date.create({
      date: date,
      time: time,
      location: location,
      load: load,
      truckId: truckId,
    });
    console.log(createTrip);
    const createTruck = await Truck.create({
      name: truckId,
    });

    const addTrip = await createTrip.addTruck(createTruck);

    console.log(addTrip);

    return res.status(200).send(addTrip);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
