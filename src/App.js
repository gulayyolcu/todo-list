import React,{useState} from 'react';


function App() {

const [added,setAdded]=useState([]);



const handleChange=(e)=>{
    if(!added.includes(e.target.value)){
      setAdded([...added,e.target.value]);
    }  
    e.target.value='';
}

const handleRemove=(k)=>{
    const remaining=added.filter((item)=>item!==k);
    setAdded([...remaining]);
};

/* const handleEdit=(e)=>{
  
    document.getElementById('listItem').innerHTML=e.key;
    handleChange(e);
    setAdded([...added,e]);
} */
  
    
    


  return (
    <div className="flex flex-col">
      <header className="App-header bg-indigo-200 p-8 bg-opacity-25 rounded-md w-1/2 flex justify-center mt-20 mx-auto">
            <h1 className="text-4xl text-gray-800 font-bold uppercase ">yapılacaklar listesi</h1>
      </header>
      <div className="bg-blue-800 p-8 bg-opacity-75 rounded-md w-1/2 h-1/3 flex justify-around my-8 mx-auto">
            
                <input id="listItem" className="w-1/2 text-blue-800 text-xl uppercase focus:outline-none p-2 rounded-md" onBlur={handleChange}  placeholder="bugün ne yapacaksın?"  type="text" name=""/>
                <input  className="w-1/3 bg-white focus:outline-none text-xl uppercase  p-2 rounded-md text-blue-800 bg-opacity-75" type="submit" value="Ekle"/> 
          
      </div>
      <div className="bg-blue-800 p-8 bg-opacity-75 rounded-md w-1/2 h-1/3  flex justify-center  mx-auto">
                    {
                        added.length!==0 ? (
                            <ul className="max-w-2xl text-2xl uppercase w-full">
                                  {
                                        added.map((item)=>(
                                          <div className="flex justify-between items-center">
                                                <li className="text-white my-1 ml-4 p-3 w-full rounded-l-md"  >{item}</li>
                                                <i className="fa fa-trash text-white fa-x 
                                                  text-2xl " key={item} onClick={()=>handleRemove(item)} aria-hidden="true"></i>
                                            </div>
                                         
                                        ))
                                  }
                            </ul>
                        ):``
                    }
            
      </div>
    </div>
  );

}
export default App;
