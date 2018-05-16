import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surprised: false
        };
    }

    setSurprised() {
        this.setState({
            surprised: true
        });
    }

    render() {
        // Show the button to start with
        if (!this.state.surprised) {
            return (
                <SurpriseButton onSurprise={() => this.setState({surprised: true})} />
            );
        } else {
            return (
                <SurpriseImage />
            );
        }
    }
}
