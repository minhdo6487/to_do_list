import React, {Component} from 'react';

import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskControl from './components/TaskControl'

var randomstring = require("randomstring");


class App extends Component {
    constructor(props, context) {
        super(props, context);

        // with all task
        // id with unique
        // name
        // status

        this.state = {
            tasks : []
        };
    };


    onGenerateData = () => {
        let tasks = [
            {
                id : randomstring.generate(),
                name : "do homework",
                status : true
            },
            {
                id : randomstring.generate(),
                name : "learn reactjs",
                status : true
            },
            {
                id : randomstring.generate(),
                name : "strengthen python skills",
                status : true
            }
        ];

        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            let storage_stasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                // tasks: storage_stasks
                tasks: storage_stasks
            });
        }
    }

    render() {
        let tasks = this.state.tasks;
        return (
            <div className="container-fluid">
                <h1 className="text-center">To Do List</h1>
                <div className="row">
                    <TaskForm/>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            Search
                        </button> &nbsp;
                        <button type="button"
                                className="btn btn-danger"
                                onClick={this.onGenerateData}>
                            generate data
                        </button>
                        <TaskControl />
                        <TaskList
                            tasks={ tasks }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


// LocalStorage
//     <=> cookies
// SessionStorage
//     <=> session
// <= 5mb
// setItem
//     key and value
// getItem
//     key and value