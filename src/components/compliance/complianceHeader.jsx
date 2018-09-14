import React from 'react';
import { CycleDates, PrettyDate } from '../../helpers/dateHelpers';

class ComplianceHeader extends React.Component {
  render() {
    const {
      flatCompliance: { cycle_date, issue_date, expiration_date },
      regulator: { cycle, name }
    } = this.props;
    return (
      <table align="center" className="container">
        <tbody>
          <tr>
            <td>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th calign="center" lassName="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th
                              className="text-center small-text-center"
                              style={{
                                textAlign: 'center',
                                lineHeight: '25px'
                              }}
                            >
                              <table className="spacer">
                                <tr>
                                  <td height="16px" style={{ fontSize: '16px', lineHeight: '16px' }}>
                                    &#xA0;
                                  </td>
                                </tr>
                              </table>
                              <p
                                style={{
                                  textAlign: 'center',
                                  fontSize: '28px',
                                  paddingBottom: '5px'
                                }}
                              >
                                {name}
                              </p>
                              <p style={{ textAlign: 'center', paddingBottom: '5px', marginBottom: '0' }}>
                                <strong>Reporting Period: </strong> {CycleDates(cycle_date, cycle, issue_date)}
                              </p>
                              <p style={{ textAlign: 'center', paddingBottom: '10px' }}>
                                <strong>License Expiration Date: </strong> {PrettyDate(expiration_date)}
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

export default ComplianceHeader;
