angular.module('app').controller("MainController",
    [ 'MainFactory', function (MainFactory) {
        var vm = this;
        vm.myInterval = 5000;
        vm.noWrapSlides = false;
        vm.aboutMeSlides = MainFactory.getAboutMeSlides();
        var workExperiences = MainFactory.getWorkExperiences();
        var skills = MainFactory.getSkills();

        var ctx = document.getElementById("canvas").getContext("2d");
        var chart = new Chart(ctx).HorizontalBar(skills, {
            responsive: true,
            barShowStroke: false
        });

        $("#myCarousel").swiperight(function() {  
            $("#myCarousel").carousel('prev');  
        });  
        $("#myCarousel").swipeleft(function() {  
            $("#myCarousel").carousel('next');  
        });  
}]);