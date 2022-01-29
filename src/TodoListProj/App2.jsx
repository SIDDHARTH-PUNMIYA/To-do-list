import React, { useState } from "react";
import './App2.css';
import Todolist  from "./Todolist";

import AddIcon from '@material-ui/icons/Add';
function App2() {

    const [data, setdata] = useState("");
    const [items , setitems] = useState([]);
    
    function getdata(e) {
        setdata(e.target.value);
        
       
    }
    function add() {
        setitems((olditems) =>{  // old items contains all values in the usestate
            return  [...olditems,data];
            
        });
        setdata("");
       
    };
    const deleteitem =(id) => {
        setitems((olditems) =>{  
            return  olditems.filter((arrelem,index)=>{
return id!==index;
            })
            
        });
    };
       
    // }
    return (
        <>
            <div className="main-container">
                <div className="container">
                    <br />
                    <h1> To Do List</h1>
                    <div className="upperhalf">
                    <div className="tocen">
                  <input type="text" placeholder="Add to your List" autoComplete="false" value={data} onChange={getdata} />
                                <AddIcon fontSize="large" className="button" onClick={add}/>
                     </div>        <ol>
                            {items.map((val,ind)=>{
                                 return <Todolist  
                                 key={ind}
                                 value={val}
                                 index={ind}
                                 onSelect={deleteitem}  />;
                                   })  }
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}
export default App2