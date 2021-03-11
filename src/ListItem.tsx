import React from "react";

interface ListItemProps{
    list: {
        text: string;
        complete: boolean;
    };
}

export const ListItem = (props:ListItemProps) => {
    return (
     <li>
         <label>
             <input type= "checkbox" checked={props.list.complete}/>
             {props.list.text}
         </label>
    </li>
    )
    };
    