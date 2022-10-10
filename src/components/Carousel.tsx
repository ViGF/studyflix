import Card from "./Card";

interface CarouselProps {
    subjects?: [
        {
            title: string
            slug: string
        }
    ]
}

export default function Carousel({ subjects }: CarouselProps) {
    return (
        <div className="ml-3 mt-4 flex flex-row gap-6 overflow-hidden overflow-x-auto p-2">
            {subjects?.map(subject => <Card title={subject.title} slug={subject.slug} />)}
        </div>
    )
}