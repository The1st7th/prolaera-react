import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../../components/button';
import InfoHeader from '../infoHeader';

class TrackInfo extends React.Component {
  render() {
    const { name = '', author = '', description = '', buttonText, profileId, trackId } = this.props;

    return (
      <table align="center" class="container">
        <tbody>
          <tr>
            <td>
              <table class="row">
                <tbody>
                  <tr>
                    <th class="small-12 large-12 columns first last">
                      <table>
                        <tr>
                          <th>
                            <InfoHeader info={'Learning Track'} />
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table class="row">
                <tbody>
                  <tr>
                    <th class="small-12 large-12 columns first last">
                      <table>
                        <tr>
                          <th>
                            <span>name: </span>
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                    <th class="small-12 large-12 columns first last">
                      <table>
                        <tr>
                          <th>
                            <span>{name}</span>
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table class="row">
                <tbody>
                  <tr>
                    <th class="small-12 large-12 columns first last">
                      <table>
                        <tr>
                          <th>
                            <span>Author: </span>
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                    <th class="small-12 large-12 columns first last">
                      <table>
                        <tr>
                          <th>
                            <span>{author}</span>
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table class="row">
                <tbody>
                  <tr>
                    <th class="small-12 large-12 columns first last">
                      <table>
                        <tr>
                          <th>
                            <span>Description: </span>
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                    <th class="small-12 large-12 columns first last">
                      <table>
                        <tr>
                          <th>
                            <span>{description}</span>
                          </th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              <table class="row">
                <tbody>
                  <tr>
                    <th class="columns first last">
                      <table>
                        <tr>
                          <th>More information about this track can be found by navigating to the Prolaera website.</th>
                          <th class="expander" />
                        </tr>
                      </table>
                    </th>
                  </tr>
                </tbody>
              </table>
              {profileId ? (
                <table class="row">
                  <tbody>
                    <tr>
                      <th>
                        <center>
                          <table className="button float-center" style={{ borderCollapse: 'none' }}>
                            <tr>
                              <td
                                className="text-center small-text-center"
                                style={{
                                  padding: '14px',
                                  fontSize: '14pt',
                                  backgroundColor: '#72C02C',
                                  border: '1px solid #72C02C',
                                  borderRadius: '2px'
                                }}
                              >
                                <a
                                  style={{ color: '#FFFFFF', textDecoration: 'none' }}
                                  href={
                                    'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId
                                  }
                                >
                                  {buttonText}
                                </a>
                              </td>
                            </tr>
                          </table>
                        </center>
                      </th>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <span />
              )}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default TrackInfo;
