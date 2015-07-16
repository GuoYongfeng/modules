
({
    baseUrl: './',
    dir: "./build",
    optimize: "uglify",
    optimizeCss: "standard",
    cssImportIgnore: null,
    inlineText: true,
    useStrict: false,
    modules: [

        {
            name: "main"
        },
        {
            name: "views/main",
            override: {
                pragmas: {
                    fooExclude: true
                }
            }
        },
        {
            name: "views/list/main"
        }
    ]
})
