var { db } = require('../../util/mysqlInit')
module.exports = {
  /**
   * 检测是否注册
   * @param username 用户名
   * @returns 
   */
  isReg(username: string) {
    return db('table').where({ username }).find()
  }
}