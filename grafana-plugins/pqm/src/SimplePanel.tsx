import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Pqm from './components/pqm';
import { DataPqm } from 'components/variables/variables'
import dataPQM from 'modules/dataPQM'
//import dataPQM from 'modules/dataPQM_influx'

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let pqm: DataPqm = dataPQM(data, options)

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <Pqm
        estados = {pqm.estados}
        botones_alarmas = {pqm.botones_alarmas}
        datos_generales = {pqm.datos_generales}
        datos_principales = {pqm.datos_principales}
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
