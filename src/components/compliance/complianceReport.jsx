import React from 'react';
import ComplianceRows from './complianceRows';
import ComplianceHeader from './complianceHeader';

class ComplianceReport extends React.Component {
  render() {
    const { flatCompliance, compliance, regulator, index } = this.props;
    return (
      <table align="center" class="container">
        <tbody>
          <tr>
            <td>
              <table align="center" class="row">
                <tbody>
                  <tr>
                    <th className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <ComplianceHeader {...this.props} />
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table align="center" class="row">
                <tbody>
                  <tr>
                    <th className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <ComplianceRows
                                regulator={regulator}
                                flatCompliance={flatCompliance}
                                compliance={compliance}
                                reportIndex={index}
                              />
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

export default ComplianceReport;
