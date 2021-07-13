import User from "../user/User";
import React from "react";

export default function Users({items, fnEvent}) {


    return (
        <div>
            {
                items.map(value => <User fen={fnEvent} key={value.id} item={value}/>)
            }
        </div>
    )
}