export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-6 text-2xl">
                {props.children}
            </h1>
        </div>
    )
}