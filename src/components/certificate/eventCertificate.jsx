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
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '0px',
          textAlign: 'center',
          borderRadius: '0px',
          padding: '20px',
          fontFamily: 'source-sans-pro, sans-serif',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <div
              style={{
                // maxWidth: '300px',
                marginLeft: 'auto',
                marginRight: 'auto'
                // border: '1px solid lightgray',
                // borderRadius: '8px',
                // background: 'linear-gradient(to bottom right, #ffd11a, #fff0b3, #ffd633)',
                // boxShadow: '1px 1px 8px darkgray'
              }}
            >
              <h3 className="infoHeader" style={{ marginBottom: '5px' }}>
                {course_name}
              </h3>
              <h5 style={{ marginTop: '0px', fontSize: '12pt' }}>
                {PrettyDate(delivery_date)} - {PrettyDate(delivery_end_date)}
              </h5>
            </div>
          </Item>
          <Item>
            <p>{body}</p>
          </Item>
          <Item align="center">
            <table
              style={{
                textAlign: 'center',
                margin: 'auto',
                borderSpacing: '10px'
              }}
            >
              <tr>
                <td
                  style={{
                    margin: 'auto',
                    width: '50%'
                  }}
                >
                  <Button color={'#72C02C'} text={button1Text} link={button1Link} />
                </td>
                <td
                  style={{
                    margin: 'auto',
                    width: '50%'
                  }}
                >
                  <Button color={'#2F4050'} text={button2Text} link={button2Link} />
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
    );
  }
}

export default EventCertificate;
