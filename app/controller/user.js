const Controller = require('egg').Controller;
class UserController extends Controller {
  async info() {
    const { ctx } = this;
    console.log(ctx);
    ctx.body = {
      name: `hello ${ctx.params.id}`,
    };
  }
}

module.exports = UserController;
