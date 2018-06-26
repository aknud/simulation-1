import React, {Component} from 'react';
import Product from './../Product/Product';

export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            products: props.list
        }
    }

    render(){
        let productItems = this.props.list.map((item) => {
            return (
                <div key={item.id}>
                    <img src={item.img_url} alt="this is a btw"/>
                    <h3>{item.names}</h3> 
                    <h3>{item.price}</h3>
                </div>
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                {/* <h6>{productItems}</h6> */}
                <h3><Product items={productItems}/></h3>
            </div>
        )
    }
}