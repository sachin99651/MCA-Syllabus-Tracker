// Countdown Logic
    const examDate = new Date("March 13, 2026 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const gap = examDate - now;
        const d = Math.floor(gap / (1000 * 60 * 60 * 24));
        
        document.getElementById("countdown").innerText = gap < 0 ? "Today!" : `${d} Days`;
    }

    // Syllabus Data
    const syllabusData = [
        {
            title: "Thinking & Decision Making",
            topics: ["Creative Thinking", "Verbal Reasoning", "Pattern Identification", "Syllogisms", "Series Completion", "Figures & Diagrams"]
        },
        {
            title: "Mathematics",
            topics: ["Set Theory", "Probability & Statistics", "Algebra & Matrices", "Coordinate Geometry", "Calculus (Limits & Integration)"]
        },
        {
            title: "Computer Science",
            topics: ["Operating Systems", "Data Structures", "Digital Fundamentals", "Logic Gates", "Memory Management"]
        }
    ];

    const container = document.getElementById('syllabus-content');

    // Generate HTML
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

    // Save & Load State
    checkboxes.forEach(box => {
        if (localStorage.getItem(box.id) === 'true') box.checked = true;
        box.addEventListener('change', () => {
            localStorage.setItem(box.id, box.checked);
            updateProgress();
        });
    });

    function updateProgress() {
        const checked = document.querySelectorAll('.task-check:checked').length;
        const percentage = Math.round((checked / checkboxes.length) * 100);
        document.getElementById('percent').innerText = percentage;
    }

    updateCountdown();
    updateProgress();
    setInterval(updateCountdown, 86400000); // Update every 24 hours