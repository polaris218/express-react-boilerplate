!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("multer")},function(e,t){e.exports=require("uuid-v4")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("joi")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("http-errors")},function(e,t){e.exports=require("cookie-parser")},function(e,t,n){n(11),n(12)},function(e,t){e.exports=require("babel-register")},function(e,t,n){n(16)},function(e,t){e.exports=require("bcrypt")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("http")},function(e,t,n){"use strict";n.r(t);var r=n(8),o=n.n(r),a=n(4),s=n.n(a),i=n(1),u=n.n(i),d=n(9),p=n.n(d),c=n(6),l=n.n(c),f=n(3),g=n.n(f),m=(n(13),n(2)),y=n.n(m),b=n(0),h=n.n(b);const S=new(0,h.a.Schema)({_id:{type:h.a.Schema.Types.ObjectId},businessName:{type:String,unique:!0},businessEmail:{type:String},password:{type:String},image:{oriname:{type:String},savedname:{type:String}},date:{type:Date,default:Date.now}});var x=h.a.model("users",S),v=n(7);const j=e=>Object(v.sign)({exp:Math.floor(Date.now()/1e3)+3600,data:e},"secret");let w="",_="",q="";const O=y.a.diskStorage({destination:(e,t,n)=>{n(null,"./upload")},filename:(e,t,n)=>{const r=g()();w=r,_=u.a.extname(t.originalname),q=t.originalname,n(null,`${r}${u.a.extname(t.originalname)}`)}}),T=y()({storage:O}).single("file");var P=n(5),$=n.n(P);const D=new(0,h.a.Schema)({_id:{type:h.a.Schema.Types.ObjectId},offerId:{type:String,default:g()()},offer_image:{mainphoto:{data:Buffer,contentType:String},subphoto1:{data:Buffer,contentType:String},subphoto2:{data:Buffer,contentType:String},subphoto3:{data:Buffer,contentType:String}},title:{type:String,required:!0},description:{type:String},choosedate:{from:{type:String},to:{type:String}},nodate:{type:Boolean},fullprice:{type:Number},discount:{type:Number,min:0,max:100},category:{type:String},address:{type:String},phone:{type:String},site:{type:String},offerpath:{type:String},user:{type:String},created_date:{type:Date,default:Date.now},updated_date:{type:Date,default:Date.now}});var I=h.a.model("offers",D);let M=0,B=[];const F=y.a.diskStorage({destination:(e,t,n)=>{n(null,"./upload")},filename(e,t,n){B[M]=`${g()()}`,n(null,`${B[M]}${u.a.extname(t.originalname)}`),M++,I.updateOne({offer_image:{mainphoto:g()()}})}}),N=y()({storage:F}).array("file",4),k=s.a.Router();k.get("/userinfo",(e,t)=>{e.app.get("email")}),k.get("/offerdata",(e,t,n)=>{I.find({},(e,n)=>{t.status(200).send(n)})}),k.get("/viewdata",(e,t,n)=>{const{offerid:r}=e.headers;I.findOne({offerId:r}).exec((e,n)=>{e&&t.status(500).send(),t.status(200).send(n)})}),k.post("/usersignup",(e,t)=>{T(e,t,n=>{if(n instanceof y.a.MulterError)t.status(404).send(n);else if(n)t.status(404).send(n);else{const{username:n,email:r,password:o}=e.body;x.create({_id:h.a.Types.ObjectId(),businessName:n,businessEmail:r,password:o,image:{oriname:q,savedname:`${w}${_}`}}).then(e=>{const n=j(r);t.status(200).send(n)})}})}),k.post("/login",(e,t)=>{const{error:n}=(e=>{const t={email:l.a.string(),password:l.a.string().min(3).required()};return l.a.validate(e,t)})(e.body),{email:r,password:o}=e.body,a=j(r);t.status(200).send(a)}),k.post("/createoffer",(e,t,n)=>{const{authorization:r}=e.headers||e.body;void 0!==r?(e.app.set("email",Object(v.decode)(r).data),n()):n()},(e,t)=>{N(e,t,n=>{if(n instanceof y.a.MulterError)t.status(404).send(n);else if(n)console.log(n.message),t.status(404).send(n);else{const{title:n,description:r,startdate:o,enddate:a,fullprice:s,discount:i,category:u,address:d,phone:p,site:c}=e.body;I.create({_id:h.a.Types.ObjectId(),offer_image:{mainphoto:{data:$.a.readFileSync(e.files[0].path),contentType:"image/png"},subphoto1:{data:$.a.readFileSync(e.files[1].path),contentType:"image/png"},subphoto2:{data:$.a.readFileSync(e.files[2].path),contentType:"image/png"},subphoto3:{data:$.a.readFileSync(e.files[3].path),contentType:"image/png"}},title:n,description:r,choosedate:{from:o,to:a},nodate:!0,fullprice:s,discount:i,category:u,address:d,phone:p,site:c,offerpath:"./upload",user:e.app.get("email")}).then(e=>{M=0,B=[],t.status(200).send()})}})}),k.put("/userupdate",(e,t)=>{const{udata:n}=e.body,{username:r,password:o,newpassword:a}=n;e.app.get("email")}),k.delete("/userremove",(e,t)=>{const{remail:n}=e.body});var E=k;const R=s()();R.use(n(14)());const z=process.env.PORT||8080;n(15).Server(R).listen(z,()=>{console.log(`server listening--\x3e${z}`)}),h.a.set("useCreateIndex",!0),h.a.connect("mongodb://localhost/offerbrite",{useNewUrlParser:!0},e=>{if(e)throw e;console.log("successfully connected")}),h.a.Promise=global.Promise,R.use(p()()),R.use(s.a.json()),R.use(s.a.urlencoded({extended:!1})),R.use(s.a.static(u.a.join(__dirname,"public"))),R.use("/api",E),R.use("*",(e,t)=>{t.sendFile(u.a.join(__dirname,"public/index.html"))}),R.use((e,t,n)=>{n(o()(404))}),R.use((e,t,n)=>{n.locals.message=e.message,n.locals.error="development"===t.app.get("env")?e:{},n.status(e.status||500),n.json({})});t.default=R}]);