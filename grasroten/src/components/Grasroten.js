import React from 'react';
import NavBar from './NavBar'
import ListComponentContainer from '../containers/ListComponentContainer'

class Grasroten extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="mainDiv">
                    <ListComponentContainer />
                </div>
            </div>
        );
    }
}
export default Grasroten