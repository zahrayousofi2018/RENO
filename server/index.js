const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const data = require('./data/reno.json');
const quoteData = require ('./data/quote.json');
const fs = require("fs");


const { v1: uuidv1, v4: uuidv4 } = require("uuid");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(cors());

app.use((req, res, next) => {
    next();
});

app.use('/static', express.static('public'));

// require('dotenv').config();
const PORT = process.env.PORT || 9000;

// app.use('/reno');

app.get("/reno", (req, res)=> {
    res.json(data);
});


app.post('/reno', (req, res) => {
    // const fullJobData = pullData(data);
    let body = req.body;
    
    const newJob = 
    {
        id: data.length +1,
        id: uuidv1(),
    // vendorID: uuidv4(),
    jobtype: req.body.jobtype,
    unit: req.body.unit, 
    address: req.body.address,
    city: req.body.city,
    province: req.body.province,
    country: req.body.country,
    propertytype: req.body.propertytype,
    rooms: req.body.rooms,
    bathroom: req.body.bathroom,
    sqft: req.body.sqft,
    color: req.body.color,
    coat: req.body.coat,
    comments: req.body.comments,
    quote: req.body.quote,
    ...body
   };

   data.push(newJob);

   var jobSrc = JSON.stringify(data);
   fs.writeFile('./data/reno.json', jobSrc, 'utf8', function (err) {
       if (err) throw err;
       console.log('complete');
   })
   res.status(200).send(req.body)
  
});

app.get ('/quote', (req, res) => {
    res.json(quoteData)
});



app.post ('/quote', (req, res) => {
  let body = req.body;
  const newQuote = {
      id: req.body.id,
      quote: req.body.quote,
  }
  quoteData.push(newQuote);

  var quoteSrc = JSON.stringify(quoteData);
  fs.writeFile('./data/quote.json', quoteSrc, 'utf8', function (err) {
      if (err) throw err;
      console.log("complete quote");
  })
   res.status(200).send(req.body)

} ) 




app.delete("/:id", (req, res) => {
    // let JobData = pullData(data);
    let id = req.params.id;
    let index = data.findIndex((job) => job.id === id);
    let deletedJob = data.splice(index, 1);
    data.splice(index, 1);
  
    let jobSrc = JSON.stringify(data, null, 2);
    fs.writeFile('./data/reno.json', jobSrc, "utf8", function (err) {
      if (err) throw err;
    });
  
    res.send(deletedJob);
    console.log("job deleted")
  });





app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});










