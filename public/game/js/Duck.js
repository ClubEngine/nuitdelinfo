define(
	[],
	function () {
		var duck = function () {
			// constructor
			this.x=0;
			this.y=0;
			this.z=0;
			this.speedx=1;
			this.speedy=1;
			this.speedz=1;
			this.mesh
		}

		duck.prototype = {
			step: function() {
				// speed integration
				this.x+=this.speedx;
				this.y+=this.speedy;
				this.z+=this.speedz;
			}
		}

		return duck;
	}
);
