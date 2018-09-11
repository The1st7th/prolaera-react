import React from 'react';
// import { Email, renderEmail } from 'react-html-email';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS';
import { renderToStaticMarkup } from 'react-dom/server';
import Email from '../../components/newemail';

const courseReviewBuilder = async (completeCourse, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    const adminProfileId = 'exampleAdminProfileId';
    return renderEmail(
      <Email title="New course review on Prolaera" headCSS={css}>
        <Header
          text={'Review Course'}
          link={'https://app.prolaera.com/#/admin/' + adminProfileId + '/' + completeCourse.course_id + '/review'}
        />
        <SubHeader
          subText={'New course'}
          header={'Review'}
          message={
            'A new course has been submitted by one of your authors for review. Please click the review course button to review the course information and activate the course.'
          }
        />
        <CourseInfo
          {...completeCourse}
          buttonText={'Review Course'}
          buttonLink={completeCourse.course_id}
          adminProfileId={adminProfileId}
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
export default courseReviewBuilder;
