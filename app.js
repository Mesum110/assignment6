// =========Assingment 21-25===============

// var firstName = prompt("First Name");
// var lastName = prompt("Last Name");
// var fullName = firstName +" "+ lastName;
// document.write(fullName);



// var a = prompt("Enter Your Favorite Mobile");
// var n = a.length;
// document.write(n);



//  var text = "Pakistani";
//  var segIndex = text.indexOf("n");
//  document.write(segIndex);



//  var text = "Hello World";
//  var segIndex = text.lastIndexOf("l");
//  document.write("String" + ":" + " " + text + "<br>") ;
//  document.write("Last Index of 'L'" + ":" + " " + segIndex );

//  var text = "Pakistani";
//  var char = text.charAt(3)
//  document.write("String" + ":" + " " + text + "<br>") ;
//  document.write("Char at 3 Index " + ":" + " " + char );

// var firstName = prompt("First Name");
// var lastName = prompt("Last Name");
// document.write(firstName +" "+ lastName);

// var x = "Hyderabad";
// var newText = x.replace("Hyder", "Islam");
// document.write(newText);



// var x= " Ali and Sami are best friends They play cricket and football together";
// var newText = x.replace(/and/g, "&");
// document.write(newText);



// var a = "472";
// var b = parseInt(a);
// document.write( "Value " + a + "<br>");
// document.write( "Type " +typeof a + "<br>");
// document.write( "Value " + b + "<br>");
// document.write( "Type " +typeof b + "<br>");

// var a = "peanut";
// var b = a.toUpperCase();
// document.write(b);



// var a = 15.1;
// var b = a.toString(a);
// document.write( "Value " + a + "<br>");
// document.write( "Input Type " +typeof a + "<br>");
// document.write( "Output Type " +typeof b + "<br>");



// =========Assingment 26-30===============

// var a= prompt("Enter the number");
// var b=  Math.round (a);
// document.write(b);

// var a= prompt("Enter the number");
// var b=  Math.floor (a);
// document.write(b);

// var a= prompt("Enter the number");
// var b=  Math.ceil (a);
// document.write(b);

// var a= prompt("Enter the number");
// var b=  Math.round (a);
// document.write(b);

// var a= prompt("Enter the number");
// var b=  Math.floor (a);
// document.write(b);

// var a= prompt("Enter the number");
// var b=  Math.ceil (a);
// document.write(b);

// var a= prompt("Enter the number");
// var b=  Math.abs (a);
// document.write(b);
 
// var a = Math.floor( Math.random() * 7 );
// document.write(a);

// Math.floor( Math.random() * 6 );
// if (Math.random() < 0.5){
//     document.write("Heads");
//     }else{
//         document.write("Tails");
//     }

// var a= Math.floor(Math.random() * 101);  
// document.write(a);


// =========Assingment 31-35===============


// var currentdate = new Date();
// document.write(currentdate);

// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//   document.write("Today is : " + daylist[day] + ".");

// var today = new Date();
// var month = today.getMonth();
// var monthlist = ["Jan","Feb","Mar","april","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
// document.write("Today is : " + monthlist[month] + ".");

// var d = new Date();
// var n = d.getMilliseconds();
// document.write(n);

// var d= new Date();
// var currYr = d.getFullYear();
// document.write(currYr);

// var d= new Date();
// var sec = d.getSeconds();
// document.write(sec);

// function currdate() {
//     a= new Date();
//     document.write(a);
//      }
//      currdate();

// function username() {
//     a=prompt("Enter First Name");
//     b=prompt("Enter Last Name")
//     c= a +" " +b;
//     document.write(c);
//      }
//      username();

// function num() {
//     a=+prompt("Enter First ");
//     b=+prompt("Enter Last")
//     c= a +b;
//     document.write(c);
//      }
//      num();
// function num() {
//     a=+prompt("Enter Value ");
    
//     c= a *a;
//     document.write(c);
//      }
//      num();

// x=+prompt("Enter  Number");
// function factorial(x) 
// { 

//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// document.write(factorial(x));

x=+prompt("Enter  Number");
y=+prompt("Enter  Number");
function counting(){
    for( i=x; i=y;i++){
        document.write(i);
    }
    
}
    counting();