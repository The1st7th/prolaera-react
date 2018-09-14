import React from 'react';
import ActivityInfo from '../../components/activity/activityInfo';
import Email from '../../components/newemail';
import Footer from '../../components/footer';
import buildHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS';
import { renderToStaticMarkup } from 'react-dom/server';

const activityAssignedEmail = async (activity, user, imageUrl) => {
  try {
    const Header = await buildHeader(imageUrl);
    return renderEmail(
      <Email title="You have been Assigned" headCSS={css}>
        <Header />
        <SubHeader subText="You have been" header="Assigned" message="A new Activity" />
        <ActivityInfo {...user} {...activity} />
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

export default activityAssignedEmail;
