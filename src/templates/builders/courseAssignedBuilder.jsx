import React from 'react';
import CourseInfo from '../../components/course/courseInfo';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS';
import { renderToStaticMarkup } from 'react-dom/server';
import Email from '../../components/newemail';

const courseAssignedBuilder = async (completeCourse, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    return renderEmail(
      <Email title={"You've been assigned a new course"} headCSS={css}>
        <Header
          {...completeCourse}
          text={'View Course'}
          link={'https://app.prolaera.com/#/courses' + completeCourse.course_id}
        />
        <SubHeader subText={'New course'} header={'Assigned'} message={'You have been assigned a new course.'} />
        <CourseInfo {...completeCourse} buttonText={'View Course'} buttonLink={completeCourse.course_id} />
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

export default courseAssignedBuilder;
