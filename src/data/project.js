export const projects = [
    {
        number: '01',
        title: 'RESTAURANT MANAGEMENT SYSTEM - BACKEND',
        category: 'Management API & Transactional Workflows',
        period: 'Jan 2026 - Present',
        overview:
            'An enterprise-grade backend platform designed to power comprehensive restaurant operations, orchestrating multi-role synchronization across admin, kitchen, waiter, cashier, and warehouse systems.',
        engineering: [
            'JWT authentication & centralized RBAC for 5+ distinct operational roles',
            'Asynchronous order lifecycle tracking (Waiter to Kitchen state flow)',
            'Real-time warehouse inventory synchronization and mutation safety',
            'Secure table booking and payment validation engines',
            'Transaction consistency handling to prevent duplicate checkout states',
        ],
        challenges: [
            'Managing concurrent order updates from multiple waiter interfaces simultaneously',
            'Preventing inconsistent inventory mutations between real-time sales and warehouse stock',
            'Designing a reliable state-machine for order tracking from cooking to payment settlement',
        ],
        architecture: [
            'Layered Spring Boot architecture with robust separation of concerns',
            'DTO validation flow and clean exception handling mapping',
            'PostgreSQL relational schema optimized with proper indexing for transaction logs', // Gua ganti ke Postgres biar konsisten dengan tags lo kemarin
            'Service-Repository design pattern for high code maintainability',
        ],
        tags: ['Spring Boot', 'PostgreSQL', 'JWT', 'REST API', 'JPA', 'RBAC'],
        result: 'Successfully engineered a high-throughput, thread-safe backend foundation capable of managing end-to-end restaurant ecosystem transactions.',
        Git: 'https://github.com/andhykakurniawan/restaurant-management-system-backend'
    },
    {
        number: '02',
        title: 'RESTAURANT MANAGEMENT SYSTEM - FRONTEND',
        category: 'Management Dashboard & Operational Interfaces',
        period: 'Jan 2026 - Present',
        overview:
            'A high-fidelity operational frontend featuring dedicated, role-specific interfaces for admin monitoring, kitchen screens, waiter ordering, cashier payments, and customer self-service booking workflows.',
        engineering: [
            'Multi-interface UI architecture (Admin Dashboard, Kitchen Display, Customer Booking)',
            'State synchronization for real-time order status updates across operational roles',
            'Dynamic form handling and validation for complex table booking and payment flows',
            'Role-based layout rendering based on reactive security tokens',
        ],
        challenges: [
            'Designing complex, highly scalable layouts tailored to different device environments (e.g., tablet for waiters, desktop for cashiers)',
            'Managing frontend state synchronization so the kitchen screen updates instantly when a waiter inputs an order',
            'Creating frictionless, high-speed UI interaction flows for fast-paced operational environments',
        ],
        architecture: [
            'React component architecture with a modular and reusable design pattern',
            'Context-driven frontend workflow for role permission and secure state handling',
            'Responsive utilities backed by Tailwind CSS for seamless device adaptability',
        ],
        tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript', 'REST API', 'Responsive UI'],
        result: 'Delivered a fluid, responsive, and operationally efficient multi-role workspace optimized for high-speed restaurant administration.',
        Git: 'https://github.com/andhykakurniawan/restaurant-management-system-frontend'
    },
    {
        number: '03',
        title: 'APPSI',
        category: 'Academic Management Platform',
        subtitle: 'Academic Management Platform',
        period: 'Feb 2020 - Aug 2021',
        overview:
            'Campus-integrated platform consisting of laboratory management, internship systems, and alumni tracking modules.',
        body:
            'Campus-integrated platform consisting of laboratory management, internship systems, and alumni tracking modules.',
        engineering: [
            'Backend API development',
            'Role-based workflow handling',
            'Relational database design',
            'Academic data processing',
        ],
        challenges: [
            'Managing cross-module data consistency',
            'Handling role-based access workflows',
            'Designing scalable academic data relationships',
        ],
        architecture: [
            'CodeIgniter 3 monolithic architecture',
            'RESTful backend implementation',
            'MySQL relational schema',
        ],
        tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'REST API', 'RBAC'],
        result:
            'Contributed to a scalable campus operational platform used across multiple academic modules.',
        registration: 'Registered Computer Program (DJKI No. 000180464)',
    },
    {
        number: '04',
        title: 'YAYASAN RUMAH KANKER INDONESIA YOGYAKARTA',
        category: 'Healthcare Web Platform',
        subtitle: 'Healthcare Web Platform',
        period: 'Mar 2021 - Jul 2021',
        overview:
            'Healthcare foundation platform focused on patient data management and administrative workflow optimization.',
        body:
            'Healthcare foundation platform focused on patient data management and administrative workflow optimization.',
        engineering: [
            'Requirement analysis',
            'Backend feature development',
            'Access control implementation',
            'Database enhancement',
        ],
        challenges: [
            'Handling sensitive patient data securely',
            'Maintaining compatibility with existing systems',
            'Designing structured access control workflows',
        ],
        architecture: [
            'CodeIgniter 4 architecture',
            'Access control validation flow',
            'MySQL database enhancement',
        ],
        tags: ['PHP', 'CodeIgniter 4', 'MySQL', 'Access Control'],
        result:
            'Delivered fullstack operational enhancements for healthcare administration workflows.',
    },
    {
        number: '05',
        title: 'EDUCATIONAL MODULES',
        category: 'Technical Learning Resources',
        subtitle: 'Technical Learning Resources',
        period: '2020',
        overview:
            'Authored educational modules covering database fundamentals and CRUD implementation concepts for beginner developers.',
        body:
            'Authored educational modules covering database fundamentals and CRUD implementation concepts for beginner developers.',
        engineering: [
            'Database fundamentals',
            'CRUD implementation',
            'Backend learning material design',
        ],
        challenges: [
            'Simplifying backend concepts for beginners',
            'Designing structured educational workflows',
        ],
        architecture: [
            'CodeIgniter-based learning implementation',
            'Database relationship examples',
        ],
        tags: ['Education', 'Database', 'CodeIgniter', 'Backend Fundamentals'],
        result:
            'Successfully registered as intellectual property educational resources.',
        registration: 'DJKI Reg No. 000196064 - 000195864',
    },
]
