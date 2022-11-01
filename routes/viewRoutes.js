const express = require('express');
const { isLoggedIn, protect } = require('../controllers/authController');
// const { createBookingCheckout } = require('../controllers/bookingController');
const {
  getOverview,
  getTour,
  login,
  getAccount,
  updateUserData,
  getMyTours,
  alert,
} = require('../controllers/viewsController');

const router = express.Router();

router.use(alert);

router.get(
  '/',
  // createBookingCheckout
  isLoggedIn,
  getOverview
);
router.get('/tour/:slug', isLoggedIn, getTour);
router.get('/login', isLoggedIn, login);
router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);

router.post('/submit-user-data', protect, updateUserData);

module.exports = router;
