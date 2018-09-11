import React from 'react';
import { Box, Item } from 'react-html-email';

class InfoHeader extends React.Component {
  render() {
    const { info = '' } = this.props;

    return (
      <table className="container" align="center">
        <tbody align="center">
          <tr>
            <td>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th align="center" className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <div
                                style={{
                                  width: '100%',
                                  height: '20px',
                                  borderBottom: '1px solid grey',
                                  textAlign: 'center',
                                  boxSizing: 'border-box',
                                  position: 'relative',
                                  margin: 'auto',
                                  padding: '10px'
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: '14pt',
                                    backgroundColor: '#FFFFFF',
                                    padding: '0px 20px',
                                    boxSizing: 'border-box',
                                    margin: '0'
                                  }}
                                >
                                  {info} Information
                                </span>
                              </div>
                            </th>
                          </tr>
                        </tbody>
                      </table>
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

export default InfoHeader;
