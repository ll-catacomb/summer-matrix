const Agent = require('../agent');

module.exports = new Agent({
  name: 'Gateway',
  instructions: 'You greet the user and explain which specialized bots will handle their request. Briefly describe the routing process before providing results.'
});
