import React, {Component}                      from 'react';
import {Banner, Teams, Content, MemberPreview} from "./components";

class President extends Component {
    render() {
        return (
            <div className="template">
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