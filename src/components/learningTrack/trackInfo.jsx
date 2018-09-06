import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../../components/button';
import InfoHeader from '../infoHeader';

class TrackInfo extends React.Component {
  render() {
    const { name = '', author = '', description = '', buttonText, profileId, trackId } = this.props;

    return (
      <div
        id="subHeaderWrapper"
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
                margin: 'auto',
                wordWrap: 'break-word'
              }}
            >
              <InfoHeader info={'Learning Track'} />
            </div>
          </Item>
          <Item width="100%" align="left">
            <div
              style={{
                paddingLeft: '40px',
                paddingBottom: '10px'
              }}
            >
              <h4>
                Name: <span style={{ fontWeight: 'normal' }}>{name}</span>
              </h4>
              <h4>
                Author: <span style={{ fontWeight: 'normal' }}>{author}</span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Description:</h4>
              <p style={{ marginTop: '10px', fontWeight: 'normal' }}>{description}</p>
            </div>
          </Item>
          <Item align="center" width="100%">
            <table align="center">
              <tr>
                <td align="center">
                  <p style={{ padding: '0px 40px' }}>
                    More information about this track can be found by navigating to the Prolaera website.
                  </p>
                  {profileId ? (
                    <div
                      align="center"
                      style={{
                        display: 'inline-block',
                        margin: 'auto',
                        padding: '20px',
                        textAlign: 'center'
                      }}
                    >
                      {profileId ? (
                        <Button
                          color={'#72C02C'}
                          text={buttonText}
                          link={'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId}
                        />
                      ) : (
                        <span className="buttonSpan" />
                      )}
                    </div>
                  ) : (
                    <span className="buttonSpan" />
                  )}
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
    );
  }
}

export default TrackInfo;
