import {connect} from 'react-redux';
import TodayApi from './TodayApi';
import {
    editTaskText, findLaterTasks,
    getTasks, getTodayDate,
    moveTaskIntoBin
} from '../../redux/reducers/tasksReducer/tasksActionCreators';

const mapStateToProps = state => {
    return {
        tasks: state.tasksReducer.tasks,
        darkTheme: state.themeReducer.darkTheme,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTasks: (tasks) => {
            dispatch(getTasks(tasks))
        },
        moveTaskIntoBin: (id, inBin) => {
            dispatch(moveTaskIntoBin(id, inBin))
        },
        editTaskText: (id, newValue) => {
            dispatch(editTaskText(id, newValue))
        },
        getTodayDate: (date) => {
            dispatch(getTodayDate(date))
        },
        findLaterTasks: () => {
            dispatch(findLaterTasks())
        }
    }
}

const TodayContainer = connect(mapStateToProps, mapDispatchToProps)(TodayApi)

export default TodayContainer