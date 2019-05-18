import React from 'react';
import { Link } from "react-router-dom";

export const ListPeopleRow = (props) => {
    return (

        <tbody>
            {props.listPeople.map(people => {
                let id = people.url.substring(28, people.url.length-1);
                return (
                    <tr key={id}>
                        <td>{people.name}</td>
                        <td>{people.gender}</td>
                        <td>
                            <Link to={`/detail/${id}`} className="btn btn-sm btn-info" >Detail</Link>
                        </td>
                        
                    </tr>
                )
            })}
        </tbody>
    )
}