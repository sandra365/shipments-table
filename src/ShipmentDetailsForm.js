const ShipmentDetailsForm = ({formData, handleInputChange}) => {

    const {orderNo, date, customer, trackingNo, status, consignee} = formData;

    const form = (
        <form id='input-form' role='form text-left'>

            <div className='container'>
                <div className='row'>
                    <div className='col mb-3'>
                        <label htmlFor='input-order-no'> orderNo </label>
                        <input id='input-order-no' type='text' className='form-control' aria-label='order number' 
                            value={orderNo} onChange={(event) => {handleInputChange(event, orderNo, 'orderNo')}}/>
                    </div>
                    <div className='col mb-3'>
                        <label htmlFor='input-date'> date </label>
                        <input id='input-date' type='text' className='form-control' aria-label='delivery date' 
                            value={date} onChange={(event) => {handleInputChange(event, orderNo, 'date')}}/>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col mb-3'>
                        <label htmlFor='input-customer'> customer </label>
                        <input id='input-customer' type='text' className='form-control' aria-label='customer' 
                            value={customer} onChange={(event) => {handleInputChange(event, orderNo, 'customer')}}/>
                    </div>
                    <div className='col mb-3'>
                        <label htmlFor='input-tracking-no'> trackingNo </label>
                        <input id='input-tracking-no' type='text' className='form-control' aria-label='tracking number' 
                            value={trackingNo} onChange={(event) => {handleInputChange(event, orderNo, 'trackingNo')}}/>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col mb-3'>
                        <label htmlFor='input-consignee'> consignee </label>
                        <input id='input-consignee' type='text' className='form-control' aria-label='consignee' 
                            value={consignee} onChange={(event) => {handleInputChange(event, orderNo, 'consignee')}}/>
                    </div>
                    <div className='col mb-3'>
                        <label htmlFor='input-status'> status </label>
                        <select id='input-status' form='input-form' className='form-control' aria-label='status' 
                            value={status} onChange={(event) => {handleInputChange(event, orderNo, 'status')}}>
                            <option value="'Shipped'">'Shipped'</option>
                            <option value="'In Transit'">'In Transit'</option>
                            <option value="'Delivered'">'Delivered'</option>
                        </select>
                    </div>
                </div>
            </div>
            
        </form>
    );

    return form;
};

export default ShipmentDetailsForm;

//<form onSubmit={handleSubmit}>

// const handleSubmit= (event) => {
//     event.preventDefault();
// }