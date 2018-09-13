import React from 'react';
import PropTypes from 'prop-types';

export default function Email(props) {
  return (
    <html lang={props.lang} xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>{props.title}</title>
        {props.headCSS && <style type="text/css">{props.headCSS}</style>}
      </head>
      <body>
        <table className="body">
          <tr>
            <td class="float-center small-float-center" align="center" valign="top">
              <center>{props.children}</center>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}

Email.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  headCSS: PropTypes.string,
  children: PropTypes.node
};

Email.defaultProps = {
  lang: 'en',
  headCSS: undefined,
  children: undefined
};
