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
          <Item align="center" width="100%">
            <div
              style={{
                display: 'inline-block',
                margin: 'auto',
                padding: '20px',
                textAlign: 'center'
              }}
            >
              <Button color={'#72C02C'} text={buttonText} link={button1Link} />
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default ActivityInfo;
