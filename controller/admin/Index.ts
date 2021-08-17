// 引入同名 model
var model = require(__filename.replace(/controller/, 'model'))
module.exports = {
  index(req: any, res: any) {
    res.send({ data: '这是 admin/index' })
  }
}