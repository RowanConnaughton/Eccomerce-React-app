import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  
    const priceForStripe = price * 100;
  
    const publishableKey = "pk_test_51KJJ49GN5pBzV4t2Yp5XvcfnjW7uR65JjZzQwOSP8XKK1xStD4E36KeOMHgJzKVF7TJhlneRXUKSIzds165Vn0Z700L4QdnBMK"

    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Crwn Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
            
        
    )
}

export default StripeCheckoutButton
