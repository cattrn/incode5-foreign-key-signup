const express = require("express")
const router = express.Router()
const db = require("../database")
const { redirectToLogin } = require("../middleware")

router.get("/", redirectToLogin, (req, res) => {
  db.any(
    "SELECT user_id, day, TO_CHAR(start_time, 'HH12:MI AM') start_time, TO_CHAR(end_time, 'HH12:MI AM') end_time FROM schedules;"
  )
    .then(schedules => {
      res.render("pages/home", {
        schedules,
      })
    })
    .catch(err => {
      console.log(err)
      res.send(err)
    })
})

module.exports = router
