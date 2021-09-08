const pgp = require('pg-promise')()

const cn = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/incode5_fk`

const db = pgp(cn)

module.exports = db