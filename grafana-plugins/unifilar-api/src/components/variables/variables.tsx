import React from 'react';

type Estados = {
  volt_an: number; // id = tspan1165-7
  volt_bn: number; //id = tspan1165-7-4
  volt_cn: number; //id= tspan1165-7-4-4
  volt_ab: number; //id= tspan15409-5-4-2
  volt_bc: number; //id= tspan1765
  volt_ca: number; //id = tspan1765-8
  cur_a: number; // id= tspan15409-5-4
  cur_b: number; // id = tspan15409-5
  cur_c: number; //id = tspan15409
  p_real_t: number; //id = tspan6736-3
  p_apt_t: number; // id = tspan6736
};

type Botones_alarmas = {
  red_modbus: string; // id = pqm_modbus
  volt_max: string; //id = pqm_voltmax
  corr_max: string; //id = pqm_corrmax
};
type Datos_generales = {
  fase: string; // id = tspan3614
  sistema: string; // id = tspan3614-0
  marca: string; // id = tspan3614-4
  modelo: string; // id = tspan3614-5
  ubicacion: string; // id = tspan3614-8
};

type Datos_principales = {
  pot_real: number; //id = tspan5844
  frecuencia: number; //id = tspan1960-4
  factor_p: number; //id = tspan5927
  boton_pqm: string; // rectangulo id= estado_eq
  nombre_pqm: string; //nombre del equipo id= tspan6769
  boton_estado: string; // power id = g876
  text_estado: string; // texto id= tspan5848
};
export interface DataPqm {
  estados: Estados;
  botones_alarmas: Botones_alarmas;
  datos_generales: Datos_generales;
  datos_principales: Datos_principales;
}

export const Variables = ({ estados, botones_alarmas, datos_generales, datos_principales }: DataPqm) => {
  return (
    <g id="layer6">
      <g id="g1103">
        <g id="g889">
          <path
            id="estado_eq"
            className={datos_principales.boton_pqm}
            fillRule="evenodd"
            fill="url(#linearGradient4474)"
            strokeWidth={0.26219}
            d="M100.25 13.817H158.285V31.868H100.25z"
          />
          <text
            id="nom_on"
            x={113.29808}
            y={27.353603}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="9.71px"
            letterSpacing={0}
            strokeWidth={0.36412}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769"
              x={113.29808}
              y={27.353603}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="11.289px"
              strokeWidth={0.36412}
            >
              {datos_principales.nombre_pqm}
            </tspan>
          </text>
        </g>
        <text
          id="pot_real"
          transform="scale(1.0508 .95161)"
          x={22.949505}
          y={52.108124}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="8.4667px"
          letterSpacing={0}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan
            id="tspan5844"
            x={22.949505}
            y={52.108124}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="9.8778px"
            fontWeight={525}
            strokeWidth={0.28918}
          >
            {datos_principales.pot_real}
          </tspan>
        </text>
        <text
          id="st"
          x={223.95804}
          y={177.72644}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="6.35px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan5848"
            x={223.95804}
            y={177.72644}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {datos_principales.text_estado}
          </tspan>
        </text>
        <text
          id="pow_fact"
          transform="scale(1.0508 .95161)"
          x={208.4012}
          y={136.90607}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="12.491px"
          letterSpacing={0}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan
            id="tspan5927"
            x={208.4012}
            y={136.90607}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="12.491px"
            fontWeight={400}
            strokeWidth={0.28918}
          >
            {datos_principales.factor_p} Ø
          </tspan>
        </text>
        <text
          id="pqm_freq"
          transform="scale(1.0508 .95161)"
          x={213}
          y={52.141777}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="5.8954px"
          letterSpacing={0}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan
            id="tspan1960-4"
            x={201.58806}
            y={52.141777}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="9.8778px"
            fontWeight={525}
            strokeWidth={0.28918}
          >
            {datos_principales.frecuencia}
          </tspan>
        </text>
        <g id="g876" className={datos_principales.boton_estado} fill="#00990c">
          <path
            id="path15781"
            d="M212.92 170.54a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.685 4.01c0 1.484.62 2.96 1.685 4.01a5.86 5.86 0 004.066 1.661 5.861 5.861 0 004.066-1.661 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
          />
          <path
            id="path2489"
            transform="translate(123.17 126.88) scale(.14885)"
            d="M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z"
            filter="url(#filter2703)"
          />
          <path
            id="path2649"
            transform="translate(123.17 126.88) scale(.14885)"
            d="M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z"
            filter="url(#filter2663)"
          />
        </g>
        <text
          id="fase"
          transform="scale(.98529 1.0149)"
          x={325.66016}
          y={41.864491}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan3614"
            x={325.66016}
            y={41.864491}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {datos_generales.fase}
          </tspan>
        </text>
        <text
          id="sistema"
          transform="scale(.98529 1.0149)"
          x={325.66016}
          y={50.053391}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan3614-0"
            x={325.66016}
            y={50.053391}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {datos_generales.sistema}
          </tspan>
        </text>
        <text
          id="marca"
          transform="scale(.98529 1.0149)"
          x={325.66016}
          y={58.516815}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan3614-4"
            x={325.66016}
            y={58.516815}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {datos_generales.marca}
          </tspan>
        </text>
        <text
          id="modelo"
          transform="scale(.98529 1.0149)"
          x={325.66016}
          y={66.648346}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan3614-5"
            x={325.66016}
            y={66.648346}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {datos_generales.modelo}
          </tspan>
        </text>
        <text
          id="ubicacion"
          transform="scale(.98529 1.0149)"
          x={325.66016}
          y={75.277725}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.2742px"
          letterSpacing={0}
          strokeWidth={0.47057}
          wordSpacing={0}
        >
          <tspan
            id="tspan3614-8"
            x={325.66016}
            y={75.277725}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {datos_generales.ubicacion}
          </tspan>
        </text>
        <ellipse
          id="pqm_modbus"
          cx={362.56}
          cy={145.43}
          rx={2.5726}
          ry={2.4137}
          className={botones_alarmas.red_modbus}
          fillRule="evenodd"
          fill="red"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <text
          id="vol_van"
          transform="scale(.8204 1.2189)"
          x={569.24414}
          y={50.169689}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan1165-7"
            x={566}
            y={50.169689}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.volt_an}
          </tspan>
        </text>
        <text
          id="cur_c"
          transform="scale(.8204 1.2189)"
          x={569.29095}
          y={113.79575}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15409"
            x={566}
            y={113.79575}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.cur_c}
          </tspan>
        </text>
        <text
          id="pow_appt"
          transform="scale(.8204 1.2189)"
          x={569.34058}
          y={129.71672}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan6736"
            x={565.34058}
            y={129.71672}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.p_apt_t}
          </tspan>
        </text>
        <text
          id="vol_vbn"
          transform="scale(.8204 1.2189)"
          x={569.24414}
          y={58.0723}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan1165-7-4"
            x={566}
            y={58.0723}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.volt_bn}
          </tspan>
        </text>
        <text
          id="pow_real"
          transform="scale(.8204 1.2189)"
          x={569.34058}
          y={121.75623}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan6736-3"
            x={557}
            //x={569.34058}
            y={121.75623}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.p_real_t}
          </tspan>
        </text>
        <text
          id="cur_b"
          transform="scale(.8204 1.2189)"
          x={569.29095}
          y={105.83525}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15409-5"
            x={566}
            y={105.83525}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.cur_b}
          </tspan>
        </text>
        <text
          id="cur_a"
          transform="scale(.8204 1.2189)"
          x={569.29095}
          y={97.932632}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15409-5-4"
            x={566}
            y={97.932632}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.cur_a}
          </tspan>
        </text>
        <text
          id="vol_vcn"
          transform="scale(.8204 1.2189)"
          x={569.24396}
          y={66.032791}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan1165-7-4-4"
            x={566}
            y={66.032791}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.volt_cn}
          </tspan>
        </text>
        <text
          id="vol_vab"
          transform="scale(.8204 1.2189)"
          x={569.29095}
          y={74.051163}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15409-5-4-2"
            x={566}
            y={74.051163}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.volt_ab}
          </tspan>
        </text>
        <text
          id="vol_vbc"
          transform="scale(.8204 1.2189)"
          x={569.29095}
          y={81.953773}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan1765"
            x={566}
            y={81.953773}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.volt_bc}
          </tspan>
        </text>
        <text
          id="vol_vca"
          transform="scale(.8204 1.2189)"
          x={569.29095}
          y={89.914268}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan1765-8"
            x={566}
            y={89.914268}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.volt_ca}
          </tspan>
        </text>
        <ellipse
        /*id="pqm_voltmax-2"
              cx={362.56}
              cy={145.43}
              rx={2.5726}
              ry={2.4137}
              className = {botones_alarmas.volt_max}
              fillRule="evenodd"
              fill="red"
              opacity={0.88}
              paintOrder="markers stroke fill"*/
        />
        <ellipse
        /*id="pqm_corrmax"
              cx={362.56}
              cy={158.66}
              rx={2.5726}
              ry={2.4137}
              className = {botones_alarmas.corr_max}
              fillRule="evenodd"
              fill="red"
              opacity={0.88}
              paintOrder="markers stroke fill"*/
        />
      </g>
    </g>
  );
};
