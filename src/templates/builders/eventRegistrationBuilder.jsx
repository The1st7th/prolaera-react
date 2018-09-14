import React from 'react';
import EventInfo from '../../components/event/eventInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubFooter from '../../components/subFooter';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS.js';
import { renderToStaticMarkup } from 'react-dom/server';
import Email from '../../components/newemail';

const registrationEmail = async (event, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title="Registration Successful!" headCSS={css}>
        <Header />
        <SubHeader subText="You have been" header="Registered" />
        <EventInfo {...event} />
        <SubFooter
          text="More information about this event can be found by navigating to the Prolaera website. Don't have an account with us? No problem. It only takes a few seconds to get one started."
          subtext="We hope you enjoy your event!"
        />
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
export default registrationEmail;
