import React from 'react';
// import { renderEmail } from 'react-html-email';
// import Email from 'react-html-email/lib/components/Email';
import EventCertificate from '../../components/certificate/eventCertificate';
import EventInfo from '../../components/event/eventInfo';
import Footer from '../../components/footer';
import buildHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS';
import { renderToStaticMarkup } from 'react-dom/server';
import Email from '../../components/newemail';

const eventCertificateEmail = async (event, user, certificate, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="You have completed an event" headCSS={css}>
        <Header text="Complete Evaluation" {...event} {...certificate} />
        <SubHeader {...user} subText="You have received an" header="Event Certificate" />
        <EventCertificate {...event} {...user} {...certificate} />
        <EventInfo {...event} />
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

export default eventCertificateEmail;
