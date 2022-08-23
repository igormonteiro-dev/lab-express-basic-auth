const { isAuthenticated } = require("../middleware/middlewares");
const router = require("express").Router();

router.get("/main", isAuthenticated, async (req, res, next) => {
  try {
    res.json({
      catPic:
        "https://voyage-onirique.com/wp-content/uploads/2021/08/chat-drole-funny-.jpg",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/private", isAuthenticated, async (req, res, next) => {
  try {
    res.json({
      gif: "https://media2.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.gif?cid=ecf05e47nhh8qqru9p3q7eai8lnboqhcg7ngwcamrhgyp5bx&rid=giphy.gif&ct=g",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
