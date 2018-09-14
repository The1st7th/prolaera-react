import React from 'react';
// import deliveryHelper from '../../helpers/deliveryHelper';
import { CycleDates, RangeDate, PrettyDate } from '../../helpers/dateHelpers';
import Message from '../Message';

class CourseCertificate extends React.Component {
  render() {
    const {
      name = '',
      first = '',
      profile_uid,
      course_id,
      pdf,
      message = '',
      certMessage = 'Congratulations ' +
        `${first}` +
        '! ' +
        "You've been issued a new certificate of completion. Please take a few moments to complete an evaluation to help us improve by clicking the Complete Evaluation button below.",
      button1Text = 'View Certificate',
      button2Text = 'Complete Evaluation',
      button1Link = `${pdf}`,
      button2Link = 'https://app.prolaera.com/#/users/' + `${profile_uid}` + '/courses/' + `${course_id}` + '/review'
    } = this.props;
    var now = new Date();

    return (
      <table className="container" align="center">
        <tbody>
          <tr>
            <td>
              <table align="center" className="row">
                <tr>
                  <th
                    align="center"
                    className="large-12 small-12 columns first last"
                    style={{ paddingBottom: '16px', paddingTop: '16px' }}
                  >
                    <table>
                      <tbody>
                        <tr>
                          <th
                            style={{
                              fontWeight: '500'
                            }}
                          >
                            <a
                              href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
                              style={{ textDecoration: 'none', color: '#333333' }}
                            >
                              <p
                                className="text-center small-text-center"
                                style={{
                                  fontSize: '26px',
                                  letterSpacing: '3px',
                                  marginBottom: '5px',
                                  lineHeight: '32px'
                                }}
                              >
                                {name}
                              </p>
                              <p
                                className="text-center small-text-center"
                                style={{
                                  marginBottom: '0',
                                  fontSize: '16px',
                                  letterSpacing: '3px',
                                  lineHeight: '16px'
                                }}
                              >
                                {PrettyDate(now)}
                              </p>
                            </a>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </th>
                </tr>
              </table>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th
                      align="center"
                      className="large-12 small-12 columns first last"
                      style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '0px' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <th className="text-center">
                              {message ? <Message /> : <span />}
                              <table className="spacer">
                                <tr>
                                  <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                    &#xA0;
                                  </td>
                                </tr>
                              </table>
                              <p>
                                {profile_uid ? (
                                  <p id="cert" style={{ marginBottom: '0' }}>
                                    {certMessage}
                                  </p>
                                ) : (
                                  <div />
                                )}
                              </p>
                              <table className="spacer">
                                <tr>
                                  <td height="32px" style={{ fontSize: '32px', lineHeight: '32px' }}>
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
              <table align="left" className="row">
                <tbody>
                  <tr>
                    <th
                      align="center"
                      className="large-4 small-12 columns first"
                      style={{
                        paddingLeft: '40px',
                        paddingRight: '8px',
                        paddingBottom: '8px',
                        boxSizing: 'border-box'
                      }}
                    >
                      <table align="center">
                        <tbody>
                          <tr>
                            <td>
                              <table align="center">
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
                                    <center data-parsed="">
                                      <a
                                        align="center"
                                        className="float-center"
                                        style={{
                                          color: '#FFFFFF',
                                          textDecoration: 'none'
                                        }}
                                        href={button1Link}
                                      >
                                        {button1Text}
                                      </a>
                                    </center>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                    <th
                      align="center"
                      className="large-4 small-12 columns last"
                      style={{
                        paddingLeft: '8px',
                        paddingRight: '40px',
                        paddingBottom: '8px',
                        boxSizing: 'border-box'
                      }}
                    >
                      <table align="center">
                        <tbody>
                          <tr>
                            <td>
                              <table align="center">
                                <tr>
                                  <td
                                    className="text-center small-text-center"
                                    style={{
                                      padding: '11px',
                                      fontSize: '14pt',
                                      backgroundColor: '#2F4050',
                                      border: '2 solid #2F4050',
                                      borderRadius: '3px'
                                    }}
                                  >
                                    <center data-parsed="">
                                      <a
                                        align="center"
                                        className="float-center"
                                        style={{
                                          color: '#FFFFFF',
                                          textDecoration: 'none'
                                        }}
                                        href={button2Link}
                                      >
                                        {button2Text}
                                      </a>
                                    </center>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td className="expander" />
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

export default CourseCertificate;
