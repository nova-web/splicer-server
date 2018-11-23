'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);

  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);
  io.of('/').route('text', io.controller.nsp.text);
  io.of('/').route('initData', io.controller.nsp.initData);
};
