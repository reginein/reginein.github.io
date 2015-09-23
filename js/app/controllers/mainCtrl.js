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
                    //scaleFontSize: 14,
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

            $(".main").onepage_scroll({
                sectionContainer: ".content-section",     // sectionContainer accepts any kind of selector in case you don't want to use section
                easing: "linear",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
                animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
                pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
                updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
                beforeMove: function (index) { },  // This option accepts a callback function. The function will be called before the page moves.
                afterMove: function (index) { },   // This option accepts a callback function. The function will be called after the page moves.
                loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
                keyboard: true,                  // You can activate the keyboard controls
                responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                // the browser's width is less than 600, the fallback will kick in.
                direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
            });
        });
}]);