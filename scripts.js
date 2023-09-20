const btn = document.querySelector(".btn")

function cliqueiNoBotao(){

    

    
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max =  Math.floor(document.querySelector('.input-max').value)

    
    const result = Math.floor(Math.random()* (max - min + 1))
+ min;

alert(result)
}
