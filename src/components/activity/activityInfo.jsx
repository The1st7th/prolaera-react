import React from 'react';
// import Button from '../button';
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
                    <th className="large-12 small-12 columns first last">
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
                    <th className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <center data-parsed="">
                                <table align="center" className="" style={{}}>
                                  <tr>
                                    <td>
                                      <table>
                                        <tr>
                                          <td
                                            align="center"
                                            style={{
                                              padding: '18px',
                                              fontSize: '14pt',
                                              backgroundColor: '#72C02C',
                                              border: '1px solid #72C02C',
                                              borderRadius: '3px'
                                            }}
                                            className="text-center small-text-center"
                                          >
                                            <a
                                              align="center"
                                              style={{ color: '#FFFFFF', textDecoration: 'none' }}
                                              href={button1Link}
                                            >
                                              {buttonText}
                                            </a>
                                            {/* <Button text={buttonText} link={button1Link} /> */}
                                          </td>
                                        </tr>
                                      </table>
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
