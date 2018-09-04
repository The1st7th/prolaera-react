import React from 'react';
import { Box, Item } from 'react-html-email';
// import deliveryHelper from '../../helpers/deliveryHelper';
import { CycleDates, RangeDate, PrettyDate } from '../../helpers/dateHelpers';
import Button from '../button';

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
      <div
        id="courseCertificate"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          height: 'auto',
          marginBottom: '0px',
          textAlign: 'center',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box className="courseCertificate" align="center" width="100%">
          <Item style={{ backgroundColor: '#FFFFFF', width: '100%' }}>
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
                <p style={{ textAlign: 'center', fontSize: '28px', letterSpacing: '3px', marginBottom: '0px' }}>
                  {name}
                </p>
                <p style={{ textAlign: 'center', fontSize: '18px', letterSpacing: '3px' }}>{PrettyDate(now)}</p>
              </div>
            </a>
          </Item>
          <Item align="center">
            <table
              style={{
                textAlign: 'center',
                fontSize: '14pt',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <tr>
                <td>
                  <p>{message}</p>
                  <div style={{ boxSizing: 'border-box', padding: '0px 50px' }}>
                    {profile_uid ? <p>{certMessage}</p> : <div />}
                  </div>
                </td>
              </tr>
            </table>
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
                  className="customButton"
                  style={{
                    margin: 'auto',
                    width: '50%'
                  }}
                >
                  <Button color={'#72C02C'} text={button1Text} link={button1Link} />
                </td>
                <td
                  className="customButton"
                  style={{
                    borderRadius: '2px',
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

export default CourseCertificate;
