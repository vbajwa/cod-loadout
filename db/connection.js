var mongoose = require("mongoose");

var LoadoutSchema = new mongoose.Schema(
{
  primary: String,
  secondary: String,
  lethal: String,
  tactical: String,
});

mongoose.model("Loadout", LoadoutSchema);
mongoose.connect();

module.exports = mongoose;
