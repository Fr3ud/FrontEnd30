const colors = {
  wheat: 0xf7d9aa,
}

const createScene = function() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;

  /**SCENE */
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(colors.wheat, 100, 950);

  /**CAMERA */
  fieldOfView = 60;
  aspectRatio = WIDTH / HEIGHT;
  nearPlane = 1;
  farPlane = 10000;

  camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
  );
  camera.position.set(0, 0, 50);

  /**RENDERER */
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(WIDTH, HEIGHT);
  container = document.getElementById('world');
  container.appendChild(renderer.domElement);
}

/**SEA */
Sea = function() {
  geom = new THREE.CylinderGeometry(5, 5, 10, 8, 1);
  const material = new THREE.MeshPhongMaterial({
    color: 0xff00ff,
  });

  this.mesh = new THREE.Mesh(geom, material);
}

const createSea = function() {
  sea = new Sea();
  scene.add(sea.mesh);
}

const loop = function() {
  sea.mesh.rotation.x += .01;
  sea.mesh.rotation.y += .02;
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

const init = function() {
  createScene();
  createSea();
  loop();
}

window.addEventListener('load', init);