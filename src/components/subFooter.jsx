import React from 'react';

class SubFooter extends React.Component {
  render() {
    const { text, subtext = '' } = this.props;

    return (
      <table align="center" className="container">
        <tbody>
          <tr>
            <td>
              <table align="center" className="row">
                <tbody>
                  <tr>
                    <th align="center" className="large-12 small-12 columns first last">
                      <table>
                        <tbody>
                          <tr>
                            <th className="text-center small-text-center">
                              <p>{text}</p>
                              <p>{subtext}</p>
                            </th>
                            <th className="expander" />
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

export default SubFooter;
