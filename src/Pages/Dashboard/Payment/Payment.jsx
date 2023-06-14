import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { useLocation } from "react-router-dom";

//provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const location = useLocation()
    const item = location?.state 
    return (
        <div className="w-full">
            <SectionTitle heading='please provide'></SectionTitle>
            <h3 className="text-2xl text-center">Process Your Payment</h3>
            <div className="w-1/2 mx-auto mt-5 mb-5">
            <Elements stripe={stripePromise}>
            <CheckOutForm item={item} price={item?.price}></CheckOutForm>
            </Elements>
            </div>
        </div>
    );
};

export default Payment;