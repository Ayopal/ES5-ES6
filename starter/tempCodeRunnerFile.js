const boxes = document.querySelectorAll('.box'); // does not return array but this returns a nodelist

var boxesArr5 = Array.from(boxes);
console.log(boxesArr5);


// ES5

for (var i = 0; i < boxesArr5.length; i++) {

    console.log(i, boxesArr5[i]);

}