const baseUrl = "https://swapi.co/api";
const cors = "https://cors-anywhere.herokuapp.com/";
export const StarWars = {
  getAllPeople() {
    return fetch(`${cors}${baseUrl}/people/`, {
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
		return fetch(`${cors}${baseUrl}/people/${idPeople}`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
		
	},
}