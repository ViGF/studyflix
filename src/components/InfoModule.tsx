interface InfoModuleProps {
    priority: number
    number: number
    title: string
}

export default function InfoModule({ priority, number, title }: InfoModuleProps) {
    return (
        <div>
            <div className="flex flex-row mt-4">
                <p className="font-info font-bold text-[#FF1010]">{priority}% Importancia</p>
                <p className="font-info font-normal ml-2">{number}° Módulo</p>
            </div>
            <p className="font-info font-normal mt-4">{title}</p>
        </div>
    )
}