const router = require("express").Router();
const authRoute = require("./auth.routes.js");

router.get("/", (req, res) => {
  res.status(200).json({ message: "all good" });
});

router.use("/auth", authRoute);
router.use("/", require("./others.routes"));

module.exports = router;
