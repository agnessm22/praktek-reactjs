import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class BootstrapComp extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
               <Alert color="primary">
                   This is a secondary alert - check it out!
               </Alert>
               <Alert color="success">
                   This is a secondary alert - check it out!
               </Alert>
               <Alert color="danger">
                   This is a secondary alert - check it out!
               </Alert>
            </div>
        );
    }
}

export default BootstrapComp;