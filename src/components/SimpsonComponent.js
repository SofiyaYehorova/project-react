export default function SimpsonComponent(props){

    let {itemName, pic, info}=props;

    let classNameItem = 'card';
    return(
        <div className={classNameItem}>
            <h2>{itemName}</h2>
            <img src={pic}/>
            <p>{info}</p>
        </div>
    );
}