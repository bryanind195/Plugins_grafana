import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    sinconexion: css`
    fill: url(#filter1671);
    `,
    full: css`
    fill: green;
    `,
    on: css`
    fill: orange;
    animation: ${parpadeo} 1s ease infinite;
    `,
    on1: css`
    fill: orange;
    `,
  };
});

const styles = getStyles();

export default styles;

