	var express = require("express"),
		router  = express.Router(),
	Southpark   = require("../models/southpark"),
methodOverride  = require('method-override'),
middlewareObj	= require("../middleware");


// app.use(methodOverride('_method'));
// INDEX route  - show all southparks
router.get('/', function(req,res){
	 //test

	//Get all southpark from DataBase
	Southpark.find({}, function(err,allSouthparks){
		if(err){
			console.log(err);
		} else {
			res.render('Southpark/southpark',{southpark: allSouthparks});
		}
										});
});
	

// INDEX post
router.post('/',middlewareObj.isLoggedIn, function(req,res){
	var name = req.body.name;
	var amount=req.body.amount;
	var image = req.body.image;
	var description = req.body.description;
	var author = {id:req.user._id,username:req.user.username};
	var newSouthpark = {name: name,amount:amount, image: image , description : description,author:author};
	//Create a new southpark and save to DataBase
	Southpark.create(newSouthpark, function(err,newsp){
		if(err){
			console.log(err);
		} else {
			res.redirect('/southpark');
			//redirect back to southpark page
		}
	}); 
	// get data from form and add to southpark array
}); // Create route - add new southpark



router.get('/new',middlewareObj.isLoggedIn, function(req,res){
	res.render('Southpark/new');
}); // New - show form to create new southpark

router.get('/:id',function(req,res){ // Show - Provide All info of this One Object
	//find the southpark with provided ID
	Southpark.findById(req.params.id).populate("comments").exec(function(err,foundSouthpark,){
		if(err){
			console.log(err);
		} else{
			res.render('Southpark/show',{southparks: foundSouthpark});
		}
	});
});




// EDITING ROUTE
router.get("/:id/edit",middlewareObj.southparkOwnership,function(req,res){
		// is user logged in
		Southpark.findById(req.params.id,function(err,foundSouthpark){		
			res.render('Southpark/edit',{southpark:foundSouthpark});
	});
});

//EDITING LOGIC
router.put("/:id",middlewareObj.southparkOwnership,function(req,res){
	Southpark.findByIdAndUpdate(req.params.id,req.body.southpark,function(err,updateSouthpark){
		if(err){
			res.redirect("/southpark");
		} else {
			
			res.redirect("/southpark/"+req.params.id);
		}
	});
});
	

//DELETE ROUTE
router.delete('/:id',middlewareObj.southparkOwnership,function(req,res){
	Southpark.findByIdAndRemove(req.params.id,function(err){
		if(err){
			res.redirect('/southpark');
		} else {
			res.redirect('/southpark');
		}
	});
});
//DELETE ROUTE
// router.delete('/:id',function(req,res){
// 		res.send("you made it")
	// Southpark.findByIdAndRemove(req.comment.id,function(err){
	// 	if(err){
	// 		res.redirect('/southpark');
	// 	} else {
	// 		res.redirect('/southpark');
	// 	}
	// });
// });




module.exports = router;