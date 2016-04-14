var mongoose = require("mongoose");

var LoadoutSchema = new mongoose.Schema(
{
  Primary: String,
  Secondary: String,
  Lethal: String,

});

mongoose.model("Loadout", LoadoutSchema);
mongoose.connect();

module.exports = mongoose;
