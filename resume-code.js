// Me
const me = {};

// Name and Location
[me.firstName, me.lastName, me.location] = ['Fernando', 'Tessmann', 'Canada'];

// Title
me.title = 'Tech Lead | Product Engineer | Software Engineer | Front-End Expert';

// About
fetch('about.me').then(response => {
    return response.text()
}).then(data => me.about = data);

// Toolbox
me.toolbox = ['Front-End', 'Full-Stack', 'React', 'GraphQL', 'Typescript', 'JavaScript', 'Next.js', 'JSX', 'HTML', 'Sass', 'CSS', 'Node.js', 'SQL', 'Data Visualization', 'UX', 'WordPress', 'Gutenberg'].sort();

// Experience
me.experience = [
    {
        company: 'História do Grenal',
        location: 'Remote',
        roles: [
            {
                role: 'Co-Founder and Principal Engineer',
                period: 'Mar 2021 – Present',
                description: `At História do Grenal, a project I co-founded, we are pioneering a fresh take on local sports rivalries, offering never-seen statistics and innovative data visualizations.`
            }
        ]
    },
    {
        company: 'Aresystems (Nucona)',
        location: 'Remote',
        roles: [
            {
                role: 'Co-Founder and Principal Engineer',
                period: 'Feb 2023 – Dec 2023',
                description: `Nucona is a solution to revolutionize health and nutrition in America. Its mission is to alleviate the burden of diet-related chronic diseases, aiming to lower healthcare costs for everyone involved, from insurance companies and employers to individuals.`
            }
        ]
    },
    {
        company: 'Talentverse',
        location: 'Remote',
        roles: [
            {
                role: 'Front End Engineer',
                period: 'Sep 2022 – Sep 2023',
                description: `At Talentverse (Talentful), I was part of the Founding Engineering Team, a group committed to steering the product's tech vision. My role as a Frontend Engineer finds me elbow-deep in UI, React, Typescript, and GraphQL, creating smooth and efficient user experiences.`
            }
        ]
    },
    {
        company: 'Deliverr Inc.',
        location: 'Remote',
        roles: [
            {
                role: 'Senior Software Engineer',
                period: 'Jan 2022 – Aug 2022',
                description: `At Deliverr Inc., I thrived in my role as a Senior Software Engineer, working diligently within the Delivery Programs Team (Fast Tags). My dedication to timely delivery led to recognition as the "Individual who Delivered the Most Features (Critical, Important, and Urgent) on Time" in 2022. After Deliverr Inc.'s acquisition by Shopify, I decided to pursue new professional paths.`
            }
        ]
    },
    {
        company: 'XWP',
        location: 'Remote',
        roles: [
            {
                role: 'Senior Frontend Engineer',
                period: 'Jun 2021 – Jan 2022',
                description: `At XWP I had the opportunity to bring web solutions to life, leveraging my skills in PHP, React, Gutenberg, and WordPress. The engineer responsible for the frontend architecture and development at www.stuff.tv and www.forsta.com.`
            }
        ]
    },
    {
        company: 'The Pixel Shop',
        location: 'Toronto, Canada',
        roles: [
            {
                role: 'Lead Web Developer',
                period: 'Dec 2017 – Apr 2021',
                description: `At The Pixel Shop, I held the position of Lead Web Developer, where I spearheaded various web projects using Kentico, React, and WordPress, and led a team of 8 talented developers. The most relevant projects I can mention are Alumni at Home (Manulife), Ignite (Food Banks Canada), and Ontario Racing, where I was the engineer responsible for the frontend architecture and development.`
            }
        ]
    },
    {
        company: 'LightSpeed Development',
        location: 'Remote',
        roles: [
            {
                role: 'Senior Front-end and WordPress Developer',
                period: 'Jun 2016 – Dec 2017',
                description: `As a Senior Front-end and WordPress Developer at LightSpeed Development, I played a key role in crafting WordPress themes and plugins, while also ensuring the smooth functioning of both commercial and open-source products.`
            }
        ]
    },
    {
        company: 'SantoPixel Design & Code',
        location: 'Remote',
        roles: [
            {
                role: 'Co-founder and Lead Developer',
                period: 'Oct 2012 – Jun 2016',
                description: `As a Co-founder and Lead Developer at SantoPixel Tecnologia e Inovação, I was deeply involved in creating WordPress themes and plugins, maintaining client products, and assisting in sales initiatives.`
            }
        ]
    },
    {
        company: 'Convertiva Mobile Marketing',
        location: 'Porto Alegre, Brazil',
        roles: [
            {
                role: 'IT Manager',
                period: 'May 2012 – Jun 2013',
                description: `In my role as an IT Manager at Convertiva Mobile Marketing, I primarily maintained and updated client products and offered user support.`
            }
        ]
    },
    {
        company: 'Grupo RBS',
        location: 'Porto Alegre, Brazil',
        roles: [
            {
                role: 'Lead Developer',
                period: 'May 2010 – May 2012',
                description: `As the Lead Developer at Grupo RBS, I wore multiple hats—technical lead, web analyst, and front-end developer.`
            },
            {
                role: 'Senior Web Developer',
                period: 'Mar 2007 – May 2010 (3 yrs 3 mos)',
                description: `As a Senior Web Developer at Grupo RBS, I was a pivotal part in creating high-quality web applications.`
            }
        ]
    },
    {
        company: 'runkme',
        location: 'Porto Alegre, Brazil',
        roles: [
            {
                role: 'Co-Founder and Principal Engineer',
                period: 'Jul 2010 – Mar 2011',
                description: `At runkme, a health start-up I co-founded to aid running coaches, I played a key role as the Principal Engineer.`
            }
        ]
    },
    {
        company: 'SulSoftware',
        location: 'Novo Hamburgo, Brazil',
        roles: [
            {
                role: 'Web Developer',
                period: 'Aug 2006 – Feb 2007',
                description: `In my role as a Web Developer at SulSoftware, I wore many hats—UI designer, UI developer, and ASP programmer—to craft high-quality web solutions.`
            }
        ]
    }
];

// Volunteer
me.volunteer = [
    {
        role: 'Pro Bono Developer',
        company: 'Catchafire',
        period: 'Jul 2019 – Dec 2023',
        description: `Assist nonprofits with mission critical projects to advance their mission and goals. Contributed approximately $ 20,579 through 2 engagements with nonprofit organizations. Learn more about my impact: catchafire.org/profiles/445269/.`
    }
];

// Education
me.education = [
    {
        school: 'Colégio Marista Pio XII (Brazil)',
        course: 'College Diploma, Administration and Computer Science',
        period: '1999 – 2002'
    }
];

// Courses
me.courses = [
    '2022, TypeScript Fundamentals, Certificate, Frontend Masters (Online)',
    '2021, React: Testing and Debugging, Certificate, Emmanuel Henri (LinkedIn Learning)',
    '2021, React Hooks, Certificate, Eve Porcello (LinkedIn Learning)',
    '2021, Advanced React and GraphQL, Certificate, Wes Bos (Online)',
    '2021, React For Beginners, Certificate, Wes Bos (Online)',
    '2019, ES6 for Everyone, Certificate, Wes Bos (Online)',
    '2019, What The Flexbox?!, Free Video Series, Wes Bos (Online)',
    '2019, JavaScript30, Free Video Series, Wes Bos (Online)',
    '2012, Personal development and Leadership, Certificate, INEXH (Brazil)',
    '2011, Agile Methodologies, Certificate, PUCRS (Brazil)',
    '2010, SEO, Certificate, Mestre SEO (Brazil)',
    '2005, Flash Developer, Certificate, Informatize (Brazil)',
    '2004, Web Master, Certificate, Informatize (Brazil)',
    '2003, Web Designer, Certificate, Informatize (Brazil)'
].map(course => {
    [area, type, school] = course.split(', ');
    return { area: area, type: type, school: school };
});

// Languages
me.languages = ['English (Full Professional)', 'Portuguese (Native)', 'Spanish (Limited Working)'];

// Contact
[me.email, me.linkedIn, me.github] = ['nandotess85@gmail.com', 'linkedin.com/in/nandotess', 'github.com/nandotess'];

// Log
console.clear();
console.log(me);

// TODO
// Open Graph and Twitter Card
// Accessibility Check
// Print Version
