const users = [
    { name: "Alexis Islas", username: "Alexis", password: "12345678", image: "https://i.scdn.co/image/ab67616d0000b27349e0134c686547c28b7c999f" },
    { name: "Dayane Lucia", username: "Dayane", password: "910111213", image: "https://i.scdn.co/image/ab67616d0000b273418b13d6e2851c6a307831b4" },
    { name: "Luis Angel", username: "Angel", password: "14151617", image: "https://i.scdn.co/image/ab6761610000e5ebd1e399fd6729a5751e1f4331" }
];

function logIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage);

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        saveRecentUser(userFind.username);
        window.location.href = "home.html";
    } else {
        error.textContent = "Usuario o contraseña incorrecta";
    }
}

function saveRecentUser(username) {
    let recentUsers = JSON.parse(localStorage.getItem("recentUsers")) || [];
    if (!recentUsers.includes(username)) {
        recentUsers.push(username);
        localStorage.setItem("recentUsers", JSON.stringify(recentUsers));
    }
}

function loadRecentUsers() {
    const container = document.getElementById("recent-users");
    container.innerHTML = "";
    let recentUsers = JSON.parse(localStorage.getItem("recentUsers")) || [];

    recentUsers.forEach(username => {
        const userData = users.find(u => u.username === username);

        if (userData) {  
            const userCard = document.createElement("div");
            userCard.classList.add("user-card");

            userCard.innerHTML = `
                <img src="${userData.image}" alt="User Avatar" onerror="this.src='default-avatar.png';">
                <p><strong>${userData.name}</strong></p>
                <p>@${userData.username}</p>
                <button onclick="fillUsername('${userData.username}')">Seleccionar</button>
            `;
            container.appendChild(userCard);
        }
    });
}

function fillUsername(username) {
    document.getElementById("username").value = username;
}

window.onload = loadRecentUsers;
