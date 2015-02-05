module.exports = function(config) {
    return {
        dev: {
            options: {
                port: 5601,
                hostname: '*',
                base: config.srcDir,
                keepalive: true,
                middleware: function(connect, options, middlewares) {
                    // inject a custom middleware 
                    middlewares.unshift(function(req, res, next) {
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.setHeader('Access-Control-Allow-Methods', '*');
                        //a console.log('foo') here is helpful to see if it runs
                        return next();
                    });

                    return middlewares;
                }

            }
        },
        dist: {
            options: {
                port: 5605,
                hostname: '*',
                base: config.destDir,
                keepalive: true
            }
        },
    }
};
