import React from 'react';
import { Colorpick } from './colorpick';

class Button extends React.Component {
  render() {
    const { text = '', link } = this.props;
    return (
      <Box>
        <Item>
          <div align="center" style={{ textAlign: 'center', height: '100%', width: '100%' }}>
            <a href={link} style={Colorpick(this.props.color)}>
              {text}
            </a>
          </div>
        </Item>
      </Box>
    );
  }
}

export default Button;
