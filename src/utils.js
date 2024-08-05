import { faker} from '@faker-js/faker'

export const generateProducts = () =>{

    let products = [];

    for(let i = 0; i < 100; i++){
        products.push(generateProduct())
    }

    return products;
}

const generateProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: faker.commerce.product(),
        thumbnail: faker.image.url(),
        code: faker.commerce.isbn(),
        status: true,
        stock: faker.number.int({min: 1, max: 100}),
    }
}