import React from 'react';
import { Colorpick } from './colorpick';

class Button extends React.Component {
  render() {
    const { text = '', link } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              {this.props.color == '#72C02C' ? (
                <table cellSpacing="0" cellPadding="0">
                  <tr>
                    <td
                      align="center"
                      width="300"
                      height="40"
                      bgcolor="#72C02C"
                      style={{ borderRadius: '5px', color: '#72C02C', display: 'block' }}
                    >
                      <a
                        href="#"
                        style={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          fontFamily: 'sans-serif',
                          textDecoration: 'none',
                          lineHeight: '40px',
                          width: '100%',
                          display: 'inline-block'
                        }}
                      >
                        <span style={{ color: '#FFFFFF' }}>{text}</span>
                      </a>
                    </td>
                  </tr>
                </table>
              ) : (
                <table cellSpacing="0" cellPadding="0">
                  <tr>
                    <td
                      align="center"
                      width="300"
                      height="40"
                      bgcolor="#2F4050"
                      style={{ borderRadius: '5px', color: '#ffffff', display: 'block' }}
                    >
                      <a
                        href="#"
                        style={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          fontFamily: 'sans-serif',
                          textDecoration: 'none',
                          lineHeight: '40px',
                          width: '100%',
                          display: 'inline-block'
                        }}
                      >
                        <span style={{ color: '#FFFFFF' }}>{text}</span>
                      </a>
                    </td>
                  </tr>
                </table>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Button;
