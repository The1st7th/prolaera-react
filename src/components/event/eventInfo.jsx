import React from 'react';
import { PrettyDate } from '../../helpers/dateHelpers';
import deliveryHelper from '../../helpers/deliveryHelper';
import setInnerHtml from '../../helpers/domHelpers';
import InfoHeader from '../infoHeader';

class EventInfo extends React.Component {
  render() {
    const {
      buttonText,
      event_id,
      course_name = '',
      buttonLink = 'https://app.prolaera.com/#/events/' + `${event_id}`,
      delivery_date = '',
      delivery_end_date = '',
      hours = [],
      delivery_location = '',
      delivery_method = 1,
      price = 0,
      courseAudience = '',
      prep = '',
      prerequisites = '',
      level = '',
      objectives = '',
      summary = ''
    } = this.props;

    let newPrerequisites = prerequisites.trim();

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
                            <th className="text-center small-text-center">
                              <InfoHeader info={'Event'} />
                              <h4
                                align="center"
                                className="text-center small-text-center"
                                style={{ paddingTop: '15px', marginTop: '0px' }}
                              >
                                <a
                                  href={'https://app.prolaera.com/#/events/' + `${event_id}`}
                                  style={{ textDecoration: 'underline', color: '#2F4050', height: '100%' }}
                                >
                                  <em>
                                    {course_name} ({deliveryHelper(delivery_method)})
                                  </em>
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
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Start Time:</p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(PrettyDate(delivery_date))}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', marginTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                End Time:
                              </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(PrettyDate(delivery_end_date))}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', marginTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Recommended CPE Credit(s):
                              </p>
                              <ul style={{ marginTop: '5px', marginBottom: '0px' }}>
                                {hours.map((hour, index) => (
                                  <li key={index} style={{}}>
                                    {hour.subject_area} - {hour.credits} Hour(s)
                                  </li>
                                ))}
                              </ul>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', marginTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Location:
                              </p>
                              <a
                                style={{ textDecoration: 'underline', color: 'inherit' }}
                                href={'https://www.google.com/maps/place/' + `${delivery_location}`}
                              >
                                <span style={{ fontWeight: 'normal' }}>{delivery_location}</span>
                              </a>
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', marginTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Delivery Method:
                              </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(deliveryHelper(delivery_method))}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', marginTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
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
                                Target Audience:
                              </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(courseAudience)}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', marginTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Prep:
                              </p>
                              <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={setInnerHtml(prep)} />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Prerequisites: </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(newPrerequisites)}
                              />
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
                              <p style={{ paddingTop: '5px', marginTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
                                Learning Objectives:
                              </p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(objectives)}
                              />
                            </th>
                          </tr>
                          <tr>
                            <th>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Summary:</p>
                              <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={setInnerHtml(summary)} />
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
                                      {buttonText ? (
                                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href={buttonLink}>
                                          {buttonText}
                                        </a>
                                      ) : (
                                        <span />
                                      )}
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

export default EventInfo;
