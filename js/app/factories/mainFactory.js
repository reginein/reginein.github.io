angular.module('app').factory('MainFactory',
    [function () {
        var aboutMeSlides = [
            {
                image: "images/aboutme-1.jpg",
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
                    "Developed a computer software for the company’s Pre-Employment Assessment Test, " +
                        "utilizing C# .NET programming language for frontend and Microsoft SQL Server for backend."
                    ]
            },
            {
                jobTitle: "Software Developer",
                company: "Seansoft Corporation",
                location: "Ortigas Center, Pasig City, Philippines",
                duration: "April 1, 2015 - October 15, 2015",
                accomplishments: [
                    "Helped in the development of Scrum Online, a project management tool specially " +
                        "designed for scrum projects utilizing Node.js, Backbone, Faye, Express and MongoDB",
                    "Helped in the maintenance of custom SharePoint projects to enhance user satisfaction"

                ]
            }
        ];
        var randomScalingFactor = function () {
            return Math.round(Math.random() * 100);
        };
        var skills = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
	  			{
	  			    fillColor: "rgba(220,220,220,0.5)",
	  			    strokeColor: "rgba(220,220,220,0.8)",
	  			    highlightFill: "rgba(220,220,220,0.75)",
	  			    highlightStroke: "rgba(220,220,220,1)",
	  			    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
	  			}
            ]
        };
        return {
            getAboutMeSlides: function () {
                return aboutMeSlides;
            },
            getWorkExperiences: function () {
                return workExperiences;
            },
            getSkills: function(){
            return skills;
            }
        }
    }]);