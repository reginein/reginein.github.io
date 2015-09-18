angular.module('app').controller("MainController",
    [ 'MainFactory', function (MainFactory) {
        var vm = this;
        vm.myInterval = 0;
        vm.noWrapSlides = false;
        vm.aboutMeSlides = MainFactory.getAboutMeSlides();
        vm.accounts = MainFactory.getAccounts();
        vm.workExperiences = MainFactory.getWorkExperiences();
        vm.skills = MainFactory.getSkills();

        var ctx = document.getElementById("canvas").getContext("2d");
        var chart = new Chart(ctx).HorizontalBar(vm.skills, {
            responsive: true,
            barShowStroke: false
        });
}]);