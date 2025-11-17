function login() {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;
    
    if (email && password) {
        window.location.href = 'home.html';
    } else {
        alert('Please fill in all fields');
    }
}

function showSignup() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.signup-form').style.display = 'block';
}

function showUserType() {
    document.querySelector('.signup-form').style.display = 'none';
    document.querySelector('.user-type-form').style.display = 'block';
}

function takeTask(taskId) {
    alert('Task accepted! You will receive points after completion.');
}

function requestDrone() {
    alert('Drone patrol requested! Our team will review your request.');
}

// Demo data for tasks
const tasks = [
    {
        id: 1,
        title: "Clean up park near Lenin St, 5",
        distance: "300 m",
        points: null,
        status: "available"
    },
    {
        id: 2,
        title: "Report full bin (Pushkn St, 7)",
        distance: null,
        points: 25,
        status: "in_progress"
    },
    {
        id: 3,
        title: "Remove illegal dump (Mira St, 12)",
        distance: null,
        points: 150,
        status: "available"
    }
];
