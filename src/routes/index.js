const { Router } = require('express');
const router = Router();

const { getAllReviews, getReviewById,createReview, deleteReview, updateReview } = require('../controllers/index'); 

router.get('/reviews', getAllReviews);
router.get('/reviews/:id', getReviewById)
router.post('/reviews', createReview);
router.put('/reviews/:id', updateReview);
router.delete('/reviews/:id',deleteReview);

module.exports = router;