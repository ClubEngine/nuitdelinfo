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
    scene.add(camera);
    camera.position.z += 10;
    setInterval(function() { scene.addDuck('cube'); }, 500);

    window.onmousedown = function(event) {
	event.preventDefault();

	var mouse = new THREE.Vector2();
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	var vector = new THREE.Vector3( mouse.x, mouse.y, 0.5 );

	var raycaster = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = raycaster.intersectObjects( scene.children );
	alert(1);
    }

    function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
	scene.animate();
    }

    setTimeout(function () {
	animate();
    }, 1000);
});
