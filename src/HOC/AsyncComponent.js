import React from 'react';

const AsyncComponent = component => {
  return class extends React.Component {
    state = {
      component: null
    };

    componentDidMount() {
      component().then(cmp => this.setState({ component: cmp.default }));
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default AsyncComponent;
