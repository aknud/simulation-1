import React, { Component } from 'react';

export default class Form extends Component {
    constructor() {
        super();

        this.state = {
            img_url: '',
            product_name: '',
            price: ''
        }

        this.updateImg = this.updateImg.bind(this);

    }

    updateImg(val) {
        this.setState({
            img_url: val
        })
        console.log(this.state.img_url)
    }
    updateName = (val) => {
        this.setState({
            product_name: val
        })
        console.log(this.state.product_name)
    }
    updatePrice = (val) => {
        this.setState({
            price: val
        })
        console.log(this.state.price)
    }

    cancelFn = () => {
        this.setState({
            img_url: '',
            product_name: '',
            price: ''
        })
    }

    render() {
        return (
            <div className="form">
                <h1>Form</h1>
                <div className="img_input">
                    <input type="text" onChange={event => this.updateImg(event.target.value)} value={this.state.img_url} placeholder="image URL:" />
                </div>
                <div className="product_name">
                    <input type="text" onChange={event => this.updateName(event.target.value)} value={this.state.product_name} placeholder="Product Name:" />
                </div>
                <div className="price">
                    <input type="text" onChange={event => this.updatePrice(event.target.value)} value={this.state.price} placeholder="Price:" />
                </div>

                <button onClick={() => this.cancelFn()} >Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}