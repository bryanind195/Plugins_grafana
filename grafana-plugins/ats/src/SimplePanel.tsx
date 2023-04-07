import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory} from '@grafana/ui';
import Ats from './components/ats';
import {DataAts} from 'components/variables/variables';
import dataATS from 'modules/dataATS'

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height, replaceVariables }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let ats: DataAts = dataATS(data , options, replaceVariables)

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
      <Ats
          estados = {ats.estados}
          botones_alarmas = {ats.botones_alarmas}
          datos_generales = {ats.datos_generales}
          datos_principales = {ats.datos_principales}
      
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
