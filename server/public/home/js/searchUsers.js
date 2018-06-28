

var userSearch = debounce(function() {
	let searchValue = document.getElementById('search').value;
	if (searchValue !== '') {
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
	} else {
		List.clearList();
	}
	
}, 1000);

