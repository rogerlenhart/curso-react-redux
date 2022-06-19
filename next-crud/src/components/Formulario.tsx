import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Input from "./Input";

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Input
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-4"
                />
            ) : false}
            <Input
                texto="Nome"
                valor={nome}
                onChange={setNome}
                className="mb-4"
            />
            <Input
                texto="Idade"
                valor={idade}
                tipo="number"
                onChange={setIdade}
            />
            <div className="flex justify-end mt-6">
                <Botao className="mr-3">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="slate">
                    Cancelar
                </Botao>
            </div>
        </div>
    )  
}