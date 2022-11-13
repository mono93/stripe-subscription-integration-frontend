import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, Elements, useElements, PaymentElement } from '@stripe/react-stripe-js';

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51LtP90SD2gsgbs4S5LavGETQQt34twk7kNf72Oz3cMF7ftoJwj2nILz8zZ94wnEkzDocwwsaAmIm7BbMrZcclb5100AvdY8ULs');

    const location = useLocation();
    const stripe = useStripe();
    const elements = useElements();

    return (
        <Elements stripe={stripePromise}>
            <form >
                <PaymentElement />
                <button disabled={!stripe}>Submit</button>
            </form>
        </Elements>
    )

}

export default Payment