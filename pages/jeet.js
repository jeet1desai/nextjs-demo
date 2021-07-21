import React, { Component } from 'react';
import { withRouter } from 'next/router'


export class Jeet extends Component {
    static async getInitialProps({ req, asPath }) {
        let href;
        if (req) {
            href = `https://${req.headers.host}${asPath}`;
        } else if (window) {
            href = window.location.href;
        }
        return { windowLocation: href }
    }
    render() {
        let windowLocation;
        if (this.props.windowLocation) {
            windowLocation = this.props.windowLocation;
        } else {
            windowLocation = this.props.router.pathname;
        }

        return (
            <div>
                hi Jeet {windowLocation}
            </div>
        )
    }
}

export default withRouter(Jeet);