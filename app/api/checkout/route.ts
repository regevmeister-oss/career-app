const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  mode: "payment",

  customer_email: user.email, 

  line_items: [
    {
      price_data: {
        currency: "usd",
        product_data: {
          name: "IGUIDE PRO",
        },
        unit_amount: 1000,
      },
      quantity: 1,
    },
  ],

  success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
  cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
});