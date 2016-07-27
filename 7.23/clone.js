var a = {
	name:'tan',
	sex:'male',
	showName:function(){
		console.log(this.name);
	},
	attribute:[
		{
			like:"play"
		},
		{
			like:"move"
		}
	]
}
// var c = [
// 	{
// 		name:'tan',
// 		sex:'male',
// 		showName:function(){
// 			console.log(this.name);
// 		}
// 	},
// 	{
// 		name:'zhu',
// 		sex:'female',
// 		showName:function(){
// 			console.log(this.name);
// 		},
// 		attribute:{
// 			like:"run"
// 		}
// 	},
// ]
var d = "12313";
var b = {};
function clone(obj){
	if(typeof(obj)=="object"&&obj!=null){
		if(obj instanceof Array){
			for (var i = 0;i < obj.length; i++) {
				b[i] = obj[i];
			}
		}
		else{
			for(var i in obj){
				b[i] = obj[i];
			}
		}
	}
	else{
		console.log("这不是对象！");
	}
	
}

clone(a);
//clone(c);
//clone(d);
b.name = "xxxx";
console.log(a);
console.log(b);