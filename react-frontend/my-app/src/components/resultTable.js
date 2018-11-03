import React, { Component } from 'react';

class TableComponent extends Component{
    constructor(props) {
    super(props);
    }

    render() {
      var results = this.props.currencyData;

      // Decorate with Bootstrap CSS
      return (
      
      <table className="table table-bordered table-hover" width="100%">
         <tbody>
             <tr><td colSpan="2">{results.date}</td></tr>
         <tr><th colSpan="2">{results.currency}</th></tr>
         <tr><th>Buy</th><th>Sell</th></tr>
         <tr>
            <td>${results.buyValue}</td>
            <td>${results.sellValue}</td>
         </tr>
         <tr>
            <td>{results.buyTime}</td>
            <td>{results.sellTime}</td>
         </tr>
         <tr>
             <td colSpan="2"> Profit: ${results.profit}</td>
        </tr></tbody>
        </table>) 
    }
}
  
 export default TableComponent;