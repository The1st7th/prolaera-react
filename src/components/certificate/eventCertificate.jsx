import React from 'react';
import { PrettyDate } from '../../helpers/dateHelpers';

class EventCertificate extends React.Component {
  render() {
    const {
      course_name = '',
      delivery_date = '',
      delivery_end_date = '',
      first = '',
      header = 'Congratulations',
      body,
      profile_uid,
      event_id,
      pdf,
      button1Text = 'View Certificate',
      button2Text = 'Complete Evaluation',
      button1Link = `${pdf}`,
      button2Link = 'https://app.prolaera.com/#/users/' + `${profile_uid}` + '/events/' + `${event_id}` + '/review'
    } = this.props;

    return (
      <table align="center" class="container">
        <tbody>
          <tr>
            <td>
              <table align="center" class="row">
                <tbody>
                  <tr>
                    <th align="center" class="small-12 large-12 columns first last">
                      <table align="center">
                        <tr>
                          <th>
                            <h3 class="text-center small-text-center">{course_name}</h3>
                            <h5 class="text-center small-text-center">
                              {PrettyDate(delivery_date)} - {PrettyDate(delivery_end_date)}
                            </h5>
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table align="center" class="row">
                <tbody>
                  <tr>
                    <th class="large-6 small-12 columns first last">
                      <table>
                        <tr>
                          <th
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
                              {button1Text}
                            </a>
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                    <th class="large-6 small-12 columns first last">
                      <table>
                        <tr>
                          <th
                            className="text-center small-text-center"
                            style={{
                              padding: '11px',
                              fontSize: '14pt',
                              backgroundColor: '#2F4050',
                              border: '2 solid #2F4050',
                              borderRadius: '3px'
                            }}
                          >
                            <a style={{ color: '#FFFFFF', textDecoration: 'none' }} href={button2Link}>
                              {button2Text}
                            </a>
                          </th>
                          <th class="expander" />
                        </tr>
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

export default EventCertificate;
