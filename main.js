import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js";

// SCENE
// https://threejs.org/docs/#api/en/scenes/Scene
const scene = new THREE.Scene();

// CAMERA
// https://threejs.org/docs/#api/en/cameras/PerspectiveCamera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 30);
scene.add(camera);

// RENDERER
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(2); // Resolution
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// AMBIENT LIGHT
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// DIRECTIONAL LIGHT
// https://threejs.org/docs/#api/en/lights/DirectionalLight
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(50, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.heigth = 1024;

// MODELS
// https://threejs.org/docs/#api/en/geometries/SphereGeometry
const geometry = new THREE.SphereGeometry(3, 64, 64); // (radius, widthSegments, heigthSegments)
// https://threejs.org/docs/#api/en/materials/MeshStandardMaterial
const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
    roughness: 0.5,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// WINDOW RESIZE HANDLING
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
