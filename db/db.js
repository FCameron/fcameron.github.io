export default {
	bio: {
		about: {
			text: [
				"Hi",
				"I'm Cameron Giarrusso. I’m a graduate student studying Computer Science at Cornell University",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me feel free to send me an email at fcgiarrusso [at] gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Python",
			color: "1",
			percentage: "70",
		},
		{
			title: "Languages",
			skillName: "Java",
			color: "2",
			percentage: "50",
		},
		{
			title: "Machine Learning",
			skillName: "PyTorch, Tensorflow",
			color: "1",
			percentage: "60",
		},
		{
			title: "Languages",
			skillName: "Javascipt, C, C++",
			color: "3",
			percentage: "30",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Reactjs",
			color: "2",
			percentage: "50",
		},
		{
			title: "Libraries",
			skillName: "Numpy, Pandas",
			color: "1",
			percentage: "70",
		},
		{
			title: "Languages",
			skillName: "SQL",
			color: "3",
			percentage: "40",
		},
	],
	projects: {
		academic: [
			{
				projectName: "CT-Contrast Kidney Segmentation",
				image: "images/kidney.png",
				summary:
					"Developed a 3D image processing pipeline for kidney segmentation from computed tomography (CT) images.",
				preview: "https://docs.google.com/document/d/12a7cKaOxiNGEic-U8xVOwXeb9C1XIz59odrq5Bkurvs/edit?usp=sharing",
				techStack: [
					"Python",
					"Numpy",
					"OpenCV",
					"SciPy",
					"SKImage",
					"MatPLotLib",
				],
			},
			{
				projectName: "Skull CT Neural Net",
				image: "images/skull-ct.png",
				summary:
					"Developed a CNN to predict the phase shift of ultrasound passing through skull.",
				preview: "https://github.com/FCameron/neuralNetProject2018",
				techStack: [
					"Tensorflow",
					"Python",
					"Numpy",
				],
			},
			{
				projectName: "MRI Generator",
				image: "images/gan.png",
				summary:
					"Researched using StyleGAN2 to generate brain MRI data for potential future network training.",
				preview: "https://drive.google.com/file/d/1lDyhS3Ml2q9B-zO7wv-tOs90WBy7YJQg/view?usp=sharing",
				techStack: ["Python", "StyleGAN2"],
			},
		],
		software: [
			{
				projectName: "Terminal Chess",
				image: "images/chess.png",
				summary:
					"Chess App playable in ther terminal window using Ocaml.",
				preview:
					"https://github.coecis.cornell.edu/cel243/3110_FINAL_PROJECT",
				techStack: ["Ocaml"],
			},
			{
				projectName: "Procedural World Generator",
				image: "images/world-gen.png",
				summary:
					"Procedural world generation along with basic movement controls and ray tracing.",
				preview: "https://github.coecis.cornell.edu/aky26/CS4621-final-project",
				techStack: ["OpenGL", "HTML", "JavaScript", "anigraph"],
			},
		],
		web: [
			{
				projectName: "Financial Scraper",
				image: "images/web-scraper.png",
				summary:
					"Developed a Financial Web Scraper to pull information on NYSE listed stocks.",
				preview: "https://github.com/FCameron/url_scraper",
				techStack: ["Selenium", "Python"],
			},
		],
	},
	experience: [
		{
			title: "CS 4670: Computer Vision",
			duration: "January 2022 - May 2022",
			subtitle: "Teaching Assistant",
			details: [
				"Worked as a teaching assistant developing projects, proctoring exams, grading assignments, and holding office hours",
				"Develop a coding project to teach core concepts in convolutional neural network design, image augmentation, and adversarial image generation",
			],
			tags: ["Python", "OpenCV", "PyTorch", "PIL", "NumPy", "SciPy"],
			icon: "group",
		},
		{
			title: "Stanford IT",
			duration: "June 2018 - August 2018",
			subtitle: "SDE Intern",
			details: [
				"Worked as a full stack developer",
				"Developed a Website from scratch for PhD candidate nominations",
			],
			tags: ["JavaScript", "Angular", "Reactjs"],
			icon: "qrcode",
		},
		{
			title: "Stanford Radiologcal Sciences Laboratory",
			duration: "August 2017 - May 2018",
			subtitle: "Research Assistant",
			details: [
				"Worked on a Convolutional Neural Network using Tensorflow",
				"The network was designed to take in sets of splines from Skull CT images and predict the propagation of ultrasound through the skull",
			],
			tags: ["Python", "Tensorflow", "DICOM"],
			icon: "qrcode",
		},
	],
	education: [
		{
			title: "Master of Engineering in Computer Science",
			duration: "2022-2023",
			subtitle: "Cornell University",
			details: [
			],
			tags: [
				"Deep Learning",
				"Natural Language Processing",
				"Biomedical Image Analysis",
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelors of Science in Computer Science",
			duration: "2018-2022",
			subtitle: "Cornell University",
			details: [
			],
			tags: [
				"Object Oriented Programming",
				"Data Structures & Algorithms",
				"Computer Vision",
				"Machine Learning",
			],
			icon: "graduation-cap",
		}		
	],
	footer: [
		{
			label: "Dev Profiles",
			data: [
				{
					text: "GitHub",
					link: "https://github.com/fcameron",
				},
				{
					text: "LeetCode",
					link: "https://leetcode.com/fcgiarrusso/",
				},
			],
		},
		{
			label: "Resources",
			data: [
				{
					text: "Enable Dark/Light Mode",
					func: "enableDarkMode()",
				},
				{
					text: "Print this page",
					func: "window.print()",
				},
			],
		},
		{
			label: "Social Profile",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/cameron-giarrusso-76a2b1160/",
				},
			],
		},
	],
};
