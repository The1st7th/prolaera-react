import React from 'react';
import categoryName from '../../helpers/categoryName';
import ComplianceBox from './complianceBox';

class CategoryRow extends React.Component {
  render() {
    const { flatCompliance, regulator, reportIndex, category } = this.props;
    const hoursEarned = flatCompliance.actual[category];
    const hoursApplied = flatCompliance.applied[category];
    const hoursRequired = regulator.cycle_limiter.min[category] ? regulator.cycle_limiter.min[category] : 'N/A';
    const hoursRemaining =
      hoursRequired !== 'N/A' && hoursRequired - hoursApplied > 0 ? hoursRequired - hoursApplied : 0;
    return (
      <div>
        <tr>
          <td style={{ fontSize: '12px', verticalAlign: 'top' }}>
            <span>
              <h4 style={{ fontWeight: '' }}>{categoryName(category)}</h4>
            </span>
          </td>
          <ComplianceBox text="Hours Earned" hours={hoursEarned} color={reportIndex} />
          <ComplianceBox text="Hours Applied" hours={hoursApplied} color={reportIndex} />
          {hoursRequired == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="white" />
          ) : (
            <ComplianceBox text="Hours Required" hours={hoursRequired} color={reportIndex} />
          )}
          {hoursRequired == 'N/A' ? (
            <ComplianceBox text=" " hours=" " color="#FFFFFF" />
          ) : (
            <ComplianceBox text="Remaining" hours={hoursRemaining} color={reportIndex} />
          )}
        </tr>
      </div>
    );
  }
}

export default CategoryRow;
