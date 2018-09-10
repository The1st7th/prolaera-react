import url from 'url';
import https from 'https';
import sizeOf from 'image-size';
import React from 'react';
import { Image } from 'react-html-email';

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
      <table align="center" className="container">
        <tbody>
          <tr>
            <td>
              <table align="center" className="row spacer">
                <tbody>
                  <tr>
                    <th height="10px" style={{ fontSize: '10px', lineHeight: '10x' }}>
                      <table>
                        <tbody>
                          <tr>
                            <th>&#xA0;</th>
                          </tr>
                        </tbody>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table className="row">
                <tbody>
                  <tr>
                    <th>
                      <center>
                        <table className="small-12 large-12 columns first last float-center">
                          <tbody>
                            <tr>
                              <th>
                                <Image
                                  className="headerLogo"
                                  alt="logo"
                                  src={url}
                                  width={resizedWidth}
                                  height={resizedHeight}
                                />
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </center>
                    </th>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
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
