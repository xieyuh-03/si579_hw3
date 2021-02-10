/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
var count = 0;
var div = document.getElementById("color-block");
div.onclick = function(){changeColor()}

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(count == 0){
        //change the background color using JS
        div.style.backgroundColor = "#f12345";
        document.getElementById('color-name').innerHTML = "#F12345";
        //Change the text of the color using the span id color-name
        count = 1;

    }
    else{
        //change the background color using JS
        div.style.backgroundColor = '#F08080';
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').innerHTML = "#F08080";
        count = 0;
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
document.getElementById("convertbtn").addEventListener("click", convertTemp);

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    var num = document.getElementById("f-input").value;
    num = (num-32)*5/9;
    

    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = num;

}


