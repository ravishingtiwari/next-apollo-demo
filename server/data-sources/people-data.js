const casual = require('casual');

casual.define('peoples', function () {
  const result = [];
  for (let i = 0; i <= 20; i++) {
    result.push({
      id: casual.uuid,
      email: casual.email,
      name: casual.name,
      address: casual.address,
      phone: casual.phone
    })
  }

  return result;
});

const fetchPeople = ()=> casual.peoples;

module.exports = fetchPeople;
