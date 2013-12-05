define(
	[],
	function () {
		var Scene = function () {
			// constructor
		}

		Scene.prototype = {
			init: function () {

			},

			animate: function () {
				requestAnimationFrame($.proxy(this.animate, this));
				console.log('animate');
				// method
			}
		}

		return Scene;
	}
);