const baseUrl = "https://swapi.co";

export const Starwars = {
  getAllPeople() {
    return fetch(`${baseUrl}/people`, {
			method: 'GET',
		})
		.then(response => {
			return response.json()
		})
  }
}