// Update job status
window.updateStatus = function(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    if (jobIndex > -1) {
        // Toggle status if same button clicked
        if (jobs[jobIndex].status === newStatus) {
            jobs[jobIndex].status = "NOT APPLIED";
        } else {
            jobs[jobIndex].status = newStatus;
        }
        updateDashboard();
        renderJobs();
    }
};

// Delete job
window.deleteJob = function(id) {
    jobs = jobs.filter(j => j.id !== id);
    updateDashboard();
    renderJobs();
};

// Tab switching logic
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all tabs
        tabButtons.forEach(b => {
            b.className = "tab-btn px-6 py-2.5 text-sm font-semibold rounded-lg bg-white text-gray-700 border border-gray-200";
        });
        // Add active class to clicked tab
        e.target.className = "tab-btn active px-6 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg";
        
        // Update active tab and re-render
        activeTab = e.target.getAttribute('data-tab');
        renderJobs();
    });
});

// Initialize app
updateDashboard();
renderJobs();