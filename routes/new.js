const express = require("express")
const router = express.Router()
const db = require("../database")
// const { redirectToLogin } = require("../middleware")

router.post('/', (req, res) => {
  const {day, start_time, end_time} = req.body

  db.any("SELECT user_id, day, TO_CHAR(start_time, 'HH24MISS') start_time, TO_CHAR(end_time, 'HH24MISS') end_time FROM schedules WHERE user_id = $1 AND day = $2;", [2, day])
  .then((schedules) => {
    res.send(schedules)
  })
  .catch((err) => {
    console.log(err)
    res.send(err)
  })

  // Overlapping schedule
  // same day
  // same user
  // Suman: New schedule start time <= existing schedule end_time && New schedule end_time >= existing schedule start_time
})

module.exports = router