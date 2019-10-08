import React from "react";
import "./Contact.css";



const name = "Hkwolf"
const avatar = "https://avatars1.githubusercontent.com/u/55136269?s=400&u=2acc55c2d29429b91df063c3dfb6da5ea38c9283&v=4"
const boolean = true

const element = (
    <div className="person-item">
       <img className="avatar" src={avatar} />
    <div>
    <h4>{name}</h4>
 
    <p>{boolean ? "Online" : "Offline"}</p>
    </div>
     </div>
);


ReactDOM.render(element, document.getElementById('root'));
