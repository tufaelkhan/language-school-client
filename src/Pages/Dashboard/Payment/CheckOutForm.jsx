import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import useAuth from "../../../Components/Hooks/useAuth";

const CheckOutForm = ({price, item}) => {
    // console.log(item);
    const stripe = useStripe()
    const elements = useElements()
    const {user} = useAuth()
    const [ axiosSecure ] = useAxiosSecure()
    const [ cardError, setCardError ] = useState('')
    const [ clientSecret, setClientSecret ] = useState('')
    const [ processing, setProcessing ] = useState(false)
    const [ transactionId, setTransactionId ] = useState('')

    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{price})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }, [price, axiosSecure])

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }
        const {error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if(error){
            console.log('error', error);
            setCardError(error.message)
        }else{
            setCardError('')
            // console.log('payment method', paymentMethod);
        }

        setProcessing(true)
        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displyaName || 'khan'
                },
              },
            },
          );
          if(confirmError){
            console.log(confirmError);
          }
          console.log(paymentIntent);
          setProcessing(false)
          if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            //server information
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                className:item?.className,
                classesId:item?.classId,
                classId: item?._id,
                enrolledClass: item,
          }
          axiosSecure.post('/payments', payment)
          .then(res => {
           console.log(res.data);
           if(res.data.insertedId){
               //use sweel aleart
           }
          })
            }       
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-primary mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        {cardError && <p className="text-red-500">{cardError}</p>}
        {transactionId && <p className="text-green-500"> Transaction Complete: {transactionId}</p>}
        </div>
    );
};

export default CheckOutForm;