define(
    ["Duck","jquery","three"],
    function (Duck,$,THREE) {
	var Scene = function () {
	    THREE.Scene.apply(this, arguments);
	    this.loader = new THREE.JSONLoader();
	}

	Scene.prototype = Object.create(THREE.Scene.prototype);
	Scene.prototype.constructor = Scene;

	Scene.prototype.addDuck = function (duckName) {
	    var self = this;
	    this.loader.load('./assets/jsobj/' + duckName + '.js', function (geometry, materials) {
		material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
		var duck = new Duck(geometry, material);
		//duck.material.ambient = duck.material.color;
		self.add(duck);
	    });
	}


	Scene.prototype.animate = function () {
	    var nb = this.children.length;
	    for(var i = 1; i < nb; i++) {
		this.children[i].step();
	    }
	}

	return Scene;
    }
);
