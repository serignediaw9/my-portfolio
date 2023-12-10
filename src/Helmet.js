import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>yuhhh</title>
                <link rel="canonical" href="http://localhost:3000/my-portfolio" />
            </Helmet>
            ...
        </div>
    );
  }
};