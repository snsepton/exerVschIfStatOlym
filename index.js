var person = {
    name: "Bobby",
    age: 12
  }


if(person.age > 18){
    console.log("Bobby is allowed to go to the movie")
} else if(person.age < 18){
    console.log("Bobby is not allowed to go to the movie")
}

if(person.name.charAt(0)=="B"){
    console.log ("allowed to go to the movie")
}
if(person.name.charAt(0)=="B" && person.age > 18){
    console.log ("allowed to go to the movie if older")
}

if (1 === "1") {
    console.log("strict")
}
    else if (1 === "1"){
        console.log("loose")
    }
    else {
        console.log("not equal at all")
    }

    if(1 <= 2 && 2 == 4){
        console.log("Yes!")
    } else {
        console.log("It's not working")
    }

var animal = "dog"
if(typeof animal == 'string') {
    console.log("it is a string")
}

if(true){
    console.log("IT is true!")
}

var shopper;
if(shopper != null){
    console.log("the variable shopper is defined")
} else {
    console.log("the variable shopper is not defined")
}

if ("s" > 12) {
    console.log("s is greater than 12")
} else {
    console.log("s is not greater than 12")
}

var myNum = 10;
if(myNum % 2 == 0) {
    console.log("The number is even.");
}else {
    console.log("The number is odd.");
}