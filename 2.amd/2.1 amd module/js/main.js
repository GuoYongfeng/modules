require.config({
    baseUrl: "../../../",
    paths: {
        js : "js",
    }
});
require([
    '../../zepto.js',
    // 'js/a',
    // 'js/b',
    
], function ($) {
	console.log($);
});
