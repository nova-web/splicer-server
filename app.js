'use strict';

// module.exports = app => {
//   app.beforeStart(async () => {
//     const room = await app.redis.get('room:demo');
//     if (!room) {
//       await app.redis.set('room:demo', 'demo');
//     }
//   });
// };

module.exports = app => {
  app.once('server', server => {
  });
  app.on('error', error => {
    console.log(error)
  });
  app.on('request', ctx => {
    // console.log('request');
    // console.log(ctx);
  });
  app.on('response', ctx => {
    // console.log('response');
    // console.log(ctx);
  });
  app.log = function(data) {
    console.log(data);
  }
};
