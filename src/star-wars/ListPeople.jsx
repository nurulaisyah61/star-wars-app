import React from 'react';
import axios from 'axios';
import { ListPeopleRow } from '../components/ListPeopleRow';
import { Loading } from '../components/Loading';
import { TableContainer } from '../containers/TableContainer';
import { StarWars } from '../utils/StarWars';

export class ListPeople extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			ListPeopleStarWars: []
		}
		StarWars.getAllPeople().then(response =>{
			this.setState({
				loading: false,
				ListPeopleStarWars: response.results
			})
		})
  }
  
	render() {
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
                <TableContainer title="List People of Star-Wars" header={['People name', 'Gender', 'Action']}>
                    <ListPeopleRow listPeople={this.state.ListPeopleStarWars}/>
                </TableContainer>
            )
        }
	}
}