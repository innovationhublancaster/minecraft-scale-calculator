'use strict';

angular.module('minecraftScaleCalculator.version', [
  'minecraftScaleCalculator.version.interpolate-filter',
  'minecraftScaleCalculator.version.version-directive'
])

.value('version', '0.1');
