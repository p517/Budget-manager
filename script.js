// We are creating modules bcz we want to keep piece of code that are related to one another together insde of 
//seperate independent and organized units

//In this we will be having the variable that accesible only inside the function , they are private 

//Besides private va nad methods we will also be having public methods which means that we access them to the public 
//so that other modules can use them . 

//And this is called data encapsulation.It allows to hide implementation details of a spesific module from the 
//outside scope so that we only expose a public interface which is someties called API.

var budgetController = (function(){
    var x=23;
    var add = function(a){
        return x+a;
    }
    return { 
        publicTest:function(b){
            return add(b);
        }
    }
})();
var UIController = (function(){

})();
var controller = (function(budgetCtrl,UICtrl){
    var z=budgetCtrl.publicTest(5);
    return {
        anotherPublic:function(){
            console.log(z);
        }
    }
})(budgetController,UIController);