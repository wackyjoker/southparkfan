	var express 	= require("express"),
		router 	 	= express.Router({mergeParams:true}),
		Southpark  	= require("../models/southpark"),
		Comment 	= require("../models/comment"),
	middlewareObj	= require("../middleware");

//======================================== COMMENT ROUTES

//NEW ROUTE
router.get('/new',middlewareObj.isLoggedIn,function(req,res){
	Southpark.findById(req.params.id,function(err,comment){
		if(err){
			console.log(err);
		} else {
				res.render('Comment/new',{southpark:comment});
		}
	});

});

//SAVE ROUTE
router.post("/",middlewareObj.isLoggedIn,function(req,res){
	Southpark.findById(req.params.id,function(err,southpark){
		if(err){
			console.log(err);
			res.redirect("/southpark");
		} else {
			Comment.create(req.body.comment,function(err,comment){
				if(err){
					console.log(err);
				} else {
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					southpark.comments.push(comment);
					southpark.save();
					res.redirect('/southpark/'+southpark._id);
				}
			});
		}
	});
});

//comment edit route
router.get("/:comment_id/edit",middlewareObj.commentOwnership,function(req,res){
	Comment.findById(req.params.comment_id,function(err,foundComment){
		if(err){
			res.redirect("back");
		} else {
		res.render("Comment/edit",{southpark_id:req.params.id ,comment:foundComment });	
		}
	});
	
});

//comment update route
router.put("/:comment_id",middlewareObj.commentOwnership,function(req,res){
	Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updateComment){
		if(err){
			res.redirect("back");
		}	else {
			res.redirect("/southpark/"+req.params.id);
		}
	});

});


//comment delete route

router.delete("/:comment_id",middlewareObj.commentOwnership,function(req,res){
	Comment.findByIdAndRemove(req.params.comment_id,function(err,deleteComment){
		if(err){
			res.redirect("back");
		} else {
			req.flash("success","Comment deleted");
			res.redirect("/southpark/"+req.params.id);

		}
	});
});


//is logged in function

module.exports = router;