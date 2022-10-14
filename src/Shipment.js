function Button(props) {
  return <button className='' onClick={props.eventHandler}>{props.buttonText}</button>;
}

function Shipment({ orderNo, date, customer, trackingNo, status, consignee, setShipmentsList, handleFormUpdate, handleDelete, setIsFormVisible }) {

  const shipmentDetailsRow = (
    <tr>
      <td>{orderNo}</td>
      <td>{date}</td>
      <td>{customer}</td>
      <td>{trackingNo}</td>
      <td>{status}</td>
      <td>{consignee}</td>
      <td>
        { <Button buttonText={'Update'} eventHandler={ () => {handleFormUpdate(orderNo)}} /> }
        { <Button buttonText={'Delete'} eventHandler={ () => {handleDelete(orderNo)} } /> }
      </td>
    </tr>
  );

  return (
    shipmentDetailsRow 
  );
}

export default Shipment;


