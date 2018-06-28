class Post {
    static showForm () {
        PostRow.clearPost();
        document.getElementById('newPost').style.display = (document.getElementById('newPost').style.display === 'none') ? 'block' : 'none'
    }

    static createPost () {
        var title = document.getElementById('title').value;
        var content = document.getElementById('content').value;

        Api.post('/api/posts', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, content}),
        })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.result === true) {
                PostRow.clearForm();
            }
        })  
        .catch(err => {
            console.log(err.message);
        }) 
    };

    static showAllPost () {

        Api.get('/api/posts', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }   
        })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.result === true) {
                PostRow.createPostRow(res); 
            }
        })  
        .catch(err => {
            console.log(err.message);
        }) 
    };

    static showMyPost () {

        Api.get('/api/posts/:id', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }   
        })
        .then(response => {
            return response.json()
        })
        .then(res => {
            if (res.result === true) {
                PostRow.createPostRow(res); 
            }
        })  
        .catch(err => {
            console.log(err.message);
        }) 
    }
};





