angular.module('app').controller("MainController",
    [ 'MainFactory', function (MainFactory) {
        var vm = this;
        vm.myInterval = 5000;
        vm.noWrapSlides = false;
        vm.aboutMeSlides = MainFactory.getAboutMeSlides();
}]);