const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { loadDates } = require('./data');
const { PORT } = process.env;

conn.sync({ force: true }).then(async () => {
  loadDates();
  // loadTrucks();
  server.listen(PORT || 3001, () => {
    console.log('%s listening at 3001');
  });
});
