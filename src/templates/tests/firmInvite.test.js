import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../components/button';
import GenericInfo from '../../components/generic/genericInfo';
import writeFile from '../../helpers/writeFileHelper';
import firmInviteBuilder from '../builders/FirmInviteBuilder.jsx';
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
Enzyme.configure({ adapter: new Adapter() });

const user = { email: 'test@email.com' };
const company = { company_name: 'Test CPA Firm' };
const headerText = <p>You've been added to {company.company_name} on Prolaera</p>;
const bodyText = (
  <div>
    <p>Your account is waiting for you and there are only a couple quick steps to complete.</p>
    <ol>
      <li>Click the button below to register your account.</li>
      <li>On the registration page simply enter a password for your new account and click "Register".</li>
    </ol>
  </div>
);
const footerText = (
  <div>
    <p>You're ready to explore the new tools and resources you have access to.</p>
    <Button text={'Create Your Account'} link={'https://app.prolaera.com/#/users/' + user.email} />
  </div>
);

describe('Firm Invite component', () => {
  it('creates and checks snapshot of FirmInvite component html', async () => {
    let inviteHtml = renderer.create(
      <GenericInfo header={headerText} body={bodyText} footer={footerText} email={user.email} />
    );
    let inviteJson = inviteHtml.toJSON();
    expect(inviteJson).toMatchSnapshot();
  });
});

describe('create html test file', () => {
  it('writes an html file to firmInviteTest.html', async () => {
    const firmInviteEmail = await firmInviteBuilder(
      user,
      company,
      'https://assets.prolaera.com/prolaeraLogo_fullText.png'
    );
    const newEmail = await inlineCss(firmInviteEmail, {
      url: ' '
    });
    const send = await _sendEmail(newEmail, ['eric.e.nicolas@gmail.com', 'emmanuel.nicolas@outlook.com']);
    console.log('SENT EMAIL', send);
    const saved = await writeFile(newEmail, 'firmInviteTest.html');
    expect(saved).toEqual(true);
  });
});
