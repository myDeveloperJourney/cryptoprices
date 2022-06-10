import { useState, useEffect } from 'react';

const Price = (props) => {
    // set a local variable to hold our api key
    const apiKey = 'D5D3B1FE-C1E9-48ED-9353-3D5ED828E83B';
    // capture the coin symbol from route props
    const symbol = 'where do we get this?'
    // set a local variable for our dynamic API URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
    // initialize state to hold our coin data once received from the API
    const [ coin, setCoin ] = useState(null);
    // define a function to perform the AJAX (aka use javascript to make http request to api)
    const getCoin = async () => {
        const response = await fetch(url); // get data from api
        const data = await response.json(); // convert json data into js
        setCoin(data);
    }
    // invoke a call to useEffect to run an effect once the component loads (make the ajax)
    useEffect(() => {
        getCoin();
    }, []);
    // define some functionality to show a loading message until the data is ready
    const loading = () => {
        return <h1>Loading ...</h1>;
    };
    const loaded = () => {
        return (
            <div>
                <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
            </div>
        );
    };
   
    return coin ? loaded() : loading();
    // if(coin) {
    //     return <h1>Loading ...</h1>;
    // } else {
    //     return (
    //         <div>
    //             <h1>{coin.asset_id_base}/{coin.asset_id_quote}</h1>
    //         </div>
    //     );
    // }
};

export default Price;