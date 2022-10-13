import ShipmentDetails from './ShipmentDetails';
// function ShipmentDetail(props) {
//    return <td className=''>{props.shipmentDetail}</td>;
// }

function Button(props) {
  return <button className='' onClick={props.eventHandler}>{props.buttonText}</button>;
}

function Shipment({ orderNo, date, customer, trackingNo, status, consignee, allShipments, setShipmentsList }) {
  const handleUpdate = () => {
    return(
      <ShipmentDetails
        orderNo={orderNo}
        date={date}
        customer={customer}
        trackingNo={trackingNo}
        status={status}
        consignee={consignee}
        allShipments={allShipments}
        updateShipment={setShipmentsList}
    />
    );
  };

  const handleDelete = () => {
    const filteredShipments = allShipments.filter(shipment => shipment.orderNo !== orderNo);
    setShipmentsList(filteredShipments);
    console.log('All shipments', allShipments.length)
    console.log('Shipment after filtering', filteredShipments.length);
    console.log(filteredShipments);
  };

  const shipmentDetailsRow = (
    <tr>
      <td>{orderNo}</td>
      <td>{date}</td>
      <td>{customer}</td>
      <td>{trackingNo}</td>
      <td>{status}</td>
      <td>{consignee}</td>
      <td>
        { <Button buttonText={'Update'} eventHandler={handleUpdate} /> }
        { <Button buttonText={'Delete'}  eventHandler={handleDelete} /> }
      </td>
    </tr>
  );

  return (
    shipmentDetailsRow 
  );
}


export default Shipment;




  



