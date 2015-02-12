'use strict';

angular.module('minecraftScaleCalculator', [])
	
	.factory('MeterConversionFactory', ['tswDistance', function (tswDistance) {
		var self = this;

		self.convert = function(tswDistance) {
			switch(self.data.unit) {
				case "mm" :
					m = self.data.distance / 1000;
					break;
				case "cm" :
					m = self.data.distance / 100;
					break;
				case "m" :
					m = self.data.distance;
					break;
				case "inches":
					m = self.data.distance / 39.370;
					break;
				case "feet":
					m = self.data.distance / 3.2808;
					break;
				default:
					m = self.data.distance / 1000;
			}
		}

	}])

	.controller('tswMcSCalculator',['MeterConversionFactory', function(MeterConversionFactory) {
		var self = this;

		self.data = {
						distance: 1000,
						unit: 'mm',
						scale: 2
					};

		self.blocks = function () {
			var m = MeterConversionFactory.convert(self.data.distance);

			var roundedm = Math.round(m).toFixed(1);

			return (roundedm * self.data.scale).toFixed(0);
		}


	}]);