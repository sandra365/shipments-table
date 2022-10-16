//rename ShipmentDetails to UpdateForm or smthng else
const ShipmentDetails = ({formData}) => {
    const {orderNo, date, customer, trackingNo, status, consignee} = formData;
    
    const form = (
        <form id='input-form' role='form text-left'>

            <div className='container'>
                <div className='row'>
                    <div className='col mb-3'>
                        <label htmlFor='input-order-no'> orderNo </label>
                        <input id='input-order-no' type='text' className='form-control' aria-label='order number' value={orderNo} disabled/>
                    </div>
                    <div className='col mb-3'>
                        <label htmlFor='input-date'> date </label>
                        <input id='input-date' type='text' className='form-control' aria-label='delivery date' value={date} disabled/>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col mb-3'>
                        <label htmlFor='input-customer'> customer </label>
                        <input id='input-customer' type='text' className='form-control' aria-label='customer' value={customer} disabled/>
                    </div>
                    <div className='col mb-3'>
                        <label htmlFor='input-tracking-no'> trackingNo </label>
                        <input id='input-tracking-no' type='text' className='form-control' aria-label='tracking number' value={trackingNo} disabled/>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col mb-3'>
                        <label htmlFor='input-consignee'> consignee </label>
                        <input id='input-consignee' type='text' className='form-control' aria-label='consignee' value={consignee} disabled/>
                    </div>
                    <div className='col mb-3'>
                        <label htmlFor='input-status'> status </label>
                        <select id='input-status' form='input-form' className='form-control' aria-label='status' value={status} disabled>
                            <option value="'Shipped'">'Shipped'</option>
                            <option value="'In Transit'">'In Transit'</option>
                            <option value="'Delivered'">'Delivered'</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
    );

    return(form);
};

export default ShipmentDetails;

//<form onSubmit={handleSubmit}>

// const handleSubmit= (event) => {
//     event.preventDefault();
// }