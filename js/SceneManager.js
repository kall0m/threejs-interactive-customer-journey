import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as Data from "./data.js";
import Journey from "./world/Journey.js";

const SIZES = {
  width: window.innerWidth,
  height: window.innerHeight
};

class SceneManager {
  constructor(canvas) {
    this.scene = this.buildScene();
    this.renderer = this.buildRender(canvas);
    this.camera = this.buildCamera();

    this.currentJourneyIndex = 0;
    this.cardsContainer = new Journey(
      this.scene,
      Data.scenarios[this.currentJourneyIndex],
      Data.content[this.currentJourneyIndex],
      Data.images[this.currentJourneyIndex]
    );

    this.cardsContainer.container.position.set(-23, 10.3, 0);
    this.cardsContainer.container.updateMatrix();
  }

  update() {
    this.renderer.render(this.scene, this.camera);
  }

  buildScene() {
    const scene = new THREE.Scene();
    return scene;
  }

  buildRender(canvas) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });

    renderer.setSize(SIZES.width, SIZES.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    return renderer;
  }

  buildCamera() {
    // Base camera
    const fieldOfView = 45;
    const aspectRatio = SIZES.width / SIZES.height;
    const nearPlane = 0.1;
    const farPlane = 500;

    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );

    let controls = new OrbitControls(camera, this.renderer.domElement);

    camera.position.set(0, 0, 28.5);
    controls.update();

    return camera;
  }

  onWindowResize() {
    // update sizes when a resize event occurs
    SIZES.width = window.innerWidth;
    SIZES.height = window.innerHeight;

    // update camera
    this.camera.aspect = SIZES.width / SIZES.height;
    this.camera.updateProjectionMatrix();

    // update renderer
    this.renderer.setSize(SIZES.width, SIZES.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  updateJourney(newJourneyIndex) {
    if (this.currentJourneyIndex !== newJourneyIndex) {
      this.cardsContainer.update(
        Data.scenarios[newJourneyIndex],
        Data.content[newJourneyIndex],
        Data.images[newJourneyIndex],
        new THREE.Color(Data.highlightColors[newJourneyIndex])
      );

      this.currentJourneyIndex = newJourneyIndex;
    }
  }
}

export default SceneManager;
