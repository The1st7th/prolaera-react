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
                                      <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href={button1Link}>
                                        {buttonText}
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </center>
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
