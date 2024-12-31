require('dotenv').config();
const express = require('express');
const app = express();


const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.API_KEY
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "whats after one, two";

app.get('/api', async (req, res) => {

  try{
    const result = await model.generateContent(prompt);
    res.json(result.response.text())
  }
  catch(error)
  {
    app.send("Error processing request from API")
  }
       
});

app.listen(3333, () => console.log('Server running'));

