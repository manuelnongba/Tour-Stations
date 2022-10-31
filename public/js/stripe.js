/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51LyWGzFNfzadDvdqgiaK4D1tuqsz6MCer3zT5B5XgAlUmYlmLlJcoQLtuEr4NFBqc7dZ8vsqMcvItz9PjyrIu9RA00clYsMVQH'
);

export const bookTour = async (tourId) => {
  //1) Get checkout session from API
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    console.log(session);

    // 2) Create the checkout form + charge the credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
