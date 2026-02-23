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