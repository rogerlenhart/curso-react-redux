interface BotaoProps {
    cor?: 'violet' | 'slate'
    className?: string
    children: any
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'violet'

    return (
        <button className={`
            bg-${cor}-600
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}