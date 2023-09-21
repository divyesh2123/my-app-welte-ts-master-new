import React, { useState } from 'react'
import { ToDoList } from './ITODO';
import axios from 'axios';

export const Display = () => {
    const [data,setData] = useState<ToDoList>([]);

    React.useEffect(() => {
        axios
            .get<ToDoList>("https://jsonplaceholder.typicode.com/posts")
            
            .then(response => {
                setData(response.data);
               
              });
            
            ;
        }, []);

        console.log(data);  
  return (
    <div>Display</div>
  )
}
