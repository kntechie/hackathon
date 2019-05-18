require.config({
    paths: {
        'angular':'res/js/angular.min',
        'app':'app/app',
        'appModule':'app/appModule',
        'angularRoute':'res/js/angular-route'
    },
    shim:{
        'app': {
            deps: ['angular','appModule']
        },
        'appModule': {
            deps: ['angular','angularRoute']
        },
        'angularRoute': {
            deps: ['angular']
        }
    }
});

require(['app'], function() {
    console.log("hai");
    angular.bootstrap(document, ['app']);
});
