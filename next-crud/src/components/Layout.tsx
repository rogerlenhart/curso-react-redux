import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string
    botao?: any
    children: any

}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3
            text-white rounded-md
            bg-slate-800
        `}>
            <div className="pt-5 px-5 flex justify-between">
                <Titulo>{props.titulo}</Titulo>
                {props.botao}
            </div>
            <div className="p-5">
                {props.children}
            </div>
        </div>
    )
}