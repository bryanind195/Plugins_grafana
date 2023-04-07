import { stylesFactory } from '@grafana/ui';
import { css, keyframes } from 'emotion';

const parpadeo = keyframes`
  0% { opacity: 1.0; };
  100% { opacity: 0.0; };
`;

const getStyles = stylesFactory(() => {
  return {
    sinConexion: css`
      fill: #999;
    `,
    alarma: css`
      fill: red;
      animation: ${parpadeo} 100000s ease infinite;
    `,
    ok: css`
      fill: green;
    `,
    open: css`
      fill: black;
    `,
    open_int: css`
      stroke: #fc0;
    `,
    close_int: css`
      stroke: black;
    `,
    
  };
});

const styles = getStyles();

export default styles;
