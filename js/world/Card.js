import * as THREE from "three";

import { gsap } from "gsap";
import { Text } from "troika-three-text";

class Card {
  constructor(
    width,
    height,
    depth,
    pos,
    color,
    opacity,
    text = new Text(),
    image
  ) {
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.pos = pos;
    this.color = color;
    this.opacity = opacity;
    this.text = text;
    this.image = image;

    this.mesh = new THREE.Object3D();

    this.container = new THREE.Object3D();
    this.container.matrixAutoUpdate = false;

    this.setProject();
  }

  setProject() {
    this.initMesh();

    if (this.image) {
      this.initImage();
    }

    this.initText();
  }

  initMesh() {
    const geometry = new THREE.PlaneBufferGeometry(this.width, this.height);
    const material = new THREE.MeshBasicMaterial({
      color: this.color,
      transparent: true,
      opacity: this.opacity
    });

    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(this.pos.x, this.pos.y, this.pos.z - 0.1);

    this.mesh = mesh;

    this.container.add(this.mesh);
  }

  createBoxWithRoundedEdges(width, height, depth, radius0, smoothness) {
    let shape = new THREE.Shape();
    let eps = 0.00001;
    let radius = radius0 - eps;
    shape.absarc(eps, eps, eps, -Math.PI / 2, -Math.PI, true);
    shape.absarc(eps, height - radius * 2, eps, Math.PI, Math.PI / 2, true);
    shape.absarc(
      width - radius * 2,
      height - radius * 2,
      eps,
      Math.PI / 2,
      0,
      true
    );
    shape.absarc(width - radius * 2, eps, eps, 0, -Math.PI / 2, true);
    let geometry = new THREE.ExtrudeBufferGeometry(shape, {
      amount: depth - radius0 * 2,
      bevelEnabled: true,
      bevelSegments: smoothness * 2,
      steps: 1,
      bevelSize: radius,
      bevelThickness: radius0,
      curveSegments: smoothness
    });

    geometry.center();

    return geometry;
  }

  initText() {
    this.text.position.set(this.pos.x, this.pos.y, this.pos.z);

    this.container.add(this.text);
  }

  initImage() {
    const geometry = new THREE.PlaneGeometry(
      this.height + 0.1,
      this.height + 0.1
    );

    let mesh;

    const texture = new THREE.TextureLoader().load(this.image, (tex) => {
      tex.needsUpdate = true;
      mesh.scale.set(1.0, tex.image.height / tex.image.width, 1.0);
    });

    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: texture,
      transparent: true
    });

    mesh = new THREE.Mesh(geometry, material);

    mesh.position.set(this.pos.x, this.pos.y, this.pos.z);

    this.image = mesh;

    this.container.add(mesh);
  }

  updateImage(image) {
    gsap
      .timeline()
      .to(this.container.position, {
        duration: "0.5",
        ease: "power2.inOut",
        z: "-=0.5",
        onUpdate: () => {
          this.container.updateMatrix();
        }
      })
      .to(this.container.position, {
        duration: "0.5",
        ease: "power2.inOut",
        z: "+=0.5",
        onUpdate: () => {
          this.container.updateMatrix();
        }
      });

    gsap
      .timeline()
      .to(this.text, {
        duration: "0.5",
        ease: "power2.inOut",
        fillOpacity: "0",
        onComplete: () => {
          const texture = new THREE.TextureLoader().load(image, (tex) => {
            tex.needsUpdate = true;
            this.image.scale.set(1.0, tex.image.height / tex.image.width, 1.0);
          });

          this.image.material.map = texture;
        }
      })
      .to(this.text, {
        duration: "0.5",
        ease: "power2.inOut",
        fillOpacity: "1"
      });
  }

  updateText(text) {
    gsap
      .timeline()
      .to(this.container.position, {
        duration: "0.5",
        ease: "power2.inOut",
        z: "-=0.5",
        onUpdate: () => {
          this.container.updateMatrix();
        },
        onComplete: () => {
          this.text.text = text;
        }
      })
      .to(this.container.position, {
        duration: "0.5",
        ease: "power2.inOut",
        z: "+=0.5",
        onUpdate: () => {
          this.container.updateMatrix();
        }
      });
  }

  highlight(color) {
    gsap.to(this.mesh.material.color, {
      duration: "0.3",
      ease: "power2.inOut",
      r: color.r,
      g: color.g,
      b: color.b
    });
  }
}

export default Card;
