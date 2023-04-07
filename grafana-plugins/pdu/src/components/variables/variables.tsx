import React from 'react'

type Estados = {
    in1_AB: number;
    in1_BC: number;
    in1_CA: number;
    out1_AB: number;
    out1_BC: number;
    out1_CA: number;
    out1_A: number;
    out1_B: number;
    out1_C: number;
    corriente_N: number;
}
/*
type Estados_alarmas = {
    on: string;
    off: string;
}
*/

type Botones_alarmas = {
    alarma_general: string;
    puerta_abierta: string;
    falla_breaker: string;
    red_modbus:string;
}

type Datos_generales = {
    fase: string;
    sistema: string;
    marca: string;
    modelo: string;
    ubicacion: string;

}

type datos_principales ={
    in_volt: number;
    out_volt: number;
    corr_total: number;
    boton_pdu: string; //rectangulo id= estado_eq
    nombre_pdu: string;//nombre del equipo id=tspan4559
    boton_estado: string;// power
    estado: string;// encendido - apagado
    
}

export interface DataPdu{
    estados:Estados;
    botones_alarmas: Botones_alarmas;
    datos_generales: Datos_generales;
    datos_principales: datos_principales;
}

export const Variables = ({
    estados, botones_alarmas, datos_generales, datos_principales 
}: DataPdu) =>{
    return(
        <g id="layer4">
      <g id="g13873">
        <g id="g542">
          <text
            id="in_volt"
            transform="scale(1.0508 .95161)"
            x={18.89402}
            y={54.53159}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="9.8778px"
            fontWeight={700}
            letterSpacing={0}
            strokeWidth={0.28918}
            wordSpacing={0}
          >
            <tspan
              id="tspan5844"
              x={18.89402}
              y={54.53159}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="9.8778px"
              fontWeight={590}
              strokeWidth={0.28918}
            >
              {datos_principales.in_volt}
            </tspan>
          </text>
          <path
            id="estado_eq"
            className= {datos_principales.boton_pdu}
            fillRule="evenodd"
            fill="url(#linearGradient4474)"
            strokeWidth={0.26219}
            d="M98.066 15.757H156.101V33.808H98.066z"
          />
          <text
            id="out_vol"
            x={209.63374}
            y={54.087193}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="3.5278px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan9221-2"
              x={205.63374}
              y={54.087193}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="9.8778px"
              fontWeight={590}
              strokeWidth={0.26458}
            >
              {datos_principales.out_volt}
            </tspan>
          </text>
          <text
            id="out1_tot"
            x={217.73564}
            y={128.04333}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="3.5278px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan9221"
              x={214.73564}
              y={128.04333}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="9.8778px"
              fontWeight={590}
              strokeWidth={0.26458}
            >
              {datos_principales.corr_total}
            </tspan>
          </text>
          <text
            id="fase"
            transform="scale(.98529 1.0149)"
            x={322.01138}
            y={45.491901}
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
              id="tspan3618"
              x={322.01138}
              y={45.491901}
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
            x={321.79639}
            y={53.806335}
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
              id="tspan526"
              x={321.79639}
              y={53.806335}
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
            x={322.01138}
            y={60.873604}
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
              id="tspan530"
              x={322.01138}
              y={60.873604}
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
            x={322.01178}
            y={69.359543}
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
              id="tspan534"
              x={322.01178}
              y={69.359543}
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
            x={322.01138}
            y={77.523888}
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
              id="tspan583"
              x={322.01138}
              y={77.523888}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="5.6444px"
              strokeWidth={0.47057}
            >
              {datos_generales.ubicacion}
            </tspan>
          </text>
          <ellipse
            id="door_alm"
            cx={363.57}
            cy={139.94}
            rx={2.5726}
            ry={2.4137}
            fillRule="evenodd"
            fill="#3a3d3d"
            className= { botones_alarmas.puerta_abierta }
            opacity={0.88}
            paintOrder="markers stroke fill"
          />
          <ellipse
            id="alm_trip"
            cx={363.57}
            cy={148.04}
            rx={2.5726}
            ry={2.4137}
            fillRule="evenodd"
            fill="#3a3d3d"
            className= { botones_alarmas.falla_breaker }
            opacity={0.88}
            paintOrder="markers stroke fill"
          />
          <ellipse
            id="alm_modbus"
            cx={363.57}
            cy={156.14}
            rx={2.5726}
            ry={2.4137}
            fillRule="evenodd"
            fill="#3a3d3d"
            className= { botones_alarmas.red_modbus }
            opacity={0.88}
            paintOrder="markers stroke fill"
          />
          <ellipse
            id="gen_alm"
            cx={363.57}
            cy={131.83}
            rx={2.5726}
            ry={2.4137}
            fillRule="evenodd"
            fill="#3a3d3d"
            className= { botones_alarmas.alarma_general}
            opacity={0.88}
            paintOrder="markers stroke fill"
          />
          <text
            id="in1_ab_vol"
            transform="scale(.8204 1.2189)"
            x={564.67456}
            y={56.122635}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan1409"
              x={564.67456}
              y={56.122635}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.in1_AB}
            </tspan>
          </text>
          <text
            id="in1_bc_vol"
            transform="scale(.8204 1.2189)"
            x={564.67438}
            y={63.719894}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan15444"
              x={564.67438}
              y={63.719894}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.in1_BC}
            </tspan>
          </text>
          <text
            id="in1_ca_vol"
            transform="scale(.8204 1.2189)"
            x={564.64783}
            y={71.317169}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan15500"
              x={564.64783}
              y={71.317169}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.in1_CA}
            </tspan>
          </text>
          <text
            id="out1_ab_vol"
            transform="scale(.8204 1.2189)"
            x={564.4718}
            y={78.914436}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan15522"
              x={564.4718}
              y={78.914436}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.out1_AB}
            </tspan>
          </text>
          <text
            id="out1_bc_vol"
            transform="scale(.8204 1.2189)"
            x={564.4718}
            y={86.511696}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan15530"
              x={564.4718}
              y={86.511696}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.out1_BC}
            </tspan>
          </text>
          <text
            id="out1_ca_vol"
            transform="scale(.8204 1.2189)"
            x={564.4718}
            y={93.89193}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan15552"
              x={564.4718}
              y={93.89193}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.out1_CA}
            </tspan>
          </text>
          <text
            id="neut_cur"
            transform="scale(.8204 1.2189)"
            x={570.33478}
            y={124.71497}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan15579"
              x={567.63638}
              y={124.71497}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.corriente_N}
            </tspan>
          </text>
          <text
            id="out1_b_cur"
            transform="scale(.8204 1.2189)"
            x={567.63635}
            y={109.08638}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan6833"
              x={567.63635}
              y={109.08638}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.out1_B}
            </tspan>
          </text>
          <text
            id="out1_c_cur"
            transform="scale(.8204 1.2189)"
            x={567.63635}
            y={116.46657}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan6839"
              x={567.63635}
              y={116.46657}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.out1_C}
            </tspan>
          </text>
          <text
            id="estado"
            x={217.1003}
            y={179.8784}
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
              id="tspan5848-3"
              x={217.1003}
              y={179.8784}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="6.35px"
              strokeWidth={0.26458}
            >
              {datos_principales.estado}
            </tspan>
          </text>
          <g 
          id="st2" 
          className={datos_principales.boton_estado}//power
          transform="translate(-7.11 3.577)" 
          fill="#00990c">
            <path
              id="path15781"
              d="M213.68 169.15a5.861 5.861 0 00-4.066 1.662 5.7 5.7 0 00-1.684 4.01c0 1.484.62 2.96 1.684 4.01a5.86 5.86 0 004.066 1.662 5.861 5.861 0 004.066-1.662 5.7 5.7 0 001.684-4.01 5.7 5.7 0 00-1.684-4.01 5.86 5.86 0 00-4.066-1.662zm0 .835a5.03 5.03 0 013.475 1.42c.904.891 1.435 2.158 1.435 3.417s-.531 2.525-1.435 3.417a5.03 5.03 0 01-3.475 1.42 5.03 5.03 0 01-3.475-1.42c-.904-.892-1.435-2.159-1.435-3.417s.531-2.526 1.435-3.418a5.03 5.03 0 013.475-1.42z"
            />
            <path
              id="path2489"
              transform="translate(123.93 125.48) scale(.14885)"
              d="M601.87 320.96c.063-1.312 2.784-1.358 2.69.07-.033.121 0 9.401 0 9.401-.347 1.078-2.153 1.292-2.713 0z"
              filter="url(#filter2703)"
            />
            <path
              id="path2649"
              transform="translate(123.93 125.48) scale(.14885)"
              d="M597.57 325.63c1.697.335 1.59 1.335 1.404 2.364-1.343 1.49-2.998 2.762-2.868 5.287.434 2.218.972 4.389 3.417 5.673 2.376 1.244 4.814 1.155 6.562.177 1.888-1.079 3.769-3.085 3.728-5.85-.088-2.4-1.275-4.226-3.313-5.607.084-.983-.099-2.122 2.022-1.917 2.273 1.96 4.04 4.21 3.95 7.536 0 3.557-1.8 6.427-5.653 8.51-2.77 1.344-5.445.865-8.09-.167-2.57-1.48-5.569-3.356-5.217-9.529.748-3.306 2.154-5.363 4.058-6.477z"
              filter="url(#filter2663)"
            />
          </g>
          
          
          <text
            id="out1_a_cur-1"
            transform="scale(.8204 1.2189)"
            x={567.60449}
            y={101.81425}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0855px"
            letterSpacing={0}
            strokeWidth={0.26458}
            wordSpacing={0}
          >
            <tspan
              id="tspan6827-6"
              x={567.60449}
              y={101.81425}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.9389px"
              strokeWidth={0.26458}
            >
              {estados.out1_A}
            </tspan>
          </text>
          <text
            id="pdu_nombre_on"
            transform="scale(.83112 1.2032)"
            x={126.49335}
            y={23.697813}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="7.0556px"
            letterSpacing={0}
            strokeWidth={0.25953}
            wordSpacing={0}
          >
            <tspan
              id="tspan4561"
              x={126.49335}
              y={23.697813}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="7.0556px"
              strokeWidth={0.25953}
            >
              <tspan
                id="tspan4559"
                fill="#fff"
                fontSize="10.289px"
                strokeWidth={0.25953}
              >
                {datos_principales.nombre_pdu}
              </tspan>
            </tspan>
          </text>
        </g>
      </g>
    </g>
  
    )
}