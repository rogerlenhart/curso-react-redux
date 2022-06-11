import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" cor="#3B7075"/>
      <Navegador texto="Exemplo" destino="/exemplo"/>
      <Navegador texto="JSX" destino="/jsx" cor="#FC7623"/>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="#862517" />
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="#6F797B" />
    </div>
  )
}