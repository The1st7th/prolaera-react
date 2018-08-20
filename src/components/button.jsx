import React from 'react';

class Button extends React.Component {
  render() {
    const { text = '', link } = this.props;
    return (
      <div
        className="customButton"
        align="center"
        style={{ maxWidth: '100%', textAlign: 'center', padding: '20px 0px 20px 0px' }}
      >
        <a
          href={link}
          style={{
            width: '200px',
            padding: '14px 14px 14px 14px',
            color: 'white',
            // backgroundColor: '#2F4050',
            textDecoration: 'none',
            borderRadius: '3px'
          }}
        >
          {text}
        </a>
      </div>
    );
  }
}

export default Button;
