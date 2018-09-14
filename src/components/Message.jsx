import React from 'react';

class Message extends React.Component {
  render() {
    const { message = '' } = this.props;

    return (
      <table className="container" align="center">
        <tbody>
          <tr>
            <td>
              <table className="row" align="center">
                <tbody>
                  <tr>
                    <th
                      align="center"
                      className="large-12 small-12 columns first last"
                      style={{ paddingLeft: '40px', paddingRight: '40px' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <th className="text-center small-text-center">
                              <table className="spacer">
                                <tr>
                                  <td height="10px" style={{ fontSize: '10px', lineHeight: '10px' }}>
                                    &#xA0;
                                  </td>
                                </tr>
                              </table>
                              {message}
                              <table className="spacer">
                                <tr>
                                  <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                    &#xA0;
                                  </td>
                                </tr>
                              </table>
                            </th>
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

export default Message;
