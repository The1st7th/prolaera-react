import React from 'react';
import Button from '../button';
import InfoHeader from '../infoHeader';

class ActivityInfo extends React.Component {
  render() {
    const {
      name = '',
      author = '',
      profile_uid,
      activity_id,
      buttonText = 'View Details',
      button1Link = 'https://app.prolaera.com/#/users/' + `${profile_uid}` + '/activities' + `${activity_id}`
    } = this.props;

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
                            <th>
                              <InfoHeader info={name} />
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="text-center small-text-center">By: {author}</p>
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
                                      <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href={button1Link}>
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

export default ActivityInfo;
