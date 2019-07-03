const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'tester',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432
});

const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
}

const getUserById = (req, res) => {
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
}

module.exports = {
  getUsers,
  getUserById
}
