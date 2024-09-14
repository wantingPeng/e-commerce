import { loadStripe } from "@stripe/stripe-js";

console.log(process.env.REACT_APP_STRIPE_PUBLISHKEY);
export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHKEY
); //load stripe instance
