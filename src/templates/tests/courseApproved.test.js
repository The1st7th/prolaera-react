import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import courseApprovedBuilder from '../builders/courseApprovedBuilder';
import course from './json/completeCourse.json';
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
describe('courseApproved Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns courseApproved email html', async () => {
    const emailHtml = await courseApprovedBuilder(course, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await courseApprovedBuilder(course, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const courseApprovedJson = emailComponent.toJSON();
    expect(courseApprovedJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await courseApprovedBuilder(course, logoUrl);
    const newEmail = await inlineCss(email, {
      url: ' ',
      preserveMediaQueries: true,
      applyWidthAttributes: true,
      applyTableAttributes: true
    });
    await _sendEmail(newEmail, ['aflupton@gmail.com', 'andrew@prolaera.onmicrosoft.com']);
    const saved = await writeFile(newEmail, 'courseApprovedTest.html');
    expect(saved).toEqual(true);
  });
});
