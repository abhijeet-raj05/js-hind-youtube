const account_id = 124554
let account_email = "abhijeet@iiit.com"
var account_pass = "12345"
account_city = "Jaipur"
//Constant can't be changes, eg: account_id = 2, hence we can't change the value

// var and let are used to declare variables. But nowadays we only use let to declare variables.
/*
Prefer not to use var
because of block scope and functional scope.
*/ 
account_email="asdasda@g.com"
account_pass="2654312"
account_city="Gothapatna"

console.log(account_id);

console.table([account_email, account_id, account_city, account_pass])
