describe('minecraftScaleCalculator', function() {

	beforeEach(module('minecraftScaleCalculator'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	describe('tswMcSCalculator', function(){

		beforeEach(function() {
			controller = $controller('tswMcSCalculator');
		});

		it('should be defined', inject(function($controller) {
			//spec body
			expect(controller).toBeDefined();
		}));

		it('has default values for distance, unit, scale', function($controller) {
			expect(controller.data.distance).toEqual(1000);
			expect(controller.data.unit).toEqual('mm');
			expect(controller.data.scale).toEqual(2);
		});

		it('calculates default value to correct number of blocks', function($controller) {
			expect(controller.blocks()).toEqual('2');
		});

		it('calculates default values in cm to correct number of blocks', function($controller) {
			controller.data.unit = "cm";
			expect(controller.blocks()).toEqual('20');
		});

		it('calculates default values in m to correct number of blocks', function($controller) {
			controller.data.unit = "m";
			expect(controller.blocks()).toEqual('2000');
		});

		it('calculates default values in feet to correct number of blocks', function($controller) {
			controller.data.unit = "feet";
			expect(controller.blocks()).toEqual('610');
		});

		it('calculates default values in inches to correct number of blocks', function($controller) {
			controller.data.unit = "inches";
			expect(controller.blocks()).toEqual('50');
		});

		it('calculates default values in mm with a scale of 8 to correct number of blocks', function($controller) {
			controller.data.scale = "8";
			expect(controller.blocks()).toEqual('8');
		});

		it('calculates default values in inches with a scale of 8 to correct number of blocks', function($controller) {
			controller.data.scale = "8";
			controller.data.unit = "inches";
			expect(controller.blocks()).toEqual('200');
		});

	});
});