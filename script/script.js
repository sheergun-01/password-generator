
const randFunc = {
    lower: getLowerCase,
    upper: getUpperCase,
    number: getRanNumber,
    symbol: getSymbol
};


//function generator using charset
function getLowerCase(){
   return String.fromCharCode(Math.round((Math.random()*26) + 97));
}
function getUpperCase(){
    return String.fromCharCode(Math.round((Math.random()*26) + 65));
 }
 function getSymbol(){
    return String.fromCharCode(Math.round((Math.random()*14) + 33));
 }
 function getRanNumber(){
    return String.fromCharCode(Math.round((Math.random()*9) + 48));
 }

 /* ******************************************************************************* */


 //get dom Elements
 const lengthElement = document.getElementById("length");
 const upperCaseElement = document.getElementById("upperCase");
 const lowerCaseElement = document.getElementById("lowerCase");
 const symbolElement = document.getElementById("symbols");
 const numberElement = document.getElementById("number");
 const resultElement = document.getElementById("result");
 const generateElement = document.getElementById("generate");
 

 /*         ********************     add event  ***********************  */
 generateElement.addEventListener('click',() =>{
     const isLength =  +lengthElement.value;
     const isUpper = upperCaseElement.checked;
     const isLower = lowerCaseElement.checked;
     const isSymbol = symbolElement.checked;
     const isNumber = numberElement.checked;
     resultElement.innerText = passwordGenerator(isLength,isUpper,isLower,isSymbol,isNumber);
 });

 /*  *************     PASSWORD GENERATOR FUNCTION   ****************          */
 function passwordGenerator(length,upper,lower,symbol,number){
    let password = "";

    const typesCount = upper+lower+symbol+number;

    const typesArr = [{lower},{upper},{symbol},{number}].filter(
        item => Object.values(item)[0]
    );

     if (typesCount === 0){
         return "";
     }
     for (let i=0;i<length;i+=typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];
            console.log(funcName)
            password += randFunc[funcName] () ;
        });
    }
    const finalPassword = password.slice(0,length);
    return finalPassword;
 }




