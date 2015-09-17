angular.module('app').factory('MainFactory',
    [function () {
        var aboutMeSlides = [
            {
                image: "images/index-background.jpg",
                active: true,
                alt: "Regine In"
            },
            {
                image: "images/index-background1.jpg",
                active: false,
                alt: "Regine In"
            },
            {
                image: "images/index-background2.jpg",
                active: false,
                alt: "Regine In"
            },
            {
                image: "images/index-background4.jpg",
                active: false,
                alt: "Regine In"
            },
            {
                image: "images/index-background.jpg",
                active: false,
                alt: "Regine In"
            },
            {
                image: "images/index-background.jpg",
                active: false,
                alt: "Regine In"
            }
        ];
        return {
            getAboutMeSlides: function () {
                return aboutMeSlides;
            }
        }
    }]);