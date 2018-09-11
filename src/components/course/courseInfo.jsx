import React from 'react';
import deliveryHelper from '../../helpers/deliveryHelper';
import setInnerHtml from '../../helpers/domHelpers';
import Button from '../button';
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
                    <th align="center" className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <InfoHeader info={'Course'} />
                              <h4
                                className="text-center small-text-center"
                                align="center"
                                style={{ paddingTop: '15px', marginTop: '0px' }}
                              >
                                <a
                                  href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
                                  style={{ textDecoration: 'underline', color: '#2F4050', height: '100%' }}
                                >
                                  <em>{name}</em>
                                </a>
                              </h4>
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
                    <th align="left" className="large-12 small-12 columns first last" style={{ paddingLeft: '40px' }}>
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                By: <span style={{ fontWeight: 'lighter', fontSize: '12pt' }}>{by}</span>
                              </p>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Description: </p>
                              <div
                                className="innerHtmlStyles"
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(summary)}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Learning Objectives:
                              </p>
                              <div
                                className="innerHtmlStyles"
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(objectives)}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Delivery Method:
                              </p>
                              <div
                                className="innerHtmlStyles"
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(deliveryHelper(delivery_method))}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ marginTop: '5px', paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Price:{' '}
                                <span style={{ fontWeight: 'lighter', fontSize: '12pt' }}>
                                  {{ price } > 0 ? { price } : 'Free'}
                                </span>
                              </p>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Recommended CPE Credit(s):
                              </p>
                              <ul style={{ paddingTop: '5px' }}>
                                <li style={{ fontWeight: 'normal' }}>
                                  {hours[0].subject_area} - {hours[0].credits} Hour(s)
                                </li>
                              </ul>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Level: <span style={{ fontWeight: 'lighter', fontSize: '12pt' }}>{level}</span>
                              </p>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Target Audience:{' '}
                              </p>
                              <div
                                className="innerHtmlStyles"
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(courseAudience)}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ marginTop: '5px', paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Prerequisites:{' '}
                              </p>
                              <div
                                className="innerHtmlStyles"
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(prerequisites)}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Prep: </p>
                              <div
                                className="innerHtmlStyles"
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(prep)}
                              />
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table align="center" className="row" style={{ marginTop: '10px' }}>
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
                                      <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href={newButtonLink}>
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

export default CourseInfo;
