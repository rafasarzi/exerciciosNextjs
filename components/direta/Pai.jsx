import Filho from "./filho";

export default function Pai(props) {
    return (
        <div>
            <Filho nome="Rafa"  familia={props.familia} />
            <Filho nome="Diego"  familia={props.familia} />
        </div>
    )
}