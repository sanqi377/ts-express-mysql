var { db } = require('../../util/mysqlInit')
module.exports = {
  getInfo() {
    return db('table').where({ 'id': 1 }).find()
  }
}