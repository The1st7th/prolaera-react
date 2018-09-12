import React from 'react';

var now = new Date();
export default () => (
  <table align="center" className="container" valign="middle">
    <tbody>
      <tr>
        <td>
          <table align="center" className="row">
            <tr>
              <th align="center" className="small-12 large-4 columns first last" style={{ verticalAlign: 'middle' }}>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <p className="text-left small-text-center">Powered By Prolaera</p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th>
              {/* <th align="center" className="small-12 large-4 columns first last">
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <p className='text-center small-text-center'>&#xA0;</p>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </th> */}
              <th align="center" className="small-12 large-4 columns first last" style={{ verticalAlign: 'middle' }}>
                <table>
                  <tbody>
                    <tr>
                      <th>
                        <p className="text-right small-text-center">© Prolaera {now.getFullYear()}</p>
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
