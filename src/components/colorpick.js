export function Colorpick(color) {
  return color == '#72C02C'
    ? {
        height: '100%',
        padding: '14px 14px 14px 14px',
        color: '#FFFFFF',
        fontSize: '10p',
        width: '100%',
        textDecoration: 'none',
        borderRadius: '3px',
        borderStyle: 'none',
        backgroundColor: '#72C02C',
        borderColor: '#72C02C'
      }
    : {
        height: '100%',
        padding: '14px 14px 14px 14px',
        color: '#FFFFFF',
        fontSize: '10p',
        width: '100%',
        textDecoration: 'none',
        borderRadius: '3px',
        borderStyle: 'none',
        backgroundColor: '#2F4050',
        borderColor: '#2F4050'
      };
  // return color == '#72C02C' ? 'green' : 'notgreen';
}
