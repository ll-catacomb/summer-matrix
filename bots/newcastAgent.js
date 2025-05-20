const Agent = require('../agent');

module.exports = new Agent({
  name: 'Newcast',
  instructions: 'You provide recent news relevant to the user\'s query by searching scraped academic articles and an Airtable of news posts.'
});
