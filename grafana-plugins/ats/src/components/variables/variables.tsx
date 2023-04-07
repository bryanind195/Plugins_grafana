import React from 'react'

type Estados ={
  est_equipo: String;// id = tspan1165-7
  pres_f1: String;//id = tspan15444
  pres_f2: String;//id= tspan15488
  pos_f1: String;//id= tspan15522
  pos_f2: String;//id= tspan15532
  transf_f1: number;//id = tspan15552
  transf_f2: number;// id= tspan15579
  volt_f1: number;// id = tspan15409
  volt_f2: number;//id = tspan6736
  
}

type Botones_alarmas = {
  rele_trans_auto: string;// id = ats_autotran
  falla_auto: string;//id = ats_noauto
  pos_f1: string ;//id = ats_st_posf1
  pos_f2: string ;//id = ats_st_posf2
  red_modbus: string; // id = ats_modbus
}
type Datos_generales ={
    fase: string; // id = tspan3614
    sistema: string;// id = tspan3614-0
    marca: string;// id = tspan3614-4
    modelo: string;// id = tspan3614-5
    ubicacion: string;// id = tspan3614-8

}

type Datos_principales ={
  volt_f1: number; //id = ats_trnsf1
  volt_f2: number; //id = ats_trnsf2
  total_transf: number; //id = tspan5927
  boton_ats: string; // rectangulo id= estado_eq
  nombre_ats: string;//nombre del equipo id= tspan6769
  boton_estado: string;// power id = ats_st2
  text_estado: string ;// texto id= tspan5848
}
export interface DataAts{
  estados: Estados;
  botones_alarmas: Botones_alarmas;
  datos_generales: Datos_generales;
  datos_principales: Datos_principales;

}

export const Variables = ({
  estados,botones_alarmas,datos_generales,datos_principales

}: DataAts) =>{ 

    return (
        <g id="layer7">
      <g id="g1591">
        <path
          id="estado_eq"
          className = {datos_principales.boton_ats}
          fillRule="evenodd"
          fill="url(#linearGradient4474)"
          strokeWidth={0.26219}
          d="M101.29 12.131H159.325V30.182H101.29z"
        />
        <text
          id="ats_trnsf1"
          transform="scale(1.0508 .95161)"
          x={24.439106}
          y={50.336067}
          style={{
            lineHeight: 1.25
          }}
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
            x={24.439106}
            y={50.336067}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="9.8778px"
            fontWeight={700}
            strokeWidth={0.28918}
          >
            {datos_principales.volt_f1}
          </tspan>
        </text>
        <text
          id="ats_trans"
          transform="scale(1.0508 .95161)"
          x={210.39435}
          y={135.13402}
          style={{
            lineHeight: 1.25
          }}
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
            x={207.39435}
            y={135.13402}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="12.491px"
            fontWeight={700}
            strokeWidth={0.28918}
          >
            {datos_principales.total_transf}
          </tspan>
        </text>
        <text
          id="ats_trnsf2"
          transform="scale(1.0508 .95161)"
          x={204.53853}
          y={50.369724}
          style={{
            lineHeight: 1.25
          }}
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
            x={203.53853}
            y={53.369724}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="10.8778px"
            fontWeight={700}
            strokeWidth={0.28918}
          >
            {datos_principales.volt_f2}
          </tspan>
        </text>
        <g id="ats_st2" 
        className = {datos_principales.boton_estado}
        transform="translate(.283 .201)" 
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
          id="ats_nom_on"
          x={109.56927}
          y={25.667294}
          style={{
            lineHeight: 1.25
          }}
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
            x={101.56927}
            y={23.667294}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="9.289px"
            strokeWidth={0.36412}
          >
            {datos_principales.nombre_ats}
          </tspan>
        </text>
        <text
          id="ats_st"
          x={236.20271}
          y={175.78246}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="3.5278px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan5848"
            x={223.20271}
            y={175.78246}
            dy={0}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.0556px"
            strokeWidth={0.26458}
          >
            {datos_principales.text_estado}
          </tspan>
        </text>
        <text
          id="fase"
          transform="scale(.98529 1.0149)"
          x={337.99048}
          y={39.681595}
          style={{
            lineHeight: 1.25
          }}
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
            x={337.99048}
            y={39.681595}
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
          x={337.99048}
          y={47.870491}
          style={{
            lineHeight: 1.25
          }}
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
            x={337.99048}
            y={47.870491}
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
          x={337.99048}
          y={56.333916}
          style={{
            lineHeight: 1.25
          }}
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
            x={337.99048}
            y={56.333916}
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
          x={337.99048}
          y={64.465454}
          style={{
            lineHeight: 1.25
          }}
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
            x={337.99048}
            y={64.465454}
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
          x={337.99048}
          y={73.094826}
          style={{
            lineHeight: 1.25
          }}
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
            x={337.99048}
            y={73.094826}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {datos_generales.ubicacion}
          </tspan>
        </text>
        <ellipse
          id="ats_autotran"
          cx={369.95}
          cy={127.34}
          rx={2.5726}
          ry={2.4137}
          className = {botones_alarmas.rele_trans_auto}
          fillRule="evenodd"
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="ats_noauto"
          cx={369.95}
          cy={135.45}
          rx={2.5726}
          ry={2.4137}
          className = {botones_alarmas.falla_auto}
          fillRule="evenodd"
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="ats_st_posf1"
          cx={369.95}
          cy={143.55}
          rx={2.5726}
          ry={2.4137}
          className = {botones_alarmas.pos_f1}
          fillRule="evenodd"
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="ats_st_posf2"
          cx={369.95}
          cy={151.65}
          rx={2.5726}
          ry={2.4137}
          className = {botones_alarmas.pos_f2}
          fillRule="evenodd"
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="ats_modbus"
          cx={369.95}
          cy={160.65}
          rx={2.5726}
          ry={2.4137}
          className = {botones_alarmas.red_modbus}
          fillRule="evenodd"
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <text
          id="ats_st3"
          transform="scale(.8204 1.2189)"
          x={579.77881}
          y={58.872589}
          style={{
            lineHeight: 1.25
          }}
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
            x={579.77881}
            y={58.872589}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.est_equipo}
          </tspan>
        </text>
        <text
          id="ats_volf1"
          transform="scale(.8204 1.2189)"
          x={579.90662}
          y={114.44118}
          style={{
            lineHeight: 1.25
          }}
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
            x={579.90662}
            y={114.44118}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {}
          </tspan>
        </text>
        <text
          id="ats_presf1"
          transform="scale(.8204 1.2189)"
          x={579.22656}
          y={66.469864}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15444"
            x={579.22656}
            y={66.469864}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.pres_f1}
          </tspan>
        </text>
        <text
          id="ats_presf2"
          transform="scale(.8204 1.2189)"
          x={579.77399}
          y={74.501266}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15488"
            x={579.77399}
            y={74.501266}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.pres_f2}
          </tspan>
        </text>
        <text
          id="ats_posf1"
          transform="scale(.8204 1.2189)"
          x={579.77399}
          y={82.532661}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15522"
            x={579.77399}
            y={82.532661}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.pos_f1}
          </tspan>
        </text>
        <text
          id="ats_posf2"
          transform="scale(.8204 1.2189)"
          x={579.77399}
          y={90.564049}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15532"
            x={579.77399}
            y={90.564049}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.pos_f2}
          </tspan>
        </text>
        <text
          id="ats_totf1"
          transform="scale(.8204 1.2189)"
          x={579.77881}
          y={98.37838}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15552"
            x={579.77881}
            y={98.37838}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.transf_f1}
          </tspan>
        </text>
        <text
          id="ats_totf2"
          transform="scale(.8204 1.2189)"
          x={579.77881}
          y={106.62685}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15579"
            x={579.77881}
            y={106.62685}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {estados.transf_f2}
          </tspan>
        </text>
        <text
          id="text556"
          transform="scale(.8204 1.2189)"
          x={579.90662}
          y={122.25546}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.6444px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan552"
            x={579.90662}
            y={122.25546}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          />
        </text>
        <text
          id="ats_volf2"
          transform="scale(.8204 1.2189)"
          x={579.90662}
          y={122.25546}
          style={{
            lineHeight: 1.25
          }}
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
            x={579.90662}
            y={122.25546}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.26458}
          >
            {}
          </tspan>
        </text>
      </g>
    </g>
    
    )
}

