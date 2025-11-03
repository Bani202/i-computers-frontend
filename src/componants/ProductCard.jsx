export default function ProdctCard(props){
    return(
         <div>
            <h1>{props.name}</h1>
            <img src={props.img}/>
            <p>Price LKR:{props.Price}</p>
      </div>
    );
}