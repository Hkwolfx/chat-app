import React from "react";
import Contact from "./Contact"




const List = [
    {
        image: "https://randomuser.me/api/portraits/women/43.jpg",
        character: "Lolita Ferrari",
        online: true,
        
    },
    {
        image: "https://randomuser.me/api/portraits/women/58.jpg",
        character: "Carmen Elektra",
        online: true,
    },
    {
        image:  "https://randomuser.me/api/portraits/women/58.jpg",
        character: "Carmen Elektra",
        online: false,
    },
    {
        image:  "https://randomuser.me/api/portraits/women/58.jpg",
        character: "Carmen Elektra",
        online: true,
    },
    {
        image:  "https://randomuser.me/api/portraits/women/58.jpg",
        character: "Carmen Elektra",
        online: true,
    }
]




const ContactList = () => (
    <div>
        {List.map(item =>
            (
                <Contact online={item.online} image={item.image} character={item.character}/>
        
            )
        )}
    </div>
);






export default ContactList;