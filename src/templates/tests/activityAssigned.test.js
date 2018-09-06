import renderer from 'react-test-renderer';
import writeFile from '../../helpers/writeFileHelper';
import activityAssignedEmail from '../builders/activityAssignedBuilder';
import activity from '../tests/json/completeActivity.json';
import user from '../tests/json/completeUser.json';
import inlineCss from 'inline-css';

describe('Activity Assigned email', () => {
  const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';

  it('checks snapshot', async () => {
    const emailHtml = await activityAssignedEmail(activity, user, logoUrl);
    const emailComponent = renderer.create(emailHtml);
    const activityJson = emailComponent.toJSON();
    expect(activityJson).toMatchSnapshot();
  });

  it('writes an html file', async () => {
    const email = await activityAssignedEmail(activity, user, logoUrl);
    const newEmail = await inlineCss(email, { url: ' ' });
    const saved = await writeFile(newEmail, 'activityTest.html');
    expect(saved).toEqual(true);
  });
});
