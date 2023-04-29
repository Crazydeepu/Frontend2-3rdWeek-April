let p = fetch("https://free-food-menus-api-production.up.railway.app/burgers")
p.then(function(response){
    response.json().then(function(getMenu)
    {
        console.log(getMenu)
    })
})
p.catch(function(error){
    console.log(error)
})


function TakeOrder(){
    return new Promise(function(getOrder,rejectOrder){
        getOrder(console.log(" your order is accepted"));
    });
};
rejectOrder(console.log("Order is not accepted"));


function orderPrep(){
    return new Promise(function(orderStatus,PaymentStatus){
        if(orderStatus == true){
            console.log("Order is preparing")
        }
        else {
            console.log("Order is cancelled");
        }
        
    });
};
PaymentStatus(console.log("Payment is not done yet"));



function payOrder(){
    return new Promise(function(orderStatus,PaymentStatus){
        if(PaymentStatus == true){
            console.log("Order is prepared")
        }
        else {
            console.log("Waiting for your payment status")
        }
    });
};

function thankyouFnc(){
    return new Promise(function(orderUpdate,paymentSuccess){
        if(paymentSuccess == true){
            alert("thankyou for eating with us today!")
        }
    })
}