requirejs.config({
    baseUrl: '../',
    paths: {
        static: 'static',
        views: 'views'
    },
    shim: {
        'jquery': {

        }
    }
    
});

require(['../static/javascripts/index_b.js'], function (b) {
    b();
	console.log(b);
});