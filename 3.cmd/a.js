define(function(require, exports, module) {

	// 依赖可以就近书写
	var a = require('./a')
	a.doSomething();

	// 此处略去 100 行
	var b = require('./b') 
	b.doSomething();

	// ... 
	
	
})