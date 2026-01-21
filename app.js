// Application State
let currentState = {
    college: null,
    branch: null,
    semester: null,
    breadcrumb: []
};

// Initialize the application
function init() {
    renderColleges();
}

// Render colleges
function renderColleges() {
    const grid = document.getElementById('college-grid');
    grid.innerHTML = '';

    database.colleges.forEach((college, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <h3 class="card-title">${college.name}</h3>
            <p class="card-subtitle">${college.fullName}</p>
            <p class="card-description">${college.description}</p>
        `;
        card.addEventListener('click', () => selectCollege(college));
        grid.appendChild(card);
    });
}

// Select college
function selectCollege(college) {
    currentState.college = college;
    currentState.breadcrumb = [
        { label: 'Home', action: resetToHome },
        { label: college.name, action: null }
    ];

    hideAllSections();
    updateBreadcrumb();
    renderBranches(college.id);
    showSection('branch-section');
}

// Render branches
function renderBranches(collegeId) {
    const grid = document.getElementById('branch-grid');
    grid.innerHTML = '';

    const branches = database.branches.filter(b => b.collegeId === collegeId);

    branches.forEach((branch, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <h3 class="card-title">${branch.name}</h3>
            <p class="card-subtitle">${branch.code}</p>
            <p class="card-description">${branch.description}</p>
        `;
        card.addEventListener('click', () => selectBranch(branch));
        grid.appendChild(card);
    });
}

// Select branch
function selectBranch(branch) {
    currentState.branch = branch;
    currentState.breadcrumb = [
        { label: 'Home', action: resetToHome },
        { label: currentState.college.name, action: () => selectCollege(currentState.college) },
        { label: branch.name, action: null }
    ];

    hideAllSections();
    updateBreadcrumb();
    renderSemesters();
    showSection('semester-section');
}

// Render semesters
function renderSemesters() {
    const grid = document.getElementById('semester-grid');
    grid.innerHTML = '';

    database.semesters.forEach((semester, index) => {
        const card = document.createElement('div');
        card.className = 'card semester-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="semester-number">${semester.number}</div>
            <div class="semester-label">Semester ${semester.number}</div>
        `;
        card.addEventListener('click', () => selectSemester(semester));
        grid.appendChild(card);
    });
}

// Select semester
function selectSemester(semester) {
    currentState.semester = semester;
    currentState.breadcrumb = [
        { label: 'Home', action: resetToHome },
        { label: currentState.college.name, action: () => selectCollege(currentState.college) },
        { label: currentState.branch.name, action: () => selectBranch(currentState.branch) },
        { label: `Semester ${semester.number}`, action: null }
    ];

    hideAllSections();
    updateBreadcrumb();
    renderSubjects(currentState.branch.id, semester.id);
    showSection('subject-section');
}

// Render subjects and notes
function renderSubjects(branchId, semesterId) {
    const container = document.getElementById('subject-list');
    container.innerHTML = '';

    const subjects = database.subjects.filter(
        s => s.branchId === branchId && s.semesterId === semesterId
    );

    if (subjects.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <h3 style="margin-bottom: 1rem;">No subjects available</h3>
                <p>Subjects for this semester are being updated. Please check back later.</p>
            </div>
        `;
        return;
    }

    subjects.forEach((subject, index) => {
        const notes = database.notes.filter(n => n.subjectId === subject.id);

        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.id = `subject-${subject.id}`;

        card.innerHTML = `
            <div class="subject-header">
                <div class="subject-info">
                    <h3>${subject.name}</h3>
                    <div class="subject-code">${subject.code}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div class="subject-credits">${subject.credits} Credits</div>
                    <div class="expand-icon">↓</div>
                </div>
            </div>
            <p class="subject-description">${subject.description}</p>
            <div class="notes-section" id="notes-${subject.id}">
                <h4 class="notes-title">Available Resources (${notes.length})</h4>
                <div class="notes-list">
                    ${notes.length > 0 ? notes.map(note => `
                        <div class="note-item">
                            <div class="note-info">
                                <h4>${note.title}</h4>
                                <p class="note-description">${note.description}</p>
                            </div>
                            <div class="note-type">${note.type}</div>
                        </div>
                    `).join('') : '<p style="color: var(--text-tertiary);">No resources available yet.</p>'}
                </div>
            </div>
        `;

        // Add click handler for expand/collapse
        const header = card.querySelector('.subject-header');
        header.addEventListener('click', () => toggleNotes(subject.id));

        container.appendChild(card);
    });
}

// Toggle notes section
function toggleNotes(subjectId) {
    const card = document.getElementById(`subject-${subjectId}`);
    const notesSection = document.getElementById(`notes-${subjectId}`);

    card.classList.toggle('expanded');
    notesSection.classList.toggle('active');
}

// Update breadcrumb
function updateBreadcrumb() {
    const breadcrumbEl = document.getElementById('breadcrumb');

    if (currentState.breadcrumb.length === 0) {
        breadcrumbEl.style.display = 'none';
        return;
    }

    breadcrumbEl.style.display = 'flex';
    breadcrumbEl.innerHTML = '';

    currentState.breadcrumb.forEach((item, index) => {
        const isLast = index === currentState.breadcrumb.length - 1;

        if (item.action) {
            const link = document.createElement('a');
            link.href = '#';
            link.className = 'breadcrumb-item';
            link.textContent = item.label;
            link.addEventListener('click', (e) => {
                e.preventDefault();
                item.action();
            });
            breadcrumbEl.appendChild(link);
        } else {
            const span = document.createElement('span');
            span.className = 'breadcrumb-item active';
            span.textContent = item.label;
            breadcrumbEl.appendChild(span);
        }

        if (!isLast) {
            const separator = document.createElement('span');
            separator.className = 'breadcrumb-separator';
            separator.textContent = '›';
            breadcrumbEl.appendChild(separator);
        }
    });
}

// Utility functions
function hideAllSections() {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
}

function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = 'block';

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetToHome() {
    currentState = {
        college: null,
        branch: null,
        semester: null,
        breadcrumb: []
    };

    hideAllSections();
    updateBreadcrumb();
    renderColleges();
    showSection('college-section');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);
