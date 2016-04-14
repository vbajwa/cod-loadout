var mongoose = require("./connection");
var seedData= require("./seeds");

var Loadout = mongoose.model("Loadout");

Loadout.remove({}).then(function(){
  Loadout.collection.insert(seedData).then(function(){
    process.exit();
  });
});
