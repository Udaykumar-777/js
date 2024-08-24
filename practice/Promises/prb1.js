const cart = ["shoes","watch","Ipad","MaC"];

CreateOrder(cart,function(orderId){
    ProceedToPayment(orderId,function(paymentInfo){
        ShowOrderSummar(paymentInfo,function(paymentInfo){
            UpdateWalletBalance(paymentInfo);
        });
    });
})


//to prevent this callback hell we use promises

CreateOrder(cart)
    .then(function(orderId){
    ProceedToPayment(orderId);
    })
    .then(function(paymentInfo){
        ShowOrderSummar(paymentInfo);
    })
    .then(function(paymentInfo){
        UpdateWalletBalance(paymentInfo);
    })

//it could be also written using arrow functions

CreateOrder(cart)
    .then((orderId) => ProceedToPayment(orderId))
    .then((paymentInfo) => ShowOrderSummar(paymentInfo))
    .then((paymentInfo) => UpdateWalletBalance(paymentInfo))

//using promises by assigning a value

const promise = CreateOrder(cart);

promise.then(function(orderId){
    ProceedToPayment(orderId);
})