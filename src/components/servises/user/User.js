export default function User ({item, clickUser}) {
    return (
        <div>
            {item.id} - {item.name} -
            {
                <button onClick={
                    () => clickUser(item.id)
                }> click me </button>
            }
        </div>
    )
}