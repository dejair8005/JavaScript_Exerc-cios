/* Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true */


function is_array (n){
    if (Array.isArray(n)) 
        return true    
    return false
    
}


console.log(is_array("Exercicio"))
console.log(is_array([1,2,3,4]))
