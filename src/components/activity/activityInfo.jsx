import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../button';
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
      <div
        id="backgroundTable"
        style={{
          display: 'block',
          margin: 'auto',
          textAlign: 'center',
          fontStyle: 'normal',
          fontWeight: '400',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box className="container" align="center" width="100%">
          <Item className="row" align="center" textAlign="center" width="100%">
            <div
              style={{
                width: '100%',
                margin: 'auto'
              }}
            >
              <InfoHeader info={name} />
              <p style={{ paddingTop: '15px', marginTop: '0px' }}>By: {author}</p>
            </div>
          </Item>
          <Item width="100%" style={{ cellpadding: '5px', textAlign: 'center' }}>
            <table
              align="center"
              style={{
                margin: 'auto',
                borderSpacing: '10px'
              }}
            >
              <tr className="center">
                <td
                  align="center"
                  textAlign="center"
                  style={{
                    borderRadius: '3px',
                    margin: 'auto',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  <Button color={'#72C02C'} text={buttonText} link={button1Link} />
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
    );
  }
}

export default ActivityInfo;
