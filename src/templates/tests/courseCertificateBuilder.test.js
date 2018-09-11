import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import course from '../../templates/tests/json/completeCourse.json';
import user from '../../templates/tests/json/completeUser.json';
import certificate from '../../templates/tests/json/completeCertificate.json';
import courseCertificateEmail from '../builders/courseCertificateBuilder';
const _sendEmail = (template, emails) => {
  return new Promise((resolve, reject) => {
    request(
      {
        url: 'https://api-dev.prolaera.com/v1/mailer',
        method: 'PUT',
        json: {
          template,
          emails
        }
      },
      (error, response, body) => {
        if (error) {
          console.error(error);
          return reject(error);
        }
        resolve({
          response,
          body
        });
      }
    );
  });
};
describe('eventCertificateBuilder', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('checks snapshot', async () => {
    const emailHtml = await courseCertificateEmail(course, user, certificate, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const certificateJSON = emailComponent.toJSON();
    expect(certificateJSON).toMatchSnapshot();
  });

  it('writes an HTML file', async () => {
    const email = await courseCertificateEmail(course, user, certificate, logoUrl);
    const gmailfix = `</table><table class="gmail-app-fix">
    <tr>
        <td>
            <table cellpadding="0" cellspacing="0" border="0" align="center" width="600">
                <tr>
                    <td cellpadding="0" cellspacing="0" border="0" height="1"; style="line-height: 1px; min-width: 200px;">
                        <img src="transparent.gif" width="200" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 200px; width: 200px;"/>
                    </td>
                    <td cellpadding="0" cellspacing="0" border="0" height="1"; style="line-height: 1px; min-width: 200px;">
                        <img src="transparent.gif" width="200" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 200px; width: 200px;"/>
                    </td>
                    <td cellpadding="0" cellspacing="0" border="0" height="1"; style="line-height: 1px; min-width: 200px;">
                        <img src="transparent.gif" width="200" height="1" style="display: block; max-height: 1px; min-height: 1px; min-width: 200px; width: 200px;"/>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table></body></html>`;

    const newEmail = email.split('</body>').join(`${gmailfix}</body>`);
    const inlineEmail = await inlineCss(newEmail, {
      url: ' ',
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    });
    await _sendEmail(inlineEmail, ['aflupton@gmail.com', 'andrew@prolaera.onmicrosoft.com']);
    const saved = await writeFile(inlineEmail, 'courseCertificateTest.html');
    expect(saved).toEqual(true);
  });
});
