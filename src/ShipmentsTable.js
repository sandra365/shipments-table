import './App.css';
import Shipment from './Shipment';

function ShipmentsTable(props) {
  const data = props.data;
  console.log(data);
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