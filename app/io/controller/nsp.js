'use strict';

const Controller = require('egg').Controller;

class NspController extends Controller {
  async exchange() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;
    console.log(ctx);
    console.log('client', client);

    try {
      const { target, payload } = message;
      if (!target) return;
      const msg = ctx.helper.parseMsg('exchange', payload, { client, target });
      nsp.emit(target, msg);

      setInterval(()=>{
        nsp.emit(client, client);
      },2000);
    } catch (error) {
      app.logger.error(error);
    }
  }
}

module.exports = NspController;
