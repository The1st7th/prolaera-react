import React from 'react';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import SubHeader from '../../components/subHeader';
import TeamInfo from '../../components/team/teamInfo';
import css from '../templateCSS.js';
import { renderToStaticMarkup } from 'react-dom/server';
import Email from '../../components/newemail';

const teamLeadBuilder = async (completeTeam, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    const adminProfileId = 'adminProfileId';
    return renderEmail(
      <Email title="You've been added as a team leader" headCSS={css}>
        <Header text={'View Team'} link={'https://app.prolaera.com/#/admin/' + adminProfileId + '/dashboard'} />
        <SubHeader subText={"You've Been Added As"} header={'Team Leader'} message={'For ' + completeTeam.name} />
        <TeamInfo {...completeTeam} buttonText={'View Team'} buttonLink={adminProfileId} />
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
export default teamLeadBuilder;
