import React, { Component } from 'react';
import receipthead from './receipthead';
// import {render} from 'react-dom';
import Receipthead from './receipthead';
import './style.css';

class Receipt extends Component {
    constructor() {
        super();
        this.state = { 
            name: 'Printer'
         };
    }
    printReceipt() {
        window.print();
    }
    
    render() { 
        return ( 
            <div className="container-fluid table-striped mt-3">
                <div className="row">
                    <h2><Receipthead name={this.state.name}/></h2>
                        <table className="print-receipt table table-bordered">
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Contact</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alfred</td>
                                    <td>futtrt</td>
                                    <td>feoduvjn</td>
                                </tr>
                                <tr>
                                    <td>Alfred</td>
                                    <td>futtrt</td>
                                    <td>feoduvjn</td>
                                </tr>
                                <tr>
                                    <td>Alfred</td>
                                    <td>futtrt</td>
                                    <td>feoduvjn</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="hide-on-print" onClick={this.printReceipt}>Print</button>
                  </div>      
            </div>
         );
    }
}
 
export default Receipt;