import React from 'react';

class ComplianceBox extends React.Component {
  render() {
    const { text, hours, color } = this.props;
    const colors = ['#c0392b', '#eea303', '#f1c40f', '#64bb5d', '#16a085', '#0e83cd', '#702fa8'];
    const style = {
      color: '#FFFFFF',
      backgroundColor: colors[color % 7],
      padding: '20px 14px'
    };
    return (
      <th
        {...style}
        style={{
          paddingRight: '5px',
          borderRight: '1px solid #333333',
          borderBottom: '2px solid #333333'
        }}
      >
        <p style={{ textAlign: 'center', fontSize: '14px' }}>{text}</p>
        <p style={{ textAlign: 'center', fontSize: '30px' }}>{hours}</p>
      </th>
    );
  }
}

export default ComplianceBox;
