const express = require("express");
const router = express.Router();

const users = [
  {
    email: "TestUser@fake.com",
    hash: "1234",
  },
];
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(`User with email ${user.email} was added`);
});

router.post("/", (req, res) => {});

module.exports = router;
