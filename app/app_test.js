describe('minecraftScaleCalculator', function() {

	beforeEach(module('minecraftScaleCalculator'));

	var $controller;

	beforeEach(inject(function(_$controller_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));

	describe('tswMcSCalculator', function(){

		beforeEach(function() {
			controller = $controller('TswMcSCalculator');
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
			expect(controller.blocks()).toEqual('51');
		});

		it('calculates default values in mm with a scale of 8 to correct number of blocks', function($controller) {
			controller.data.scale = "8";
			expect(controller.blocks()).toEqual('8');
		});

		it('calculates default values in inches with a scale of 8 to correct number of blocks', function($controller) {
			controller.data.scale = "8";
			controller.data.unit = "inches";
			expect(controller.blocks()).toEqual('204');
		});

	});

	describe('TswMcSAdvancedCalculator', function(){

		beforeEach(function() {
			controller = $controller('TswMcSAdvancedCalculator');
		});

		it('should be defined', inject(function($controller) {
			//spec body
			expect(controller).toBeDefined();
		}));

		it('has default values for distance, unit, paperSize, planSize, planScale & scale', function($controller) {
			expect(controller.data.distance).toEqual(26);
			expect(controller.data.paperSize).toEqual('3');
			expect(controller.data.planSize).toEqual('1');
			expect(controller.data.planScale).toEqual(200);
			expect(controller.data.unit).toEqual('mm');
			expect(controller.data.scale).toEqual(2);
		});

		it('calculates default value to correct number of blocks', function($controller) {
			expect(controller.blocks()).toEqual('21');
		});

		it('calculates default values in cm to correct number of blocks', function($controller) {
			controller.data.unit = "cm";
			expect(controller.blocks()).toEqual('208');
		});

		it('calculates default values in m to correct number of blocks', function($controller) {
			controller.data.unit = "m";
			expect(controller.blocks()).toEqual('20800');
		});

		it('calculates default values in feet to correct number of blocks', function($controller) {
			controller.data.unit = "feet";
			expect(controller.blocks()).toEqual('6340');
		});

		it('calculates default values in inches to correct number of blocks', function($controller) {
			controller.data.unit = "inches";
			expect(controller.blocks()).toEqual('528');
		});

		it('calculates default values in mm with a scale of 8 to correct number of blocks', function($controller) {
			controller.data.scale = "8";
			expect(controller.blocks()).toEqual('84');
		});

		it('calculates default values in inches with a scale of 8 to correct number of blocks', function($controller) {
			controller.data.scale = "8";
			controller.data.unit = "inches";
			expect(controller.blocks()).toEqual('2112');
		});

		it('calculates paper scale correctly A3 to A1', function($controller) {
			controller.data.paperSize = "3";
			controller.data.planSize = "1";
			controller.blocks();
			expect(controller.data.paperMagnification).toEqual('2.0000');
		});

		it('calculates paper scale correctly A0 to A3', function($controller) {
			controller.data.paperSize = "0";
			controller.data.planSize = "3";
			controller.blocks();
			expect(controller.data.paperMagnification).toEqual('0.3536');
		});

		it('calculates paper scale correctly A4 to A4', function($controller) {
			controller.data.paperSize = "4";
			controller.data.planSize = "4";
			controller.blocks();
			expect(controller.data.paperMagnification).toEqual('1.0000');
		});

		it('calculates paper scale correctly A2 to A3', function($controller) {
			controller.data.paperSize = "2";
			controller.data.planSize = "3";
			controller.blocks();
			expect(controller.data.paperMagnification).toEqual('0.7071');
		});

	});
});