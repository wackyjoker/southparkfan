var express 	 = require('express'),
	 app		 = express(),
	 bodyParser  = require('body-parser'),
	 mongoose    = require('mongoose'),
	 passport	 = require("passport"),
	 flash		 = require('connect-flash'),
LocalStrategy	 = require("passport-local"),
expressSsession  = require("express-session"),
methodOverride   = require('method-override'),
	 Southpark   = require("./models/southpark"),
	 Comment     = require('./models/comment'), 
	 User		 = require('./models/user'),
	 seedDB	 	 = require("./seeds");

var southparkRoute	 = require("./routes/southpark"),
    indexRoute		 = require("./routes/index"),
	commentRoute	 = require("./routes/comments");


mongoose.connect('mongodb://localhost/South_Park12');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'));
app.use(flash());
//seed page
// seedDB();
// Schema set up

//passport config

app.use(expressSsession({
	secret:"emma is still the most brilliant and beutiful woman",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});



var southpark = [
{name:"eric cartman",image:"http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd5x2fFsjd-dbsunbo.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f261x3fdcx3d31281836256461x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$"},
{name:'stan marsh',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd7x2fTubo-nbsti-1.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f07x3fdcx3d31281832266969x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:'Kenny McCormick',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2f7x2f7gx2fLfoozNdDpsnjdl.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f222x3fdcx3d31271510131613x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:'kyle broflovski',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2f0x2f06x2fLzmf-cspgmpwtlj.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f232x3fdcx3d31281836242035x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:"eric cartman",image:"http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd5x2fFsjd-dbsunbo.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f261x3fdcx3d31281836256461x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$"},
{name:'stan marsh',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2fdx2fd7x2fTubo-nbsti-1.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f07x3fdcx3d31281832266969x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:'Kenny McCormick',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2f7x2f7gx2fLfoozNdDpsnjdl.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f222x3fdcx3d31271510131613x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'},
{name:'kyle broflovski',image:'http://c-7npsfqifvt34x24wjhofuufx2ex78jljbx2eopdppljfx2eofu.g00.wikia.com/g00/3_c-7tpvuiqbsl.x78jljb.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fwjhofuuf.x78jljb.opdppljf.ofux2ftpvuiqbslx2fjnbhftx2f0x2f06x2fLzmf-cspgmpwtlj.qohx2fsfwjtjpox2fmbuftux2ftdbmf-up-x78jeui-epx78ox2f232x3fdcx3d31281836242035x26j21d.nbsl.jnbhf.uzqf_$/$/$/$/$/$/$/$/$/$'}
];




app.use("/southpark",southparkRoute);
app.use("/southpark/:id/comments",commentRoute);
app.use(indexRoute);




app.listen(3000, function(err){
	if(err){
		console.log(err);
			} else {
	console.log('Server Started');
					}
	});