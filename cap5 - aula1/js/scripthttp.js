let url = 'https://api.github.com/users/goncasthiago'
window.addEventListener('load', () => {

    fetch(url).then(res => {
        res.json().then(data => {
            showData(data);
        });
    });

});

function showData(data){
    const user = document.querySelector('#user');
    user.textContent = `Usuário: ${data.login} - Nome: ${data.name}`;
}
