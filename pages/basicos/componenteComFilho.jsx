import Lista from "@/components/Lista"
import Item from "@/components/Item"

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="#1"/>
                <Item conteudo="#2"/>
                <Item conteudo="#3"/>
                <Item conteudo="#4"/>
                <Item conteudo="#5"/>
            </Lista>
        </div>
    )
}