import './App.css';
import Shipment from './Shipment';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {hardcodedData} from './data.js';

function ShipmentsTable() {
  const [shipmentsList, setShipmentsList] = useState(hardcodedData);
  console.log('Shipments from ShipmentsTable', shipmentsList);
  //const apiURL = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await axios.get(apiURL);
  //     setShipmentsList(data);
  //   };
  //   getData();
  // }, []);

  //const shipments = shipmentsList.data ? shipmentsList.data : hardcodedData;//is it necessary/how to rewrite

  const shipmentsTableHeader = (
    <thead>
      <tr>
        <td>ORDERNO</td>
        <td>DELIVERYDATE</td>
        <td>CUSTOMER</td>
        <td>TRACKINGINFO</td>
        <td>STATUS</td>
        <td>CONSIGNEE</td>
        <td></td>
      </tr>
    </thead>
  );

  const shipmentComponentsList = (
    shipmentsList.map(({ orderNo, date, customer, trackingNo, status, consignee }) => {
      return (
        <Shipment 
          key={orderNo} //is it necessary here and where to use keys at all?
          orderNo={orderNo}
          date={date}
          customer={customer}
          trackingNo={trackingNo}
          status={status}
          consignee={consignee}
          allShipments={shipmentsList}
          deleteShipment={setShipmentsList}
        />
      );
    })
  );
    
  return (
    <div className="shipments-table-container">
      <table className="shipments-table">
        {shipmentsTableHeader}
        <tbody>
          {shipmentComponentsList}
        </tbody>
      </table>
    </div>
  );
}

export default ShipmentsTable;


// shipments.map(shipmentDetails => {
//   return (
//   <Shipment 
//     key={shipmentDetails.orderNo} //is it necessary here and where to use keys at all?
//     allShipments={shipments}
//     shipmentDetails={shipmentDetails} //plus another prop for manipulating state
//     deleteShipment={setShipmentsList}
//   />)
// })