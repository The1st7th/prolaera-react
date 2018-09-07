import React from 'react';
import { Box, Item } from 'react-html-email';
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
      <Box align="center" className="container">
        <Item>
          <Box className="row">
            <tr>
              <th className="small-12 large-12 columns first last">
                <table align="center">
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
          </Box>
        </Item>
        <Item>
          <Box className="row">
            <tr>
              <th className="small-12 large-12 columns first last">
                <table align="center">
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
          </Box>
        </Item>
      </Box>
    );
  }
}

export default ActivityInfo;
