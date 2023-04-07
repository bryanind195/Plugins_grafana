import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Generador from './componentes/generador';
import { DataGenerador } from 'componentes/variables/variables';
import dataGenerador from 'modules/dataGenerador';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height,replaceVariables }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let generador: DataGenerador = dataGenerador(data, options,replaceVariables);

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
        
    <Generador
      modo_control = {generador.modo_control}
      alternador ={generador.alternador}
      motor={generador.motor}
      alarmas ={generador.alarmas}
      datos_generales={generador.datos_generales}
      datos_principales={generador.datos_principales}  
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
