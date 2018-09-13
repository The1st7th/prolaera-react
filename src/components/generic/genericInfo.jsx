import React from 'react';
import InfoHeader from '../infoHeader';

class GenericInfo extends React.Component {
  render() {
    const { header = '', body = '', footer = '' } = this.props;

    return (
      <table align="center" className="container">
        <tbody>
          <tr>
            <td>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th align="center" className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th>{header ? <InfoHeader info={'header'} /> : <span />}</th>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th align="center" className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th className="text-center small-text-center">{body}</th>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th align="center" className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th className="text-center small-text-center">{footer}</th>
                          </tr>
                        </tbody>
                      </table>
                      <table className="spacer">
                        <tbody>
                          <tr>
                            <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                              &#xA0;
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default GenericInfo;
