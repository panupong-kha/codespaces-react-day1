import { useState } from "react";

function Item({ name, isPacked }) {
    // if (isPacked) {
    //     return (
    //         <li>{name}✓</li>
    //     )
    // } return (
    //     <li>{name}</li>
    // )

    // return (        
    //         isPacked ? <li>{name}  <span style={{color:'red'}}>✓</span> </li>: <li>{name}</li>        
    // )
    return(
        <li>{name} {isPacked && '✓'}</li>
    )
}
export default function Counter() {
    const items = ["Battery","Clothes","SunGlasses","Toothbrush","Laptop"];
    const itemList=items.map(
        (item)=> <li>{item}</li>
        )
    return (       
        <ol>
            {itemList}
        </ol> 
        // <ul>
        //     <Item name="Battery" isPacked={true} />
        //     <Item name="Clothes" />
        //     <Item name="SunGlasses" isPacked={true} />
        //     <Item name="Toothbrush" />
        // </ul>
    )
}
// export default function Counter() {
//     const [count, setCount] = useState(0);
//     const [value, setValue] = useState("Type here!!");
//     return (<>
//         <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
//         <p>You typed {value} length:{value.length}</p>
//         <button onClick={() => setCount(count + 1)}>Click me!</button>
//         <button onClick={() => setCount(0)}>Reset!</button>
//         <p>You clicked {count} times</p>
//         <h1
//             onMouseEnter={() => console.log("Enter")}
//             onMouseLeave={() => console.log("Leave")}
//         >test</h1>
//     </>);
// }