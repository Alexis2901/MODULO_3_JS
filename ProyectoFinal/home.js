
document.addEventListener("DOMContentLoaded", function() {
    mostrarComentarios();
    
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", logout);
    }
});

function postComment() {
    const commentText = document.getElementById('comment').value;
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString();

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacío");
        return;
    }

    const newComment = {
        username: user.username,
        name: user.name,
        image: user.image,
        commentText: commentText,
        timestamp: fecha
    };

    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(newComment);

    localStorage.setItem('comments', JSON.stringify(comments));

    document.getElementById('comment').value = "";

    mostrarComentarios();
}

function mostrarComentarios() {
    const commentSection = document.getElementById('comment-section');
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    commentSection.innerHTML = '';

    comments.forEach((comment, index) => {
        const comentarioSection = document.createElement("section");
        comentarioSection.classList.add("comentario");
        comentarioSection.innerHTML = `<img src="${comment.image}" class="user-image"> <strong>${comment.name}</strong>  <br><p>${comment.timestamp}</p><br> ${comment.commentText}`;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function () {
            eliminarComentario(index);
        };
        
        comentarioSection.appendChild(deleteButton);
        commentSection.appendChild(comentarioSection);
    });
}

function eliminarComentario(index) {
    let comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(comments));
    mostrarComentarios();
}

function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}
