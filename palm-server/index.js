require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { TextServiceClient } = require('@google-ai/generativelanguage').v1beta2;
app.use(bodyParser.json());
  
const { GoogleAuth } = require("google-auth-library");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.API_KEY
const genAI = new GoogleGenerativeAI(API_KEY);
const MODEL = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });




app.post('/api', async (req, res) => {
   prompt = req.body.prompt;
   
    try{
        console.log(prompt);
        result = await MODEL.generateContent(prompt);
        answer = result.response.candidates[0].content.parts[0].text;
        console.log(answer);
        res.json(answer)
      }
    catch(error){
      console.log(error);
    }

});

app.listen(3333, () => console.log('Server running'));

