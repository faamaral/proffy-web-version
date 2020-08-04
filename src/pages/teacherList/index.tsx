import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';


function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os professores disponiveis." >
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horario</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;