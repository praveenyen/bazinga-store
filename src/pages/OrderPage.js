import React, { Component } from 'react'
import API from '../API.js'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {},
            isUpdated: false,
            formControls: {
                email: {
                    value: ''
                },
                phone: {
                    value: ''
                }
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        API.get(`/orders/${this.props.match.params.id}`).then(response => response.data)
            .then(
                (data) => {
                    this.setState({ order: data })
                }
            )
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        API.patch(`/orders/${this.props.match.params.id}`,
            {
                email: this.state.formControls.email.value,
                phone: this.state.formControls.phone.value,
            }
        ).then(response => this.setState({isUpdated: true}))
    }
    myFunc=()=>{
        if(this.state.isUpdated){
            return (
                <div class="alert alert-success" role="alert">
                    Customer Data Has Been Updated!
                </div>
            )
        }
    }
    render() {
        return (
            <div className="container" >
                <div class="card">
                    <div class="card-header">
                        Customer Details - {this.state.order.id}
                    </div>
                    <div class="card-body">
                        {JSON.stringify(this.state.order.customer)}
                    </div>
                </div>
                < br />
                <div>
                    {this.myFunc()}
                </div>
                < br />
                <div class="card">
                    <div class="card-header">
                        Update the Order
                    </div>
                    <div class="card-body">
                        <form onSubmit={this.handleSubmit} >
                            <label htmlFor="email">Email:</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                value={this.state.formControls.email.value}
                                onChange={this.changeHandler}
                            />

                            <label htmlFor="phone">Number:</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                value={this.state.formControls.phone.value}
                                onChange={this.changeHandler}
                            />

                            <button type="submit" class="btn btn-primary btn-sm">Update Order!</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage