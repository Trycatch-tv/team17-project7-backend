export * as reviewController from './reviews.js'
export * as movieController from './movies.js'
const  { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'admin',
  database: 'movies_db',
  port: '5432'
});


const getAllReviews = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM reviews');
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({message: 'There was an error getting the reviews'});
  }
};


const createReview = async (req, res) => {
  const { movieid, userid, description, rating } = req.body;

  const response = await pool.query('INSERT INTO reviews (movieid, userid, description, rating) VALUES ($1,$2,$3,$4)',[movieid,userid,description,rating]);
  res.status(201).json({ review: {movieid, userid, description, rating}})
}


const getReviewById = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM reviews WHERE id = $1',[req.params.id]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({message: 'There was an error getting the reviews'});
  }
  const response = await pool.query('SELECT * FROM reviews WHERE id = $1',[req.params.id]);
  res.json(response.rows);
};

const updateReview = async (req, res) => {
  const id = req.params.id;
  const { description, rating,} = req.body;
  
  const response = await pool.query('UPDATE reviews SET description = $1, rating = $2 WHERE id = $3',[description,rating,id]);
  res.send('User updated successfully');
}

const deleteReview = async (req, res) => {
  const response = await pool.query('DELETE FROM reviews WHERE id = $1',[req.params.id]);
  res.json('Review ${id} deleted succesgully');
}

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview
}
