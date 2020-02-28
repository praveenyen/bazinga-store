import React, { Component } from 'react'
import API from '../API.js'

class HomePage extends Component {
    state = {
        orders: []
    }

    componentDidMount() {
        API.get('/orders').then(response => response.data)
            .then(
                (data) => {
                    this.setState({ orders: data })
                    console.log(this.state.orders)
                }
            )
    }
    render() {
        return (
            <div className="container">
                <h1>All Orders</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {this.state.orders.map((order) => (

                        <tbody>
                            <tr>
                                <th scope="row">{order._id}</th>
                                <td>{order.customer.email}</td>
                                <td>{order.customer.phone}</td>
                                <td>
                                    <a class="btn btn-primary" href={`/${order._id}`} role="button">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        )
    }
}

export default HomePage