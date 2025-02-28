const users = [
    {name: "Alexis Islas", username: "Alexis", password: "1234564789", image: "https://scontent.fpbc2-4.fna.fbcdn.net/v/t39.30808-6/454238825_2452558404944446_6678225962363521682_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=9XVXl8mi3LUQ7kNvgH48mYu&_nc_oc=AdjMujaAP6l1wIaNOG5REZS8TVdUV6mMWceoiVG4k8fSy7K82A_gayBoEQj7ZrD-OEEpnsybnTZ0y2iOi81aNaD9&_nc_zt=23&_nc_ht=scontent.fpbc2-4.fna&_nc_gid=A7UaSmv1fi1o_7gD1H7Bfop&oh=00_AYAlVYGHfiWaN5UJyTkGd0FSNWDOzJ8dVRGCA7tuxJPFtw&oe=67C6E141"},
    {name: "Dayane Lucia", username: "Dayane", password: "910111213", image: "https://scontent.fpbc2-6.fna.fbcdn.net/v/t39.30808-6/460893372_8304761852912617_60076736523938887_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DUAx93UlS3gQ7kNvgEDDMVX&_nc_oc=Adh5EoMkRgFSsqrHmQfbPbsmbPt2Ja8B-M-2ffjVC1YBqOautU0EUrF5O3EbjLbtdgYRb-BI5lXLYPgb4f2HJkHO&_nc_zt=23&_nc_ht=scontent.fpbc2-6.fna&_nc_gid=AYG1O0as0PHRn4CPAHWHJRL&oh=00_AYBAAK8wqhttbKY8K_Srdy_YrZwfB7CnYNGXpbxUZF1GoA&oe=67C6F941"},
    {name: "Luis Angel", username: "Luis", password: "1415161718", image: "https://scontent.fpbc2-2.fna.fbcdn.net/v/t39.30808-6/453539858_7911297382293063_1263915833966683756_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mF5MLHZ5LrMQ7kNvgFLnd68&_nc_oc=AdhL2-Z1nEeWprenL7KENunOXCnXm1xU1LTZT1EOdml9TIv1m2CXvwMrGZh2iCTweF5CCEhz6d91AlEEqjxJ1h5G&_nc_zt=23&_nc_ht=scontent.fpbc2-2.fna&_nc_gid=Ai-GuIGb9HK_8IwoOhADC_i&oh=00_AYD7tUpsI1YnAhybaJ_Wz8nCJ24eP4D3qGujJdjEL6QL_g&oe=67C6D2EB"}
  ];

  function logIn() {
    const usernamePage = document.getElementById('username').value.trim();
    const passwordPage = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    const userFind = users.find(user => user.username === usernamePage && user.password === passwordPage);

    if (userFind) {
        localStorage.setItem("loggedUser", JSON.stringify(userFind));
        window.location.href = "home.html";
    } else {
        error.textContent = "Usuario o contraseña incorrecta";
    }
}

