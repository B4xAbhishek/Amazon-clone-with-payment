const functions = require('firebase-functions');
const express = require('express')

const cors = require('cors')

const stripe = require('stripe')("sk_test_51HWOUYB8jFz94UlxWVwrYAPb8aukXs3jxjPee3mggoYLvepT9B8dhQaInzfDx2LOMuGxBF54MqEtLbk8W1ZqUMit00WmpOfusO");

//Api


//Api config
const app = express();


//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post('/payment/create', async (req,res) => {
    const total = request.query.total;

    console.log("Payment received for amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
})

response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen command
exports.api = functions.https.onRequest(app);


// Example endpoint
// http://localhost:5001/challenge-87137/us-central1/api