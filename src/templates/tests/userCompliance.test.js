import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import userCompliance from '../builders/userCompliance';
import completeCompliance from './json/completeCompliance.json';
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
describe('Email compliance Report', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('it returns an emails html', async () => {
    const emailHtml = await userCompliance(completeCompliance, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('it checks snapshot with no set logo', async () => {
    const emailHtml = await userCompliance(completeCompliance, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const userComplianceJson = emailComponent.toJSON();
    expect(userComplianceJson).toMatchSnapshot();
  });

  it('it writes an html file', async () => {
    const email = await userCompliance(completeCompliance, logoUrl);
    const newEmail = await inlineCss(email, {
      url: ' ',
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    });
    // await _sendEmail(newEmail, ['aflupton@gmail.com', 'andrew@prolaera.onmicrosoft.com']);
    const saved = await writeFile(newEmail, 'userComplianceTest.html');
    expect(saved).toEqual(true);
  });
});
