'use strict';

angular.module('minecraftScaleCalculator', [])

	.factory('distanceToMeters', [function() {
		return function(unit, distance) {

			var m;

			switch(unit) {
				case "mm" :
					m = distance / 1000;
					break;
				case "cm" :
					m = distance / 100;
					break;
				case "m" :
					m = distance;
					break;
				case "inches":
					m = distance / 39.370;
					break;
				case "feet":
					m = distance / 3.2808;
					break;
				default:
					m = distance / 1000;
			}

			return m;
		}
	}])

	.factory('calculatePaperMagnification', [function() {
		return function(paperSize, planSize) {

			var paperMagnification = 1;

			var sizeOne = parseInt(paperSize);
			var sizeTwo = parseInt(planSize);

			if(sizeTwo > sizeOne) {
				var loopc = sizeTwo - sizeOne;
				for (var i=0;i<loopc;i++)
				{
					paperMagnification = paperMagnification / Math.sqrt(2);
				}

			} else {
				var loopc = sizeOne - sizeTwo;
				for (var j=0;j<loopc;j++)
				{
					paperMagnification = paperMagnification * Math.sqrt(2);
				}
			}

			return (paperMagnification).toFixed(4);
		}
	}])


	.controller('TswMcSCalculator',['distanceToMeters', function(distanceToMeters) {
		var self = this;


		self.data = {
						distance: 1000,
						unit: 'mm',
						scale: 2
					};

		self.blocks = function () {
			var m = distanceToMeters(self.data.unit, self.data.distance);

			var roundedm = (Math.round(m * 2) / 2).toFixed(1);

			return (roundedm * self.data.scale).toFixed(0);
		}

	}])

	.controller('TswMcSAdvancedCalculator',['distanceToMeters', 'calculatePaperMagnification', function(distanceToMeters, calculatePaperMagnification) {
		var self = this;

		self.data = {
			distance: 26,
			paperSize: '3',
			planSize: '1',
			planScale: 200,
			paperMagnification: 1,
			unit: 'mm',
			scale: 2
		};

		self.blocks = function () {
			// Workout magnification of plans

			self.data.paperMagnification = calculatePaperMagnification(self.data.paperSize, self.data.planSize);

			var scaledDistance = (self.data.distance * self.data.paperMagnification) * self.data.planScale;

			var m = distanceToMeters(self.data.unit, scaledDistance);

			var roundedm = (Math.round(m * 2) / 2).toFixed(1);

			return (roundedm * self.data.scale).toFixed(0);
		}

	}]);