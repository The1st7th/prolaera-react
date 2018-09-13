import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import trackAssignedBuilder from '../builders/trackAssignedBuilder';
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
describe('trackAssigned Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  const track = {
    name: 'Q4 Tax Planning Track',
    author: 'CPE Authors Inc',
    description: 'This is the foremost learning track for CPAs.'
  };
  it('returns trackAssigned email html', async () => {
    const emailHtml = await trackAssignedBuilder(track, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await trackAssignedBuilder(track, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await trackAssignedBuilder(track, logoUrl);
    const newEmail = await inlineCss(email, {
      url: ' ',
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    });
    // await _sendEmail(newEmail, ['aflupton@gmail.com', 'andrew@prolaera.onmicrosoft.com', 'evan@prolaera.com']);
    const saved = await writeFile(newEmail, 'trackAssignedTest.html');
    expect(saved).toEqual(true);
  });
});
