import { useQuery } from '@apollo/client';
import { ChevronRight } from "../assets/Icons";
import { GET_SUBJECTS } from '../graphql/queries/get-subjects';
import Carousel from "./Carousel";

export default function Contents() {
    const { loading, data } = useQuery(GET_SUBJECTS);

    return (
        <div className="pl-28 flex flex-col justify-center bg-black h-screen">
            <div className="pt-6 flex items-center flex-row gap-1">
                <p className="text-2xl font-bold">Disciplinas disponíveis</p>
                <ChevronRight />
            </div>
            {loading
                ? <div className='flex flex-1'>Carregando</div>
                : <Carousel subjects={data.subjects} />
            }
            <div className="mt-6 flex items-center flex-row gap-1">
                <p className="text-2xl font-bold">Disciplinas com maior pontuação</p>
                <ChevronRight />
            </div>
            {loading
                ? <div className='flex flex-1'>Carregando</div>
                : <Carousel subjects={data.subjects} />
            }
        </div>
    )
}