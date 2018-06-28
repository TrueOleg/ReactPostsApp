class List {
    static createList(data) {
        this.clearList();
        data.forEach(element => {
            //user
            var user = document.createElement('li');
            user.className = 'user';
            user.textContent = element.name;
            user.id = element.id;
            
            element.followerid === null 
            ? user.addEventListener('click', subscribing)
            : user.addEventListener('click', unsubscribing);
            let star = document.createElement('img');
            star.src = '../home/img/icons8-звезда-50.png';
            element.followerid !== null 
            ? star.style.background = 'red'
            : star.style.background = '';
            star.id = element.id;
            user.appendChild(star);
            document.getElementById('list').appendChild(user);
            document.getElementById('list').style.display = 'block';
        });
       
    }

    static clearList  () {
        let list = document.getElementById('list');
        while (list.firstChild) {
        list.removeChild(list.firstChild);
        }
    }
}
