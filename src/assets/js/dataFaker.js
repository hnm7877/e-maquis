import { fakerFR as Faker } from '@faker-js/faker';


let dataCompter = 20;
export const DataFaker = {


    product: Faker.commerce.product(),
    productName: Faker.commerce.productName(),
    productPrice: Faker.commerce.price({ min: 1000, max: 9999, dec: 0, symbol: ' FCFA ' }) // €114
}

for (let i = 0; i < dataCompter; i++) {
    console.log(Faker.commerce.productName())
}