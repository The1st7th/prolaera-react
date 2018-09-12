import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import teamLeadBuilder from '../builders/teamLeadBuilder';
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
describe('teamLead Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  const team = {
    name: 'Test CPA Team',
    description: 'This team of CPAs handles all of the tax preparation in the firm.',
    buttonText: 'Test Button Text',
    buttonLink: 'www.testButtonLink.com'
  };
  it('returns teamLead email html', async () => {
    const emailHtml = await teamLeadBuilder(team, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await teamLeadBuilder(team, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const teamLeadJson = emailComponent.toJSON();
    expect(teamLeadJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await teamLeadBuilder(team, logoUrl);
    const newEmail = await inlineCss(email, {
      url: ' ',
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    });
    await _sendEmail(newEmail, ['aflupton@gmail.com', 'andrew@prolaera.onmicrosoft.com']);
    const saved = await writeFile(newEmail, 'teamLeadTest.html');
    expect(saved).toEqual(true);
  });
});
