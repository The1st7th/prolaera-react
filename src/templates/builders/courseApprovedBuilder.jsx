import React from 'react';
// import { Email, renderEmail } from 'react-html-email';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS';
import Email from '../../components/newemail';
import { renderToStaticMarkup } from 'react-dom/server';

const courseApprovedBuilder = async (completeCourse, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title={`${completeCourse.name}` + ' has been approved'} headCSS={css}>
        <Header text=" " />
        <SubHeader subText={'Your course has been'} header={'Approved'} />
        <CourseInfo {...completeCourse} buttonText={'View Course'} />
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
export default courseApprovedBuilder;
