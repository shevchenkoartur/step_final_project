import React from 'react';
import style from '../Task/Task.module.scss';

const Archive = props => {

    const displayTasks = () => {
        const archiveTasks = props.tasks.filter(el => el.isDone)

        if(archiveTasks.length === 0) return <div style={{color: '#76899b'}}>Тут пока ничего нет</div>

        return archiveTasks.map((el) =>
            <div className={`taskBlock ${props.darkTheme ? 'taskBlockLight' : 'taskBlockDark'}`}>
                <label>
               <span className={
                   `myCheckbox
                    ${el.priority === '3'
                       ?
                       style.highPriority
                       :
                       el.priority === '2'
                           ?
                           style.mediumPriority
                           :
                           el.priority === '1' ? style.lowPriority : ''}
                    `}
               >
               </span>
                    <input type="checkbox" className={style.priorityCheckbox}/>
                </label>

                <textarea className={`textarea ${props.darkTheme ? 'textareaColorLight' : 'textareaColorDark'}`} value={el.body} />
            </div>
        )
    }

    return (
        <div>
            <h1 className={props.darkTheme ? 'linkColorLight' : 'linkColorDark'}>
                <span style={{color: '#76899b', paddingRight: '10px'}} className="icon-archive"></span>
                Архив
            </h1>
            {
               displayTasks()
            }
        </div>
    );
};

export default Archive;