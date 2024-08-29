const Cars = require("./cars-model");
const vinVaildator = require("vin-validator");

const checkCarId = async (req, res, next) => {
  // 404 - message: "cars with id <car id> is not found" if req.params.id does not exist in db
  let car = await Cars.getById(req.params.id);
  if (car) {
    req.car = car;
    next();
  } else {
    next({ status: 404, message: `car with id <${req.params.id}> is not found`});
  }
}

const checkCarPayload = (req, res, next) => {
  // 400 - message: "<field name> is missing" if any required field is missing
  const { vin, make, model, mileage } = req.body
  if (!vin) {
    next({ status: 400, message: `vin is missing`});
  } else if (!make) {
    next({ status: 400, message: 'make is missing'});
  } else if (!model) {
    next({ status: 400, message: 'model is missing'});
  } else if (!mileage) {
    next({ status: 400, message: 'mileage is missing'});
  } else {
    next();
  }
}

const checkVinNumberValid = (req, res, next) => {
  // 400 - message: "vin <vin number> is invalid" if vin is invalid with vinVaildator
  const isVinValid = vinVaildator.validate(req.body.vin)
  if (isVinValid) {
    next()
  } else {
    next({ status: 400, message: `vin ${req.body.vin} is invalid`});
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const cars = await Cars.getAll();

  if (Array.isArray(cars)) {
    const vinExists = cars.some(car => car.vin === req.body.vin);

    if (!vinExists) {
      next();
    } else {
      next({ status: 400, message: `vin ${req.body.vin} already exists` });
    }
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};
