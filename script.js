const examDate = new Date("March 13, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = examDate - now;
    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    
    document.getElementById("countdown").innerText = gap < 0 ? "Today!" : `${d} Days`;
}

const syllabusData = [
    {
        title: "Thinking & Decision Making",
        topics: [
            "Creative Thinking",
            "Unfamiliar Relationships",
            "Verbal Reasoning",
            "Finding Patterns and Trends",
            "Assessment of Figures & Diagrams",
            "Geometrical Designs & Identification",
            "Selection of Related Letters/Words/Numbers/Figures",
            "Identification of Odd Item from a Group",
            "Numerical Series Pattern/Logic",
            "Syllogisms (Logic-based questions)",
            "Identification of Logic & Correct Answers"
        ]
    },
    {
        title: "Mathematics: Set Theory & Probability",
        topics: [
            "Concept of Sets (Union, Intersection, Cardinality)",
            "Elementary Counting",
            "Permutations and Combinations",
            "Basic Probability Theory",
            "Averages",
            "Dependent and Independent Events",
            "Frequency Distributions",
            "Measures of Central Tendency and Dispersion"
        ]
    },
    {
        title: "Mathematics: Algebra & Geometry",
        topics: [
            "Fundamental Operations in Algebra",
            "Expansions and Factorization",
            "Simultaneous Linear / Quadratic Equations",
            "Indices and Logarithms",
            "Arithmetic, Geometric and Harmonic Progressions",
            "Determinants and Matrices",
            "Rectangular Cartesian Coordinates",
            "Distance Formulae",
            "Equation of a Line & Intersection",
            "Pair of Straight Lines",
            "Equations of Circle, Parabola, Ellipse, Hyperbola"
        ]
    },
    {
        title: "Mathematics: Calculus",
        topics: [
            "Limit of Functions",
            "Continuous Functions",
            "Differentiation of Functions",
            "Tangents and Normal",
            "Maxima and Minima",
            "Integration by Parts/Substitution/Partial Fraction",
            "Definite Integrals",
            "Applications of Integrals to Areas"
        ]
    },
    {
        title: "Computer: Operating Systems",
        topics: [
            "Main Functions of OS",
            "Processes and Threads",
            "Interprocess Communication",
            "Concurrency and Synchronization",
            "Deadlock and Banker’s Algorithm",
            "CPU, I/O, and Resource Scheduling",
            "Memory Management and Virtual Memory",
            "File Systems and I/O Systems",
            "DOS, UNIX and Windows"
        ]
    },
    {
        title: "Computer: Data Structures",
        topics: [
            "Arrays and Sparse Matrix",
            "Stacks, Queues, and Priority Queues",
            "Linked Lists",
            "Trees (Binary, Threaded, BST, AVL, B, B+, B*)",
            "Graphs",
            "Sorting and Searching Algorithms",
            "Hashing",
            "Functions and Recursion",
            "Parameter Passing"
        ]
    },
    {
        title: "Computer: Digital Fundamentals",
        topics: [
            "Data Types and Number Systems",
            "Fixed/Floating Point Representation",
            "Error Detection Codes",
            "Computer Arithmetic (Add/Sub/Mul/Div)",
            "Logic Gates and Boolean Algebra",
            "Map Simplifications (K-Maps)",
            "Combinational and Sequential Circuits",
            "Flip-Flops, Decoders, Multiplexers",
            "Registers, Counters, and Memory Units"
        ]
    }
];

const container = document.getElementById('syllabus-content');

container.innerHTML = ''; 
syllabusData.forEach((section, sIdx) => {
    let html = `<div class="section"><h2>${section.title}</h2><ul>`;
    section.topics.forEach((topic, tIdx) => {
        const id = `task-${sIdx}-${tIdx}`;
        html += `<li><input type="checkbox" id="${id}" class="task-check"><label for="${id}">${topic}</label></li>`;
    });
    html += `</ul></div>`;
    container.innerHTML += html;
});

const checkboxes = document.querySelectorAll('.task-check');

checkboxes.forEach(box => {
    if (localStorage.getItem(box.id) === 'true') {
        box.checked = true;
    }
    box.addEventListener('change', () => {
        localStorage.setItem(box.id, box.checked);
        updateProgress();
    });
});

function updateProgress() {
    const total = checkboxes.length;
    const checked = document.querySelectorAll('.task-check:checked').length;
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
    document.getElementById('percent').innerText = percentage;
}

updateCountdown();
updateProgress();
setInterval(updateCountdown, 86400000);
