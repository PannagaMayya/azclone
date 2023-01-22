const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MOPksSJ8ogpUCK4GAm4rbwqk84WEU5czjVj1RW4VGHEYjBbTFF2q9M45igsbH3oD61TmViGCRraGG6p4tMwzXtV00oPYkQsKw"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});
exports.api = functions.https.onRequest(app);
