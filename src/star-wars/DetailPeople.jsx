import React from 'react';
import { Loading } from '../components/Loading';
import { StarWars } from '../utils/StarWars';
import { Link } from "react-router-dom";

export class DetailPeople extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			loading: true,
      		people:{},
		}

		StarWars.getDetailPeople(this.props.match.params.id).then(response =>{
			this.setState({
				loading: false,
				people: response,
			})
		});	
	}
	  
  
	render() {
		
        if (this.state.loading) {
            return (
                <Loading msg="Fetching Data..."/>
            )
        } else {
            return (
				<div className="detail">
					<h2>
						Detail StarWars People: {this.state.people.name}
					</h2>
					<br/><br/>
					<table className="table detail">
						 <tbody>
						 <tr>
							 <td>Name:</td>
							 <td>{this.state.people.name}</td>
						 </tr>
						 <tr>
							 <td>Gender:</td>
							 <td>{this.state.people.gender}</td>
						 </tr>
						 <tr>
							 <td>Mass:</td>
							 <td>{this.state.people.mass}</td>
						 </tr>
						 <tr>
							 <td>Height:</td>
							 <td>{this.state.people.height}</td>
						 </tr>
						 </tbody>
					 </table>
					 <div className="center">
					 	<Link to={`/`} className="btn btn-info" >Back To List</Link>	
					 </div>
				</div>
            )
        }
	}
}