import * as React from 'react';
// import { Box, Item } from 'react-html-email';
import ComplianceReport from './complianceReport';

class ComplianceReports extends React.Component {
  render() {
    const { flatComplianceDict, complianceDict, regulatorsDict } = this.props;

    return (
      <table align="center" class="container">
        <tbody>
          <tr>
            <td>
              <table align="center" class="row">
                <tbody>
                  <tr>
                    <th>
                      {Object.keys(complianceDict).map((key, index) => {
                        return (
                          <ComplianceReport
                            key={index}
                            flatCompliance={flatComplianceDict[key][0]}
                            compliance={complianceDict[key]}
                            regulator={regulatorsDict[key]}
                            index={index}
                          />
                        );
                      })}
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

export default ComplianceReports;
