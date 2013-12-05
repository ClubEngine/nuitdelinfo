define(
	["Duck","jquery","three"],
	function (duck,$,THREE) {
		var scene = function () {
			// constructor
			var ducks = new array()
		}

		scene.prototype = {
			init: function () {
				ducks.push(new duck())

				this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				this.camera.position.z = 1000;
				this.scene = new THREE.Scene();
				this.renderer = new THREE.CanvasRenderer();
				this.renderer.setSize( window.innerWidth, window.innerHeight );

				document.body.appendChild( renderer.domElement );
					},

			animate: function () {
				requestanimationframe($.proxy(this.animate, this));
				console.log('animate');
				this.renderer.render( this.scene, this.camera );
				// method
			}
		}

		return scene;
	}
);
