let express= require('express');
let router=express.Router();
let homepageController = require('../controller/home');


router.get('/homepage',homepageController.homepage);
router.get('/profilepage',homepageController.profilepage);

module.exports=router;