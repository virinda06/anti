// Database - Sample data matching the user's requirement
const database = {
    colleges: [
        {
            id: 1,
            name: "MIT",
            fullName: "Massachusetts Institute of Technology",
            description: "Premier institution for technology and engineering education"
        },
        {
            id: 2,
            name: "Stanford",
            fullName: "Stanford University",
            description: "Leading research university with exceptional engineering programs"
        },
        {
            id: 3,
            name: "IIT Delhi",
            fullName: "Indian Institute of Technology Delhi",
            description: "India's premier engineering and technology institute"
        },
        {
            id: 4,
            name: "GTU",
            fullName: "Gujarat Technological University",
            description: "Leading state technical university in Gujarat, India"
        }
    ],
    branches: [
        // MIT Branches
        {
            id: 1,
            collegeId: 1,
            name: "Electrical Engineering",
            code: "EEE",
            description: "Study of electricity, electronics, and electromagnetism"
        },
        {
            id: 2,
            collegeId: 1,
            name: "Mechanical Engineering",
            code: "MECH",
            description: "Design, analysis, and manufacturing of mechanical systems"
        },
        {
            id: 3,
            collegeId: 1,
            name: "Computer Science",
            code: "CSE",
            description: "Study of computation, algorithms, and software systems"
        },
        {
            id: 4,
            collegeId: 1,
            name: "Civil Engineering",
            code: "CIVIL",
            description: "Infrastructure design and construction management"
        },
        // Stanford Branches
        {
            id: 5,
            collegeId: 2,
            name: "Electrical Engineering",
            code: "EEE",
            description: "Advanced electrical systems and signal processing"
        },
        {
            id: 6,
            collegeId: 2,
            name: "Computer Science",
            code: "CSE",
            description: "Cutting-edge computing and AI research"
        },
        // IIT Delhi Branches
        {
            id: 7,
            collegeId: 3,
            name: "Electrical Engineering",
            code: "EEE",
            description: "Power systems and electronics engineering"
        },
        {
            id: 8,
            collegeId: 3,
            name: "Mechanical Engineering",
            code: "MECH",
            description: "Thermal and mechanical systems engineering"
        },
        // GTU Branches
        {
            id: 9,
            collegeId: 4,
            name: "Computer Engineering",
            code: "CE",
            description: "Computer hardware and software systems engineering"
        },
        {
            id: 10,
            collegeId: 4,
            name: "Information Technology",
            code: "IT",
            description: "Information systems, networking, and software development"
        },
        {
            id: 11,
            collegeId: 4,
            name: "Electrical Engineering",
            code: "EE",
            description: "Electrical power systems and control engineering"
        },
        {
            id: 12,
            collegeId: 4,
            name: "Mechanical Engineering",
            code: "ME",
            description: "Manufacturing, design, and thermal engineering"
        }
    ],
    semesters: [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
        { id: 7, number: 7 },
        { id: 8, number: 8 }
    ],
    subjects: [
        // MIT - Electrical Engineering - Semester 3
        {
            id: 1,
            branchId: 1,
            semesterId: 3,
            name: "Digital Electronics",
            code: "EEE301",
            description: "Fundamentals of digital circuits, logic gates, and digital system design",
            credits: 4
        },
        {
            id: 2,
            branchId: 1,
            semesterId: 3,
            name: "Signals and Systems",
            code: "EEE302",
            description: "Analysis of continuous and discrete-time signals and systems",
            credits: 4
        },
        {
            id: 3,
            branchId: 1,
            semesterId: 3,
            name: "Electronic Circuits",
            code: "EEE303",
            description: "Analog and digital electronic circuit analysis and design",
            credits: 4
        },
        {
            id: 4,
            branchId: 1,
            semesterId: 3,
            name: "Electromagnetic Fields",
            code: "EEE304",
            description: "Study of electric and magnetic fields and their applications",
            credits: 3
        },
        // MIT - Electrical Engineering - Semester 1
        {
            id: 5,
            branchId: 1,
            semesterId: 1,
            name: "Engineering Mathematics I",
            code: "MATH101",
            description: "Calculus, differential equations, and linear algebra",
            credits: 4
        },
        {
            id: 6,
            branchId: 1,
            semesterId: 1,
            name: "Engineering Physics",
            code: "PHY101",
            description: "Fundamentals of physics for engineering applications",
            credits: 4
        },
        // MIT - Mechanical Engineering - Semester 3
        {
            id: 7,
            branchId: 2,
            semesterId: 3,
            name: "Thermodynamics",
            code: "MECH301",
            description: "Laws of thermodynamics and their engineering applications",
            credits: 4
        },
        {
            id: 8,
            branchId: 2,
            semesterId: 3,
            name: "Fluid Mechanics",
            code: "MECH302",
            description: "Study of fluid behavior and flow dynamics",
            credits: 4
        },
        // MIT - Computer Science - Semester 3
        {
            id: 9,
            branchId: 3,
            semesterId: 3,
            name: "Data Structures",
            code: "CSE301",
            description: "Advanced data structures and algorithm design",
            credits: 4
        },
        {
            id: 10,
            branchId: 3,
            semesterId: 3,
            name: "Database Systems",
            code: "CSE302",
            description: "Relational databases, SQL, and database design",
            credits: 4
        },
        // GTU - Computer Engineering - Semester 3
        {
            id: 11,
            branchId: 9,
            semesterId: 3,
            name: "Data Structures",
            code: "3130702",
            description: "Linear and non-linear data structures with algorithms",
            credits: 5
        },
        {
            id: 12,
            branchId: 9,
            semesterId: 3,
            name: "Database Management Systems",
            code: "3130703",
            description: "Relational database concepts, SQL, and normalization",
            credits: 5
        },
        {
            id: 13,
            branchId: 9,
            semesterId: 3,
            name: "Digital Fundamentals",
            code: "3130704",
            description: "Digital logic, combinational and sequential circuits",
            credits: 5
        }
    ],
    notes: [
        // Digital Electronics Notes
        {
            id: 1,
            subjectId: 1,
            title: "Introduction to Digital Logic",
            description: "Comprehensive overview of digital logic gates and Boolean algebra",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 2,
            subjectId: 1,
            title: "Combinational Circuits",
            description: "Design and analysis of combinational logic circuits",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 3,
            subjectId: 1,
            title: "Sequential Circuits",
            description: "Flip-flops, counters, and sequential circuit design",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 4,
            subjectId: 1,
            title: "Digital Electronics Lab Manual",
            description: "Practical experiments and circuit implementations",
            type: "PDF",
            fileUrl: "#"
        },
        // Signals and Systems Notes
        {
            id: 5,
            subjectId: 2,
            title: "Fourier Transform",
            description: "Fourier series and transform analysis",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 6,
            subjectId: 2,
            title: "Laplace Transform",
            description: "Laplace transform and its applications",
            type: "VIDEO",
            fileUrl: "#"
        },
        // Electronic Circuits Notes
        {
            id: 7,
            subjectId: 3,
            title: "Amplifier Design",
            description: "BJT and FET amplifier configurations",
            type: "PDF",
            fileUrl: "#"
        },
        // Electromagnetic Fields Notes
        {
            id: 8,
            subjectId: 4,
            title: "Maxwell's Equations",
            description: "Fundamental electromagnetic field equations",
            type: "PDF",
            fileUrl: "#"
        },
        // Additional notes for other subjects
        {
            id: 9,
            subjectId: 9,
            title: "Trees and Graphs",
            description: "Graph algorithms and tree traversal methods",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 10,
            subjectId: 10,
            title: "SQL Fundamentals",
            description: "Database queries and normalization",
            type: "PDF",
            fileUrl: "#"
        },
        // GTU - Data Structures Notes
        {
            id: 11,
            subjectId: 11,
            title: "Array and Linked Lists",
            description: "Comprehensive guide to arrays and linked list implementations",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 12,
            subjectId: 11,
            title: "Stacks and Queues",
            description: "Stack and queue data structures with applications",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 13,
            subjectId: 11,
            title: "Trees and Binary Search Trees",
            description: "Tree traversals, BST operations, and AVL trees",
            type: "PDF",
            fileUrl: "#"
        },
        // GTU - DBMS Notes
        {
            id: 14,
            subjectId: 12,
            title: "ER Diagrams and Normalization",
            description: "Entity-Relationship modeling and database normalization",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 15,
            subjectId: 12,
            title: "SQL Queries Tutorial",
            description: "Complete SQL guide with practice queries",
            type: "PDF",
            fileUrl: "#"
        },
        // GTU - Digital Fundamentals Notes
        {
            id: 16,
            subjectId: 13,
            title: "Boolean Algebra Basics",
            description: "Logic gates and Boolean expressions",
            type: "PDF",
            fileUrl: "#"
        },
        {
            id: 17,
            subjectId: 13,
            title: "Flip-Flops and Counters",
            description: "Sequential circuit design with flip-flops",
            type: "PDF",
            fileUrl: "#"
        }
    ]
};
