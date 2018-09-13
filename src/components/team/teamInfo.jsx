import React from 'react';
import setInnerHtml from '../../helpers/domHelpers';
import InfoHeader from '../infoHeader';

class teamInfo extends React.Component {
  render() {
    const { name = '', description = '', buttonText, buttonLink } = this.props;

    return (
      <table align="center" className="container">
        <tbody>
          <tr>
            <td>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <InfoHeader info={'Team'} />
                            </th>
                            <th className="expander" />
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
                    <th
                      align="left"
                      className="large-12 small-12 columns first last"
                      style={{ paddingLeft: '40px', paddingRight: '40px' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Name:</p>
                              <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={setInnerHtml(name)} />
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Description:</p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(description)}
                              />
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px' }}>
                                More information about your team can be found by navigating to the Prolaera website.
                              </p>
                            </th>
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
                            <th>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <center>
                                <table
                                  className="float-center"
                                  style={{ borderCollapse: 'none', paddingLeft: '20px', paddingRight: '20px' }}
                                >
                                  <tr>
                                    <td
                                      className="text-center small-text-center"
                                      style={{
                                        padding: '11px',
                                        fontSize: '14pt',
                                        backgroundColor: '#72C02C',
                                        border: '2 solid #72C02C',
                                        borderRadius: '3px'
                                      }}
                                    >
                                      <a
                                        style={{ color: '#FFFFFF', textDecoration: 'none' }}
                                        href={'https://app.prolaera.com/#/admin/' + buttonLink + '/dashboard'}
                                      >
                                        {buttonText}
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </center>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="32px" style={{ fontSize: '32px', lineHeight: '32px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
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

export default teamInfo;
