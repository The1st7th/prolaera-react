import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import courseAssignedBuilder from '../builders/courseAssignedBuilder';
import course from './json/completeCourse.json';

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
describe('courseAssigned Email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
  it('returns courseAssigned email html', async () => {
    const emailHtml = await courseAssignedBuilder(course, logoUrl);
    expect(emailHtml).toBeDefined();
  });

  it('checks snapshot', async () => {
    const emailHtml = await courseAssignedBuilder(course, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const courseAssignedJson = emailComponent.toJSON();
    expect(courseAssignedJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await courseAssignedBuilder(course, logoUrl);
    const newEmail = await inlineCss(email, {
      url: ' '
    });
    const send = await _sendEmail(newEmail, ['eric.e.nicolas@gmail.com', 'emmanuel.nicolas@outlook.com']);
    console.log('SENT EMAIL', send);
    const saved = await writeFile(newEmail, 'courseAssignedTest.html');
    expect(saved).toEqual(true);
  });
});
