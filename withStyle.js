import React, {Component} from "react";

export default (CurrentComponent, s) => {
    class WithStyle extends Component {

        constructor(props) {
            super(props);

            if (this.props.staticContext) {
                this.props.staticContext.css.push(s._getCss());
            }
        }

        render() {
            return <CurrentComponent {...this.props}/>
        }
    }

    return WithStyle
}
