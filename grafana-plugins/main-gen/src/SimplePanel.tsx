import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import Generadores from './components/generadores';
import {DataGeneradores} from 'components/variables/variables';
import dataGeneradores from 'modules/dataGeneradores';



interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

let generadores: DataGeneradores = dataGeneradores (data,options);

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
      
    <Generadores
       gen1 = {generadores.gen1}
       gen2 = {generadores.gen2}
       gen3 = {generadores.gen3}
       gen4 = {generadores.gen4}
       gen5 = {generadores.gen5}
       gen6 = {generadores.gen6}
       tdlow_A0 = {generadores.tdlow_A0}
       tdlow_A1 = {generadores.tdlow_A1}
       tdlow_A2 = {generadores.tdlow_A2}
       tableros = {generadores.tableros}
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
