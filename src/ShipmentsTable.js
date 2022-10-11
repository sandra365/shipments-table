import './App.css';
import Shipment from './Shipment';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {hardcodedData} from './data.js';

function ShipmentsTable() {
  const [fetchedData, setFetchedData] = useState([]);
  const apiURL = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(apiURL);
      setFetchedData(data);
    };
    getData();
  }, []);

  const data = fetchedData.data ? fetchedData.data : hardcodedData;

  const shipmentsTableHeader = (
    <thead className=''>
      <tr className=''>
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

  return (
    <div className="ShipmentsTableContainer">
      <table className="ShpimentsTable">
        {shipmentsTableHeader}
        <tbody className=''>
          {
            data.map(shipmentInfo => {
              return <Shipment key={shipmentInfo.orderNo} shipmentInfo={shipmentInfo} />
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default ShipmentsTable;


// props.data.forEach(shipmentInfo => {
//   return (
//     <tr>
//       <td>
//         <Shipment shipmentInfo={shipmentInfo} />
//       </td>
//     </tr>
//   )
// })