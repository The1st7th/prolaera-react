import React from 'react';
import { Box, Item } from 'react-html-email';

class InfoHeader extends React.Component {
  render() {
    const { infoHeader = '' } = this.props;

    return (
      <div style={{}}>
        <Box>
          <Item align="center" style={{ paddingBottom: '20px' }}>
            <div
              style={{
                width: '100%',
                height: '20px',
                borderBottom: '1px solid grey',
                textAlign: 'center',
                boxSizing: 'border-box',
                position: 'relative',
                margin: 'auto',
                padding: '10px'
              }}
            >
              <span
                style={{
                  fontSize: '14pt',
                  backgroundColor: '#FFFFFF',
                  padding: '0px 20px',
                  fontWeight: '',
                  boxSizing: 'border-box',
                  margin: '0'
                }}
              >
                {infoHeader} Information
              </span>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default InfoHeader;
