interface InputProps {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    onChange?: (valor: any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className={`flex flex-col ${props.className}`}>
        <label className="mb-2">
            {props.texto}
        </label>
        <input
            type={props.tipo ?? 'text'}
            value={props.valor}
            readOnly={props.somenteLeitura}
            onChange={e => props.onChange?.(e.target.value)}
            className={`
                rounded-md border-slate-500 border-2
                bg-slate-800 p-3
                focus:outline-none focus:bg-slate-700
                focus:border-violet-600 focus:caret-violet-600
                
            `}
        />
    </div>
  )  
}