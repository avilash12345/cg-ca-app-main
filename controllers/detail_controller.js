const detail_model = require("../models/model.js");
class detail_controller {
  static get_all_data = async (req, res) => {
    try {
      const data = await detail_model.find();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(405).send("Some went wrong in server side...");
    }
  };
  //create new data
  static create_data = async (req, res) => {
    const { slno, state, capital, chief_minister, governor } = req.body;
    try {
      const doc = await detail_model.create({
        slno,
        state,
        capital,
        chief_minister,
        governor,
      });
      const saved_data = await doc.save();
      return res.status(201).json(saved_data);
    } catch (error) {
      console.log(error);
    }
  };
}
module.exports = detail_controller;
