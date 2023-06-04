const mongoose = require("mongoose");

const url = "mongodb://AssignmentHelper:anu1206@ac-diglhap-shard-00-00.1h9a4xf.mongodb.net:27017,ac-diglhap-shard-00-01.1h9a4xf.mongodb.net:27017,ac-diglhap-shard-00-02.1h9a4xf.mongodb.net:27017/assignment-helper?ssl=true&replicaSet=atlas-13yvz4-shard-0&authSource=admin&retryWrites=true&w=majority";


module.exports.connect = () => {
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MongoDB connected successfully");
      })
      .catch((error) => console.log("Error: ", error));
  };