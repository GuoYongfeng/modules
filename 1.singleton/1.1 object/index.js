/**
 * object index
 * @type {Object}
 */
var index = {
	/**
	 * 缓存DOM对象
	 * @type {Object}
	 */
	dom: {
		btn: $('.btn')
	},

	/**
	 * 基本数据
	 * @type {Object}
	 */
	data: {
		txt: '干的漂亮'
	},

	/**
	 * @return {[type]}
	 */
	bindEvent: function(){
		var _this = this;

		this.dom.btn.on('click', function( e ){
			alert(_this.data.txt);
		});
	},

	/**
	 * @return {[type]}
	 */
	init: function(){
		this.bindEvent();
	}
};

index.init();