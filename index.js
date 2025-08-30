import * as THREE from 'three';

//Obtenemos el ancho y alto de la ventan del navegador
const w = window.innerWidth;
const h = window.innerHeight;

//WebGLRenderer es el motor que dibuja graficos 3D en el navegador
//antialias: true -> subiza os bordes de los obetos
const renderer = new THREE.WebGLRenderer({antialias: true});


//Ajustamos el tamnio del area de dibujo al ancho y alto de la ventana
renderer.setSize(w, h);


//Insertamos el canvas que genera el renderizador dentro del <body> del HTML
document.body.appendChild(renderer.domElement);
//que tan amplia es la vista
const fov = 45;
//Ajusta la camara al tamanio de la pantalla
const aspect = w / h;
//Que tan cerca o lejos quiero ver
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;


const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 1);
const mat = new THREE.MeshBasicMaterial({
    color: 0xccff
});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

let t = 0; // contador de tiempo
function animate() {
    requestAnimationFrame(animate);
    t += 0.01; // avanza en cada frame
    mesh.scale.setScalar(Math.cos(t) + 1.0); // escala oscila entre 0.5 y 2.5
    renderer.render(scene, camera);
}

animate();

//scene -> que cosas debe dibujar
//camera -> desde donde mirar esos objetos
renderer.render(scene, camera)