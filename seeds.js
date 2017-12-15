var mongoose = require("mongoose"),
	Southpark = require("./models/southpark"),
	Comment = require("./models/comment");

var data=[
{	name:"Stan Marsh",
	image:"http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd7x2fTubo-nbsti-1.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f07x3fdcx3d31281832266969x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$",
	description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
},
{
	name:"Eric Cartman",
	image:"http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd5x2fFsjd-dbsunbo.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f261x3fdcx3d31281836256461x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$",
	description:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
}


];

	function seedDB(){
		//Remove all characters
		Southpark.remove({},function(err){
		// 	if(err){
		// 		console.log(err);
		// 	} 
		// 	console.log("removed all character");

		// 	data.forEach(function(seed){
		// 	Southpark.create(seed, function(err,southpark){
		// 		if(err){
		// 			console.log(err);
		// 		} else {
		// 			console.log("added a character");
		// 			//create a comment
		// 			Comment.create({text:"South park is a good place to live",
		// 							author:"Simpson"

		// 				},function(err,comment){
		// 					if(err){
		// 						console.log(err);
		// 					} else{
		// 						southpark.comments.push(comment);
		// 						southpark.save();
		// 						console.log("Created a new comment");
		// 					}
		// 				});
		// 		}
		// 	});
		// });
	});
		//add a few characters
		
		
		//add a few comments
	}

	module.exports = seedDB;