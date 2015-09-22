angular.module('app').controller("MainController",
    ['MainFactory', function (MainFactory) {
        var vm = this;
        vm.myInterval = 0;
        vm.noWrapSlides = false;
        vm.aboutMeSlides = MainFactory.getAboutMeSlides();
        vm.accounts = MainFactory.getAccounts();
        vm.workExperiences = MainFactory.getWorkExperiences();
        vm.skills = MainFactory.getSkills();
        vm.otherSkills = MainFactory.getOtherSkills();
        vm.socialAccountsCaption = MainFactory.getSocialAccountsCaption();
        vm.education = MainFactory.getEducation();

        $(document).ready(function () {
            if ($("#skillsCanvas").length > 0) {
                var ctx = $("#skillsCanvas").get(0).getContext("2d");
                var chart = new Chart(ctx).HorizontalBar(vm.skills, {
                    responsive: true,
                    barShowStroke: false,
                    scaleOverride: true,
                    scaleSteps: 10,
                    scaleStepWidth: 1,
                    scaleStartValue: 0,
                    scaleFontColor: "black",
                    scaleFontSize: 14,
                });
            }

            $("#rightsReservedYear").text(new Date().getFullYear());

            $(".zoom-images").zoomScroller({
                initZoom: 1.15,                          // This option let you define the initial scale of the image before it starts animating. 1 is normal size. Increase/decrease this value by decimal points to get the zoom you want. (2 is equivalent to 200% width x height). The default value is 1.15.
                zoom: 1,                                 // This is the option that determine whether to zoom in or out when animating. If you want to zoom in, make sure this value is more than initZoom. If not, then this value must be lower than initZoom. The default value is 1.
                animationTime: 2000,                     // You an define how long the animation will take place here. The option accept milliseconds. The default value is 2000.
                easing: "ease",                          // This option accept CSS easing options. This allows you to control the easing of the zoom. The default value is "ease".
                onZoom: function (el, zoomType) { },       // This is the callback that will let you execute any function during the animation. The default value is null.
                beforeZoom: function (el, zoomType) { },   // This is the callback that will let you execute any function before the animation. The default value is null.
                afterZoom: function (el, zoomType) { },    // This is the callback that will let you execute any function after the animation. The default value is null.
                offsetTop: 0,                            // This allows you to define the top offset before the animation is initiated. The default value 0 so the animation will initiate right when 1 pixel of the element appears from the top of the viewport.
                offsetBottom: 200,                       // This allows you to define the bottom offset before the animation is initiated. The default value 200 so the animation will initiate only when at least 200 pixels of the element are visible from the bottom of the viewport.
            });
        });
}]);