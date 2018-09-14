import React from 'react';
import ComplianceBox from './complianceBox';

class YearRow extends React.Component {
  render() {
    const { compliance, regulator, reportIndex } = this.props;
    if (!regulator.cycle_limiter.annual || !regulator.cycle_limiter.annual.hours) return null;
    const hoursEarned = compliance.total;
    const hoursApplied = compliance.total;
    const hoursRequired = regulator.cycle_limiter.annual.hours;
    const hoursRemaining =
      hoursRequired !== 'N/A' && hoursRequired - hoursApplied > 0 ? hoursRequired - hoursApplied : 0;
    return (
      <div>
        <tr>
          <td style={{ verticalAlign: 'middle' }}>
            <p style={{ fontSize: '14pt', fontWeight: '400', textAlign: 'center' }}>Annual:</p>
          </td>
          <ComplianceBox text="Hours Earned" hours={hoursEarned} color={reportIndex} />
          <ComplianceBox text="Hours Applied" hours={hoursApplied} color={reportIndex} />
          <ComplianceBox text="Hours Required" hours={hoursRequired} color={reportIndex} />
          <ComplianceBox text="Remaining" hours={hoursRemaining} color={reportIndex} />
        </tr>
      </div>
    );
  }
}

export default YearRow;
