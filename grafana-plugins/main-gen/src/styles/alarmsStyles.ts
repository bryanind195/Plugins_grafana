import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    off: css`
      fill: #999;
    `,
    warn: css`
      fill: orange;
      
    `,
    shut: css`
      fill: yellow;
      
    `,
    trip: css`
      fill: red;
      
    `,
    asd: css`
      fill: red;
      animation: ${parpadeo} 1s ease infinite;
    `,
  };
});

const styles = getStyles();

export default styles;
