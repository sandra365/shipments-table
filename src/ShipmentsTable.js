import './App.css';
import './index.css';
import Shipment from './Shipment';

function ShipmentsTable({ shipmentsList, setShipmentsList }) {
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
          setShipmentsList={setShipmentsList}
        />
      );
    })
  );
    
  return (
    <table className='shipments-table'>
      {shipmentsTableHeader}
      <tbody>
        {shipmentComponentsList}
      </tbody>
    </table>
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