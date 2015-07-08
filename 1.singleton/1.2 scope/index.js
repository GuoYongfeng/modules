var Person = (function(){

	/**
	 * 构造函数
	 * @param {[type]}
	 */
	function Person(opt){
		this.name = opt.name;
		this.sex = opt.sex;
	}

	/**
	 * 原型
	 * @type {Object}
	 */
	Person.prototype = {
		say: function(txt){
			alert(txt);
		},

		eat: function(){

		},

		run: function(){

		}
	};

	return Person;

})();