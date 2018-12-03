'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.user.info);

  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);
  io.of('/').route('text', io.controller.nsp.text);
  io.of('/').route('initData', io.controller.nsp.initData);
  io.of('/').route('getViewProt', io.controller.nsp.getViewProt);
  io.of('/').route('getImage', io.controller.nsp.getImage);
};
