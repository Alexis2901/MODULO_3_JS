function postComment() {
    const commentText = document.getElementById('comment').value;
    const commentSection = document.getElementById('comment-section');
    const userName = JSON.parse(localStorage.getItem("loggedUser"));
    const fecha = new Date().toLocaleString();

    if (commentText.trim() === "") {
        alert("El comentario no puede ir vacío");
        return;
    }

    const comentarioSection = document.createElement("section");
    comentarioSection.classList.add("comentario");
    comentarioSection.innerHTML = `<strong>${userName}</strong> - ${fecha} <br> ${commentText}`;

    commentSection.appendChild(comentarioSection);
    document.getElementById('comment').value = "";
}
