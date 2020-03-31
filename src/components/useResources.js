import { useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [ resources , setResources] = useState([]);

    useEffect(() => {
        (async  resource => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        
            setResources( response.data);
        })(resource);
    }, [resource]); //this argument holds the previous
    //if argument is different the arrow function is called!!

    return resources;
}

export default useResources;