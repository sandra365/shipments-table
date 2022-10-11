function ShipmentDetail(props) {
   return <td className=''>{props.shipmentDetail}</td>;
}

function Button(props) {
  return <button className=''>{props.buttonText}</button>;
}

function Shipment(props) {
  const shipmentInfoArr = Object.values(props.shipmentInfo);
  const shipmentInfoCells = (
    shipmentInfoArr.map((shipmentDetail, index) => {
      return <ShipmentDetail key={index} shipmentDetail={shipmentDetail} />;
    })
  );//?? naming here
  const buttonsCell = (
    <td>
      { <Button buttonText={'Update'} /> }
      { <Button buttonText={'Delete'} /> }
    </td>
  );//?? naming here


  return (
    <tr>
      {shipmentInfoCells}
      {buttonsCell}
    </tr>
  );
}


export default Shipment;
