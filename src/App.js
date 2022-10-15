import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {hardcodedData} from './data.js';
import ShipmentsTable from './ShipmentsTable';
import ShipmentDetails from './ShipmentDetails';

const App = () => {
    const [shipmentsList, setShipmentsList] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({});
    const apiURL = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(apiURL);
            setShipmentsList(response.data);
        };
        getData();
    }, []);

    const handleFormUpdate = (orderNo) => {
        const formData = shipmentsList.find(shipment => shipment.orderNo === orderNo);
        setFormData(formData);
        setIsFormVisible(true);
    };

    const handleDelete = (orderNo) => {
        const updatedShipmentsList = shipmentsList.filter(shipment => shipment.orderNo !== orderNo);
        setShipmentsList(updatedShipmentsList);
      };

    return(
        shipmentsList ? (
            <div id='shipments-table-container' className='shipments-table-container table-responsive'>
                <div className='input-form' style={
                    {display: isFormVisible ? 'block' : 'none' }}>
                    <ShipmentDetails 
                        formData={formData}
                        setIsFormVisible={setIsFormVisible}
                    />
                </div>
                <ShipmentsTable 
                    shipmentsList={shipmentsList}
                    setShipmentsList={setShipmentsList}
                    setIsFormVisible={setIsFormVisible}
                    handleFormUpdate={handleFormUpdate}
                    handleDelete={handleDelete}
                />
            </div>
        ) : null
    );
}

export default App;


//document.getElementById('order-no-input').focus();
