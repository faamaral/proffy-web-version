import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/47461924?s=460&u=a7c652b831731b8dad2d9eeba87e48b3596f2c49&v=4" alt="Fabiano"/>
                        <div>
                            <strong>Fabiano</strong>
                            <span>Informatica</span>
                        </div>
                    </header>
                    <p>Grande curioso da area de Informatica
                        <br/>
                        <br/>
                        sempre atento as novas tecnologias disponiveis
                    </p>
                    <footer>
                        <p>preço/hora
                            <strong> R$ 40,00 </strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;