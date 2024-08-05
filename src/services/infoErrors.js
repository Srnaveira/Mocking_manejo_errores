export const generateProductErrorInfo = (product) => {

    return `Una o mas propiedades del Producto esta incompleta o no es valida
    Lista de propiedades:
    * title: Necesita ser un String, se recibio: ${product.title}
    * description: necesita ser un String, se recibio: ${product.description}
    * price: necesita ser un Number, se recibio: ${product.price}
    * code: necesita ser un String, se recibio: ${product.code}
    * category: necesita ser un String, se recibio: ${product.category} 
    * Stock: necesita ser un Number, se recibio: ${product.stock}`

}


