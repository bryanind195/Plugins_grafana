import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Uma from 'components/uma';
import { DataUma} from 'components/variables/variables'
import dataUMA from 'modules/dataUMA';


interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height,replaceVariables }) => {
    //const theme = useTheme();
    const styles = getStyles();

    let uma: DataUma = dataUMA(data , options,replaceVariables)

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
    <Uma
        estados = {uma.estados}
        botones_alarmas = {uma.botones_alarmas}
        datos_generales = {uma.datos_generales}
        datos_principales = {uma.datos_principales}
        boton_uma = {uma.boton_uma}  
    
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
