define('moduleA', ['./a', './b'], function(a, b) { 
	// 依赖必须一开始就写好
	
	a.doSomething();

	b.doSomething();

	// ...
}) 