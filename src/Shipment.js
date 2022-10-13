// function ShipmentDetail(props) {
//    return <td className=''>{props.shipmentDetail}</td>;
// }

function Button(props) {
  return <button className='' onClick={props.eventHandler}>{props.buttonText}</button>;
}

function Shipment({ orderNo, date, customer, trackingNo, status, consignee, allShipments, deleteShipment }) {
  const handleDelete = () => {
    //grab current component and delete in from all components array, then update state
    const filteredShipments = allShipments.filter(shipment => shipment.orderNo !== orderNo);
    deleteShipment(filteredShipments);
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
        { <Button buttonText={'Update'} /> }
        { <Button buttonText={'Delete'}  eventHandler={handleDelete} /> }
      </td>
    </tr>
  );

  


  return (
    shipmentDetailsRow 
  );
}


export default Shipment;


//decide on object destructuring usage
//add delete function
//rewrite button rendering

// onClick={handleDelete}
// const handleDelete = () => {
//   const filteredShipments = props.allShipments.filter(shipment => {
//     shipment.orderNo !== props.shipmentDetails.orderNo;
//   });
//   props.deleteShipment(filteredShipments);
// };


// function Shipment(props)) {
//   const shipmentDetailsArr = Object.values(props.shipmentDetails);
//   const shipmentDetailsCells = (
//     shipmentDetailsArr.map((shipmentDetail, index) => {
//       return <ShipmentDetail key={index} shipmentDetail={shipmentDetail} />; //fing better option for key
//     })
//   );//?? naming here
//   const buttonsCell = (
//     <td>
//       { <Button buttonText={'Update'} /> }
//       { <Button buttonText={'Delete'}  /> }
//     </td>
//   );//?? naming here

  

//   return (
//     <tr>
//       {shipmentDetailsCells}
//       {buttonsCell}
//     </tr>
//   );
// }


// { <Button buttonText={'Delete'}  onClick={handleDelete} /> }

