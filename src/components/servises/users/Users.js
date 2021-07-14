import User from "../user/User";

export default function Users({items, clickFun}) {
    return (
        <div>
            {
                items.map(value =>
                    <div>
                        <User key={value.id} clickUser={clickFun}  item={value}/>
                    </div>)
            }
        </div>
    )
}