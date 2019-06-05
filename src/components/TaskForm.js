import React, {Component} from 'react';


class TaskForm extends Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Add jobs</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="">Job name : </label>
                                <input type="text" className="form-control" name="txt_job_name" placeholder="Input..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Job status : </label>
                                <select name="name" className="form-control">
                                    <option value={0} className="active"> -- Select One --</option>
                                    <option value={2}> Active All </option>
                                    <option value={3}> Deactive All </option>
                                </select>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-primary">Add</button> &nbsp;
                                <button type="button" className="btn btn-danger">Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskForm;
