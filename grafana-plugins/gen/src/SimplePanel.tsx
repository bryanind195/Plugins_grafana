import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
//import { stylesFactory, useTheme } from '@grafana/ui';
import { stylesFactory } from '@grafana/ui';
import Generador from './components/generador';

// import { DataGenerador } from 'components/variables/variables'
import dataGenerador from 'modules/dataGenerador';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  //const theme = useTheme();
  const styles = getStyles();

  let generador = dataGenerador(data, options);

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
        alternador={generador.alternador}
        boton_estado={generador.boton_estado}
        boton_gen={generador.boton_gen}
        botones_Alarmas={generador.botones_Alarmas}
        dataGeneral={generador.dataGeneral}
        estado={generador.estado}
        modoControl={generador.modoControl}
        motor={generador.motor}
        nivel={generador.nivel}
        nombre_gen={generador.nombre_gen}
        temp={generador.temp}
        voltaje={generador.voltaje}
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
