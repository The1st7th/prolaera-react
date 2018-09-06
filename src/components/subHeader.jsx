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
          <Box align="center" className="row">
            <tr>
              <th className="small-12 large-12 columns first last">
                <table align="center">
                  <tobdy>
                    <tr>
                      <th>
                        <h6 className="text-center">{subText}</h6>
                      </th>
                    </tr>
                  </tobdy>
                </table>
              </th>
            </tr>
            <tr>
              <th className="small-12 large-12 columns first last">
                <table align="center">
                  <tbody>
                    <tr>
                      <th>
                        <h3 className="text-center">{header}</h3>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
            <tr>
              <th className="small-12 large-12 columns first last">
                <table align="center">
                  <tbody>
                    <tr>
                      <th>
                        <h5 className="text-center">{message}</h5>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
            <tr>
              <th className="small-12 large-12 columns first last">
                <table alignm="center">
                  <tbody>
                    <tr>
                      <th>
                        <p className="text-center">{profile_uid ? <p>{certMessage}</p> : <div />}</p>
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
