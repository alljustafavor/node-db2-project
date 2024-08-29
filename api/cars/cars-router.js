const router = require("express").Router();
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware")
const Cars = require("./cars-model");

router.get("/", async (req, res, next) => {
  try {
    const data = await Cars.getAll(); 
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    res.status(200).json(req.car);
  } catch (error) {
    next(error); 
  }
});

router.post("/", checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
  try {
    const payload = req.body;
    const data = await Cars.create(payload);
    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})


module.exports = router;
