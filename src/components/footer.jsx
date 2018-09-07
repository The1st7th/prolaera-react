import React from 'react';
import { Box, Item } from 'react-html-email';

var now = new Date();
export default () => (
  <Box align="center" className="container">
    <Item>
      <Box className="row">
        <tr>
          <th align="center" className="small-12 large-6 columns first">
            <table>
              <tr>
                <th>
                  <p className="text-left small-text-center">Powered By Prolaera</p>
                </th>
                <th className="expander" />
              </tr>
            </table>
          </th>
          <th className="small-12 large-6 columns last">
            <table>
              <tr>
                <th>
                  <p className="text-right small-text-center">© Prolaera {now.getFullYear()}</p>
                </th>
                <th className="expander" />
              </tr>
            </table>
          </th>
        </tr>
      </Box>
    </Item>
  </Box>
);
