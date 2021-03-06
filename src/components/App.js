import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

//Use state allow a functional component to use component-level state

const App= () => {

    //Array destructuring [ currentValue, SetCurrentValue//setter] name doesn't matter
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <UserList />
            <div>
                <button onClick={()=> setResource('posts')}>Post</button>
                <button onClick={()=> setResource('todos')}>Todos</button>
            </div>
            <ResourceList  resource={resource} />
        </div>
    );
  
}

export default App;