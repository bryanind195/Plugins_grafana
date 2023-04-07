import React from 'react'

type Estados ={
    modo: string;// id = tspan1165-7
    ventilador: string;// id = tspan15552
    valvulas: string;// id = tspan15579
    temp_cuarto: number;// id = tspan15444
    humedad_relativa:number;// id = tspan15488
    t_suministro: number;// id = tspan15522
    t_retorno:number;// id = tspan15530
    h_funcionamiento: number;// id = tspan15409
}

type Botones_alarmas = {
    general : string; // id = alarm_gen
    filtro_aire: string;// id = alm_filtro
    inundacion: string;// id = alm_inundacion
    sobrecalentamiento: string;// id =alm_sobrecalentamiento
    perdida_flujo: string;// id = alm_perdida
    humo_fuego: string;// id = alm_humo
}
type Datos_generales ={
    fase: string; // id = tspan3618
    sistema: string;// id = tspan3618-0
    marca: string;// id = tspan3614-4
    modelo: string;// id = tspan3614-5
    ubicacion: string;// id = tspan3614-8

}
type Datos_principales ={
    t_suministro: number; // id = tspan5844
    t_retorno: number; // id = tspan1960-4
    humedad_relativa: number; // id = tspan5927 
   // boton_uma: string; // rectangulo id=estado_eq
    nombre_uma: string;//nombre del equipo id= tspan6769
    boton_estado: string;// power id = st2 (path2649,path15781,path2489)
    estado: string; //encendido - apagado id = sys_on
    
}

export interface DataUma{
    estados: Estados;
    botones_alarmas: Botones_alarmas;
    datos_generales: Datos_generales;
    datos_principales: Datos_principales;
    boton_uma: string;
}

export const Variables = ({
    boton_uma,estados, botones_alarmas, datos_generales, datos_principales

}: DataUma) =>{
    return(
        <g id="layer5">
      <text
        id="uma_mode-7"
        transform="scale(.8204 1.2189)"
        x={596.93231}
        y={60.489353}
        style={{
          lineHeight: 1.25
        }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="Franklin Gothic Medium"
        fontSize="6.0855px"
        letterSpacing={0}
        strokeWidth={0.26458}
        wordSpacing={0}
      />
      <g id="g1973">
        <path
          id="estado_eq"
          className= {boton_uma}
          fillRule="evenodd"
          fill="url(#linearGradient1680)"
          strokeWidth={0.26219}
          d="M101.79 12.102H159.825V30.153H101.79z"
        />
        <path
          id="path15362"
          d="M221.27 171.24l4.281-2.175 31.213.063 2.778 1.319v6.624l-4.224 2.037h-34.16z"
          fill="url(#linearGradient15377)"
          opacity={0.3}
        />
        <ellipse
          id="alarm_gen"
          cx={372.49}
          cy={124.55}
          rx={2.5726}
          ry={2.4137}
          className = {botones_alarmas.general}
          fillRule="evenodd"
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="alm_filtro"
          cx={372.49}
          cy={132.66}
          rx={2.5726}
          ry={2.4137}
          fillRule="evenodd"
          className = {botones_alarmas.filtro_aire}
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="alm_inundacion"
          cx={372.49}
          cy={140.76}
          rx={2.5726}
          ry={2.4137}
          fillRule="evenodd"
          className = {botones_alarmas.inundacion}
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="alm_sobrecalentamiento"
          cx={372.49}
          cy={148.86}
          rx={2.5726}
          ry={2.4137}
          fillRule="evenodd"
          className = {botones_alarmas.sobrecalentamiento}
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="alm_perdida"
          cx={372.49}
          cy={156.96}
          rx={2.5726}
          ry={2.4137}
          fillRule="evenodd"
          className = {botones_alarmas.perdida_flujo}
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="alm_humo"
          cx={372.49}
          cy={165.07}
          rx={2.5726}
          ry={2.4137}
          fillRule="evenodd"
          className = {botones_alarmas.humo_fuego}
          fill="#1bea77"
          opacity={0.88}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="path2448-1"
          transform="matrix(.74208 0 0 .6085 42.907 102.08)"
          cx={444.15}
          cy={34.583}
          rx={1.8876}
          ry={1.5368}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter2963)"
          opacity={0.592}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="path2448-1-2"
          transform="matrix(.74208 0 0 .6085 42.882 110.32)"
          cx={444.15}
          cy={34.583}
          rx={1.8876}
          ry={1.5368}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter2963-9)"
          opacity={0.592}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="path2448-1-2-8"
          transform="matrix(.74208 0 0 .6085 42.928 118.41)"
          cx={444.15}
          cy={34.583}
          rx={1.8876}
          ry={1.5368}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter2963-9-7)"
          opacity={0.592}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="path2448-1-2-1"
          transform="matrix(.74208 0 0 .6085 42.898 126.57)"
          cx={444.15}
          cy={34.583}
          rx={1.8876}
          ry={1.5368}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter2963-9-6)"
          opacity={0.592}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="path2448-1-2-5"
          transform="matrix(.74208 0 0 .6085 42.928 134.57)"
          cx={444.15}
          cy={34.583}
          rx={1.8876}
          ry={1.5368}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter2963-9-74)"
          opacity={0.592}
          paintOrder="markers stroke fill"
        />
        <ellipse
          id="path2448-1-2-81"
          transform="matrix(.74208 0 0 .6085 42.882 142.69)"
          cx={444.15}
          cy={34.583}
          rx={1.8876}
          ry={1.5368}
          fillRule="evenodd"
          fill="#fff"
          filter="url(#filter2963-9-77)"
          opacity={0.592}
          paintOrder="markers stroke fill"
        />
        <text
          id="uma_mode"
          transform="scale(.8204 1.2189)"
          x={580.56189}
          y={60.315125}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.0855px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan1165-7"
            x={575}
            y={60.315125}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {estados.modo}
          </tspan>
        </text>
        <text
          id="sys_on"
          x={222.46786}
          y={176.62492}
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
            x={223.46786}
            y={176.62492}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.5556px"
            strokeWidth={0.26458}
          >
            {datos_principales.estado}
          </tspan>
        </text>
        <text
          id="humedad"
          transform="scale(1.0508 .95161)"
          x={212.52034}
          y={131.45428}
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
            x={206.52034}
            y={131.45428}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="12.491px"
            fontWeight={590}
            strokeWidth={0.28918}
          >
            {datos_principales.humedad_relativa}
          </tspan>
        </text>
        <g id="g15358" transform="matrix(.52638 0 0 .48302 174.52 162.75)">
          <path
            id="path15352"
            d="M88.487 12.957l7.519.05-7.356 4.114z"
            fill="#17d8fb"
          />
          <path
            id="path15354"
            d="M89.194 17.992l8.133-4.504 59.298.132 5.214-.072.095 20.77-8.055-.036H88.982z"
            fill="none"
            strokeWidth={0.8844}
            stroke="#0deff7"
          />
          <path
            id="path15356"
            d="M89.27 30.147c-.136 0-.245.072-.245.16v3.618c0 .088.11.16.245.16h14.66l7.76.185-4.853-4.123-.072.047a.32.32 0 00-.173-.047z"
            fill="#17d8fb"
          />
        </g>
        <text
          id="temp_ret"
          transform="scale(1.0508 .95161)"
          x={208.90504}
          y={50.935295}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="12.347px"
          fontWeight={700}
          letterSpacing={0}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan
            id="tspan1960-4"
            x={198.90504}
            y={50.935295}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="11.347px"
            fontWeight={590}
            strokeWidth={0.28918}
          >
            {datos_principales.t_retorno}
          </tspan>
        </text>
        <text
          id="room_temp"
          transform="scale(.8204 1.2189)"
          x={580.0434}
          y={82.662178}
          style={{
            lineHeight: 1.25
          }}
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
            x={575}
            y={82.662178}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {estados.temp_cuarto}
          </tspan>
        </text>
        <text
          id="room_rel_hum"
          transform="scale(.8204 1.2189)"
          x={580.59082}
          y={90.25013}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.0855px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15488"
            x={575}
            y={90.25013}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {estados.humedad_relativa}
          </tspan>
        </text>
        <text
          id="set_point"
          transform="scale(.8204 1.2189)"
          x={580.59082}
          y={97.816376}
          style={{
            lineHeight: 1.25
          }}
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
            x={575}
            y={97.816376}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {estados.t_suministro}
          </tspan>
        </text>
        <text
          id="ing_sonda"
          transform="scale(.8204 1.2189)"
          x={580.59082}
          y={105.38263}
          style={{
            lineHeight: 1.25
          }}
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
            x={575}
            y={105.38263}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {estados.t_retorno}
          </tspan>
        </text>
        <text
          id="status_valve"
          transform="scale(.8204 1.2189)"
          x={580.59564}
          y={67.757507}
          style={{
            lineHeight: 1.25
          }}
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
            x={575}
            y={67.757507}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {estados.ventilador}
          </tspan>
        </text>
        <text
          id="sys_on_fan"
          transform="scale(.8204 1.2189)"
          x={580.59564}
          y={75.323692}
          style={{
            lineHeight: 1.25
          }}
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
            x={575}
            y={75.323692}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {estados.valvulas}
          </tspan>
        </text>
        <text
          id="fase"
          transform="scale(.98529 1.0149)"
          x={341.22842}
          y={40.799805}
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
            id="tspan3618"
            x={341.22842}
            y={40.799805}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            strokeWidth={0.47057}
          >
            {datos_generales.fase}
          </tspan>
        </text>
        <text
          id="sistema"
          transform="scale(.98529 1.0149)"
          x={340.69138}
          y={48.988689}
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
            id="tspan3618-0"
            x={340.69138}
            y={48.988689}
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
          x={340.69138}
          y={57.452114}
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
            x={340.69138}
            y={57.452114}
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
          x={340.69138}
          y={65.583656}
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
            x={340.69138}
            y={65.583656}
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
          x={340.69138}
          y={74.213043}
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
            x={340.69138}
            y={74.213043}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {datos_generales.ubicacion}
          </tspan>
        </text>
        <path
          id="path2639"
          d="M29.795 35.326c11.975-5.162 23.5 14.12 8.674 21.222"
          fill="none"
        />
        <text
          id="nom_off"
          x={105.55671}
          y={24.007139}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="9.71px"
          letterSpacing={0}
          strokeWidth={0.36412}
          wordSpacing={0}
        >
         
        </text>
        <g id="st2" 
        className={datos_principales.boton_estado} //power
        transform="translate(.258 .023)" 
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
          id="temp_sum"
          transform="scale(1.0508 .95161)"
          x={25.944979}
          y={48.699165}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="12.347px"
          fontWeight={700}
          letterSpacing={0}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan
            id="tspan5844"
            x={25.944979}
            y={48.699165}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="11.347px"
            fontWeight={590}
            strokeWidth={0.28918}
          >
            {datos_principales.t_suministro}
          </tspan>
        </text>
        <text
          id="nom_on"
          x={105.35529}
          y={24.536306}
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
            x={106}
            y={24.536306}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="11.289px"
            strokeWidth={0.36412}
          >
            {datos_principales.nombre_uma}
          </tspan>
        </text>
        <text
          id="unit_run_alarm"
          transform="scale(.8204 1.2189)"
          x={580.72345}
          y={112.84469}
          style={{
            lineHeight: 1.25
          }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="6.0855px"
          letterSpacing={0}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan15409"
            x={575}
            y={112.84469}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="4.9389px"
            strokeWidth={0.26458}
          >
            {estados.h_funcionamiento}
          </tspan>
        </text>
      </g>
    </g>
    
    )
}

