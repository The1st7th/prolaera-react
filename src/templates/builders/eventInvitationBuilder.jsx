import React from 'react';
// import { Email, renderEmail } from 'react-html-email';
import EventInfo from '../../components/event/eventInfo';
import Footer from '../../components/footer';
import buildHeader from '../../components/header';
import SubFooter from '../../components/subFooter';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS.js';
import { renderToStaticMarkup } from 'react-dom/server';
import Email from '../../components/newemail';

const invitationEmail = async (event, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="You have been Invited" headCSS={css}>
        <Header text="View Event" {...event} />
        <SubHeader
          subText="You have been"
          header="Invited"
          message="You have been invited to a new event! More details are included below. Please click the register button below if you are able to attend."
        />
        <EventInfo {...event} buttonText="Register" />
        <SubFooter text="All you need to do is RSVP. If you decide to go, you will be navigated to the Prolaera website. Don't have an account with us? No problem, it only takes a few seconds to get one started!" />
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
export default invitationEmail;
