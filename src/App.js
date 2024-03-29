
import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body';




function App() {
    
    var today = new Date();
    var dd = String(Number(String(today.getDate()).padStart(2, '0'))-1);
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy+'-'+mm+'-'+dd;
    
    let [items,setItems]=useState([])
    let [search,setSearch]=useState("Technology")
    let [date,setDate]=useState(today)
    let tch="Technology"
    //233111f4671c4d36b1273eaecdd413d8
    useEffect(()=>{
        fetch(`https://newsapi.org/v2/everything?q=${search||tch}&from=${date||today}&apiKey=4aa472842366410ab0c0c15b751fc5cb`)
        .then((responce)=>responce.json())
        .then((item)=>{setItems(item.articles) ;console.log(item.articles)})
        .catch((err)=>{console.log(err)})
    },[search,date])

  return (
    <div className="App">
        <header className='navbar'>
            <h2>Glance</h2>
            <input type="text" placeholder='Search here..' onChange={(event)=>{
                if(event.target.value!==null)
                {setSearch(event.target.value)}
                else{
                    setSearch("Technology")
                }
            
            }} />
            <input type="date" name="date" id="2" onChange={(event)=>{
                if(event.target.value!==null)
                {setDate(event.target.value)}
                else{
                    setDate(today)
                }
            }} />
        </header>
        
       
        
        <Body items={items} search={search||tch} date={date||today}/>
        
    </div>
  );
}

export default App;
