



		//1.极简法 
		var Animal={
			type:"animals",//公有属性,实例共享
			createNew:function(){
				var animal={};
				animal.name="what";//实例属性
				animal.enermy = 'people';
				return animal;
			}
		}
		var Cat={
            type:"cat",//公有属性（类属性）
			createNew:function () {
				 var cat=Animal.createNew();//继承父类
				 var legs=2//私有属性
				 cat.name="Dola";//实例属性
				 cat.getType=function(){console.log(Cat.type);};//实例方法
				 cat.changeType=function(type){Cat.type=type;};//实例方法
				 cat.changeName = function (name) { cat.name=name;};//修改实例属性
				 return cat;
			}
		}


		var cat1=Cat.createNew();            //创建对象
		console.log(cat1.name);  
		console.log(cat1.enermy);  
	    cat1.name="Tom";                     //修改实例属性
	    console.log(cat1.name);              //  "Tom"
		var cat2=Cat.createNew();    
		console.log(cat2.name);              //   "Dola"


		cat1.getType();                      //   类的属性-- "cat"
		cat2.changeType('tiger');            //  修改类的属性
		cat1.getType();                      //   变为 "tiger"
		cat2.getType();                      //   也是 "tiger"
	
		Cat.createNew().name = "Gatsby";
		console.log(cat1.name);
		console.log(cat2.name);
		var cat3=Cat.createNew();
		console.log(cat3.name);


        //2.构造函数法
		function User(age){ 
			this.age=age; //实例属性
			this.eat="面好吃"
			var isChild=2  //私有属性
			
			this.getHi=function () {      //实例方法
				 console.log(User.hi);
			}
			this.changeHi=function(x){          //实例方法
		         User.hi=x;
			}
			this.changeAge=function(x){         //实例方法
		         this.age=x;
			}
		} 
		User.prototype.price = "100";//原型属性

		User.hi="hello";//公有属性（类属性）


		var user1=new User(15);
		var user2=new User(18);

		user1.getHi();
		user2.changeHi("ce to meet you");
		user1.getHi();
		User.prototype.eat = "我在吃东西";
		User.prototype.walk = "我在跑步";
		console.log(user1.eat);
		console.log(user1.walk);
		user1.changeAge(38);
		console.log(user1.age);
		console.log(user2.age);

		
		console.log(user1.price);
		console.log(user2.price);
		User.prototype.price = "200";
		console.log(user1.price);
		console.log(user2.price);
	



	     //3.Object.create方法

	

	