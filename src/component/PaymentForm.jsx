import { CardElement } from "@stripe/react-stripe-js";
import Button from "./Button";
import { PaymentFormContainer, FormContainer } from "./PaymentForm.style";

const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonContent="pay now"></Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
