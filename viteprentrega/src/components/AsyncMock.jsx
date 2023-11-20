const products = [
    {
      id: `1`,
      name: 'samsung s22',
      price: 1000,
      category: 'celular',
      img: 'https://i.blogs.es/3afa8c/1366_2000/840_560.jpeg',
      stock: '25',
      description: 'lalalalala',
    },
    {
      id: `2`,
      name: 'play4',
      price: 2000,
      category: 'consola',
      img: 'https://http2.mlstatic.com/D_NQ_NP_865169-MLA54833481393_042023-O.webp',
      stock: '25',
      description: 'lalalalala',
    },
    {
      id: `3`,
      name: 'computadora',
      price: 2500,
      category: 'pc',
      img: 'https://http2.mlstatic.com/D_NQ_NP_716427-MLA51607119507_092022-O.webp',
      stock: '25',
      description: 'lalalalala',
    },
  ];
  
export const getProducts = () => {
  return new Promise ((resolve)=>{
    setTimeout(() => {
      resolve(products)
    }, 500);
  })
}
export const getProductsById = (productsId) => {
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(products.find(prod => prod.id === productsId))
    },500)
  })
  
}
export const getProductsByCategory = (getProductsByCategory) => {
  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(products.find(prod => prod.id === getProductsByCategory))
    },500)
  })
  
}

 