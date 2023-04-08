export default function Lista(props) {
    return (
        <div>
            <h1>Lista Algo</h1>
            <ul style={{
             listStyle: "inside",
             padding: "3px"
            }}>
                {props.children}
            </ul>
        </div>
    )
}