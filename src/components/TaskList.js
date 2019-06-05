import React, {Component} from 'react';

class TaskList extends Component {
    render() {
        let tasks = this.props.tasks;
        let elements = tasks.map((task, index) => {
            return  <TaskItem
                          key = {task.id}
                          name = {task.name}
                          status = {task.status}
                    />
        });

        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center">Index</th>
                                <th className="text-center">Job Name</th>
                                <th className="text-center">Style Activate</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><input type="text" className="form-control"/></td>
                                <td>
                                    <select name="name" className="form-control">
                                        <option value=""> -- Select One --</option>
                                        <option value="">All</option>
                                        <option value="">Hide</option>
                                        <option value="">Show</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            { elements }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


class TaskItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>{this.props.name}</td>
                <td className="text-center"><label className="label label-success">{this.props.status}</label></td>
                <td className="text-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-success">
                            <span className="fa fa-pencil mr-5"> Update </span>
                        </button> &nbsp;
                        <button type="button" className="btn btn-danger">
                            <span className="fa fa-pencil mr-5"> Delete </span>
                        </button>
                    </div></td>
            </tr>
        );
    }
}


export default TaskList;
