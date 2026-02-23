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

// Data utility functions
function getJobs() {
    return jobs;
}

function updateJobsData(newJobs) {
    jobs = newJobs;
}

function getActiveTab() {
    return activeTab;
}

function setActiveTab(tab) {
    activeTab = tab;
}