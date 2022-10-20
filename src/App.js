import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {hardcodedData} from './data.js';
import ShipmentsTable from './ShipmentsTable';
import ShipmentDetailsForm from './ShipmentDetailsForm';

const App = () => {

    const [shipmentsList, setShipmentsList] = useState(null);
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
    };
    const handleDelete = (orderNo) => {
        const reducedShipmentList = shipmentsList.filter(shipment => shipment.orderNo !== orderNo);
        setShipmentsList(reducedShipmentList);
    };
    const handleInputChange = (event, orderNo, objKey) => {

        const modifiedShipmentList = shipmentsList.map(shipment => {

            if(shipment.orderNo === orderNo) {

                const updatedShipment = {...shipment, [objKey]: event.target.value};
                setFormData(updatedShipment);
                return updatedShipment;
            }
            return shipment;
            });
        
        setShipmentsList(modifiedShipmentList);
        console.log(orderNo, event, modifiedShipmentList);
    };
    
    const formModal = (
        <div className='modal fade' id='formUpdateModal' tabIndex='-1' role='dialog' aria-labelledby='formUpdateModal' aria-hidden='true'>
            <div className='modal-dialog modal-dialog-centered modal-lg' role='document'>
                <div className='modal-content'>
                    <div className='modal-body p-0'>
                        <div className='card card-plain'>
                            <div className='card-header pb-0 text-left'>
                                <h5 className='font-weight-bolder text-muted'>Shipment Details</h5>
                            </div>
                            <div className='card-body'>
                                <ShipmentDetailsForm 
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return(
        shipmentsList ? (
            <div>
                <div className='min-height-300 bg-primary position-absolute w-100'></div>
                <main className='position-relative ps py-6'>
                    <div className='container-fluid'>
                        <div className='card'>
                            <div className='card-header p-0 pt-5'></div>
                            <div id='shipments-table-container' className='shipments-table-container table-responsive'>
                                {formModal}
                                <div className='card-body py-0'>
                                    <ShipmentsTable 
                                        shipmentsList={shipmentsList}
                                        handleFormUpdate={handleFormUpdate}
                                        handleDelete={handleDelete}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        ) : null
    );
}

export default App;
