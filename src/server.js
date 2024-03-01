const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome to my awesome app with ci/cd tests")
});

app.get('/about', (req, res) => {
    res.status(200).json({
      message: 'About Dummy Server',
      description: 'This is a simple Express.js server for demonstration purposes.',
      version: '1.0'
    });
  });
  
app.listen(3000, function(){
     console.log("App listen to port 3000")
});