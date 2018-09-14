import React from 'react';
import deliveryHelper from '../../helpers/deliveryHelper';
import setInnerHtml from '../../helpers/domHelpers';
import InfoHeader from '../infoHeader';

class CourseInfo extends React.Component {
  render() {
    const {
      adminProfileId,
      buttonText,
      buttonLink,
      name = '',
      course_id,
      by = '',
      hours = [{ credits: '', subject_area: '' }],
      delivery_method = 1,
      price = 0,
      courseAudience = '',
      prep = '',
      prerequisites = '',
      level = '',
      objectives = '',
      summary = ''
    } = this.props;

    let newButtonLink = '';
    if (adminProfileId) {
      newButtonLink = 'admin/' + adminProfileId + '/' + buttonLink + '/review';
    } else {
      newButtonLink = 'courses/' + buttonLink;
    }

    return (
      <table align="center" className="container">
        <tbody>
          <tr>
            <td>
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
                            <th>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="32px" style={{ fontSize: '32px', lineHeight: '32px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <InfoHeader info={'Course'} />
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <h4 className="text-center small-text-center" align="center">
                                <a
                                  href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
                                  style={{ textDecoration: 'underline', color: '#2F4050', height: '100%' }}
                                >
                                  <em>{name}</em>
                                </a>
                              </h4>
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
                      style={{ paddingLeft: '40px', boxSizing: 'border-box' }}
                    >
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                By: <span style={{ fontWeight: 'lighter', fontSize: '12pt' }}>{by}</span>
                              </p>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Description: </p>
                              <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={setInnerHtml(summary)} />
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Learning Objectives:
                              </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(objectives)}
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
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Delivery Method:
                              </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(deliveryHelper(delivery_method))}
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
                              <p style={{ marginTop: '5px', paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Price:{' '}
                                <span style={{ fontWeight: 'lighter', fontSize: '12pt' }}>
                                  {{ price } > 0 ? { price } : 'Free'}
                                </span>
                              </p>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Recommended CPE Credit(s):
                              </p>
                              <ul style={{ paddingTop: '5px' }}>
                                <li style={{ fontWeight: 'normal' }}>
                                  {hours[0].subject_area} - {hours[0].credits} Hour(s)
                                </li>
                              </ul>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Level: <span style={{ fontWeight: 'lighter', fontSize: '12pt' }}>{level}</span>
                              </p>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Target Audience:
                              </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(courseAudience)}
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
                              <p style={{ marginTop: '5px', paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Prerequisites:{' '}
                              </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(prerequisites)}
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
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Prep: </p>
                              <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={setInnerHtml(prep)} />
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
                    <th align="left" className="large-6 small-6 columns first last" style={{ boxSizing: 'border-box' }}>
                      <table align="center">
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
                                <table className="float-center">
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
                                      <center>
                                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href={newButtonLink}>
                                          {buttonText}
                                        </a>
                                      </center>
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

export default CourseInfo;
