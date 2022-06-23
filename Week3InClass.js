let names = [
    "Abigail",
    "Marco",
    "Simone",
    "Derek",
]

console.log(names);

let allNames = "";

// allNames: ""
// i = 0


for (i = 0; i < names.length; i++) {
    let name = names[i];
    allNames += name + " ",
    console.log(name);
}

console.log(allNames);