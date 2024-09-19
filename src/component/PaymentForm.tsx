import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "./Button";
import { PaymentFormContainer, FormContainer } from "./PaymentForm.style";
import { StripeCardElement } from "@stripe/stripe-js";
import { useState, FormEvent } from "react";
import { selcteCartTotal } from "../store/cart/cartSelector";
import { SelctorCurrentUser } from "../store/user/selector";
import { useSelector } from "react-redux";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selcteCartTotal);
  const CurrentUser = useSelector(SelctorCurrentUser);
  const [isProcseeingPaymentset, setIsProcseeingPayment] = useState(false);
  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    //.event type (e.g., FormEvent, ChangeEvent, MouseEvent) followed by the specific HTML element the event is related to.
    e.preventDefault();
    setIsProcseeingPayment(true);
    if (!stripe || !elements) return;
    const response = await fetch("/.netlify/functions/funcPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((response) => response.json());
    console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;

    //type guard methode 1:
    /*  const carddetails=elements.getElement(CardElement)
    if (carddetails===null)return; */

    //type guard methode 2:
    const carddetails = elements.getElement(CardElement);
    const ifValidCardElemet = (
      card: StripeCardElement | null
    ): card is StripeCardElement => card !== null;
    if (!ifValidCardElemet(carddetails)) return;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: carddetails, //component for securely collecting payment details
        billing_details: {
          name: CurrentUser ? CurrentUser.displayName : "Guest",
        },
      },
    });

    setIsProcseeingPayment(false);

    if (paymentResult.error) {
      console.log(paymentResult.error);
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success! Payment received.");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button
          disabled={isProcseeingPaymentset}
          buttonContent="pay now"
        ></Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
