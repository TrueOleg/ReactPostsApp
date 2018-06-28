class PostRow {
    static createPostRow(res) {
        if (document.getElementById('newPost').style.display === 'block') {
            document.getElementById('newPost').style.display = 'none'
        }
        
        this.clearPost();
        res.posts.forEach(element => {
            let postRow = document.createElement('li');
            let title = document.createElement('h1');
            title.textContent = element.title;
            postRow.appendChild(title);
            let content = document.createElement('p');
            content.textContent = element.content;
            postRow.appendChild(content);
            let author = document.createElement('p');
            author.textContent = element.name;
            postRow.appendChild(author);
            let date = document.createElement('p');
            date.textContent = element.date;
            postRow.appendChild(date);
            document.getElementById('myPost').appendChild(postRow);
            document.getElementById('myPostCont').style.display = 'block';
        })
    }

    static clearPost() {
        let postList = document.getElementById('myPost');
        
            while (postList.firstChild) {
                postList.removeChild(postList.firstChild);
                } 
    }

    static clearForm() {
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        document.getElementById('newPost').style.display = 'none';
    }
}
