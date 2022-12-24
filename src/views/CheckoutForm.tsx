import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Fragment, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBillingDetails, ICardError } from "../models";
import { PaymentService } from "../services/payment.service";

const CARD_ELEMENT_OPTIONS = {
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
        }
    }
};

const CheckoutForm = (props: any) => {

    const { register, handleSubmit, watch, setValue, formState: { errors, isDirty, isValid } } = useForm<IBillingDetails>();

    const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
    const [showError, setshowError] = useState<ICardError>({
        status: false,
        message: ''
    });

    const elements = useElements();
    const stripe = useStripe();

    useEffect(() => {
        const subscription = watch(data => {
            const isEmpty = Object.keys(data).some(d => !data[d as keyof typeof data]);
            setIsFormComplete(!isEmpty)
        })

        return () => subscription.unsubscribe();
    }, [watch])

    const handleChange = async (event: any) => {
        if (event.error) {
            setshowError({
                status: true,
                message: event.error.message
            })
        } else {
            setshowError({
                status: false,
                message: ''
            })
        }
    };

    const onSubmit: SubmitHandler<IBillingDetails> = async (data: IBillingDetails) => {
        try {
            let card: any = elements?.getElement(CardElement);
            let tokenObj = await stripe?.createToken(card);

            let payload = {
                token: tokenObj?.token,
                ...data,
                price_id: props.productInfo.product_price_id
            }
            await new PaymentService().createSubscription(payload);
        } catch (ex) {
            console.error(ex)
        }


    }

    return (
        <Fragment>
            <div className={`paymentFormGroup ${showError.status && 'cardElement'}`}>
                <label>
                    <span>Card</span>
                    <CardElement options={CARD_ELEMENT_OPTIONS as any} onChange={handleChange} />
                </label>
            </div>
            {showError.status && <div id="errorCardElement" style={{ textAlign: 'left', marginBottom: '20px', fontStyle: 'italic', fontSize: '12px', color: 'red' }}>{showError.message}</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="paymentFormGroup">
                    <label>
                        <span>Address</span>
                        <input id="address-line1" className="paymentFormField" placeholder="77 Winchester Lane" {...register("billing_address_line1")} />
                    </label>
                    <label>
                        <span>Address (cont.)</span>
                        <input id="address-line2" className="paymentFormField" placeholder="" {...register("billing_address_line2", {
                            value: ' ',
                            onChange: (e) => setValue("billing_address_line2", (e.target.value).trimStart())
                        })} />
                    </label>
                    <label>
                        <span>City</span>
                        <input id="address-city" className="paymentFormField" placeholder="Coachella" {...register("billing_address_city")} />
                    </label>
                    <label>
                        <span>State</span>
                        <input id="address-state" className="paymentFormField" placeholder="SA" {...register("billing_address_state")} />
                    </label>
                    <label>
                        <span>ZIP</span>
                        <input id="address-zip" className="paymentFormField" placeholder="92236"{...register("billing_address_zip")} />
                    </label>
                    <button type="submit" disabled={!isFormComplete}>Pay</button>
                </div>
            </form>
        </Fragment>
    )
}

export default CheckoutForm