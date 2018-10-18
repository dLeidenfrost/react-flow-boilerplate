/**
 * From ReactGA Community Wiki Page https://github.com/react-ga/react-ga/wiki/React-Router-v4-withTracker
 */
/* @flow */
import * as React from 'react';
import ReactGA from 'react-ga';

const WithTracker = (WrappedComponent: any, options:any = {}) => {
  const trackPage = (page) => {
    ReactGA.set({
      page,
      ...options
    });
    ReactGA.pageview(page);
  };
  
  type HOCProps = {
    location: any
  };

  type HOCState = {};

  const HOC = class extends React.Component<HOCProps, HOCState> {
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    componentWillReceiveProps = (nextProps: any) => {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default WithTracker;
