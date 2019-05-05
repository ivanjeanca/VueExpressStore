const Pool = require('pg').Pool
const pool = new Pool({
  user: 'store',
  host: 'localhost',
  database: 'estore',
  password: '1',
  port: 5432,
})

const getProducts = (request, response) => {
  pool.query('select p.sku, p.product, p.brand, p.model, p.short_description, p.long_description, c.category, p.price, p.discount_price, co.color, f.finish, m.material, p.publish_date, p.image from products p join category c on p.id_category = c.id_category join color co on p.id_color = co.id_color join finish f on p.id_finish = f.id_finish join material m on p.id_material = m.id_material;',
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getProductById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('select p.sku, p.product, p.brand, p.model, p.short_description, p.long_description, c.category, p.price, p.discount_price, co.color, f.finish, m.material, p.publish_date, p.image from products p join category c on p.id_category = c.id_category join color co on p.id_color = co.id_color join finish f on p.id_finish = f.id_finish join material m on p.id_material = m.id_material WHERE p.id_product = $1;',
    [id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
}

const newProduct = (request, response) => {
    const { sku, product, brand, model, short_description, long_description, id_category, price, discount_price, id_color, id_finish, id_material, publish_date, image } = request.body
  
    pool.query('insert into products(sku, product, brand, model, short_description, long_description, id_category, price, discount_price, id_color, id_finish, id_material, publish_date, image) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);', 
    [sku, product, brand, model, short_description, long_description, id_category, price, discount_price, id_color, id_finish, id_material, publish_date, image],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Product added`)
    })
  }
  
  const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { sku, product, brand, model, short_description, long_description, id_category, price, discount_price, id_color, id_finish, id_material, publish_date, image } = request.body
  
    pool.query(
      'UPDATE products SET sku = $1, product = $2, brand = $3, model = $4, short_description = $5, long_description = $6, id_category = $7, price = $8, discount_price = $9, id_color = $10, id_finish = $11, id_material = $12, publish_date = $13, image = $14 where id_product = $15',
      [sku, product, brand, model, short_description, long_description, id_category, price, discount_price, id_color, id_finish, id_material, publish_date, image, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Product modified with ID: ${id}`)
      }
    )
  }
  
  const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM products WHERE id_product = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product deleted with ID: ${id}`)
    })
  }

module.exports = {
    getProducts,
    getProductById,
    newProduct,
    updateProduct,
    deleteProduct
}