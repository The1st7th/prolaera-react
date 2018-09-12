import React from 'react';

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
      <table align="center" className="container">
        <tbody>
          <tr>
            <td>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th align="center" className="small-12 large-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p
                                style={{ marginBottom: '0px', marginTop: '20px', fontSize: '14pt' }}
                                className="text-center small-text-center subheader"
                              >
                                {subText}
                              </p>
                              <p
                                style={{ marginBottom: '0px', marginTop: '0px', fontSize: '26pt' }}
                                className="text-center small-text-center"
                              >
                                {header}
                              </p>
                              <p
                                style={{ marginBottom: '0px', marginTop: '0px', fontSize: '18pt' }}
                                className="text-center small-text-center"
                              >
                                {message}
                              </p>
                              <p className="text-center small-text-center">
                                {profile_uid ? <p>{certMessage}</p> : <div />}
                              </p>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default SubHeader;
