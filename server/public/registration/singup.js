document.getElementById('submitReg').addEventListener('click', submitRegistration);

function submitRegistration(event) {

    event.preventDefault();
    var regLogin = document.getElementById('regLogin').value;
    var regPass = document.getElementById('regPass').value;
    var regEmail = document.getElementById('regEmail').value;
    
    Api.post('/api/singup', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({regLogin:regLogin, regPass:regPass, regEmail:regEmail}),
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        console.log(res);
        return res.result === true 
        ? document.location.assign('/api/singin') 
        : alert(res.message);
    })  
    .catch(err => {
        console.log(err.message);
    })   
}