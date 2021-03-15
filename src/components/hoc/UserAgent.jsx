import React from 'react';

export default function (WrappedComponent) {
  return class UserAgentHOC extends React.Component {
    render() {
      const userAgent = navigator.userAgent;
      // Pass userAgent prop to the wrapped component, without mutating it, Good!
      return (<WrappedComponent {...this.props} userAgent={userAgent} />);
    }
  }
}
