import url from 'url';
import https from 'https';
import sizeOf from 'image-size';
import React from 'react';
import { Box, Image, Item } from 'react-html-email';

class Header extends React.Component {
  render() {
    const {
      event_id,
      course_id,
      link = 'https://app.prolaera.com',
      text = 'prolaera.com',
      url = 'https://assets.prolaera.com/prolaeraLogo_fullText.png',
      width = 200,
      height = 47
    } = this.props;

    const resizedWidth = width * (47 / height);
    const resizedHeight = 47;

    return (
      <Box className="emailHeader" align="center" width="100%" style={{ backgroundColor: '#F7F7F7' }}>
        <Item align="center">
          <table
            align="center"
            cellSpacing={0}
            style={{ padding: '15px', maxWidth: '584px', marginTop: '25px', marginBottom: '20px' }}
          >
            <tr align="center">
              <td width="292px">
                <Image className="headerLogo" alt="logo" src={url} width={resizedWidth} height={resizedHeight} />
              </td>
              {/* <td width="252px" style={{ textAlign: 'center' }}>
                <div>
                  {event_id && course_id ? (
                    <a
                      href={'https://app.prolaera.com/#/events/' + `${event_id}`}
                      style={{ textDecoration: 'none', color: '#2F4050', float: 'right', paddingRight: '5px' }}
                    >
                      View Event
                    </a>
                  ) : (
                    <div />
                  )}{' '}
                </div>
                <div>
                  {!event_id && course_id ? (
                    <a
                      href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
                      style={{ textDecoration: 'none', color: '#2F4050', float: 'right', paddingRight: '5px' }}
                    >
                      View Course
                    </a>
                  ) : (
                    <div />
                  )}{' '}
                </div>
                <div>{!event_id && !course_id ? <a href={link}>{text}</a> : <div />} </div>
              </td> */}
            </tr>
          </table>
        </Item>
      </Box>
    );
  }
}

const buildHeader = async imageUrl => {
  try {
    const { height, width } = await imageSize(imageUrl);
    const image = { url: imageUrl, height, width };
    return props => <Header {...props} {...image} />;
  } catch (error) {
    throw error;
    // return props => <Header {...props} />;
  }
};

function imageSize(imgUrl) {
  try {
    const options = url.parse(imgUrl);
    return new Promise(resolve => {
      https.get(options, function(response) {
        var chunks = [];
        response
          .on('data', function(chunk) {
            chunks.push(chunk);
          })
          .on('end', function() {
            var buffer = Buffer.concat(chunks);
            const dimensions = sizeOf(buffer);
            resolve({ height: dimensions.height, width: dimensions.width });
          });
      });
    });
  } catch (error) {
    throw error;
  }
}

export default buildHeader;

export { Header };
