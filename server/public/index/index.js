document.getElementById('singIn').addEventListener('click', singIn);
document.getElementById('singUp').addEventListener('click', singUp); 


function singIn(event) {
    Api.get('/singin', {
        
    })
    .then(res => {
        document.location.assign('/singin')
    })
    .catch(err => {
        console.log(err.message);
    })     
}

function singUp(event) {
    Api.get('/singup', {
        
    })
    .then(res => {
        document.location.assign('/singup')
    })
    .catch(err => {
        console.log(err.message);
    })  
}


