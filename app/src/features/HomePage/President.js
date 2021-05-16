import React, {Component}                      from 'react';
import {Banner, Teams, Content, MemberPreview} from "./components";

class President extends Component {
    render() {
        return (
            <div className="feature-home">
                <Banner/>
                {
                    this.props.users.length > 0
                        ? <Teams {...this.props}/>
                        : ''
                }
                <MemberPreview
                    {...this.props}
                />
                <Content/>
            </div>
        );
    }
}

export default President;