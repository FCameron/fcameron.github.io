export default {
	bio: {
		about: {
			text: [
				"Hi",
				"I'm Cameron Giarrusso. I’m an undergrad studying CS at Cornell University",
			],
		},
		contact: {
			text: [
				"If you would like to get in touch with me feel free to send me an email at fcgiarrusso@gmail.com",
			],
		},
	},
	skills: [
		{
			title: "Languages",
			skillName: "Java, Python",
			color: "1",
			percentage: "70",
		},
		{
			title: "Version Control",
			skillName: "GitHub",
			color: "1",
			percentage: "70",
		},
		{
			title: "Machine Learning",
			skillName: "PyTorch, Tensorflow",
			color: "1",
			percentage: "70",
		},
		{
			title: "Languages",
			skillName: "Javascipt, C++",
			color: "1",
			percentage: "60",
		},
		{
			title: "Frameworks/Libraries",
			skillName: "Angular, Reactjs",
			color: "1",
			percentage: "50",
		},
		{
			title: "Design",
			skillName: "HTML, Bootstrap, SCSS",
			color: "1",
			percentage: "40",
		},
		{
			title: "Editor",
			skillName: "VS Code",
			color: "1",
			percentage: "40",
		},
	],
	projects: {
		academic: [
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
				"Worked as a teaching assistant.",
				"Developed projects, proctored exams, graded assignments, and held office hours.",
			],
			tags: ["Python", "OpenCV", "PyTorch", "PIL"],
			icon: "group",
		},
		{
			title: "Stanford IT",
			duration: "June 2018 - August 2018",
			subtitle: "SDE Intern",
			details: [
				"Worked as a full stack developer.",
				"Developed a Website from scratch for PhD candidate nominations.",
			],
			tags: ["JavaScript", "Angular", "Reactjs"],
			icon: "qrcode",
		},
	],
	education: [
		{
			title: "Masters in Computer Science and Engineering",
			duration: "2022-2023",
			subtitle: "Cornell University",
			details: [
			],
			tags: [
				"Reinforcement Learning",
				"Biomedical Images Analysis",
				"Cryptography",
				"Computer Networks",
			],
			icon: "graduation-cap",
		},
		{
			title: "Bachelors in Computer Science and Engineering",
			duration: "2018-2022",
			subtitle: "Cornell University",
			details: [
			],
			tags: [
				"Data Structures & Algorithms",
				"Operating Systems",
				"Computer Vision",
				"Computer Graphics",
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
				{
					text: "Clone this page",
					link: "https://github.com/fcameron/fcameron.github.io",
				},
			],
		},
		{
			label: "Social Profiles",
			data: [
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/cameron-giarrusso-76a2b1160/",
				},
			],
		},
	],
};
