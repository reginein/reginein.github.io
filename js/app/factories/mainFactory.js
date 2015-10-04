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

        var socialAccountsCaption = {
            email: "Send me an email",
            github: "View my GitHub repositories.",
            linkedin: "Visit my LinkedIn profile.",
            gplus: "",
            facebook: "Add me on Facebook.",
            twitter: "Follow me on Twitter.",
            instagram: "Check out my Instagram photos."
        }

        var workExperiences = [
            {
                jobTitle: "Software Developer",
                company: "Seansoft Corporation",
                location: "Ortigas Center, Pasig City, Philippines",
                duration: "April 1, 2015 - October 15, 2015",
                achievements: [
                    "Helped in the development of Scrum Online, a project management tool specially " +
                        "designed for scrum projects utilizing Node.js, Backbone, Faye messaging and MongoDB",
                    "Helped in the maintenance of custom SharePoint projects to enhance user satisfaction"

                ]
            },
            {
                jobTitle: "Intern",
                company: "Greystone Data Systems, Inc.",
                location: "Makati City, Philippines",
                duration: "March 2014 - May 2014",
                achievements: [
                    "Developed a computer software to automate the company’s Pre-Employment Assessment Test, " +
                        "utilizing C# .NET and Microsoft SQL Server"
                ]
            }
        ];

        //var skills = {
        //    labels: ["Git", "C#", "CSS", "SQL (MySQL)", "NoSQL (MongoDB)",
        //            "HTML", "JQuery", "Back-end Development", "JavaScript"],
        //    datasets: [
	  	//		{
	  	//		    fillColor: "rgba(209,35,197,0.5)",
	  	//		    //strokeColor: "rgba(220,220,220,0.8)",
	  	//		    //highlightFill: "rgba(220,220,220,0.75)",
	  	//		    //highlightStroke: "rgba(220,220,220,1)",
	  	//		    data: [9, 7, 7, 9, 8,
	  	//		            9, 8, 8, 8]
	  	//		}
        //    ]
        //};

        var skills = [
            {
                name: "jQuery",
                score: 95,
                color: "#3063A5"
            },
            {
                name: "HTML",
                score: 95,
                color: "#FF6600"
            },
            {
                name: "NoSQL (MongoDB)",
                score: 95,
                color: "#339966"
            },
            {
                name: "SQL (MySQL)",
                score: 95,
                color: "#00ccff"
            },
            {
                name: "Javascript",
                score: 90,
                color: "#fefa17"
            },
            {
                name: "C#",
                score: 80,
                color: "#4973AB"
            },
            {
                name: "CSS",
                score: 75,
                color: "#1D7CF2"
            },
            {
                name: "Git",
                score: 95,
                color: "#ee4000"
            }
        ];

        var otherSkills = [
            {
                name: "PHP",
                image: "images/logos/php.svg"
            },
            {
                name: "Laravel",
                image: "images/logos/laravel.svg"
            },
            {
                name: "Node.js",
                image: "images/logos/nodejs-icon.svg"
            },
            {
                name: "Bootstrap",
                image: "images/logos/bootstrap.svg"
            },
            {
                name: "AngularJS",
                image: "images/logos/angularjs-icon.svg"
            },
            {
                name: "BackboneJS",
                image: "images/logos/backbonejs-icon.svg"
            },
            {
                name: "Java",
                image: "images/logos/java.svg"
            },
            {
                name: "npm",
                image: "images/logos/npm.svg"
            },
            {
                name: "Bower",
                image: "images/logos/bower.svg"
            }
        ];

        var education = [
            {
                course: "Bachelor of Science in Computer Science",
                school: "Polytechnic University of the Philippines - Sta. Mesa, Manila",
                duration: "June 2011- April 2015",
                schoolLogo: "images/PUPLogo.png",
                imgAlt: "PUP logo"
            }
        ];

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
            },
            getSocialAccountsCaption: function () {
                return socialAccountsCaption;
            },
            getOtherSkills: function () {
                return otherSkills;
            },
            getEducation: function () {
                return education;
            }
        }
    }]);