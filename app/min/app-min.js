"use strict";angular.module("minecraftScaleCalculator",[]).controller("TswMcSCalculator",[function(){var a=this;a.data={distance:1e3,unit:"mm",scale:2},a.blocks=function(){var e;switch(a.data.unit){case"mm":e=a.data.distance/1e3;break;case"cm":e=a.data.distance/100;break;case"m":e=a.data.distance;break;case"inches":e=a.data.distance/39.37;break;case"feet":e=a.data.distance/3.2808;break;default:e=a.data.distance/1e3}var t=(Math.round(2*e)/2).toFixed(1);return(t*a.data.scale).toFixed(0)}}]).controller("TswMcSAdvancedCalculator",[function(){var a=this;a.data={distance:26,paperSize:"3",planSize:"1",planScale:200,paperMagnification:1,unit:"mm",scale:2},a.blocks=function(){var e=1,t=parseInt(a.data.paperSize),c=parseInt(a.data.planSize);if(c>t)for(var r=c-t,i=0;r>i;i++)e/=Math.sqrt(2);else for(var r=t-c,n=0;r>n;n++)e*=Math.sqrt(2);a.data.paperMagnification=e.toFixed(4);var s=a.data.distance*a.data.paperMagnification*a.data.planScale,d;switch(a.data.unit){case"mm":d=s/1e3;break;case"cm":d=s/100;break;case"m":d=s;break;case"inches":d=s/39.37;break;case"feet":d=s/3.2808;break;default:d=s/1e3}var l=(Math.round(2*d)/2).toFixed(1);return(l*a.data.scale).toFixed(0)}}]);