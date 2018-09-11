import React from 'react';

var now = new Date();
export default () => (
  <table align="center" className="container" valign="middle">
    <tbody>
      <tr>
        <td>
          <table className="row text-white" color="#FFFFFF">
            <tr>
              <th align="center" className="small-12 large-4 columns first" style={{ verticalAlign: 'middle' }}>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <p className="text-left small-text-left">Powered By Prolaera</p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
              <th align="center" className="small-12 large-4 columns">
                <table>
                  <tbody>
                    <tr>
                      <th>&#xA0;</th>
                    </tr>
                  </tbody>
                </table>
              </th>
              <th align="center" className="small-12 large-4 columns last" style={{ verticalAlign: 'middle' }}>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <p className="text-right small-text-right">© Prolaera {now.getFullYear()}</p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
            </tr>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
);
