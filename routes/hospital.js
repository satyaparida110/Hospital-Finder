var express = require("express");
var router = express.Router();
var Hospital = require("../models/hospital");


router.get("/", function(req, res){
    let coordinates = {}
    let nearHospitals = []
        coordinates.latitude = 19,
        coordinates.longitude = 72
    
    Hospital.find({}, function(err, allHospitals){
        if(err){
            console.log(err);
            
        }else{
            for(i=0;i<allHospitals.length;i++) {
            if((coordinates.latitude-Number(allHospitals[i].latitude)<1&&coordinates.longitude-Number(allHospitals[i].longitude)<1)
            &&(coordinates.latitude-Number(allHospitals[i].latitude)>-1&&coordinates.longitude-Number(allHospitals[i].longitude)>-1))
            {
                // console.log(allHospitals[i]);
                nearHospitals.push(allHospitals[i]);
            }
            }
            res.render("hospital", {hospitals: nearHospitals});
        }
    })
})

module.exports = router;