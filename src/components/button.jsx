import React from 'react';
import { Colorpick } from './colorpick';

class Button extends React.Component {
  render() {
    const { text = '', link } = this.props;
    return (
      <div>
        <div align="center" style={{ textAlign: 'center', height: '100%', width: '100%' }}>
          <a href={link}>
            <button style={Colorpick()}>{text}</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Button;
