import React, { useEffect, useState } from 'react';
import ListComponent from '../components/ListComponent';

export default function ListComponentContainer()  {
    
    const [data, setData] = useState([]);
    useEffect(() => { 
        async function getData() {
            const response = await fetch('http://localhost:8080/foreningar');
            const realData = await response.json();
            setData(realData);
        }
        getData();
    }, [])

    return (
        <ListComponent 
            newData={data}
        />
    );
    
};

