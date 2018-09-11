import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import user from '../../templates/tests/json/completeUser.json';
import event from '../../templates/tests/json/event.json';
import eventCertificateEmail from '../builders/eventCertificateBuilder';
import testCertificate from '../../templates/tests/json/completeCertificate.json';
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
    const emailHtml = await eventCertificateEmail(event, user, testCertificate, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an HTML file', async () => {
    const email = await eventCertificateEmail(event, user, testCertificate, logoUrl);
    console.log('**************************************************');
    console.log(typeof email);
    const newEmail = await inlineCss(email, {
      url: ' '
    });
    const send = await _sendEmail(newEmail, ['eric.e.nicolas@gmail.com', 'emmanuel.nicolas@outlook.com']);
    console.log('SENT EMAIL', send);
    const saved = await writeFile(newEmail, 'eventCertificateTest.html');
    expect(saved).toEqual(true);
  });
});
