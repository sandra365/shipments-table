function Shipment({ orderNo, date, customer, trackingNo, status, consignee, handleFormUpdate, handleDelete}) {
  const updateButton = (
    <button type='button' className='btn btn-icon btn-primary mb-0 mx-1' data-bs-toggle='modal' 
      data-bs-target='#formUpdateModal' onClick={() => {handleFormUpdate(orderNo)}}>
      <span className='btn-inner--icon' role='img' aria-label='update button'>
        <i class='ni ni-badge'></i>
      </span>
    </button>
  );
  const deleteButton = (
    <button type='button' className='btn btn-icon btn-secondary mb-0 mx-1' onClick={() => {handleDelete(orderNo)}}>
      <span className='btn-inner--icon' role='img' aria-label='delete button'>
        <i className='ni ni-fat-remove text-sm'></i>
      </span>
    </button>
  );


  const shipmentDetailsRow = (
    <tr className='py-5'>
      <td>
        <div className='d-flex flex-row align-items-center px-1'>
          {orderNo}
        </div>
      </td>
      <td>
        <div className='d-flex flex-row align-items-center px-1'>
          {date}
        </div>
      </td>
      <td>
        <div className='d-flex flex-row align-items-center px-1'>
          {customer}
        </div>
      </td>
      <td>
        <div className='d-flex flex-row align-items-center px-1'>
          {trackingNo}
        </div>
      </td>
      <td>
        <div className='d-flex flex-row align-items-center px-1'>
          {status}
        </div>
      </td>
      <td>
        <div className='d-flex flex-row align-items-center px-1'>
          {consignee}
        </div>
      </td>
      <td>
        <div className='d-flex flex-row align-items-center'>
          {updateButton}
          {deleteButton}
        </div>
      </td>
    </tr>
  );

  return (
    shipmentDetailsRow 
  );
}

export default Shipment;