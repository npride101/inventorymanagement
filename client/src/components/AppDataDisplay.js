import React, { Component } from 'react';
import { Table } from "reactstrap";
import axios from 'axios'
function AppDataDisplay() {
    axios.get('http://localhost:5000/api/entries')
    .then(console.log("fsfmas oi"))
    .catch(error => console.log(error));    
    
    return (
       
    <Table>
        <thead>
            <tr>
                <th>
                    #
                </th>
                <th>
                    First Name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Username
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">
                    1
                </th>
                <td>
                    Mark
                </td>
                <td>
                    Otto
                </td>
                <td>
                    @mdo
                </td>
            </tr>
            <tr>
                <th scope="row">
                    2
                </th>
                <td>
                    Jacob
                </td>
                <td>
                    Thornton
                </td>
                <td>
                    @fat
                </td>
            </tr>
            <tr>
                <th scope="row">
                    3
                </th>
                <td>
                    Larry
                </td>
                <td>
                    the Bird
                </td>
                <td>
                    @twitter
                </td>
            </tr>
        </tbody>
    </Table>
    );
}

function getData() {

}

export default AppDataDisplay;