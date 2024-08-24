const cart = ["shoes","watch","Ipad","MaC"];

//Consumer End
const promise = CreateOrder(cart);
console.log(promise);
promise.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceed_to_payment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message);
})

//Producer End

function CreateOrder(cart){
    const pr = new Promise(function(resolve,reject){

        if(!validatecart(cart)){
            const err = new Error("Cart is not Valid");
            reject(err);
        }
        
        const orderId = 12345;
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
            }
        });
        return pr;
    }
function proceed_to_payment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful")
    })
}
function validatecart(cart){
        return true;
    }