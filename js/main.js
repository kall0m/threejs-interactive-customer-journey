import SceneManager from "./SceneManager.js";

import * as Data from "./data.js";

const canvas = document.querySelector("canvas.webgl");
const sceneManager = new SceneManager(canvas);

bindEventListeners();
render();

function bindEventListeners() {
  window.onresize = resizeCanvas;
  resizeCanvas();

  var btn1 = document.getElementById("btn-1");
  btn1.style.backgroundColor = Data.highlightColors[0];
  btn1.onclick = change1;

  var btn2 = document.getElementById("btn-2");
  btn2.style.backgroundColor = Data.highlightColors[1];
  btn2.onclick = change2;

  var btn3 = document.getElementById("btn-3");
  btn3.style.backgroundColor = Data.highlightColors[2];
  btn3.onclick = change3;
}

function resizeCanvas() {
  sceneManager.onWindowResize();
}

function render() {
  requestAnimationFrame(render);
  sceneManager.update();
}

function change1() {
  sceneManager.updateJourney(0);
}

function change2() {
  sceneManager.updateJourney(1);
}

function change3() {
  sceneManager.updateJourney(2);
}
