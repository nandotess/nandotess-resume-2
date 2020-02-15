// Me
const me = {};

// Name
[me.firstName, me.lastName, me.location] = ['Fernando', 'Tessmann', 'Toronto, Canada'];

// Title
me.title = `Senior Full Stack Developer | ${['UI', 'ES6', 'Angular', 'WordPress'].join(', ')}`;

// About
fetch('about.txt').then(data => me.about = data);

// Toolbox
me.toolbox = ['JavaScript', 'ES6', 'Angular', 'WordPress', 'PHP', 'Sass', 'CSS', 'HTML', 'Bootstrap', 'Foundation', 'jQuery', 'SQL', 'MySQL', 'SaaS', 'Gulp', 'LAMP', 'Agile Methodologies', 'Scrum', 'User Experience', 'Responsive Web Design', 'Web Development', 'Front-end Development', 'Full-Stack Development', 'Web Standards', 'SEO', 'Functional Programming', 'DevOps', 'Continuous Integration', 'Continuous Delivery'].sort();

// Experience
me.experience = [
	{
		company: 'The Pixel Shop',
		location: 'Toronto, Canada',
		roles: [
            {
                name: 'Lead Web Developer',
                period: 'Dec 2017 – Present (1 yr 9 mos)',
                descripion: `Frontend developer and team leader...`
            }
        ]
	},
	{
		company: 'LightSpeed Development',
		location: 'Cape Town, South Africa (remote)',
		roles: [
            {
                name: 'Senior Front-end and WordPress Developer',
                period: 'Jun 2016 – Dec 2017 (1 yr 7 mos)',
                descripion: 'Code WordPress themes and plugins...'
            }
        ]
	},
	{
		company: 'SantoPixel Design & Code',
		location: 'Porto Alegre, Brazil (remote)',
		roles: [
            {
                name: 'Co-founder and Lead Developer',
                period: 'Oct 2012 – Jun 2016 (3 yrs 9 mos)',
                descripion: 'Code WordPress themes and plugins...'
            }
        ]
	},
	{
		company: 'Convertiva Mobile Marketing',
		location: 'Porto Alegre, Brazil',
		roles: [
            {
                name: 'IT Manager',
                period: 'May 2012 – Jun 2013 (1 yr 2 mos)',
                descripion: 'Code CodeIgnter sites...'
            }
        ]
	},
	{
		company: 'Grupo RBS',
		location: 'Porto Alegre, Brazil',
		roles: [
            {
                name: 'Lead Developer',
                period: 'May 2010 – May 2012 (2 yrs 1 mo)',
                descripion: 'Technical lead, web analyst and front-end developer (JSTL, XSL, JavaScript/jQuery).'
            },
            {
                name: 'Senior Web Developer',
                period: 'Mar 2007 – May 2010 (3 yrs 3 mos)',
                descripion: 'Front-end developer (JSTL, XSL, JavaScript).'
            }
        ]
	},
	{
		name: 'Web Developer',
		company: 'SulSoftware',
		period: 'Aug 2006 – Feb 2007 (7 mos)',
		location: 'Novo Hamburgo, Brazil',
		descripion: 'UI designer, web standards developer (XHTML, CSS) and ASP programmer.'
	}
];

// Volunteer
me.volunteer = [
	{
		name: 'Pro Bono Developer',
		company: 'Catchafire',
		period: 'Jul 2019 – Present',
		descripion: `I volunteer together with Catchafire...`
	}
];

// Education
me.education = [
	{
		school: 'Colégio Marista Pio XII',
		course: 'College Diploma, Administration and Computer Science',
		period: '1999 – 2002'
	}
];

// Courses
me.courses = [
    'ES6, Certificate, Wes Bos (Online)',
    'JavaScript30, Online Tutorials, Wes Bos (Online)',
    'Agile Methodologies, Certificate, PUCRS (Brazil)',
    'Flash Developer, Certificate, Informatize (Brazil)',
    'SEO, Certificate, ??? (Brazil)',
    'Web Master, Certificate, Informatize (Brazil)',
    'Web Designer, Certificate, Informatize (Brazil)'
].map(course => {
    [area, type, school] = course.split(', ');
    return { area: area, type: type, school: school };
});

// Languages
me.languages = ['English', 'Portuguese'];
