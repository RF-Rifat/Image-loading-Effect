const demo2 = document.querySelector('#demo2');
const bg = document.querySelector('#demo');

let load = 0;
let int = setInterval(blurring, 30);

function blurring(){
    load++;
    if(load > 99){
        clearInterval(int);
    }
    demo2.innerHTML = load + '%';
    demo2.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};