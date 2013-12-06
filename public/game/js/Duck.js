define(
    ['three'],
    function (THREE) {
	var loader = new THREE.JSONLoader();

	var Duck = function () {
	    console.log(this);
	    THREE.Mesh.apply(this, arguments);

	    this.position = new THREE.Vector3((Math.random()-.5)*20, -6, 0);
	    this.speed = new THREE.Vector3((Math.random()-.5)*.2, .15, 0);
	};

	Duck.prototype = Object.create(THREE.Mesh.prototype);
	Duck.prototype.constructor = Duck;

	Duck.prototype.step = function() {
	    this.speed.y-=1e-3;
	    this.position.x += this.speed.x;
	    this.position.y += this.speed.y;
	    this.position.z += this.speed.z;
	    this.rotation.x += .02;
	    this.rotation.y += .02;
	    this.rotation.z += .02;
	    // this.castShadow = true;
	    //this.receiveShadow = true;
	}

	return Duck;
    }
);
