var input = document.getElementById("input");
input.addEventListener("click",function () {
    var inputvalue = input.value;
    var number = parseFloat(inputvalue);
    
});
const linkrandom = ("https://pokeapi.co/api/v2/pokemon/" + number4(1,20))
function random () {
    const number3 = document.getElementById("input").value
axios.get(linkrandom)
.then(function(response){
console.log(response.data);
const reza = document.getElementById("img")
reza.src=response.data.sprites.back_default
 
document.getElementById("name").innerHTML = response.data.name




});


}
random();
 function number4(min,max) {
    return Math.floor(Math.random()   *    (max-min) +min) 
 }