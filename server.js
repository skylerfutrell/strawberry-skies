if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require("express");
const app = express();
const fs = require("fs");
const stripe = require("stripe")(stripeSecretKey);

app.set("view engine", "ejs");
app.use(express.json()); 
app.use(express.static("public"));

app.get("/store", function (req, res) {
  fs.readFile("items.json", function (error, data) {
    if (error) {
      res.status(500).end();
    } else {
      res.render("store.ejs", {
        stripePublicKey: stripePublicKey,
        items: JSON.parse(data),
      });
    }
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000, // Amount in cents 
      currency: "usd", 
    });

   
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    // Handle any errors 
    res.status(500).send({ error: error.message });
  }
});

app.post("/purchase", async function (req, res) {
  try {
    
    fs.readFile("items.json", async function (error, data) {
      if (error) {
        res.status(500).end();
      } else {
        const itemsJson = JSON.parse(data);
        const itemsArray = itemsJson.music.concat(itemsJson.merch);
        let total = 0;

        req.body.items.forEach(function (item) {
          const itemJson = itemsArray.find(function (i) {
            return i.id == item.id;
          });
          total += itemJson.price * item.quantity;
        });

        
        const paymentIntent = await stripe.paymentIntents.create({
          amount: total,
          currency: "usd",
          payment_method: req.body.stripePaymentMethodId,
          confirm: true, // Automatically confirms the payment
        });

        console.log("Charge Successful");

        res.json({ message: "Successfully purchased items", paymentIntent });
      }
    });
  } catch (error) {
    console.error("Charge Fail", error);
    res.status(500).end();
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
