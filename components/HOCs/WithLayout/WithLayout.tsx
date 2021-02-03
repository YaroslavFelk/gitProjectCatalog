import React from 'react';
import Layout from "../../Layout";

const WithLayout = WrappedComponent  => {
  const HOC = (props) => {
    return (
            <Layout>
              <WrappedComponent {...props} />
            </Layout>
    )
  };

  HOC.getInitialProps = WrappedComponent.getInitialProps

  return HOC
}

export default WithLayout;
