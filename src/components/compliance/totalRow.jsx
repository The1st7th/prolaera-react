import React from 'react';
import ComplianceBox from './complianceBox';

class TotalRow extends React.Component {
  render() {
    const { flatCompliance, regulator, reportIndex } = this.props;
    const hoursEarned = flatCompliance.actual.total;
    const hoursApplied = flatCompliance.applied.total;
    const hoursRequired = regulator.cycle_total ? regulator.cycle_total : 'N/A';
    const hoursRemaining =
      hoursRequired !== 'N/A' && hoursRequired - hoursApplied > 0 ? hoursRequired - hoursApplied : 0;

    return (
      <div>
        <tr>
          <td style={{ verticalAlign: 'middle' }}>
            <p style={{ fontSize: '14pt', fontWeight: '400', textAlign: 'center' }}>Cycle:</p>
          </td>
          <ComplianceBox text="Hours Earned" hours={hoursEarned} color={reportIndex} />
          <ComplianceBox text="Hours Applied" hours={hoursApplied} color={reportIndex} />
          {hoursRequired == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="white" />
          ) : (
            <ComplianceBox text="Hours Required" hours={hoursRequired} color={reportIndex} />
          )}
          {hoursRequired == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="white" />
          ) : (
            <ComplianceBox text="Remaining" hours={hoursRemaining} color={reportIndex} />
          )}
        </tr>
      </div>
    );
  }
}

export default TotalRow;
