import React from 'react';
import {Link} from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    console.log (props.match.params.id);
    const allProducts = data.Zaraproducts.concat(data.Stormproducts);
    const product =  allProducts.find(x => x._id === props.match.params.id)
    // const productt =  data.Stormproducts.find(x => x._id === props.match.params.id);
    return (
        <div>
        <div className="container">
            <div className="row">
                <div className="">
                    <div className="">
                        <div className="back-home">
                            <Link to="/">Back Home</Link>
                        </div>
                    </div>  
                    <div className="">      
                        <div className="details">
                            <div className="details-image">
                            
                                <img src={product.image} alt="product"></img>
                            </div>
                            <div className="details-info">
                                    <Link>
                                        <h4>{product.name}</h4>    
                                    </Link>
                                    <Link>
                                        {product.rating} Stars ({product.numReviews} Reviews)
                                    </Link>
                                    <Link>
                                        Price: <b>${product.price}</b>
                                    </Link>
                                    <Link>
                                        Description:
                                        <div>
                                            {product.description}
                                        </div>
                                    </Link>
                            </div>
                        </div>
                        <div className="">            
                            <div className="details-action">
                                    <Link>Price: {product.price}</Link>
                                    <br/>
                                    <Link>Status: {product.status}</Link>
                                    <br/>
                                    <Link>
                                        Qty: <select>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </Link>
                                    <br/>
                                    <br/>
                                    <Link><button className="button">Add to Cart</button></Link>
                            </div>
                        </div>
                 </div>
            </div>
           </div>          
    </div>  


            
    </div>   
    ) 
}
export default ProductScreen;