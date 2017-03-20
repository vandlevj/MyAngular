 myApp.filter ("gender", function () {
     return function(val) {
         switch(val) {
             case "1":
             return "Male";
             case "2":
             return "Female";
         }
     }
 });