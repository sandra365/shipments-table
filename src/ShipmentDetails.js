import './index.css';
//rename ShipmentDetails to UpdateForm or smthng else
const ShipmentDetails = ({formData, setIsFormVisible}) => {
    const {orderNo, date, customer, trackingNo, status, consignee} = formData;
    const handleFormHiding = () => {
        setIsFormVisible(false);
        console.log('Form out Of Focus');
    };
    const form = (
        <form id='input-form' onBlur={handleFormHiding}>
            <p>SHIPMENT DETAILS</p>
            <label>
            orderNo:
                <input type='text' value={orderNo}/>
            </label>
            <label>
                date:
                <input type='text' value={date}/>
            </label>
            <label>
                customer:
                <input type='text' value={customer}/>
            </label>
            <label>
                trackingNo:
                <input type='text' value={trackingNo}/>
            </label>
            <label>
                consignee:
                <input type='text' value={consignee}/>
            </label>
            <label>
                status:
                <select form='input-form' value={status}>
                    <option value="'Shipped'">'Shipped'</option>
                    <option value="'In Transit'">'In Transit'</option>
                    <option value="'Delivered'">'Delivered'</option>
                </select>
            </label>
        </form>
    );

    return(form);
};

export default ShipmentDetails;

//<form onSubmit={handleSubmit}>

// const handleSubmit= (event) => {
//     event.preventDefault();
// }