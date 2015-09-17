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

        var workExperiences = [
            {
                jobTitle: "Intern",
                company: "Greystone Data Systems, Inc.",
                location: "Makati City, Philippines",
                duration: "March 2014 - May 2014",
                accomplishments: [
                    "Developed a "
                    ]
            },
            {
                jobTitle: "Software Developer",
                company: "Seansoft Corporation",
                location: "Ortigas Center, Pasig City, Philippines",
                duration: "April 1, 2015 - October 15, 2015",
                accomplishments: [
                    "Developed a "
                ]
            }
        ];
        return {
            getAboutMeSlides: function () {
                return aboutMeSlides;
            },
            getWorkExperiences: function () {
                return workExperiences;
            }
        }
    }]);