const express=require('express');
const router=express.Router();
const request=require('request');


const apiKey="ENTER YOUR API KEY HERE";

router.get('/',(req,res)=>{
    res.render('index',{weather:null,error:null});
});

router.post('/',(req,res)=>{
    let city=req.body.city;
    let url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    request(url, function (err, response, body) {
        if(err){
          return res.render('index', {weather: null, error: 'Error, please try again'});
        }
        let weather = JSON.parse(body);
        if(weather.current == undefined){
          return res.render('index', {weather: null, error: 'Error, please try again'});
        }
        let weatherText = `It's ${weather.current.temperature} degrees in ${weather.location.name}, ${weather.location.country}`;
        res.render('index', {weather: weatherText, error: null});
      });


});

module.exports=router;