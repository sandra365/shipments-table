import './App.css';
import './index.css';
import Shipment from './Shipment';

function ShipmentsTable({ shipmentsList, setShipmentsList, setIsFormVisible, handleDelete, handleFormUpdate }) {
  const shipmentsTableHeader = (
    <thead>
      <tr>
        <th className='text-uppercase text-secondary text-xs font-weight-bolder'>order</th>
        <th className='text-uppercase text-secondary text-xs font-weight-bolder'>deliverytime</th>
        <th>customer</th>
        <th>tracking</th>
        <th>status</th>
        <th>consignee</th>
        <th></th>
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
    <table className='shipments-table table align-items-center mb-0'>
      {shipmentsTableHeader}
      <tbody>
        {shipmentComponentsList}
      </tbody>
    </table>
  );
}

export default ShipmentsTable;
