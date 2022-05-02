const { Date, Truck } = require('./src/db');

const loadDates = () => {
  const dates = [
    {
      id: 100,
      date: '2022-04-20',
      time: 'morning',
      location: 'Barcelona',
      free: false,
      truckId: 1,
    },
    {
      id: 102,
      date: '2022-04-20',
      time: 'evening',
      location: 'Barcelona',
      free: false,
      truckId: 1,
    },
    {
      id: 103,
      date: '2022-04-21',
      time: 'morning',
      free: false,
      location: 'France',
      truckId: 1,
    },
    {
      id: 104,
      date: '2022-04-21',
      time: 'evening',
      free: false,
      location: 'France',
      truckId: 1,
    },
    {
      id: 105,
      date: '2022-04-22',
      time: 'morning',
      free: true,
      location: '',
      truckId: 1,
    },
    {
      id: 106,
      date: '2022-04-22',
      time: 'evening',
      free: false,
      location: '',
      truckId: 1,
    },
    {
      id: 107,
      date: '2022-04-20',
      time: 'morning',
      free: true,
      location: '',
      truckId: 2,
    },
    {
      id: 108,
      date: '2022-04-20',
      time: 'evening',
      free: true,
      location: '',
      truckId: 2,
    },
    {
      id: 109,
      date: '2022-04-21',
      time: 'morning',
      free: false,
      location: 'Germany',
      truckId: 2,
    },
    {
      id: 110,
      date: '2022-04-21',
      time: 'evening',
      free: true,
      location: '',
      truckId: 2,
    },
    {
      id: 111,
      date: '2022-04-22',
      time: 'morning',
      free: false,
      location: 'France',
      truckId: 2,
    },
    {
      id: 112,
      date: '2022-04-22',
      time: 'evening',
      free: false,
      location: 'France',
      truckId: 2,
    },
    {
      id: 113,
      date: '2022-04-20',
      time: 'morning',
      free: false,
      location: '',
      truckId: 3,
    },
    {
      id: 114,
      date: '2022-04-20',
      time: 'evening',
      free: false,
      location: '',
      truckId: 3,
    },
    {
      id: 115,
      date: '2022-04-21',
      time: 'morning',
      free: false,
      location: '',
      truckId: 3,
    },
    {
      id: 116,
      date: '2022-04-21',
      time: 'evening',
      free: false,
      location: '',
      truckId: 3,
    },
    {
      id: 117,
      date: '2022-04-22',
      time: 'morning',
      free: false,
      location: '',
      truckId: 3,
    },
    {
      id: 118,
      date: '22022-04-22',
      time: 'evening',
      free: false,
      location: '',
      truckId: 3,
    },
  ];
  try {
    dates.forEach(async (el) => {
      await Date.findOrCreate({
        where: {
          id: el.id,
          date: el.date,
          time: el.time,
          free: el.free,
          location: el.location,
          truckId: el.truckId,
        },
      });
      await Truck.findOrCreate({
        where: {
          name: el.truckId,
        },
      });
    });
  } catch (error) {
    console.error(error);
  }
};

// const loadTrucks = () => {
//   const trucks = [
//     {
//       name: 1,
//     },
//     {
//       name: 2,
//     },
//     {
//       name: 3,
//     },
//   ];
//   try {
//     trucks.forEach(async (el) => {
//       await Truck.findOrCreate({
//         where: {
//           name: el.name,
//         },
//         include: {
//           model: Date,
//         },
//       });
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

module.exports = {
  loadDates,
  //   loadTrucks,
};
