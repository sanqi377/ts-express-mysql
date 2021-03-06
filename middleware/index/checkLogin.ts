/**
 * Token 认证中间件
 */

var { Verification } = require("../../util/jwt");
var init = (app: any) => {
  app.use((req: any, res: any, next: any) => {
    let token = req.query.token;
    if (req.path == "login"||req.path=="req") {
      next();
    }
    if (Verification(token)) {
      res.send({ message: "认证失败", code: 400 });
    } else {
      next();
    }
  });
}

module.exports = {
  init
}