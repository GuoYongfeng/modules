define("static/javascripts/index_a.js",[],function(){function e(){alert("module a")}return e}),define("static/javascripts/index_b.js",["./index_a.js"],function(e){function t(){e(),alert("module B")}return t}),requirejs.config({baseUrl:"./",paths:{"static":"static",views:"views"},shim:{jquery:{}}}),require(["static/javascripts/index_b.js"],function(e){e(),console.log(e)}),define("main",function(){});