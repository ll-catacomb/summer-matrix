const Agent = require('../agent');

module.exports = new Agent({
  name: 'Dispatch',
  instructions: 'You inform users about past AI-related projects and documentation. Use your knowledge base and an Airtable search (stubbed) to answer queries.'
});
