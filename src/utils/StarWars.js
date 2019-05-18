const baseUrl = "https://swapi.co/api/people/";
const cors = "https://cors-anywhere.herokuapp.com/";
export const StarWars = {
  getAllPeople(page) {
    return fetch(`${cors}${baseUrl}?page=${page}`, {
			method: 'GET',
		})
		.then(response => {
			return response.json();
		})
		.catch(error => {
			console.log(error);
		})
	},
	getDetailPeople(idPeople) {
		return fetch(`${cors}${baseUrl}${idPeople}`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		
	},
}