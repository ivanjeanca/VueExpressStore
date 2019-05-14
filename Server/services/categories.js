const Pool = require("pg").Pool
const pool = new Pool({
  user: "store",
  host: "localhost",
  database: "estore",
  password: "1",
  port: 5432
})

const getCategories = (request, response) => {
  var val = 0
  pool.query(
    "select * from category;",
    (error, results) => {
      if (error) 
        throw error
      else val = 1
      data = {
        data: results.rows,
        valid: val
      }
      response.status(200).json(data)
    }
  )
}

const getCategoryById = (request, response) => {
  var val = 0
  const id = parseInt(request.params.id)
  pool.query(
    "select * from category where id_category = $1",
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

const newCategory = (request, response) => {
  var val = 0
  const { category } = request.body
  pool.query(
    "insert into category(category) values ($1)",
    [category],
    (error, results) => {
      if (error)
        throw error
      else
        val = 1
      response.status(201).send(`Category added, valid = ` + val)
    }
  )
}

const updateCategory = (request, response) => {
  const id = parseInt(request.params.id)
  const { category } = request.body
  var val = 0
  pool.query(
    "update category set category = $1 where id_category = $2;",
    [category, id],
    (error, results) => {
      if (error)
        throw error
      else
        val = 1
      response
        .status(200)
        .send(`Category modified with ID: ${id}, valid = ` + val)
    }
  )
}

const deleteCategory = (request, response) => {
  const id = parseInt(request.params.id)
  var val = 0
  pool.query(
    "DELETE FROM category WHERE id_category = $1;",
    [id],
    (error, results) => {
      if (error)
        throw error
      else
        val = 1
      response.status(200).send(`Category deleted with ID: ${id}, valid = ` + val)
    }
  )
}

module.exports = {
  getCategories,
  getCategoryById,
  newCategory,
  updateCategory,
  deleteCategory
}