import Card from "./Card"

function Body(props){
    return (
        <div className="Bodyactual">
             <div className='heading'>
                <h3>{props.search}</h3>
                <p>From : {props.date}</p>
             </div>
           <div className="Body">
             
                {props.items.map((item)=>{
                    
                    return (<Card item={item} />)
                    
                })}
            
            </div>
        </div>
    )
}

export default Body