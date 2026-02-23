// DOM Elements
const jobsContainer = document.getElementById('jobs-container');
const totalCountEl = document.getElementById('total-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');
const tabCountEl = document.getElementById('tab-count');

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
    // Filter jobs based on active tab
    const filteredJobs = jobs.filter(job => {
        if (activeTab === "All") return true;
        if (activeTab === "Interview") return job.status === "INTERVIEW";
        if (activeTab === "Rejected") return job.status === "REJECTED";
    });

    // Update job count
    tabCountEl.textContent = filteredJobs.length;
    jobsContainer.innerHTML = '';

    // Empty State
    if (filteredJobs.length === 0) {
        jobsContainer.innerHTML = `
            <div class="col-span-2 empty-state p-16 flex flex-col items-center justify-center text-center fade-in">
                <div class="w-24 h-24 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                    <i class="fas fa-search text-4xl text-purple-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-800 mb-2">No jobs available</h3>
                <p class="text-gray-500 text-lg mb-6">Check back soon for new job opportunities</p>
                <button onclick="activeTab='All'; renderJobs();" class="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                    <i class="fas fa-sync-alt mr-2"></i>View All Jobs
                </button>
            </div>
        `;
        return;
    }

    // Render each job card
    filteredJobs.forEach((job, index) => {
        const isInterview = job.status === "INTERVIEW";
        const isRejected = job.status === "REJECTED";
        
        // Set status badge class and icon
        let statusBadgeClass = "badge-not-applied";
        let statusIcon = "fa-clock";
        
        if (isInterview) {
            statusBadgeClass = "badge-interview";
            statusIcon = "fa-calendar-check";
        }
        if (isRejected) {
            statusBadgeClass = "badge-rejected";
            statusIcon = "fa-times-circle";
        }

        // Create job card element
        const card = document.createElement('div');
        card.className = `job-card p-6 fade-in`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        // Card HTML content
        card.innerHTML = `
            <div class="flex justify-between items-start mb-4">
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-900 mb-1">${job.companyName}</h3>
                    <p class="text-purple-600 font-semibold flex items-center">
                        <i class="fas fa-briefcase mr-2 text-sm"></i>
                        ${job.position}
                    </p>
                </div>
                <button onclick="deleteJob(${job.id})" class="delete-btn w-8 h-8 bg-rose-100 rounded-lg flex items-center justify-center text-rose-600 hover:bg-rose-200 transition-all" title="Delete Job">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            
            <div class="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                <span class="flex items-center"><i class="fas fa-map-marker-alt text-gray-400 mr-1"></i>${job.location}</span>
                <span class="flex items-center"><i class="fas fa-clock text-gray-400 mr-1"></i>${job.type}</span>
                <span class="flex items-center"><i class="fas fa-dollar-sign text-gray-400 mr-1"></i>${job.salary}</span>
            </div>

            <div class="mb-4">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusBadgeClass}">
                    <i class="fas ${statusIcon} mr-1"></i>
                    ${job.status}
                </span>
            </div>

            <p class="text-sm text-gray-600 mb-6 leading-relaxed border-l-2 border-gray-200 pl-4">
                "${job.description}"
            </p>

            <div class="flex space-x-3">
                <button onclick="updateStatus(${job.id}, 'INTERVIEW')" 
                    class="action-btn flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg border-2 transition-all ${isInterview ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-emerald-600 border-emerald-500 hover:bg-emerald-500 hover:text-white'}">
                    <i class="fas fa-check-circle mr-1"></i>INTERVIEW
                </button>
                <button onclick="updateStatus(${job.id}, 'REJECTED')" 
                    class="action-btn flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg border-2 transition-all ${isRejected ? 'bg-rose-500 text-white border-rose-500' : 'bg-white text-rose-600 border-rose-500 hover:bg-rose-500 hover:text-white'}">
                    <i class="fas fa-times-circle mr-1"></i>REJECTED
                </button>
            </div>
        `;
        
        jobsContainer.appendChild(card);
    });
}