import React from 'react';
// import { renderEmail } from 'react-html-email';
import Email from '../../components/newemail';
import CourseCertificate from '../../components/certificate/courseCertificate';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import Gmail from '../../components/gmailfix';
import buildHeader from '../../components/header';
// import SubHeader from '../../components/subHeader';
import css from '../templateCSS';
import { renderToStaticMarkup } from 'react-dom/server';

const courseCertificateEmail = async (course, user, certificate, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="You have completed a course" headCSS={css}>
        <Header text="Complete Evaluation" {...certificate} {...course} />
        <CourseCertificate {...certificate} {...course} {...user} />
        <CourseInfo {...course} buttonText={'View Course'} />
        <Footer />
        <Gmail />
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
export default courseCertificateEmail;
