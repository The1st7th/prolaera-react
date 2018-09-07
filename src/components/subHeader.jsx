import React from 'react';
import { Box, Item } from 'react-html-email';

class SubHeader extends React.Component {
  render() {
    const {
      profile_uid,
      subText = '',
      header = '',
      first,
      message = '',
      certMessage = 'Congratulations ' +
        `${first}` +
        '! ' +
        "You've been issued a new certificate of completion. Please take a few moments to complete an evaluation to help us improve by clicking the Complete Evaluation button below."
    } = this.props;
    var now = new Date();

    return (
      <Box align="center" className="container">
        <Item>
          <Box className="row">
            <tr>
              <th className="small-12 large-12 columns first last">
                <table align="center">
                  <tbody>
                    <tr>
                      <th>
                        <p
                          style={{ marginBottom: '0', marginTop: '20px', fontSize: '14pt' }}
                          className="text-center subheader"
                        >
                          {subText}
                        </p>
                        <h2 style={{ marginBottom: '5px' }} className="text-center small-text-center">
                          {header}
                        </h2>
                        <h4 style={{ marginBottom: '0' }} className="text-center small-text-center">
                          {message}
                        </h4>
                        <p className="text-center small-text-center">{profile_uid ? <p>{certMessage}</p> : <div />}</p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
          </Box>
        </Item>
      </Box>
    );
  }
}

export default SubHeader;
