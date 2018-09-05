import React from 'react';
import { Box, Item } from 'react-html-email';
import InfoHeader from '../infoHeader';

class GenericInfo extends React.Component {
  render() {
    const { header = '', body = '', footer = '' } = this.props;

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'left',
          padding: '20px',
          fontFamily: 'sans-serif',
          marginBottom: '0px',
          backgroundColor: 'white'
        }}
      >
        <Box align="center" width="100%">
          <Item align="center" width="100%">
            {header ? (
              <div
                style={{
                  width: '90%',
                  margin: 'auto'
                }}
              >
                <InfoHeader info={'header'} />
              </div>
            ) : (
              <span />
            )}
          </Item>
          <Item>
            <div>{body}</div>
          </Item>
          <Item>
            <div>{footer}</div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default GenericInfo;
