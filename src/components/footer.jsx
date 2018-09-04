import React from 'react';
import { Box, Image, Item, Span } from 'react-html-email';

const FooterText = {
  color: '#F7F7F7',
  fontSize: '10pt',
  fontWeight: '300',
  letterSpacing: '1pt'
};
var now = new Date();
export default () => (
  <div>
    <Box className="emailFooter" align="center" cellSpacing={10} style={{ backgroundColor: '#333333', width: '100%' }}>
      <Item width="100%" align="center">
        {/* <Item align="center" style={{ fontSize: '19px', ...FooterText }}>
        Something not right?{' '}
      </Item>
      <Item align="center" style={{ fontSize: '12px', ...FooterText }}>
        You can contact us at{' '}
        <A href="https://www.prolaera.com/contact/" style={{ fontSize: '12px', ...FooterText }} target="_blank">
          Prolaera.com
        </A>
        {'\n'}
        or email us directly at{' '}
        <A href="mailto:Support@Prolaera.com" style={{ fontSize: '12px', ...FooterText }}>
          Support@Prolaera.com.
        </A>
      </Item>
      <Item align="center" style={{ fontSize: '12px', ...FooterText }}>
        Powered By
      </Item>
      <Item align="center">
        <Image
          src="https://gallery.mailchimp.com/eb930e30a15249a18d658c183/images/196fa069-3113-464c-a304-a1aa9f99fe22.png"
          alt="react"
          height={23}
          width={100}
        />
      </Item>
      <Item align="center" style={{ fontSize: '12px', ...FooterText }}>
        © Prolaera 2017
      </Item> */}
        <table style={{ ...FooterText, width: '100%' }}>
          <tr>
            {/* <th id="div1" style={{ paddingRight: '15%' }}> */}
            <td className="position" align="center">
              Powered By <span>Prolaera</span>
            </td>

            <td className="position" align="center">
              © Prolaera {now.getFullYear()}
            </td>
          </tr>
        </table>
      </Item>
    </Box>
  </div>
);
