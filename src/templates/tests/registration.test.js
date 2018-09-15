import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import event from '../../templates/tests/json/event.json';
import registrationEmail from '../builders/eventRegistrationBuilder';
import inlineCss from 'inline-css';
var request = require('request');
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
describe('registration Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns registration subHeader email html', async () => {
    const emailHtml = await registrationEmail(event, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await registrationEmail(event, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await registrationEmail(event, logoUrl);
    const newEmail = await inlineCss(email, {
      url: ' ',
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    });
    // await _sendEmail(newEmail, ['aflupton@gmail.com', 'andrew@prolaera.onmicrosoft.com', 'teagan@prolaera.com']);
    const saved = await writeFile(newEmail, 'eventTest.html');
    expect(saved).toEqual(true);
  });
});
