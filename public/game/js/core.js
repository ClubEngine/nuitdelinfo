require.config({
    baseUrl: 'js',
    paths: {
        jquery: '../libs/jquery-1.10.2.min',
        three: '../libs/three.min'
    }
});

define(['jquery', 'three', 'Scene'], function ($, THREE, Scene) {
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

	var renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var scene = new Scene();
	scene.addDuck('carousel');
	scene.addDuck('carousel');
	scene.add(camera);
	camera.position.z += 10;

	function animate() {
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
		scene.animate();
	}

	setTimeout(function () {
		animate();
	}, 1000);
});
