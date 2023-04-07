import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory} from '@grafana/ui';
import Pdu from './components/pdu';
import {DataPdu} from 'components/variables/variables';
import dataPDU from 'modules/dataPDU';


interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data,replaceVariables, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let pdu: DataPdu = dataPDU (data, options,replaceVariables)

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
     <Pdu
          estados = {pdu.estados}
          botones_alarmas = {pdu.botones_alarmas}
          datos_generales = {pdu.datos_generales}
          datos_principales = {pdu.datos_principales}
          
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
