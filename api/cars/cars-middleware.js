const Cars = require("./cars-model");
const vinVaildator = require("vin-validator");

const checkCarId = (req, res, next) => {
  // 404 - message: "cars with id <car id> is not found" if req.params.id does not exist in db
}

const checkCarPayload = (req, res, next) => {
  // 400 - message: "<field name> is missing" if any required field is missing
}

const checkVinNumberValid = (req, res, next) => {
  // 400 - message: "vin <vin number> is invalid" if vin is invalid with vinVaildator
}

const checkVinNumberUnique = (req, res, next) => {
  // 400 - message: "vin <vin number> alread exists" if vin is already is in db 
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};
