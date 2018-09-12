import React from 'react';
import InfoHeader from '../infoHeader';
import setInnerHtml from '../../helpers/domHelpers';

class TrackInfo extends React.Component {
  render() {
    const { name = '', author = '', description = '', buttonText, profileId, trackId } = this.props;

    return (
      <table align="center" className="container">
        <tbody>
          <tr>
            <td>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th className="small-12 large-12 columns first last">
                      <table>
                        <tr>
                          <th className="text-center small-text-center">
                            <InfoHeader info={'Learning Track'} />
                          </th>
                          <th className="expander" />
                        </tr>
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
                      className="small-12 large-12 columns first last"
                      style={{ paddingLeft: '40px', paddingRight: '40px' }}
                    >
                      <table>
                        <tr>
                          <th>
                            <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Track:</p>
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
                            <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Author:</p>
                            <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={setInnerHtml(author)} />
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
                            <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={setInnerHtml(description)} />
                            <table className="spacer">
                              <tbody>
                                <tr>
                                  <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                    &#xA0;
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p style={{ paddingTop: '5px', fontSize: '12pt', fontWeight: 'normal' }}>
                              More information about this track can be found by navigating to the Prolaera website.
                            </p>
                          </th>
                          <th className="expander" />
                        </tr>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              {profileId ? (
                <table className="row">
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
                          <table className="button float-center" style={{ borderCollapse: 'none' }}>
                            <tr>
                              <td
                                className="text-center small-text-center"
                                style={{
                                  padding: '14px',
                                  fontSize: '14pt',
                                  backgroundColor: '#72C02C',
                                  border: '1px solid #72C02C',
                                  borderRadius: '2px'
                                }}
                              >
                                <a
                                  style={{ color: '#FFFFFF', textDecoration: 'none' }}
                                  href={
                                    'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId
                                  }
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
              ) : (
                <span />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TrackInfo;
