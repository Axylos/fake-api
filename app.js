const app = require('express')();
const faker = require('faker');
const PORT = process.env.PORT || 3000;


function genPeople(n) {
  n = n || 30;
  let people = [];
  for (let i = 0; i < n; i++) {
    people.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      company: {
        id: faker.random.uuid(),
        name: faker.company.companyName,
        description: `${faker.company.catchPhrase()} ${faker.company.bs()}`,
      },
      quote: faker.hacker.phrase()
    });
  }
  return people 
}

function genProducts() {
  let products = [];
  for (let i = 0; i < 20; i++) {
    products.push({
      id: faker.random.uuid(),
      name: faker.commerce.productName(),
      type: faker.commerce.productAdjective(),
      price: `$${faker.commerce.price()}`
    });
  }

  return products;
}

app.get('/people', (req, res) => res.json(genPeople(30)));
app.get('/products', (req, res) => res.json(genProducts()));

app.listen(PORT, () => console.log('listening on: ', PORT));
