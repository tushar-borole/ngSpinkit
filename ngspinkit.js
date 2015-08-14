(function () {
    'use strict';

    angular
        .module('ngSpinkit',[])
        .directive('loaderSpin', loaderSpin);

    loaderSpin.$inject = ['$rootScope','$compile'];

    /* @ngInject */
    function loaderSpin($rootScope,$compile) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
            $(element).addClass("overlay")
            
            var html='<div ng-show='+attrs.loaderScope+' class="loader"><div  class="'+attrs.loaderName+' spin-loader"></div></div>'
            var compileHtml=  $compile(html)(scope);
            
            $(element).append(compileHtml)

        }
    }

})();
