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
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <h4 align="center" className="text-center small-text-center">
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
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>End Time:</p>
                              <div
                                style={{ fontWeight: 'normal' }}
                                dangerouslySetInnerHTML={setInnerHtml(PrettyDate(delivery_end_date))}
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
                                Recommended CPE Credit(s):
                              </p>
                              <ul style={{ marginTop: '5px', marginBottom: '0px' }}>
                                {hours.map((hour, index) => (
                                  <li key={index} style={{}}>
                                    {hour.subject_area} - {hour.credits} Hour(s)
                                  </li>
                                ))}
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
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Location:</p>
                              <a
                                style={{ textDecoration: 'underline', color: 'inherit' }}
                                href={'https://www.google.com/maps/place/' + `${delivery_location}`}
                              >
                                <span style={{ fontWeight: 'normal' }}>{delivery_location}</span>
                              </a>
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
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>
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
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Prep:</p>
                              <div style={{ fontWeight: 'normal' }} dangerouslySetInnerHTML={setInnerHtml(prep)} />
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p style={{ paddingTop: '5px', fontSize: '14pt', fontWeight: 'bold' }}>Prerequisites:</p>
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
                                  style={{ boxSizing: 'border-box', paddingRight: '20px', paddingLeft: '20px' }}
                                >
                                  <tr>
                                    {buttonText ? (
                                      <td
                                        className="text-center small-text-center"
                                        style={{
                                          padding: '11px',
                                          fontSize: '14pt',
                                          backgroundColor: '#72C02C',
                                          border: '2px solid #72C02C',
                                          borderRadius: '3px'
                                        }}
                                      >
                                        <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href={buttonLink}>
                                          {buttonText}
                                        </a>
                                      </td>
                                    ) : (
                                      <span />
                                    )}
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

export default EventInfo;
