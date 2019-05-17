import React from 'react';
import { Link } from "react-router-dom";

export const ListPeopleRow = (props) => {
    return (
        <tbody>
            {props.listPeople.map(people => {
                return (
                    <tr key={people.url}>
                        <td>{people.name}</td>
                        <td>{people.gender}</td>
                        <td>
                            <Link to={`/people/${people.id}`} className="btn btn-info">Detail</Link>
                        </td>
                        
                    </tr>
                )
            })}
        </tbody>
    )
}