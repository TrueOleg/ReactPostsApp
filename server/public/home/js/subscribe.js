function subscribing(e) {
    let target = e.target;

	Api.post('/api/followers', {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({following: target.id})
        
		})
		.then(response => {
			return response.json()
		})
		.then(res => {
			if (res.result === true) {
				let searchValue = document.getElementById('search').value;
				Api.get(`/api/users?char=${searchValue}`, {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
				.then(response => {
					return response.json()
				})
				.then(res => {
					console.log(res);
					const users = new Users(res);
					List.createList(users.data);
				})
				.catch(err => {
					console.log(err.message);
				}) 
			}
		})  
		.catch(err => {
			console.log(err.message);
		}) 
};

function unsubscribing(e) {
    let target = e.target;

	Api.delete('/api/followers', {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({following: target.id})
        
		})
		.then(response => {
			return response.json()
		})
		.then(res => {
			if (res.result === true) {
				let searchValue = document.getElementById('search').value;
				Api.get(`/api/users?char=${searchValue}`, {
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
				.then(response => {
					return response.json()
				})
				.then(res => {
					console.log(res);
					const users = new Users(res);
					List.createList(users.data);
				})
				.catch(err => {
					console.log(err.message);
				}) 
			}
		})  
		.catch(err => {
			console.log(err.message);
		}) 
};