var customerNames = [];
customerNames.push("Sam Smith");
customerNames.push("Tommy Guns");

//for (i = 0; i < customerNames.length; i++) {
    //console.log(customerNames[0]);
//}

for (name of customerNames) {
    console.log(name);
}