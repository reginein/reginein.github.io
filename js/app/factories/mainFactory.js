angular.module('app').factory('MainFactory',
    [function () {
        var aboutMeSlides = [
            {
                image: "images/aboutme-1.png",
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

        var accounts = {
            email: "mailto:reginegracein@gmail.com",
            github: "https://github.com/reginein",
            linkedin: "https://ph.linkedin.com/in/reginein",
            gplus: "https://plus.google.com/u/0/+RegineGraceIn/posts",
            facebook: "https://www.facebook.com/regineIN",
            twitter: "https://twitter.com/regineinnnn",
            instagram: "https://instagram.com/amiinorout/"
        };

        var workExperiences = [
            {
                jobTitle: "Intern",
                company: "Greystone Data Systems, Inc.",
                location: "Makati City, Philippines",
                duration: "March 2014 - May 2014",
                achievements: [
                    "Developed a computer software for the company’s Pre-Employment Assessment Test, " +
                        "utilizing C# .NET programming language for frontend and Microsoft SQL Server for backend." +
                        "Developed a computer software for the company’s Pre-Employment Assessment Test, " +
                        "utilizing C# .NET programming language for frontend and Microsoft SQL Server for backend."
                    ]
            },
            {
                jobTitle: "Software Developer and Systems Support Specialist",
                company: "Seansoft Corporation",
                location: "Ortigas Center, Pasig City, Philippines",
                duration: "April 1, 2015 - October 15, 2015",
                achievements: [
                    "Helped in the development of Scrum Online, a project management tool specially " +
                        "designed for scrum projects utilizing Node.js, Backbone, Faye, Express and MongoDB",
                    "Helped in the maintenance of custom SharePoint projects to enhance user satisfaction"

                ]
            }
        ];

        var skills = {
            //labels: ["JavaScript", "Back-end Development", "JQuery", "HTML", "NoSQL (MongoDB)",
            //        "SQL (MySQL)", "CSS", "C#", "Git"],
            labels: ["Git", "C#", "CSS", "SQL (MySQL)", "NoSQL (MongoDB)",
                    "HTML", "JQuery", "Back-end Development", "JavaScript"],
            datasets: [
	  			{
	  			    fillColor: "rgba(209,35,197,0.5)",
	  			    //strokeColor: "rgba(220,220,220,0.8)",
	  			    //highlightFill: "rgba(220,220,220,0.75)",
	  			    //highlightStroke: "rgba(220,220,220,1)",
	  			    //data: [8, 8, 8, 9, 8,
	  			    //        9, 7, 7, 9]
	  			    data: [9, 7, 7, 9, 8,
	  			            9, 8, 8, 8]
	  			}
            ]
        };
        return {
            getAboutMeSlides: function () {
                return aboutMeSlides;
            },
            getAccounts: function () {
                return accounts;
            },
            getWorkExperiences: function () {
                return workExperiences;
            },
            getSkills: function(){
            return skills;
            }
        }
    }]);