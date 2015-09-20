angular.module('app').controller("MainController",
    [ 'MainFactory', function (MainFactory) {
        var vm = this;
        vm.myInterval = 0;
        vm.noWrapSlides = false;
        vm.aboutMeSlides = MainFactory.getAboutMeSlides();
        vm.accounts = MainFactory.getAccounts();
        vm.workExperiences = MainFactory.getWorkExperiences();
        vm.skills = MainFactory.getSkills();
        vm.otherSkills = MainFactory.getOtherSkills();
        var ctx = document.getElementById("canvas").getContext("2d");
        var chart = new Chart(ctx).HorizontalBar(vm.skills, {
            responsive: true,
            barShowStroke: false,
            scaleOverride: true,
            scaleSteps: 10,
            scaleStepWidth: 1,
            scaleStartValue: 0,
            scaleFontColor: "black"
        });
        vm.socialAccountsCaption = MainFactory.getSocialAccountsCaption();
        vm.education = MainFactory.getEducation();
}]);