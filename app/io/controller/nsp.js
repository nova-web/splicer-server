'use strict';

const Controller = require('egg').Controller;
const ffmpeg = require('fluent-ffmpeg');
class NspController extends Controller {
  async exchange() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;
    socket.emit('text', { msg: 'success' });
  }
  async text() {
    const { ctx, app } = this;
    ctx.socket.emit('customEmit', { msg: 'is success?' });
  }
  async initData() {
    const { ctx, app } = this;
  }
  async getViewProt() {
    const {ctx, app} = this;
    const message = ctx.args[0] || {};
    const nsp = app.io.of('/');
    nsp.emit('getViewProt',{data: message, id: ctx.socket.id});
    this.ctx.initData = {data: message, id: ctx.socket.id};
    // console.log(this.ctx.initData);
  }
  async getImage() {
      const {ctx, app} = this;
      const nsp = app.io.of('/');
      const api = ctx.app.config.apihost;

      var command = new ffmpeg('/text.mp4')
        .videoBitrate(1024)
        .aspect('16:9')
        .size('50%')
        .fps(24)
        .audioBitrate('128k')
        .audioCodec('libmp3lame')
        .audioChannels(2)
        .addOption('-vtag', 'DIVX')
        .format('avi')
        .on('end', function() {
          console.log('file has been converted succesfully');
        })
        .on('error', function(err) {
          console.log('an error happened: ' + err.message);
        })
        .save('/outtest.avi');
        nsp.emit('getImage', {'src':`${api}/product.png`, 'video': `${api}/test.mp4`});
  }
}
module.exports = NspController;
