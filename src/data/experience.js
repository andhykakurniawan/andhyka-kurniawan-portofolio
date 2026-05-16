export const experiences = [
    {
        role: 'Backend Developer (IBM Mainframe / COBOL)',
        company: 'PT Indocyber Global Teknologi',
        client: 'Bank Negara Indonesia (BNI)', // Tetap di-highlight karena ini reputasi besar
        period: 'Jan 2022 – Dec 2025',
        location: 'Jakarta, Indonesia',
        overview: 
            'Maintained and optimized high-availability credit card processing and transactional reporting backend systems within BNI’s core production banking environment.',
        achievements: [
            'Maintained and enhanced core credit card processing backend systems using COBOL and IBM DB2 in a high-availability production environment.',
            'Analyzed complex business requirements to design and execute structural technical adjustments for critical authorization validation systems.',
            'Supported and optimized transactional data processing and reporting systems to ensure absolute data consistency and operational reliability.', // Poin reporting & data consistency sesuai CV
            'Provided rapid production support and critical incident handling under strict enterprise SLA constraints to minimize system downtime.',
            'Collaborated closely across multi-disciplinary teams including QA, Operations, and system users throughout rigorous testing and production deployment cycles.'
        ],
        tags: ['COBOL', 'IBM Mainframe', 'IBM DB2', 'VSAM', 'Credit Card Processing', 'Transactional Reporting', 'SLA Management'] // Menambahkan tag reporting
    },
    {
        role: 'Assistant Lecturer',
        company: 'Universitas Atma Jaya Yogyakarta',
        period: 'Jan 2021 – Jul 2021',
        location: 'Yogyakarta, Indonesia',
        overview:
            'Guided undergraduate students in mastering software architecture concepts, database design, and backend web development practices.',
        achievements: [
            'Assisted in teaching Website-Based Information Systems and System Analysis & Design Project courses.',
            'Guided and mentored 50+ students in practical backend web development using the CodeIgniter 3 framework.',
            'Evaluated student projects, providing constructive code reviews and technical feedback on database design and system architecture concepts.'
        ],
        tags: ['CodeIgniter 3', 'PHP', 'Database Design', 'System Analysis', 'Code Review']
    },
    {
        role: 'Full-Stack Backend Developer', // Di CV lo ini adalah kompetensi utamanya
        company: 'Freelance & Academic Projects',
        period: 'Aug 2019 – Jun 2021',
        location: 'Yogyakarta, Indonesia',
        overview:
            'Architected and delivered end-to-end backend solutions, RESTful APIs, and full-stack applications for various academic and institutional systems.',
        achievements: [
            'Designed robust relational database schemas and managed strict data validation logic to maintain state consistency across multiple web modules.',
            'Implemented secure JWT-based authentication and granular Role-Based Access Control (RBAC) to ensure protected API endpoints and structured workflows.',
            'Spearheaded requirement analysis and system design to translate institutional operational needs into stable full-stack enhancements.',
            'Initiated and led a dedicated web development learning program, mentoring backend-focused engineering teams to contribute directly to production-ready campus systems.'
        ],
        tags: ['PHP', 'CodeIgniter', 'MySQL', 'REST API', 'JWT', 'RBAC', 'Engineering Mentorship'] // Menambahkan CodeIgniter & Mentorship biar sejalan dengan project APPSI lo
    },
]