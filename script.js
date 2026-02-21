// Initial Job Data
let jobs = [
    {
        id: 1, companyName: "Mobile First Corp", position: "React Native Developer",
        location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", status: "NOT APPLIED",
        description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    },
    {
        id: 2, companyName: "WebFlow Agency", position: "Web Designer & Developer",
        location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", status: "NOT APPLIED",
        description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends."
    },
    {
        id: 3, companyName: "DataViz Solutions", position: "Data Visualization Specialist",
        location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", status: "NOT APPLIED",
        description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking."
    },
    {
        id: 4, companyName: "CloudFirst Inc", position: "Backend Developer",
        location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", status: "NOT APPLIED",
        description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure."
    },
    {
        id: 5, companyName: "Innovation Labs", position: "UI/UX Engineer",
        location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", status: "NOT APPLIED",
        description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required."
    },
    {
        id: 6, companyName: "MegaCorp Solutions", position: "JavaScript Developer",
        location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", status: "NOT APPLIED",
        description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities."
    },
    {
        id: 7, companyName: "StartupXYZ", position: "Full Stack Engineer",
        location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", status: "NOT APPLIED",
        description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included."
    },
    {
        id: 8, companyName: "TechCorp Industries", position: "Senior Frontend Developer",
        location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", status: "NOT APPLIED",
        description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects."
    }
];

let activeTab = "All";

// DOM Elements
const jobsContainer = document.getElementById('jobs-container');
const totalCountEl = document.getElementById('total-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');
const tabCountEl = document.getElementById('tab-count');
const tabButtons = document.querySelectorAll('.tab-btn');

// Update Dashboard Counts
function updateDashboard() {
    const total = jobs.length;
    const interview = jobs.filter(job => job.status === "INTERVIEW").length;
    const rejected = jobs.filter(job => job.status === "REJECTED").length;

    totalCountEl.textContent = total;
    interviewCountEl.textContent = interview;
    rejectedCountEl.textContent = rejected;
}

// Render Job Cards based on active tab
function renderJobs() {
    // Filter jobs
    const filteredJobs = jobs.filter(job => {
        if (activeTab === "All") return true;
        if (activeTab === "Interview") return job.status === "INTERVIEW";
        if (activeTab === "Rejected") return job.status === "REJECTED";
    });

    tabCountEl.textContent = filteredJobs.length;
    jobsContainer.innerHTML = '';

    // Empty State
    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="bg-white p-12 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
                <svg class="w-16 h-16 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
                <h3 class="text-xl font-bold text-slate-800 mb-1">No jobs available</h3>
                <p class="text-slate-500 text-sm">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }

    // Render Cards
    filteredJobs.forEach(job => {
        const isInterview = job.status === "INTERVIEW";
        const isRejected = job.status === "REJECTED";
        
        // Dynamic status badge styling
        let statusBadgeClass = "bg-slate-100 text-slate-600";
        if (isInterview) statusBadgeClass = "bg-emerald-100 text-emerald-700";
        if (isRejected) statusBadgeClass = "bg-rose-100 text-rose-700";

        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative transition-all";
        
        card.innerHTML = `
            <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-slate-400 hover:text-rose-500 transition-colors" title="Delete Job">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
            </button>
            
            <h3 class="text-lg font-bold text-slate-900">${job.companyName}</h3>
            <p class="text-slate-600 text-sm mb-2">${job.position}</p>
            
            <div class="flex items-center space-x-2 text-xs text-slate-500 mb-4">
                <span>${job.location}</span>
                <span>•</span>
                <span>${job.type}</span>
                <span>•</span>
                <span>${job.salary}</span>
            </div>

            <span class="inline-block px-2.5 py-1 rounded text-xs font-semibold tracking-wide mb-4 ${statusBadgeClass}">
                ${job.status}
            </span>

            <p class="text-sm text-slate-600 mb-6 leading-relaxed">
                ${job.description}
            </p>

            <div class="flex space-x-3">
                <button onclick="updateStatus(${job.id}, 'INTERVIEW')" 
                    class="px-4 py-1.5 text-sm font-medium rounded border transition-colors ${isInterview ? 'bg-emerald-500 text-white border-emerald-500' : 'text-emerald-600 border-emerald-500 hover:bg-emerald-50'}">
                    INTERVIEW
                </button>
                <button onclick="updateStatus(${job.id}, 'REJECTED')" 
                    class="px-4 py-1.5 text-sm font-medium rounded border transition-colors ${isRejected ? 'bg-rose-500 text-white border-rose-500' : 'text-rose-600 border-rose-500 hover:bg-rose-50'}">
                    REJECTED
                </button>
            </div>
        `;
        jobsContainer.appendChild(card);
    });
}

// Action: Update Status (Toggle handled implicitly)
window.updateStatus = function(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    if (jobIndex > -1) {
        // If clicking the same status, toggle it off back to NOT APPLIED
        if (jobs[jobIndex].status === newStatus) {
            jobs[jobIndex].status = "NOT APPLIED";
        } else {
            jobs[jobIndex].status = newStatus;
        }
        updateDashboard();
        renderJobs();
    }
};

// Action: Delete Job
window.deleteJob = function(id) {
    jobs = jobs.filter(j => j.id !== id);
    updateDashboard();
    renderJobs();
};

// Tab Switching Logic
tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update active class
        tabButtons.forEach(b => {
            b.className = "tab-btn px-4 py-1.5 text-sm font-medium rounded-md bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 transition-colors";
        });
        e.target.className = "tab-btn active px-4 py-1.5 text-sm font-medium rounded-md bg-blue-600 text-white transition-colors";
        
        activeTab = e.target.getAttribute('data-tab');
        renderJobs();
    });
});

// Initialize App
updateDashboard();
renderJobs();