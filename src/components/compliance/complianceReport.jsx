import React from 'react';
// import { Item } from 'react-html-email';
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
              <table class="row">
                <tbody>
                  <tr>
                    <ComplianceHeader {...this.props} />
                  </tr>
                </tbody>
              </table>
              <table align="center" class="row">
                <tbody>
                  <tr>
                    <ComplianceRows
                      regulator={regulator}
                      flatCompliance={flatCompliance}
                      compliance={compliance}
                      reportIndex={index}
                    />
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
