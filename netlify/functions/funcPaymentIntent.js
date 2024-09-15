require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      //Stripe uses this to represent your intent to collect payment from a customer, tracking your charge attempts and payment state changes throughout the process.
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    console.error(error);
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
