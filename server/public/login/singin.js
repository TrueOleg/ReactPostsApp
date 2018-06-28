document.getElementById('singIn').addEventListener('click', submit);






function submit(event) {

    event.preventDefault();
    var login = document.getElementById('login').value;
    var password = document.getElementById('pass').value;
    Api.post('/api/singin', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login, password}),
    })
    .then(response => {
        return response.json()
       })
    .then(res => {
        console.log(res);
        Token.setToken(res.token);

        if (res.result === true) {
            document.location.assign('/home')
        } else {
            alert(res.message)
        }
    })  
    .catch(err => {
        console.log(err.message);
    })   
}

