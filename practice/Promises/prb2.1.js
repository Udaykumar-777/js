const cart = ["shoes","watch","Ipad","MaC"];
let Balance = 450;
//Consumer End
//create showOrderSummary,updateWallet
const promise = CreateOrder(cart);
promise.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceed_to_payment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
})
.then(function(order_details){
    console.log(order_details);
    return updateWallet(order_details);
})
.then(function(Balance){
    console.log(Balance);
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
                resolve(orderId);
            }
        });
        return pr;
    }
function proceed_to_payment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful")
    })
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve,reject){
        const order_details = cart;
        resolve(order_details);
    })
}

function updateWallet(order_details){
    return new Promise(function(resolve,reject){
         Balance = 300;
         resolve(Balance);
    })
}
function validatecart(cart){
        return true;
    }