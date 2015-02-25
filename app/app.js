'use strict';

angular.module('minecraftScaleCalculator', [])


	.controller('TswMcSCalculator',[function() {
		var self = this;

		self.data = {
						distance: 1000,
						unit: 'mm',
						scale: 2
					};

		self.blocks = function () {
			var m;

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

			var roundedm = (Math.round(m * 2) / 2).toFixed(1);

			return (roundedm * self.data.scale).toFixed(0);
		}

	}])

	.controller('TswMcSAdvancedCalculator',[function() {
		var self = this;

		self.data = {
			distance: 26,
			paperSize: '3',
			planSize: '1',
			planScale: 200,
			unit: 'mm',
			scale: 2
		};

		self.blocks = function () {
			// Workout magnifcation of plans
			var paperMagnification = 1;

			var sizeOne = self.data.paperSize;
			var sizeTwo = self.data.planSize;

			if(sizeTwo > sizeOne) {
				console.log('paper bigger than plans');
				var loopc = sizeTwo - sizeOne;
				for (var i=0;i<loopc;i++)
				{
					paperMagnification = paperMagnification / Math.sqrt(2);
				}

			} else {
				var loopc = sizeOne - sizeTwo;
				console.log('paper is smaller or same as plans');
				for (var j=0;j<loopc;j++)
				{
					paperMagnification = paperMagnification * Math.sqrt(2);
				}
			}

			paperMagnification = (paperMagnification).toFixed(4);

			console.log(paperMagnification);

			var scaledDistance = (self.data.distance * paperMagnification) * self.data.planScale;

			var m;

			switch(self.data.unit) {
				case "mm" :
					m = scaledDistance / 1000;
					break;
				case "cm" :
					m = scaledDistance / 100;
					break;
				case "m" :
					m = scaledDistance;
					break;
				case "inches":
					m = scaledDistance / 39.370;
					break;
				case "feet":
					m = scaledDistance / 3.2808;
					break;
				default:
					m = scaledDistance / 1000;
			}


			var roundedm = (Math.round(m * 2) / 2).toFixed(1);

			return (roundedm * self.data.scale).toFixed(0);
		}

	}]);