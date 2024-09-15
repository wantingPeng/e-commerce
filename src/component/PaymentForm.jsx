import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "./Button";
import { PaymentFormContainer, FormContainer } from "./PaymentForm.style";
import { StripeCardElement } from "@stripe/stripe-js";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
    const response = await fetch("/.netlify/functions/funcPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 3000 }),
    }).then((response) => response.json());
    console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement), //component for securely collecting payment details
        billing_details: {
          name: "cici",
        },
      },
    });

    if (paymentResult.error) {
      console.log("ffffffffffffff");

      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        console.log("sssssssssssssss");
        alert("Success! Payment received.");
      }
    }
  };

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
