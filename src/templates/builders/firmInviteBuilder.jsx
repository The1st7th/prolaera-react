import React from 'react';
// import { Email, renderEmail } from 'react-html-email';
import Button from '../../components/button';
import Footer from '../../components/footer';
import GenericInfo from '../../components/generic/genericInfo';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS';
import Email from '../../components/newemail';
import { renderToStaticMarkup } from 'react-dom/server';

const firmInviteBuilder = async (completeUser, completeCompany, imageUrl) => {
  try {
    const headerText = '';
    const bodyText = (
      <div>
        <p align="center">Your account is waiting for you and there are only a couple quick steps to complete.</p>
        <ol>
          <li>Click the button below to register your account.</li>
          <li>On the registration page simply enter a password for your new account and click "Register".</li>
        </ol>
      </div>
    );
    const footerText = (
      <div align="center">
        <p>That's it! You're ready to explore the new tools and resources you have access to.</p>
        <div
          style={{
            display: 'inline-block',
            backgroundColor: '#72C02C',
            borderRadius: '3px',
            margin: '0'
          }}
        >
          <Button
            color={'#72C02C'}
            text={'Create Your Account'}
            link={'https://app.prolaera.com/#/registration?email=${' + completeUser.email + '}' + "'"}
          />
        </div>
      </div>
    );
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title={"You've been added to " + `${completeCompany.company_name}` + 'on Prolaera'} headCSS={css}>
        <Header
          text={'Create Account'}
          link={'https://app.prolaera.com/#/registration?email=${' + completeUser.email + '}' + "'"}
        />
        <SubHeader
          subText={"You've been"}
          header={'Added'}
          message={'You have been added to ' + `${completeCompany.company_name}` + "'s team on Prolaera."}
        />
        <GenericInfo header={headerText} body={bodyText} footer={footerText} />
        <Footer />
      </Email>
    );
  } catch (error) {
    throw error;
  }
};
function renderEmail(emailComponent) {
  var doctype =
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">';
  return doctype + renderToStaticMarkup(emailComponent);
}
export default firmInviteBuilder;
