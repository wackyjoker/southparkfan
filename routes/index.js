var express = require("express"),
	router  = express.Router(),
	passport= require("passport"),
	User 	= require("../models/user");

router.get('/', function(req,res){
	res.render('index');
}); // Landing Page

//Auth Route=====================

//show register page
router.get("/register",function(req,res){
	res.render("register");
});

//register page logic
router.post("/register",function(req,res){

	var newUser = new User({username: req.body.username});
	User.register(newUser,req.body.password,function(err,user){
		if(err){
			req.flash("error",err.message);
			return res.render("register");
		} 

			passport.authenticate("local")(req,res,function(){
				req.flash("success","welcome to Southpark "+user.username);
				res.redirect("/southpark");
			});
		});

	});

// login page

router.get("/login",function(req,res){
	res.render("login",);
});

// login logic 

router.post("/login",passport.authenticate("local",{
	successRedirect : "/southpark",
	failureRedirect : "/login"
}),function(req,res){
});



//log out route

router.get("/logout",function(req,res){
	req.logout();
	req.flash("success","Signed Out Sucessfully");
	res.redirect("/southpark");
});


module.exports = router;