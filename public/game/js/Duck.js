define(
	['three'],
	function (THREE) {
		var loader = new THREE.JSONLoader();

		var Duck = function () {
			console.log(this);
			THREE.Mesh.apply(this, arguments);

			this.position = new THREE.Vector3(0, 0, 0);
			this.speed = new THREE.Vector3(0, 0, 0);
		};

		Duck.prototype = Object.create(THREE.Mesh.prototype);
		Duck.prototype.constructor = Duck;

		Duck.prototype.step = function() {
			this.speed.y-=0.01;
			this.position.x += this.speed.x;
			this.position.y += this.speed.y;
			this.position.z += this.speed.z;
		}

		return Duck;
	}
);
