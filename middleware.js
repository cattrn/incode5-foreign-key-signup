const redirectToLogin = (req, res, next) => {
  if (!req.session.userId) {
    res.clearCookie('mrcoffee_sid')
    res.redirect('/login')
  } else {
    next()
  }
}

const redirectToHome = (req, res, next) => {
  if (req.session.userId) {
    res.redirect('/')
  } else {
    next()
  }
}

const logger = (req, res, next) => {
  console.log("1")
  next()
}

const logger2 = (req, res, next) => {
  console.log("2")
  next()
}

const logger3 = (req, res, next) => {
  console.log("3")
  next()
}

const logger4 = (req, res, next) => {
  console.log("4")
  next()
}

module.exports = {redirectToLogin, redirectToHome, logger, logger2, logger3, logger4}