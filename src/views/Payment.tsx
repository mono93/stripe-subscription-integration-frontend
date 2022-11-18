import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Payment = () => {

    let stripe = (window as any).Stripe('pk_test_51LtP90SD2gsgbs4S5LavGETQQt34twk7kNf72Oz3cMF7ftoJwj2nILz8zZ94wnEkzDocwwsaAmIm7BbMrZcclb5100AvdY8ULs');
    let elements = stripe.elements();

    useEffect(() => {
        let card = elements.create('card', {
            hidePostalCode: true,
            style: {
                base: {
                    iconColor: '#666EE8',
                    color: '#31325F',
                    lineHeight: '40px',
                    fontFamily: 'sans-serif',
                    fontSize: '15px',
                    '::placeholder': {
                        color: '#CFD7E0',
                    },
                },
            }
        });
        card.mount('#card-element');
    }, [])


    return (
        <div className="paymentForm">
            <div className="paymentFormInfo">
                <div className="paymentFormInfoGroup">
                    <p>
                        <span>Product Name</span>
                        <span>Product Description</span>
                    </p>
                </div>
                <div className="paymentFormInfoGroup">
                    <p>
                        <span>Product Price</span>
                        <span>Product Duration</span>
                    </p>
                </div>
            </div>
            <div className="paymentFormgroup">
                <label>
                    <span>Card</span>
                    <div id="card-element" className="paymentFormField"></div>
                </label>
            </div>
            <div className="paymentFormgroup">
                <label>
                    <span>Address</span>
                    <input id="address-line1" name="address_line1" className="paymentFormField" placeholder="77 Winchester Lane" />
                </label>
                <label>
                    <span>Address (cont.)</span>
                    <input id="address-line2" name="address_line2" className="paymentFormField" placeholder="" />
                </label>
                <label>
                    <span>City</span>
                    <input id="address-city" name="address_city" className="paymentFormField" placeholder="Coachella" />
                </label>
                <label>
                    <span>State</span>
                    <input id="address-state" name="address_state" className="paymentFormField" placeholder="SA" />
                </label>
                <label>
                    <span>ZIP</span>
                    <input id="address-zip" name="address_zip" className="paymentFormField" placeholder="92236" />
                </label>
                <label>
                    <span>Country</span>
                    <select name="address_country" id="address-country" className="paymentFormField">
                        <option value="IN">India</option>
                        <option value="SG" selected>Singapore</option>
                    </select>
                </label>
                <button type="submit">Pay $25</button>
            </div>

        </div>
    )

}

export default Payment