
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IProductDetails } from '../models';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const Duration = {
    daily: 'Daily',
    monthly: 'Monthly',
    yearly: 'Yearly'
}

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51LtP90SD2gsgbs4S5LavGETQQt34twk7kNf72Oz3cMF7ftoJwj2nILz8zZ94wnEkzDocwwsaAmIm7BbMrZcclb5100AvdY8ULs');

    const location = useLocation();

    const [productInfo, setProductInfo] = useState<IProductDetails>();

    useEffect(() => {
        setProductInfo(location.state.data)
    }, [])

    return (
        <div className="paymentForm">
            <div className="paymentFormInfo">
                <div className="rowBlk">
                    <div className="colBlk6 fldWrap">
                        <p>{productInfo?.product_name}</p>
                        <p>₹ {productInfo?.product_price}</p>
                    </div>
                    <div className="colBlk6 fldWrap">
                        <p>{productInfo?.product_description}</p>
                        <p>{Duration[productInfo?.product_frequency as keyof typeof Duration]}</p>
                    </div>
                </div>
            </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm productInfo={productInfo} />
            </Elements>
        </div>
    )

}

export default Payment