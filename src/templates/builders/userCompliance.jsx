import * as React from 'react';
// import { Email, renderEmail } from 'react-html-email';
import ComplianceReports from '../../components/compliance/complianceReports';
import Footer from '../../components/footer';
import buildHeader from '../../components/header';
import css from '../templateCSS.js';
import { renderToStaticMarkup } from 'react-dom/server';
import Email from '../../components/newemail';

const email = async (completeCompliance, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="Compliance Report" headCSS={css}>
        <Header text="compliance report" />
        <ComplianceReports {...completeCompliance} />
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
export default email;
