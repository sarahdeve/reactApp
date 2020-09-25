import React, {Component} from 'react';
 
function myHoc(IncomingComponent) {
    return class  extends Component {
        constructor(props) {
            super(props);
            this.state = {  }
        }
       anotherName = "Taiwo"
        render() { 
            return ( 
                <React.Fragment>
                    {this.props.checkSignIn ? 
                <IncomingComponent {...this.props} sign = {this.anotherName}/> : <div>You are not signed in</div>   
                }
                </React.Fragment>
             )
        }
}
    } 
    export default myHoc;
   