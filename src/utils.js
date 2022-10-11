import {data} from './data.js';
import axios from 'axios';

function loadData() {
    const apiURL = 'https://my.api.mockaroo.com/shipments.json?key=5e0b62d0';
    let shipmentsInfo = data;//fix here, pushin arr into empty arr

    // axios.get(apiURL)
    //     .then(function (response) {
    //         shipmentsInfo.push(response.data);
    //     })
    //     .catch(function (error) {
    //         if (error.request){
    //             shipmentsInfo.push(data);
    //         } 
    //     });
        
    return shipmentsInfo;
}

export {loadData};