/**
 * 1. install stripe and react stripe js
 * 2. create a checkoutform with card elements (card element contains: card number, expired date, cvs, zip code)
 * 3. create account on stripe and get the publishable key pk
 * 4. get card information
 * 5. create a payment method 
 * 6. use test card to test payment
 * 7. on the server site install stripe: npm install --save stripe
 * 8. create a payment intent api with payment method types: ['card']
 * 9. make sure you provide amount is cents (multiple * 100)
 * 10. call payment intent api to get client secret and store it in a state
 * 11. use confirmCardPayment api with client secret card info.
 * 12. display confirm card error
 * 13. display confirm card success
 * 14. do things after payment
 * 
 */