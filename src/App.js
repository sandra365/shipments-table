import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {hardcodedData} from './data.js';
import ShipmentsTable from './ShipmentsTable';
import ShipmentDetails from './ShipmentDetails';

const App = () => {
    const [shipmentsList, setShipmentsList] = useState(hardcodedData);
    console.log('Shipments from ShipmentsTable', shipmentsList);
  //const apiURL = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await axios.get(apiURL);
  //     setShipmentsList(data);
  //   };
  //   getData();
  // }, []);

  //const shipments = shipmentsList.data ? shipmentsList.data : hardcodedData;//is it necessary/how to rewrite/put it outside so it won't load every time component being redrawn

    return(
        <div id='shipments-table-container' className='shipments-table-container'>
            <ShipmentDetails />
            <ShipmentsTable 
                shipmentsList={shipmentsList}
                setShipmentsList={setShipmentsList}
            />
        </div>
    );
}

export default App;