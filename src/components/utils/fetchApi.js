//traer todos los productos
const getProducts = () => {
    return fetch("http://localhost:8080/api/products")
    .then((respuesta) => respuesta.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

const getProductsById = (idProduct) => {
    return fetch("http://localhost:8080/api/products/"+idProduct)
    .then((respuesta) => respuesta.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

const addProduct = (newProduct)=> {
    const newProductJson = JSON.stringify(newProduct)
return fetch("http://localhost:8080/api/products",{
    method: "POST",
    headers: {
        'Content-Type': "application/json"
    },
    body: newProductJson
})
    .then((respuesta) => respuesta.json())
    .then((data) => {
        return data
    })
    .catch((error) => console.log(error))
}

export { getProducts, getProductsById, addProduct }