import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IFi9eBFodfpFx7IubqaRvjGJQ1b1uoWT1sh41JYRxBRYpv5jwQWLJ7eKreVBOWwx1tMxBDPtcGhBdaDLGHFrjmg00bPZ5C3nh';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return (
        <StripeCheckout 
        label = 'Pay Now'
        name= 'CROWN CLOTHING LTD.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;