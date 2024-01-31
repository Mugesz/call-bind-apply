var user = {
    name:"Mugu",
    age:26,
    getName : function(surname){
        console.log("user name is " , this.name , surname)
    }
}


var user2 = {
    name:"kannu",
    age:20
}

//bind
var x = user.getName.bind(user2);
x("kutty")

// bind will return a new function whenever we call the function name it get works. It will take reference as "this" key word


//call
user.getName.call(user2,"kutty")
//  call will directly get an output . It will take reference as "this" key word

//apply

user.getName.apply(user2,["kutty"])
// apply will also directly get an output , which we will gives a parameter as array inside  array we will pass multiple of parameter.It will take reference as "this" key word
