const mongoose = require("mongoose");

const db = mongoose.connect(
  `${process.env.DATABASE_URI}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err, database) {
    if (err) {
      console.log(`Database Connection Error : ', ${err}`)
    } else {
      console.log(
        `Database Connection Successfully! : ${database.connections[0].name}`
      );
    }
  }
);
module.exports = db;
