import { fakerFR as Faker } from '@faker-js/faker';

export const DataFaker = {


    product: Faker.commerce.product(),
    productName: Faker.commerce.productName(),
    productPrice: Faker.commerce.price({ min: 1000, max: 9999, dec: 0, symbol: ' FCFA ' }) // €114
}

