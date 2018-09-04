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
        style={{
          display: 'block',
          margin: 'auto',
          textAlign: 'center',
          fontStyle: 'normal',
          fontWeight: '400',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box align="center" width="100%">
          <Item align="center" width="100%">
            <div
              style={{
                width: '90%',
                margin: 'auto'
              }}
            >
              <InfoHeader info={name} />
              <p style={{ paddingTop: '15px', marginTop: '0px' }}>By: {author}</p>
            </div>
          </Item>
          <Item width="100%" style={{ textAlign: 'center' }}>
            <table
              style={{
                textAlign: 'center',
                margin: 'auto',
                borderSpacing: '10px'
              }}
            >
              <tr style={{ textAlign: 'center' }}>
                <td
                  className="customButton"
                  style={{
                    borderRadius: '2px',
                    margin: 'auto',
                    width: '100%',
                    textAlign: 'center'
                  }}
                >
                  <Button color={'#2F4050'} text={buttonText} link={button1Link} />
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
