import React from 'react';
import {Link} from 'react-router-dom'
let products=[{id:1,name:"product1",rate:50,quality:1},{id:1,name:"product2",rate:100,quality:1},{id:3,name:"product3",rate:20,quality:3},{id:4,name:"product4",rate:10,quality:2}];

class Dashboard extends React.Component {

    deleteProducts=(id)=>{
        products.slice(id)
    }

    AddProducts=()=>{
        products.push();
    }

    render() {
        const {state}=this.props.history.location;
        return (
            <div>
            <h1>Hello {state.username}</h1>

            {products.map((el,idx)=>{
                return(
                    <div key={idx}>
                        <ul >
                        <li>{el.id}</li>
                        <li>{el.name}</li>
                        <li>{el.quality}</li>
                        <li>{el.rate}</li>
                    </ul>
                    <Link to={()=>this.deleteProducts(el.id)}>Delete Product</Link>
                    </div>

                )

            })
        }
            
            </div>
            )
    }
}

export default Dashboard;