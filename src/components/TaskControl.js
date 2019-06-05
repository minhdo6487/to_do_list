import React, {Component} from 'react';


class TaskControl extends Component {
    render() {
        return (
            <div className="row mt-15">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input type="text"
                               name="name"
                               className="form-control"
                               value="" title=""
                               required="required"
                        />
                        <span className="input-group-btn">
                        <button type="button" className="btn btn-primary">
                            <span className="fa">Search</span>
                        </button>
                    </span>
                    </div>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <span className="input-group-btn">
                        <button type="button" className="btn btn-primary">
                            <span className="fa">Search</span>
                        </button>
                    </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskControl;
