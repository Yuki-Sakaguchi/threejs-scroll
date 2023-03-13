import "./style.css";

import { Motion } from "./Motion";

import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  MeshNormalMaterial,
  Mesh,
} from "three";
// import { GUI }from 'dat.gui';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// let gui = new GUI();
// let params = {
//   color: 0x00ff00,
//   scale: 1.0,
// };
// gui.addColor(params, 'color').onChange(() => cube.material.color.set(params.color));
// gui.add(params, 'scale', 1.0, 4.0).onChange(() => { cube.scale.set(params.scale, params.scale, params.scale) });

const motion = new Motion();
motion.update = () => {
  cube.rotation.x = motion.lerp_scroll.y.current * 0.01;
  cube.rotation.y = motion.lerp_scroll.x.current * 0.01;
};

let scene = new Scene();

let camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

let renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

let geometry = new BoxGeometry(1, 1, 1);
let material = new MeshNormalMaterial();
let cube = new Mesh(geometry, material);
scene.add(cube);

let animate = () => {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();

let resize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
window.addEventListener("resize", resize);
resize();
