import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "./Button";
import { PaymentFormContainer, FormContainer } from "./PaymentForm.style";
import { StripeCardElement } from "@stripe/stripe-js";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    try {
      if (!stripe || !elements) return;
      const response = await fetch("/.netlify/functions/funcPaymentIntent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 10000 }),
      }).then((response) => response.json());
      console.log(response);
      console.log("ssssssssssssssssssss");
    } catch (error) {
      console.error(error);
    }
  };

  /* const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch("/.netlify/functions/funcPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 100 }),
    }).then((res) => res.json());
    console.log(response);
    console.log("ssssssssssssssssssss");
  }; */

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonContent="pay now"></Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
