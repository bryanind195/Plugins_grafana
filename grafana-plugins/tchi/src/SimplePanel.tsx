import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import Tchi from './components/tchi';

import dataTchi from 'modules/dataTchi';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, replaceVariables }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let tchi= dataTchi(data, options, replaceVariables);

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          //width: ${width}px;
          //height: ${height}px;
        `
      )}
    >
    <Tchi
        DatosGenerales={tchi.DatosGenerales}
        Principal={tchi.Principal}
        Parametros={tchi.Parametros}
        Estados={tchi.Estados}   
    />
</div>
);
};


const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
