export const prePath = '/resume';

export const pages = 
    [
        {num: '[0]', name: 'About', link: prePath+'/about'}, 
        {num: '[1]', name: 'Education', link: prePath+'/education'}, 
        {num: '[2]', name: 'Achievement', link: prePath+'/achievement'}, 
        {num: '[3]', name: 'Activity', link: prePath+'/activity'}, 
        {num: '[4]', name: 'Work', link: prePath+'/work'}, 
        {num: '[5]', name: 'Project', link: prePath+'/project'}, 
        {num: '[6]', name: 'Contact', link: prePath+'/contact'}
    ];

export const educations =
    [
        {year: '2014 - 2017', name: 'SMAN 1 Gunung Talang', detail: 'Major: Science', score: 'Average Score: 90.57/100'},
        {year: '2017 - Present', name: 'Diponegoro University', detail: 'Major: Computer Science', score: 'GPA: 3.58/4'}
    ];

export const achievements =
    [
        { year: '2014', award: '1st Place', color: '#e5cd89', event: 'Computer District Science Olympiad Solok', detail: 'OSN (National Science Olympiad) is a competition in the field of science for students at the elementary, middle and high school levels in Indonesia. Students who take part in the National Science Olympiad are students who have passed selection at the district and provincial levels and are therefore the best students from their respective provinces.' },
        { year: '2014', award: '1st Place', color: '#e5cd89', event: 'Computer Competition NeoTelemetri UNAND Sumatera Barat Region', detail: 'Firetech is an annual activity organized by UKM Neotelemetry Andalas University. Firetech itself was held in 2014. One of the branches of the competition was the ICT Competition.' },
        { year: '2015', award: '2nd Place', color: '#ececec', event: 'Computer District Science Olympiad Solok', detail: 'OSN (National Science Olympiad) is a competition in the field of science for students at the elementary, middle and high school levels in Indonesia. Students who take part in the National Science Olympiad are students who have passed selection at the district and provincial levels and are therefore the best students from their respective provinces.' },
        { year: '2016', award: '3rd Place', color: '#b99364', event: 'Selling Skill Competition Pertamina Lubricant Enduro Sumatera Barat Region', detail: 'PT.Pertamina Lubricants held a "Selling Skill" competition for motorized vehicle lubricants for high school students of the same level, where the assessment was based on marketing strategies, profits, and presentation.' },
        { year: '2018', award: 'Bronze Medalist', color: '#b99364', event: 'MTE (Malaysia Technology Expo)', detail: "Malaysia Technology Expo (MTE) started off as a platform for inventors and innovators to showcase their findings. MTE has grown to become one of the region's most recognized and respected international invention exhibitions, each year connecting more inventors with industry players. In fact, MTE has built a culture of excellence, being known for its prestigious awards and continues to welcome over 500 exhibits annually." }
    ];

export const activities =
    {
        '2020': [
            { role: 'Lab Assistant', event: 'Computer and Networking', detail: 'Helping lecturer on teaching practical skills to students. Networking in Computer Science refers to the technologies and processes involved in connecting computer systems to enable communication and data exchange. This includes the design, implementation, and management of computer networks, protocols, and services, such as the Internet, LANs, WANs, and wireless networks. The study of networking covers topics such as network architecture, network security, network performance, and network protocols.' },
            { role: 'Lab Assistant', event: 'Object-Oriented Programming', detail: 'Helping lecturer on teaching practical skills to students. Object-Oriented Programming (OOP) is a programming paradigm that focuses on the use of objects and their interactions to design and implement software systems. In OOP, an object is an instance of a class that encapsulates data and the methods (functions) that operate on that data.' },
            { role: 'Lab Assistant', event: 'Database', detail: ' Helping lecturer on teaching practical skills to students. Database involves designing, creating, and managing databases, which are structured collections of data that can be stored, retrieved, and manipulated using specialized software called a database management system (DBMS).' },
            { role: 'Lab Assistant', event: 'Platform Programming', detail: 'Helping lecturer on teaching practical skills to students. Platform Programming involves developing software applications that run on a specific platform, such as an operating system, hardware, or software environment.' }
        ],
        '2019': [
            { role: 'Lab Assistant', event: 'Algorithm and Programming', detail: 'Helping lecturer on teaching practical skills to students. An algorithm is a step-by-step procedure for solving a problem or performing a task. In computer science, algorithms are often expressed as code, which can be written in a programming language. Algorithms can be used for a wide range of tasks, including sorting data, searching for information, and performing calculations.' },
            { role: 'Lab Assistant', event: 'Data Structure', detail: "Helping lecturer on teaching practical skills to students. Data Structures are a way of organizing and storing data in a computer's memory or on a disk. They are used to represent and manipulate data in a way that is efficient and easy to access. Common data structures include arrays, lists, trees, graphs, and hash tables. Each data structure has its own strengths and weaknesses, and the choice of data structure can greatly affect the performance of a program." },
            { role: 'Lab Assistant', event: 'Operating System', detail: 'Helping lecturer on teaching practical skills to students. An operating system (OS) is a software program that manages computer hardware and software resources and provides common services for computer programs. The OS is responsible for managing computer resources such as memory, processing power, input/output devices, and storage devices. It provides a user interface that allows users to interact with the computer and its resources.' }
        ],
        '2018': [
            { role: 'Speaker', event: 'Basic Computer Training "Marking Up Your Future With Web Programming"', detail: 'I deliver material such as process of creating, building, and maintaining websites, web applications, and other digital products that are accessed through the internet. It involves writing code in programming languages such as HTML, CSS, and JavaScript to create interactive, dynamic, and responsive web pages.' },
            { role: 'Lab Assistant', event: 'Basic Programming', detail: 'Helping lecturer on teaching practical skills to students. Basic Programming refers to the fundamental concepts and principles of computer programming. It includes learning the basic building blocks of programming such as variables, data types, operators, control structures, functions, and loops.' }
        ],
        '2017': [
            { role: 'Participant', event: 'LKMMPD Training (Pre-Basic Student Management Leadership Training) T.Informatics Diponegoro University', detail: 'LKMPD (Pre-Basic Student Management Leadership Training) is a leadership and self-management character building training held by the Informatics Student Association of Diponegoro University.' },
            { role: 'Participant', event: 'ICICoS (International Conference on Informatics and Computational Sciences)', detail: 'International Conference on Informatics and Computational Sciences is annual conference organized by Department of Informatics, Faculty of Science and Mathematics, Universitas Diponegoro, Semarang Indonesia. The purpose of this conference is to provide a forum for scientists, engineers and researchers to discuss and exchange novel ideas, results, experiences and work-in-process in the field of informatics and computational science.' }
        ],
        '2016': [
            { role: 'Indonesia Delegate', event: 'SAEYLS 2016 Kuala Lumpur, Malaysia', detail: "Sri Aman Environmental Youth Leadership Summit (SAEYLS) 2016 would serve as a platform to spread the environmental awareness and inculcate leadership skills of the youths from the globe, hone and develop the leadership skills and abilities of youths to enable them to lead the global community of tomorrow to be highly environmental-conscious as well as embrace environmental-friendly lifestyles. As leaders of tomorrow, youths can improve the quality of life for God's creations." }
        ],
        '2014': [
            { role: 'Head of Communication and Informatics Field', event: 'Student Council of SMAN 1 Gunung Talang', detail: 'The Intra-School Student Organization (abbreviated as OSIS) is an organization at the school level in Indonesia. The Student Council is taken care of and managed by students who are selected to become the OSIS administrators. Usually this organization has a teacher supervisor who is selected by the school.' }
        ],
    };

export const works =
    [
        {year: 'January 2019 - May 2019', role: 'BackEnd Developer Intern', company: 'CIMB Niaga Tbk', detail: 'Internship as a Software Engineer in the Engineering Development unit of CIMB Niaga. Received tasks to develop software for internal use of CIMB Niaga. Engaged with other software engineers to improve the quality of the software being worked on.', techstack: 'Spring Boot, Java, Maven, Trello'},
        {year: 'November 2020 - May 2021', role: 'Project Manager / FullStack Developer Intern', company: 'BPTIK KEMENDIKBUD Center Java Region', detail: 'Internship as project manager and full-stack developer, My team and I create a Human Resource Information System using the waterfall method.', techstack: 'CodeIgniter 3, Bootstrap 4, draw.io, AdobeXD'}
    ];

export const projects =
    [
        {name: 'Approval Engine', role: 'BackEnd Developer Intern', techstack: 'Java SpringBoot', deployed: 'CIMB Niaga Tbk', detail: 'A service written in Java SpringBoot, Approval Engine using a linked list data structure to describe a matrix of data to make layer of approval which will be responsible to handle any approval that used by any system in CIMB Niaga Tbk.'},
        {name: 'Web Generator', role: 'BackEnd Developer Intern', techstack: 'Java SpringBoot', deployed: 'CIMB Niaga Tbk', detail: 'A service written in Java SpringBoot and Apache Velocity that automatically creates fully functional back-end service API in Java SpringBoot and front-end in ReactJS without the need to create the source code from scratch which will improve the development time.'},
        {name: 'Human Resource Information System', role: 'Project Manager / FullStack Developer', techstack: 'CodeIgniter 3, BootStrap 4', deployed: 'BPTIK DIKBUD Central Java', detail: 'A human resouces information system is a system to ensure the easy management of human resources for each section of the organization which includes fingerprint reader machine result automation reader to database, dashboard for employees, employee data management, and etc.'},
        {name: 'Infinit', role: 'FullStack Developer', techstack: 'CodeIgniter 3, BootStrap 4', deployed: 'Informatika Undip', detail: 'Infinit is a web application designed to facilitate the process of reporting lost items and finding them. The platform allows users to submit information about the lost item, including a description, location, and time of loss. This information is then stored in a database and made available to other users who are searching for lost items. The application provides a simple and intuitive interface that allows users to easily search for lost items by category, location, or date. Once a lost item is found, the user who submitted the information is notified and the item is marked as found in the system. In addition to the lost and found functionality, Infinit also offers a feature that allows users to report found items. This ensures that the rightful owners can be reunited with their lost items.'},
        {name: 'Toko Obat XYZ', role: 'FullStack Developer', techstack: 'CodeIgniter 3, BootStrap 4', deployed: 'Informatika Undip', detail: 'Toko Obat XYZ is a web application that provides a platform for customers to purchase various types of medicines and drugs online. The web application offers a range of features such as a user-friendly interface and a comprehensive product catalog. Customers can browse through the product categories, view the product details, and add items to their cart for purchase. The web application also offers personalized user accounts for customers to view their order history, and receive updates on their preferred products. Additionally, the application offers an administrative interface for the store owner to manage their inventory, process orders, and track sales.'}
    ];