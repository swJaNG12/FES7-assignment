// const btn = document.querySelector('#v2');

// btn.onclick = function () {
//     console.log("YOU CLICKED ME!")
//     console.log("I HOPE IT WORKED!!")
// }

// function scream() {
//     console.log("AAAAAHHHHH");
//     console.log("STOP TOUCHING ME!")
// }

// btn.onmouseenter = scream;


// document.querySelector('h1').onclick = () => {
//     alert('you clicked the h1!')
// }


// const btn3 = document.querySelector('#v3');
// btn3.addEventListener('click', function () {
//     alert("CLICKED!");
// })

// function twist() {
//     console.log("TWIST!")
// }
// function shout() {
//     console.log("SHOUT!")
// }

// const tasButton = document.querySelector('#tas');

// // tasButton.onclick = twist;
// // tasButton.onclick = shout;

// tasButton.addEventListener('click', twist)
// tasButton.addEventListener('click', shout)


const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('you clickde me');
}

function scream() {
    console.log('AAAAA');
    console.log('stop');
}
btn.onmouseenter = scream;


document.querySelector('h1').onclick = function () {
    alert('ypu funck')
}

const bnt3 = document.querySelector('#v3');
bnt3.addEventListener('mouseup', function() {
    console.log('btn3 clicked')
})

function twist() {
    console.log('twist');
}
function shout() {
    console.log('shout');
}

const tasButton = document.querySelector('#tas');

tasButton.onclick = twist;
tasButton.onclick = shout;

tasButton.addEventListener('click')