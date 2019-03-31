const express = require('express');
const router = express.Router();

const  User = require('../models/User');
/* GET users listing. */
// Kayıt Ekleme
router.post('/user', function(req, res, next) {
	const user = new User({
		tcNo:22534936586,
		name : "Sedat",
		surname : "Renda",
		age : 22,
		counter: "Gever",
		note:[{not:"Bu Ademin ilk Notu"},{not:"Bu Ademin ikinci notu"}],
	})
	user.save((err,data) => {
       if(err) 
       	 console.log(err);
       else
         res.json(data);	
	});
});
//Alan ismi ile kaydı getirme
router.get('/Search',(request,response) => {
	User.find({name : "Meryem" }, (err,data) => {
        response.json(data);
   });
});
//Tüm Kayıtları Getirme...
router.get('/',(request,response) => {
	User.find({ }, (err,data) => {
		response.json(data);
		res.render('index', {data});
   });   
});

//Bir katydın Belli alan adlarını getirme
router.get('/AlanAdiBelirtme',(request,response) => {
	User.find({ name:"Sedat"},'note name surname', (err,data) => {
        response.json(data);
   });   
});

//Id bazlı arama yapma ve sadece note name surname alanlarını getirmek istiyorum...
router.get('/SearchById',(request,response) => {
	User.findById('5c9fd362e5d79e0c8c6d68ad', (err,data) => {
        response.json(data);
   });   
});

//Veri uzerinde update yapma...
router.put('/update',(request,response) => {
	User.update(
		{ 
			counter : "Şemzinan"
		},
		{
			counter : "Gever"
		},
		{
			multi : true,// Coklu update
			upsert : true, //Kayıt yok ise yeni bir kayıt ekleme yapar...
		},
		(err,data) => {
        response.json(data);
   });   
});
module.exports = router;
