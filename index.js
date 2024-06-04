// Fill the code as per the requirements. Do not change the function name.

 

function PlaceOrder(){

    try{

        // Fill the code here.

        var deliveryDate = document.getElementById("deliveryDate").value;

        var cakeType = document.getElementById("cakeType").value;

        var cakeShape = document.getElementById("cakeShape").value;

        var weight = document.getElementById("weight").value;

        const deliveryYes = document.getElementById("deliveryYes").checked;

        const cutlery = document.getElementById("cutlery").checked;

        var validity = isValidDeliveryDate(deliveryDate);

        if(validity === false){

            document.getElementById("result").innerHTML = "invalid Delivery Date";

        }

        else {

            var cType = getCostOfCakeType(cakeType);

            var cShape = getCostOfCakeShape(cakeShape);

            var dCost = 0;

            var wOut = "without";

            var wTotal = parseFloat(weight)*10;

            if(deliveryYes === true){

                dCost = 5;

                wOut = "with";

            }

            var totalCost = cType+cShape+dCost+wTotal;

            var cut = "Thanks for not opting cutlery";

            if(cutlery === true){

                cut = "Cutlery will be provided";

            }

            document.getElementById("result").innerHTML = "Your "+weight+" Kg "+cakeShape+" shaped "+cakeType+" cake "+wOut+" door delivery cost is $"+totalCost+". "+cut+".";

        }

        // Retrieve the DOM input elements like deliveryDate, cakeType, cakeShape, weight, deliveryYes and cutlery using its id.

        // Check for valid deliveryDate. If invalid, then display "Invalid Delivery Date" in the div with id as "result".

        // If deliveryDate is valid, calculate the totalCost.

        // Check for the choices opted for door delivery and cutlery.

        // Display the appropriate result along with the totalCost as per the requirements given in description.

        

        

        

    

    

    return false;

    }

    catch(e){

          document.getElementById("result").innerHTML="Function PlaceOrder: "+e;

          }

}

 

 

 

function getCostOfCakeType(cakeType){

    try{

        var cost = 0;

        // Fill the code to return the cost based on cake type.

        if(cakeType === 'Red Velvet')

        cost=6;

        if(cakeType === 'Butterscotch')

        cost=5;

        if(cakeType === 'Chocolate Truffle')

        cost=7;

        if(cakeType === 'Black Forest')

        cost=8;

        if(cakeType === 'White Forest')

        cost=9;

       

        return cost;

   

    

    

    

}

    catch(e){

          document.getElementById("result").innerHTML="Function getCostOfCakeType: "+e;

          }

}

 

function getCostOfCakeShape(cakeShape){

    try{

        var scost = 0;

        // Fill the code to return the cost based on cake shape.

        if(cakeShape === 'Square')

        scost=2;

        if(cakeShape === 'Circle')

        scost=3;

        if(cakeShape === 'Heart')

        scost=4;

       

        return scost;

 

   

    

    

    }

    catch(e){

          document.getElementById("result").innerHTML="Function getCostOfCakeShape: "+e;

          }

}

 

function isValidDeliveryDate(deliveryDate)

{

    // Don't do any changes in this method

    try{

        var today=new Date();

        deliveryDate=new Date(deliveryDate);

  

        if(deliveryDate>today) {

            return true;

        } else {

            return false;

        }

    } catch(e) {

        document.getElementById("result").innerHTML="Function checkDeliveryDate: "+e;

    }

}