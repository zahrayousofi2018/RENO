const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const data = require('./data/reno.json');
const fs = require("fs");
// const { v1: uuidv1, v4: uuidv4 } = require("uuid");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(cors());

app.use((req, res, next) => {
    next();
});

app.use('/static', express.static('public'))

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
    {id: data.length +1,
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


// app.delete("/reno", (req, res) => {
//     // let fullInventoryData = pullData(inventoryList);
//     let id = req.params.id;
//     let index = newJob.findIndex((job.id) => job.id === id);
//     let deletedJob = newJob.splice(index, 1);
//     newJob.splice(index, 1);
  
//     let jobSrc = JSON.stringify(newJob, null, 2);
//     fs.writeFile('./data/reno.json', jobSrc, "utf8", function (err) {
//       if (err) throw err;
//     });
  
//     res.send(deletedJob);
//   });





app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});










