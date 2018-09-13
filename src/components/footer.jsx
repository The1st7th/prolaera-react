import React from 'react';

var now = new Date();
export default () => (
  <table className="wrapper footer" align="center">
    <tr>
      <td>
        <table align="center" className="container">
          <tbody>
            <tr>
              <td>
                <table align="center" className="row">
                  <tr>
                    <th align="center" className="small-12 large-6 columns first last" valign="middle">
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
                    <th align="center" className="small-12 large-6 columns first last" valign="middle">
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
      </td>
    </tr>
  </table>
);
