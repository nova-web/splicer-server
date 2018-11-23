'use strict';

const Controller = require('egg').Controller;

class NspController extends Controller {
  async exchange() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;
    socket.emit('text', { msg: 'success' });
    console.log(message);
  }
  async text() {
    const { ctx, app } = this;
    console.log(ctx.args[0]);
    ctx.socket.emit('customEmit', { msg: 'is success?' });
  }
  async initData() {
    const { ctx, app } = this;
    let data = {
      width: 200,
      height: 200,
      x: 20,
      y: 0
    };
    ctx.socket.emit('firstData', data);
  }
}
module.exports = NspController;
