export default function Menu(props) {
    let {pages} = props;
    console.log(pages);
    return (
        <ul>
            {
                pages.map(page => <li>{page}</li>)

            }

        </ul>
    )
}