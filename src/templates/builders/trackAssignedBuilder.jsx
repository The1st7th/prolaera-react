import React from 'react';
import Footer from '../../components/footer';
import builderHeader from '../../components/header';
import TrackInfo from '../../components/learningTrack/trackInfo';
import SubHeader from '../../components/subHeader';
import css from '../templateCSS.js';
import Email from '../../components/newemail';
import { renderToStaticMarkup } from 'react-dom/server';

const trackAssignedBuilder = async (completeTrack, imageUrl) => {
  try {
    const Header = await builderHeader(imageUrl);
    const profileId = 'testProfileId';
    const trackId = 'testTrackId';
    return renderEmail(
      <Email title="You've been assigned a new learning track" headCSS={css}>
        <Header
          text={'View Track'}
          link={'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId}
        />
        <SubHeader subText={'New track'} header={'Assigned'} message={'You have been assigned a new learning track.'} />
        <TrackInfo {...completeTrack} buttonText={'View Track'} profileId={profileId} trackId={trackId} />
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
export default trackAssignedBuilder;
