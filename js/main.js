// functie voor de vershillende posities
function randomPosition(direction) {
    return Math.floor(Math.random()* 100) + direction
}

// vis element
//

function createFish() {
    let fish = document.createElement("fish")
    document.body.appendChild(fish)

    let x = randomPosition('vw');
    let y = randomPosition('vh');
    fish.style.transform = `translate(${x}, ${y})`;

    let randomhue = Math.random() * (360);
    fish.style.filter = `hue-rotate(${randomhue}deg)`

    fish.addEventListener("click", function(){
    fish.classList.add("dead");
    console.log("added to deadfish")
})


}


//
// bubble element
//
function createBubble() {
    let bubble = document.createElement("bubble");
    document.body.appendChild(bubble);

    let x = randomPosition('vw');
    let y = randomPosition('vh');
    bubble.style.transform = `translate(${x}, ${y})`

    bubble.addEventListener("click", function(){
        bubble.remove();
    })
}

for(let i=0; i<100; i++) {
    createBubble();
    createFish();
}



// Waarom werkt dit niet??

// fish.addEventListener("click", function(){
//    if(fish.style.filter = "hue-rotate(100deg)") {
//        fish.style.filter = "hue-rotate(200deg)"
//        console.log('1')
//    } else {
//        fish.style.filter = "hue-rotate(100deg)"
//        console.log("2");
       
//    }
// })

// Nog een vraag??

// fish.addEventListener("click", function(){
//     fish.style.filter = "hue-rotate(Math.floor(Math.random() * 361))"
// })


