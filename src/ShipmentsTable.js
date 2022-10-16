import './App.css';
import Shipment from './Shipment';

function ShipmentsTable({ shipmentsList, handleDelete, handleFormUpdate }) {
  const shipmentsTableHeader = (
    <thead>
      <tr>
        <th className='text-uppercase text-secondary text-xs font-weight-bolder px-1'>order</th>
        <th className='text-uppercase text-secondary text-xs font-weight-bolder px-1'>deliverytime</th>
        <th className='text-uppercase text-secondary text-xs font-weight-bolder px-1'>customer</th>
        <th className='text-uppercase text-secondary text-xs font-weight-bolder px-1'>tracking</th>
        <th className='text-uppercase text-secondary text-xs font-weight-bolder px-1'>status</th>
        <th className='text-uppercase text-secondary text-xs font-weight-bolder px-1'>consignee</th>
        <th className='text-xs'></th>
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
          handleFormUpdate={handleFormUpdate}
          handleDelete={handleDelete}
        />
      );
    })
  );
    
  return (
    <table className='shipments-table table align-items-center'>
      {shipmentsTableHeader}
      <tbody className='text-xs'>
        {shipmentComponentsList}
      </tbody>
    </table>
  );
}

export default ShipmentsTable;
