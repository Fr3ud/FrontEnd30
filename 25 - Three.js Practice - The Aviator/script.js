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
  camera.position.set(0, 100, 200);

  /**RENDERER */
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(WIDTH, HEIGHT);
  container = document.getElementById('world');
  container.appendChild(renderer.domElement);
}

const init = function() {
  createScene();
}

window.addEventListener('load', init);