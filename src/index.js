import '@/styles/index.scss'

import { Stats } from "@/js/stats.js";

const config = {
    min: 0,
    // max: 10
};

let size = 50;

const stats = new Stats(config);

function inputHandler(event) {
    let numberN = +event.target.value;
    output.innerHTML = numberN;
    size = numberN;

    handlerClick(size);
}

const sizer = document.getElementById('sizer');
const output = sizer.getElementsByTagName('output')[0];

sizer.addEventListener('input', inputHandler);

function handlerClick(size) {
    const data = stats.randomData(size);

    stats.plot(data);
    stats.average(data);
    stats.dispersion(data);
}

window.onload = () => handlerClick(size);

handlerClick(size);
