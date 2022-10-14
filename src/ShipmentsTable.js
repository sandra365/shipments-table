import './App.css';
import './index.css';
import Shipment from './Shipment';

function ShipmentsTable({ shipmentsList, setShipmentsList, setIsFormVisible, handleDelete, handleFormUpdate }) {
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
          key={orderNo}
          orderNo={orderNo}
          date={date}
          customer={customer}
          trackingNo={trackingNo}
          status={status}
          consignee={consignee}
          setShipmentsList={setShipmentsList}
          handleFormUpdate={handleFormUpdate}
          handleDelete={handleDelete}
          setIsFormVisible={setIsFormVisible}
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
