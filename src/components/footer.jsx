import React from 'react';

var now = new Date();
export default () => (
  <table className="wrapper footer" align="center">
    <tr>
      <td>
        <table align="center" className="container">
          <tbody>
            <tr>
              <td style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <table align="center" className="row">
                  <tr>
                    <th align="center" className="small-12 large-6 columns first" valign="middle">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="30px" style={{ fontSize: '30px', lineHeight: '20px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="text-left small-text-center" style={{ marginBottom: '0' }}>
                                Powered By Prolaera
                              </p>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="30px" style={{ fontSize: '30px', lineHeight: '30px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                    <th align="center" className="small-12 large-6 columns last" valign="middle">
                      <table>
                        <tbody>
                          <tr>
                            <th>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="30px" style={{ fontSize: '30px', lineHeight: '30px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <p className="text-right small-text-center" style={{ marginBottom: '0' }}>
                                © Prolaera {now.getFullYear()}
                              </p>
                              <table className="spacer">
                                <tbody>
                                  <tr>
                                    <td height="30px" style={{ fontSize: '30px', lineHeight: '30px' }}>
                                      &#xA0;
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
