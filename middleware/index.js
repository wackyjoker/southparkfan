var middlewareObj 	= {};
var 	Southpark   = require("../models/southpark");
var 	Comment 	= require("../models/comment");


middlewareObj.commentOwnership = function (req,res,next){
	if(req.isAuthenticated()){
				
					Comment.findById(req.params.comment_id,function(err,foundComment){
						if(err){
							req.flash("error","Error 404 Page not Found");
							res.redirect("back");
						} else {
							//does this user own this artical
							if(foundComment.author.id.equals(req.user._id)){
								next();
							} else {
								req.flash("error","You don't have permission to do that");
								res.redirect("back");
							}
						}
			});
				
		} else {
			req.flash("error","You Need to Sign in to do that!");
			res.redirect("back");
		}
}



middlewareObj.southparkOwnership = function (req,res,next){
	if(req.isAuthenticated()){
				
					Southpark.findById(req.params.id,function(err,foundSouthpark){
						if(err){
							req.flash("error","error 404 page not found");
							res.redirect("back");
						} else {
							//does this user own this artical
							if(foundSouthpark.author.id.equals(req.user._id)){
								next();
							} else {
								req.flash("error","you don't have permission to do that");
								res.redirect("back");
							}
						}
			});
				
		} else {
			req.flash("error","you need to sign in to do that");
			res.redirect("back");
		}
}

middlewareObj.isLoggedIn= function (req,res,next){  // is logged in function
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error","Please Sign in First!");
	res.redirect("/login");
}

module.exports = middlewareObj;