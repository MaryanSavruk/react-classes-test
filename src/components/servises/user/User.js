export default function User({item, fen}) {
    return (
        <div>
            {item.id} - {item.name} -
            {
                <button onClick={
                    () =>  fen(item.id)
                }> on click </button>
            }

        </div>
    )
}