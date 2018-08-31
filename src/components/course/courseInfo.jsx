import React from 'react';
import { Box, Item } from 'react-html-email';
import deliveryHelper from '../../helpers/deliveryHelper';
import setInnerHtml from '../../helpers/domHelpers';
import Button from '../button';
import InfoHeader from '../infoHeader';

class CourseInfo extends React.Component {
  render() {
    const {
      adminProfileId,
      buttonText,
      buttonLink,
      name = '',
      course_id,
      by = '',
      hours = [{ credits: '', subject_area: '' }],
      delivery_method = 1,
      price = 0,
      courseAudience = '',
      prep = '',
      prerequisites = '',
      level = '',
      objectives = '',
      summary = ''
    } = this.props;

    let newButtonLink = '';
    if (adminProfileId) {
      newButtonLink = 'admin/' + adminProfileId + '/' + buttonLink + '/review';
    } else {
      newButtonLink = 'courses/' + buttonLink;
    }

    return (
      <div
        style={{
          display: 'block',
          margin: 'auto',
          textAlign: 'center',
          fontStyle: 'normal',
          fontWeight: '400',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box align="center" width="100%">
          <Item align="center" width="100%">
            <div
              style={{
                width: '90%',
                margin: 'auto'
              }}
            >
              <InfoHeader info={'Course'} />
            </div>
            <h4 align="center" style={{ paddingTop: '15px', marginTop: '0px' }}>
              <a
                href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
                style={{ textDecoration: 'underline', color: '#2F4050', height: '100%' }}
              >
                <em>{name}</em>
              </a>
            </h4>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '40px' }}>
              <h4 style={{ marginBottom: '0px' }}>
                By:{' '}
                <span className="innerHtmlStyles" style={{ fontWeight: 'normal' }}>
                  {by}
                </span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Description: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(summary)}
              />
              <h4 style={{ marginBottom: '0px' }}>Learning Objectives:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(objectives)}
              />
              <h4 style={{ marginBottom: '0px' }}>Delivery Method:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(deliveryHelper(delivery_method))}
              />
              <h4 style={{ marginBottom: '0px' }}>
                Price:{' '}
                <span className="innerHtmlStyles" style={{ fontWeight: 'normal' }}>
                  {{ price } > 0 ? { price } : 'Free'}
                </span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Recommended CPE Credit(s):</h4>
              <ul style={{ marginTop: '10px' }}>
                <li style={{ fontWeight: 'normal' }}>
                  {hours[0].subject_area} - {hours[0].credits} Hour(s)
                </li>
              </ul>
              <h4 style={{ marginBottom: '0px' }}>
                Level:{' '}
                <span className="innerHtmlStyles" style={{ fontWeight: 'normal' }}>
                  {level}
                </span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Target Audience: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(courseAudience)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prerequisites: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prerequisites)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prep: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prep)}
              />
            </div>
          </Item>
          <Item align="center" style={{ width: '100%', paddingBottom: '20px' }}>
            {/* <div
              className="customButton"
              style={{
                display: 'inline-block',
                margin: 'auto',
                padding: '20px'
              }}
            >
              <a
                style={{
                  display: 'block',
                  width: '115px',
                  height: '25px',
                  backgroundColor: '#2F4050',
                  padding: '14px',
                  textAlign: 'center',
                  borderRadius: '3px',
                  color: '#FFFFFF',
                  // fontWeight: 'bold'
                }}
                href={'https://app.prolaera.com/#/' + newButtonLink}
              >
                {buttonText}
              </a>
            </div> */}
            <table cellSpacing="0" cellPadding="0">
              <tr>
                <td
                  align="center"
                  width="300"
                  height="40"
                  bgcolor="#000091"
                  style={{ borderRadius: '5px', color: '#ffffff', display: 'block' }}
                >
                  <a
                    href="http://www.EXAMPLE.com/"
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      fontFamily: 'sans-serif',
                      textDecoration: 'none',
                      lineHeight: '40px',
                      width: '100%',
                      display: 'inline-block'
                    }}
                  >
                    <span style={{ color: '#FFFFFF' }}>{buttonText}</span>
                  </a>
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseInfo;
