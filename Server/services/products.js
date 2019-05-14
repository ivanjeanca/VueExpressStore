const Pool = require("pg").Pool
const pool = new Pool({
  user: "store",
  host: "localhost",
  database: "estore",
  password: "1",
  port: 5432
})

const getProducts = (request, response) => {
  var val = 0
  pool.query(
    "select p.sku, p.product, p.brand, p.model, p.short_description, c.category, p.price, p.discount_price, p.publish_date, p.image from products p join category c on p.id_category = c.id_category",
    (error, results) => {
      if (error) {
        throw error
      } else val = 1
      data = {
        data: results.rows,
        valid: val
      }
      response.status(200).json(data)
    }
  )
}

const getProductById = (request, response) => {
  var val = 0
  const id = parseInt(request.params.id)
  pool.query(
    "select p.sku, p.product, p.brand, p.model, p.short_description, p.long_description, c.category, p.price, p.discount_price, p.color, p.finish, p.material, p.publish_date, p.image from products p join category c on p.id_category = c.id_category WHERE p.id_product = $1",
    [id],
    (error, results) => {
      if (error)
        throw error
      else
        val = 1
      data = {
        data: results.rows,
        valid: val
      }
      response.status(200).json(data)
    }
  )
}

const newProduct = (request, response) => {
  var val = 0
  const { sku, product, brand, model, short_description, long_description, id_category, price, discount_price, color, finish, material, publish_date, image } = request.body
  pool.query(
    "insert into products(sku, product, brand, model, short_description, long_description, id_category, price, discount_price, color, finish, material, publish_date, image) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)",
    [sku, product, brand, model, short_description, long_description, id_category, price, discount_price, color, finish, material, publish_date, image],
    (error, results) => {
      if (error)
        throw error
      else
        val = 1
      response.status(201).send(`Product added, valid = ` + val)
    }
  )
}

const updateProduct = (request, response) => {
  const id = parseInt(request.params.id)
  const { sku, product, brand, model, short_description, long_description, id_category, price, discount_price, color, finish, material, publish_date, image } = request.body
  var val = 0
  pool.query(
    "UPDATE products SET sku = $1, product = $2, brand = $3, model = $4, short_description = $5, long_description = $6, id_category = $7, price = $8, discount_price = $9, color = $10, finish = $11, material = $12, publish_date = $13, image = $14 where id_product = $15",
    [sku, product, brand, model, short_description, long_description, id_category, price, discount_price, color, finish, material, publish_date, image, id],
    (error, results) => {
      if (error)
        throw error
      else
        val = 1
      response
        .status(200)
        .send(`Product modified with ID: ${id}, valid = ` + val)
    }
  )
}

const deleteProduct = (request, response) => {
  const id = parseInt(request.params.id)
  var val = 0
  pool.query(
    "DELETE FROM products WHERE id_product = $1",
    [id],
    (error, results) => {
      if (error)
        throw error
      else
        val = 1
      response.status(200).send(`Product deleted with ID: ${id}, valid = ` + val)
    }
  )
}

module.exports = {
  getProducts,
  getProductById,
  newProduct,
  updateProduct,
  deleteProduct
}