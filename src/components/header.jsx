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
      <div>
        <Box align="center" class="container">
          <table class="spacer">
            <tbody>
              <tr>
                <td height="10px" style={{ fontSize: '10px', lineHeight: '10x' }}>
                  &#xA0;
                </td>
              </tr>
            </tbody>
          </table>
          <Item>
            <table class="row">
              <tr>
                <center class="small-12 large-12 first last float-center ">
                  <Image className="headerLogo" alt="logo" src={url} width={resizedWidth} height={resizedHeight} />
                </center>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
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
