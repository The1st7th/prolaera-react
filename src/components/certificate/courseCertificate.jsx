import React from 'react';
// import deliveryHelper from '../../helpers/deliveryHelper';
import { CycleDates, RangeDate, PrettyDate } from '../../helpers/dateHelpers';

class CourseCertificate extends React.Component {
  render() {
    const {
      name = '',
      first = '',
      body = '',
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
                  <th align="center" className="large-12 small-12 columns first last">
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <a
                              href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
                              style={{ textDecoration: 'none', color: '#333333' }}
                            >
                              <div
                                style={{
                                  padding: '25px 15px 15px',
                                  backgroundColor: '#FFFFFF',
                                  fontStyle: 'normal',
                                  fontWeight: '500'
                                }}
                              >
                                <p
                                  style={{
                                    textAlign: 'center',
                                    fontSize: '26px',
                                    letterSpacing: '3px',
                                    marginBottom: '0px'
                                  }}
                                >
                                  {name}
                                </p>
                                <p style={{ textAlign: 'center', fontSize: '16px', letterSpacing: '3px' }}>
                                  {PrettyDate(now)}
                                </p>
                              </div>
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
                      style={{ paddingLeft: '40px', paddingRight: '40px' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <th className="text-center">
                              <p>{message}</p>
                              <p>{profile_uid ? <p>{certMessage}</p> : <div />}</p>
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
                    <th
                      className="large-12 small-12 columns first last"
                      style={{ paddingLeft: '40px', paddingRight: '40px' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <th className="text-left small-text-left">
                              <p>{body}</p>
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
                    <th
                      align="center"
                      className="large-6 small-12 columns first"
                      style={{ paddingLeft: '40px', paddingBottom: '0px' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <center>
                                <table style={{ borderCollapse: 'none' }}>
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
                                        style={{
                                          color: '#FFFFFF',
                                          textDecoration: 'none',
                                          padding: '11px',
                                          width: '100%'
                                        }}
                                        href={button1Link}
                                      >
                                        {button1Text}
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
                    </th>
                    <th
                      align="center"
                      className="large-6 small-12 columns last"
                      style={{ paddingRight: '40px', paddingBottom: '0px' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <center>
                                <table style={{ borderCollapse: 'none' }}>
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
                                      <a
                                        id="outlook"
                                        style={{
                                          color: '#FFFFFF',
                                          textDecoration: 'none',
                                          padding: '11px',
                                          width: '100%'
                                        }}
                                        href={button2Link}
                                      >
                                        {button2Text}
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
