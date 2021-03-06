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
      <table align="center" className="wrapper header">
        <tr>
          <td>
            <table align="center" className="container">
              <tbody>
                <tr>
                  <td>
                    <table align="center" className="row">
                      <tbody>
                        <tr>
                          <th
                            valign="middle"
                            className="small-6 small-offset-3 large-12 columns first last"
                            style={{ paddingTop: '20px' }}
                          >
                            <table>
                              <tbody>
                                <tr>
                                  <th>
                                    <table className="spacer">
                                      <tbody>
                                        <tr>
                                          <td height="32px" style={{ fontSize: '32px', lineHeight: '32px' }}>
                                            &#xA0;
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                    <a href="https://app.prolaera.com">
                                      <center>
                                        <Image
                                          className="float-center small-float-center"
                                          align="center"
                                          alt="logo"
                                          src={url}
                                          width={resizedWidth}
                                          height={resizedHeight}
                                        />
                                      </center>
                                    </a>
                                    <table className="spacer">
                                      <tbody>
                                        <tr>
                                          <td height="32px" style={{ fontSize: '32px', lineHeight: '32px' }}>
                                            &#xA0;
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
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
