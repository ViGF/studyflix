import { Link } from 'react-router-dom'
import { Bell, Logo } from '../assets/Icons'

export default function Header() {
    return (
        <div className={`
            w-full flex flex-row justify-around h-20 items-center
            bg-black bg-opacity-50 fixed z-10
        `}>
            <Link to='/'>
                <Logo className='mt-5 hover:brightness-[0.68]'/>
            </Link>
            <div className='flex flex-row'>
                <div className='flex flex-row gap-6 mr-16'>
                    <a href="#disciplinas" className='hover:brightness-[0.68]'>Disciplinas</a>
                    <a href="#modulos" className='hover:brightness-[0.68]'>Módulos</a>
                    <a href="#apostilas" className='hover:brightness-[0.68]'>Apostilas</a>
                    <a href="#ranking" className='hover:brightness-[0.68]'>Ranking</a>
                </div>
                <Bell className='cursor-pointer hover:brightness-[0.68]' />
            </div>
        </div>
    )
}