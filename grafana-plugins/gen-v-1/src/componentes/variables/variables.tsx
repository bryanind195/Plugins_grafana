import React from 'react';


//-----------estos datos estan OK----------
type Modo_control ={
  stop_mode: string; // gen_stop_mod
  auto_mode: string; // gen_auto_mod
  manual_mode: string; //gen_manual 
  off_mode: string; // gen_off_mode
};


type Alternador ={
  voltaje_ff: number;//alt1
  corriente: number;//alt2
  pot_kw: number;//alt3
  pot_kva: number;//alt4
  factor_pot: number;//alt5
};


type Motor ={
  volt_bat: number;//mot1
  temp: number;//mot2
  oil_press: number;//mot3
  horas_uso: number;//mot4
  frecuencia: number;//mot5
};

type Estados_alarmas={
  war: string;
  sht: string;
  trip: string;
};


type Alarmas ={
    emerg_stop: Estados_alarmas; //gen_es_warn_alm ,gen_es_shutd_alm ,gen_es_eltrip_alm //
    low_oil_press: Estados_alarmas; //gen_lop_warn_alm, gen_lop_shutd_alm, gen_lop_eltrip_alm //
    high_cool_temp: Estados_alarmas; //gen_hct_warn_alm, gen_hct_shutd_alm, gen_hct_eltrip_alm
    under_speed: Estados_alarmas; //gen_us_warn_alm,gen_us_shutd_alm,gen_us_eltrip_alm
    over_speed: Estados_alarmas; //gen_os_warn_alm,gen_os_shutd_alm,gen_os_eltrip_alm
    fail_start: Estados_alarmas; //gen_fs_warn_alm,gen_fs_shutd_alm,gen_fs_eltrip_alm
    gen_low_volt: Estados_alarmas; //gen_glv_warn_alm,gen_glv_shutd_alm,gen_glv_eltrip_alm
    gen_high_volt: Estados_alarmas; //gen_ghv_warn_alm,gen_ghv_shutd_alm,gen_ghv_eltrip_alm
};


type Datos_generales ={
  fase: string;
  sistema: string;
  marca: string;
  modelo: string;
  ubicacion: string;

};


type Datos_principales ={
  voltaje: number; //id = tspan5844
  temp: number; //id = tspan1960-4
  diesel: number; //id = tspan9221
  rectan_gen: string; // rectangulo id= estado_eq = g1499
  nombre_gen: string;//nombre del equipo id= tspan6769
  boton_estado: string;// power id = st2
  text_estado: string ;// texto id= tspan5848-3
};

export interface DataGenerador{
    modo_control: Modo_control;
    alternador: Alternador;
    motor: Motor;
    alarmas: Alarmas;
    datos_generales: Datos_generales;
    datos_principales: Datos_principales;
}

export const Variables = ({
    modo_control,alternador,motor,alarmas,datos_generales,datos_principales

}: DataGenerador) =>{
   
  return(

    <g id="layer4">
    <text
      id="cool_temp"
      transform="scale(.87709 1.1401)"
      x={251.17116}
      y={42.808056}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="5.5896px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.27418}
      wordSpacing={0}
    >
      <tspan
        id="tspan1960-4"
        x={251.17116}
        y={42.808056}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="11.3654px"
        fontWeight={700}
        strokeWidth={0.27418}
      >
        {datos_principales.temp}
      </tspan>
    </text>
    <text
      id="volt"
      transform="scale(.98487 1.0154)"
      x={29.050638}
      y={45.281254}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.8416px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.33559}
      wordSpacing={0}
    >
      <tspan
        id="tspan5844"
        x={29.050638}
        y={45.281254}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="11.463px"
        fontWeight={700}
        strokeWidth={0.33559}
      >
        {datos_principales.voltaje}
      </tspan>
    </text>
    <text
      id="st"
      transform="scale(.93044 1.0748)"
      x={240.37659}
      y={163.98103}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="sans-serif"
      fontSize="2.7787px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.2084}
      wordSpacing={0}
    >
      <tspan
        id="tspan5848-3"
        x={240.37659}
        y={163.98103}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="5.5574px"
        fontWeight={700}
        strokeWidth={0.2084}
      >
        {datos_principales.text_estado}
      </tspan>
    </text>
    <g
      id="st2"
      className={datos_principales.boton_estado}
      transform="translate(1.761 .066)"
      fill="#00990c"
      opacity={0.999}
    >
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
      id="fase"
      transform="scale(.98529 1.0149)"
      x={331.85886}
      y={41.81601}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan3618"
        x={331.85886}
        y={41.81601}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="5.6444px"
        strokeWidth={0.47057}
      >
        {datos_generales.fase}
      </tspan>
    </text>
    <text
      id="sistema"
      transform="scale(.98529 1.0149)"
      x={331.64386}
      y={50.130447}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="sans-serif"
      fontSize="6.2742px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan526"
        x={331.64386}
        y={50.130447}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="5.6444px"
        strokeWidth={0.47057}
      >
        {datos_generales.sistema}
      </tspan>
    </text>
    <text
      id="marca"
      transform="scale(.98529 1.0149)"
      x={331.85886}
      y={57.197716}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan530"
        x={331.85886}
        y={57.197716}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="5.6444px"
        strokeWidth={0.47057}
      >
        {datos_generales.marca}
      </tspan>
    </text>
    <text
      id="modelo"
      transform="scale(.98529 1.0149)"
      x={331.85925}
      y={65.683647}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan534"
        x={331.85925}
        y={65.683647}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="5.6444px"
        strokeWidth={0.47057}
      >
        {datos_generales.modelo}
      </tspan>
    </text>
    <text
      id="ubicacion"
      transform="scale(.98529 1.0149)"
      x={331.85886}
      y={73.847984}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#000"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.2742px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.47057}
      wordSpacing={0}
    >
      <tspan
        id="tspan583"
        x={331.85886}
        y={73.847984}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="5.6444px"
        strokeWidth={0.47057}
      >
        {datos_generales.ubicacion}
      </tspan>
    </text>
    <g
      id="gen_stop_mod"
      transform="translate(.986 -.364)"
      opacity={0.999}
      fillRule="evenodd"
      paintOrder="markers stroke fill"
    >
      <ellipse
        id="gen5_stop_mode"
        cx={481.29}
        cy={48.336}
        rx={2.3902}
        ry={2.6075}
        className={modo_control.stop_mode}
        //fill="#1bea77"
        opacity={0.88}
      />
      <ellipse
        id="path2448-1-2-81-7"
        transform="matrix(.68945 0 0 .65737 175.06 24.158)"
        cx={444.15}
        cy={34.583}
        rx={1.8876}
        ry={1.5368}
        fill="#fff"
        filter="url(#filter2963-9-77-6)"
        opacity={0.592}
      />
    </g>
    <g
      id="gen_auto_mod"
      transform="translate(.986 .144)"
      opacity={0.999}
      fillRule="evenodd"
      paintOrder="markers stroke fill"
    >
      <ellipse
        id="gen5_auto_mode"
        cx={481.29}
        cy={56.197}
        rx={2.3902}
        ry={2.6075}
        className={modo_control.auto_mode}
        //fill="#1bea77"
        opacity={0.88}
      />
      <ellipse
        id="ellipse11027"
        transform="matrix(.68945 0 0 .65737 175.06 32.019)"
        cx={444.15}
        cy={34.583}
        rx={1.8876}
        ry={1.5368}
        fill="#fff"
        filter="url(#filter2963-9-77-6)"
        opacity={0.592}
      />
    </g>
    <g
      id="gen_manual"
      transform="translate(.255 -2.104)"
      opacity={0.999}
      fillRule="evenodd"
      paintOrder="markers stroke fill"
    >
      <ellipse
        id="gen5_manual_mode"
        cx={482.03}
        cy={67.171}
        rx={2.3902}
        ry={2.6075}
        className={modo_control.manual_mode}
        //fill="#1bea77"
        opacity={0.88}
      />
      <ellipse
        id="ellipse11033"
        transform="matrix(.68945 0 0 .65737 175.94 43.286)"
        cx={444.15}
        cy={34.583}
        rx={1.8876}
        ry={1.5368}
        fill="#fff"
        filter="url(#filter2963-9-77-6)"
        opacity={0.592}
      />
    </g>

    <g
      id="gen_off_mode"
      transform="translate(.547 -4.912)"
      opacity={0.999}
      fillRule="evenodd"
      paintOrder="markers stroke fill"
    >
      <ellipse
        id="gen5_off_mode"
        cx={481.73}
        cy={77.784}
        rx={2.3902}
        ry={2.6075}
        className={modo_control.off_mode}
        //fill="#1bea77"
        opacity={0.88}
      />
      <ellipse
        id="ellipse11039"
        transform="matrix(.68945 0 0 .65737 175.5 53.606)"
        cx={444.15}
        cy={34.583}
        rx={1.8876}
        ry={1.5368}
        fill="#fff"
        filter="url(#filter2963-9-77-6)"
        opacity={0.592}
      />
    
    
    
    
    </g>
    <text
      id="alt1"
      x={464.83282}
      y={93.970551}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620"
        x={464.83282}
        y={93.970551}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {alternador.voltaje_ff}  V
      </tspan>
    </text>
    <text
      id="alt2"
      x={464.64368}
      y={102.28329}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-6"
        x={464.64368}
        y={102.28329}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {alternador.corriente}  A
      </tspan>
    </text>
    <text
      id="alt3"
      x={457.73227}
      y={110.18436}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-9"
        x={457.73227}
        y={110.18436}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {alternador.pot_kw}  KW
      </tspan>
    </text>
    <text
      id="alt4"
      x={457.68048}
      y={118.13271}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-6-3"
        x={457.68048}
        y={118.13271}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {alternador.pot_kva}  KVA
      </tspan>
    </text>
    <text
      id="alt5"
      x={464.43393}
      y={127.37685}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-2"
        x={464.43393}
        y={127.37685}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {alternador.factor_pot}  Ø
      </tspan>
    </text>
    <text
      id="mot1"
      x={464.63748}
      y={145.88338}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-6-4"
        x={464.63748}
        y={145.88338}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {motor.volt_bat}  V
      </tspan>
    </text>
    <text
      id="mot2"
      x={464.55377}
      y={154.73549}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-6-4-8"
        x={464.55377}
        y={154.73549}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {motor.temp}  °C
      </tspan>
    </text>
    <text
      id="mot3"
      x={463.93365}
      y={163.21295}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-6-4-9"
        x={463.93365}
        y={163.21295}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {motor.oil_press}  PSI
      </tspan>
    </text>
    <text
      id="mot4"
      x={456.90747}
      y={170.8481}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-6-4-98"
        x={456.90747}
        y={170.8481}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {motor.horas_uso}  Hrs.
      </tspan>
    </text>
    <text
      id="mot5"
      x={464.71191}
      y={178.8524}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="6.35px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.26458}
      wordSpacing={0}
    >
      <tspan
        id="tspan2620-6-4-91"
        x={464.71191}
        y={178.8524}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="6.35px"
        strokeWidth={0.26458}
      >
        {motor.frecuencia}  HZ
      </tspan>
    </text>
    <text
      id="fuel_level"
      transform="scale(.85929 1.1637)"
      x={258.87796}
      y={108.49735}
      style={{ lineHeight: 1.25 }}
      xmlSpace="preserve"
      fill="#fff"
      fontFamily="Franklin Gothic Medium"
      fontSize="4.2867px"
      letterSpacing={0}
      opacity={0.999}
      strokeWidth={0.3215}
      wordSpacing={0}
    >
      <tspan
        id="tspan9221"
        x={258.87796}
        y={108.49735}
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="13.718px"
        strokeWidth={0.3215}
      >
        <tspan
          id="tspan650"
          fontFamily="sans-serif"
          fontWeight={700}
          strokeWidth={0.3215}
        >
          {datos_principales.diesel}
        </tspan>
      </tspan>
    </text>
    <g id="g1499" opacity={0.999}>
      <path
        id="estado_eq"
        className={datos_principales.rectan_gen}
        fillRule="evenodd"
        fill="url(#linearGradient4474)"
        opacity={0.999}
        strokeWidth={0.26219}
        d="M102.76 12.54H160.79500000000002V30.590999999999998H102.76z"
      />
      <text
        id="gen_nom_on"
        x={109.45366}
        y={24.316792}
        style={{ lineHeight: 1.25 }}
        xmlSpace="preserve"
        fill="#fff"
        fontFamily="sans-serif"
        fontSize="9.71px"
        letterSpacing={0}
        opacity={0.999}
        strokeWidth={0.36412}
        wordSpacing={0}
      >
        <tspan
          id="tspan6769"
          x={105.45366}
          y={24.316792}
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="10.289px"
          fontWeight={700}
          strokeWidth={0.36412}
        >
          {datos_principales.nombre_gen}
        </tspan>
      </text>
      <g id="g658">
        <g
          id="g4030-4-3"
          transform="matrix(1.2189 0 0 1.2213 22.859 -17.421)"
          strokeWidth=".21686px"
          stroke="#00afd4"
        >
          <path
            id="path1448-8-2-3"
            d="M64.565 35.514v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H61.9v-2.846z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-6-1-7"
            d="M63.117 38.894h1.623v-2.245l-1.731.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-3-6-1-1"
            d="M115.65 38.894h-1.623v-2.245l1.731.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1376-3-5-5-1-2"
            d="M63.117 23.783h1.623v2.245l-1.731-.585z"
            fill="#192e4f"
            opacity={0.75}
          />
          <path
            id="path1376-3-3-3-3-6-6"
            d="M115.65 23.783h-1.623v2.245l1.731-.585z"
            fill="none"
            opacity={0.75}
          />
          <path
            id="path1325-6-9-3-2"
            d="M62.272 35.384v-8.137"
            fill="#00e4e8"
            opacity={0.75}
          />
          <path
            id="path1325-6-3-1-9-0"
            d="M116.84 35.451v-8.137"
            fill="#00e4e8"
            opacity={0.75}
          />
        </g>
        <path
          id="rect4837-8-8"
          fill="none"
          opacity={0.25}
          paintOrder="markers stroke fill"
          strokeDashoffset={5.65}
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={0.565}
          stroke="#00fbff"
          d="M102.86 11.941H160.89499999999998V29.991999999999997H102.86z"
        />
      </g>
    </g>
    <g
      id="gen_lop_shutd_alm"
      transform="matrix(.11617 0 0 .10952 344.4 74.353)"
      fill="#999"
      className={alarmas.low_oil_press.sht}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3929"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3931"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3933"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3935"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_us_warn_alm"
      transform="matrix(.11617 0 0 .10952 331.4 90.548)"
      fill="#999"
      className={alarmas.under_speed.war}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3919"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3921"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3923"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3925"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_hct_warn_alm"
      transform="matrix(.11617 0 0 .10952 331.4 82.995)"
      fill="#999"
      className={alarmas.high_cool_temp.war}
      opacity={0.999}
    >
      <ellipse
        id="ellipse9648"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path9650"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path9652"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path9654"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_lop_warn_alm"
      transform="matrix(.11617 0 0 .10952 331.4 74.353)"
      fill="#999"
      className={alarmas.low_oil_press.war}
      opacity={0.999}
    >
      <ellipse
        id="ellipse9658"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path9660"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path9662"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path9664"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_os_warn_alm"
      transform="matrix(.11617 0 0 .10952 331.4 97.749)"
      fill="#999"
      className={alarmas.over_speed.war}
      opacity={0.999}
    >
      <ellipse
        id="ellipse10037"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path10039"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path10041"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path10043"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_fs_warn_alm"
      transform="matrix(.11617 0 0 .10952 331.4 106.92)"
      fill="#999"
      className={alarmas.fail_start.war}
      opacity={0.999}
    >
      <ellipse
        id="ellipse10047"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path10049"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path10051"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path10053"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_es_warn_alm"
      transform="matrix(.11617 0 0 .10952 331.4 66.778)"
      fill="#999"
      className={alarmas.emerg_stop.war}
      opacity={0.999}
    >
      <ellipse
        id="ellipse10061"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path10063"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path10065"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path10067"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_ghv_warn_alm"
      transform="matrix(.11617 0 0 .10952 331.4 122.81)"
      fill="#999"
      className={alarmas.gen_high_volt.war}
      opacity={0.999}
    >
      <ellipse
        id="ellipse10073"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path10075"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path10077"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path10079"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <ellipse
      id="ellipse35654"
      transform="matrix(.66554 0 0 .608 57.349 122.99)"
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
    <g
      id="gen_glv_warn_alm"
      transform="matrix(.11617 0 0 .10952 331.4 115.35)"
      fill="#999"
      className={alarmas.gen_low_volt.war}
      opacity={0.999}
    >
      <ellipse
        id="ellipse35780"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path35782"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path35784"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path35786"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_hct_shutd_alm"
      transform="matrix(.11617 0 0 .10952 344.4 82.995)"
      fill="#999"
      className={alarmas.high_cool_temp.sht}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3131"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3133"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3135"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3137"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_us_shutd_alm"
      transform="matrix(.11617 0 0 .10952 344.4 90.548)"
      fill="#999"
      className={alarmas.under_speed.sht}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3141"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3143"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3145"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3147"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_os_shutd_alm"
      transform="matrix(.11617 0 0 .10952 344.4 97.749)"
      fill="#999"
      className={alarmas.over_speed.sht}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3151"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3153"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3155"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3157"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_fs_shutd_alm"
      transform="matrix(.11617 0 0 .10952 344.4 106.92)"
      fill="#999"
      className={alarmas.fail_start.sht}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3161"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3163"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3165"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3167"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_es_shutd_alm"
      transform="matrix(.11617 0 0 .10952 344.4 66.778)"
      fill="#999"
      className={alarmas.emerg_stop.sht}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3171"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3173"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3175"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3177"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_ghv_shutd_alm"
      transform="matrix(.11617 0 0 .10952 344.4 122.81)"
      fill="#999"
      className={alarmas.gen_high_volt.sht}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3181"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3183"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3185"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3187"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <ellipse
      id="ellipse3193"
      transform="matrix(.66554 0 0 .608 70.222 106.48)"
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
    <g
      id="gen_glv_shutd_alm"
      transform="matrix(.11617 0 0 .10952 344.4 115.35)"
      fill="#999"
      className={alarmas.gen_low_volt.sht}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3197"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3199"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3201"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3203"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_hct_eltrip_alm"
      transform="matrix(.11617 0 0 .10952 357.33 82.994)"
      fill="#999"
      className={alarmas.high_cool_temp.trip}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3223"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3225"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3227"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3229"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_lop_eltrip_alm"
      transform="matrix(.11617 0 0 .10952 357.33 74.353)"
      fill="#999"
      className={alarmas.low_oil_press.trip}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3233"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3235"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3237"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3239"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_us_eltrip_alm"
      transform="matrix(.11617 0 0 .10952 357.47 90.548)"
      fill="#999"
      className={alarmas.under_speed.trip}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3243"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3245"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3247"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3249"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_os_eltrip_alm"
      transform="matrix(.11617 0 0 .10952 357.22 97.749)"
      fill="#999"
      className={alarmas.over_speed.trip}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3253"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3255"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3257"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3259"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_es_eltrip_alm"
      transform="matrix(.11617 0 0 .10952 357.33 66.778)"
      fill="#999"
      className={alarmas.emerg_stop.trip}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3263"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3265"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3267"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3269"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_ghv_eltrip_alm"
      transform="matrix(.11617 0 0 .10952 357.33 122.81)"
      fill="#999"
      className={alarmas.gen_high_volt.trip}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3273"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3275"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3277"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3279"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <g
      id="gen_fs_eltrip_alm"
      transform="matrix(.11617 0 0 .10952 357.1 106.92)"
      fill="#999"
      className={alarmas.fail_start.trip}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3909"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3911"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3913"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3915"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <ellipse
      id="ellipse3285"
      transform="matrix(.66554 0 0 .608 82.924 139.12)"
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
    <g
      id="gen_glv_eltrip_alm"
      transform="matrix(.11617 0 0 .10952 357.33 115.35)"
      fill="#999"
      className={alarmas.gen_low_volt.trip}
      opacity={0.999}
    >
      <ellipse
        id="ellipse3289"
        transform="translate(-116.26 147.19) scale(.9382)"
        cx={320.56}
        cy={375.7}
        rx={24.594}
        ry={23.883}
        filter="url(#filter9290)"
        opacity={1}
      />
      <path
        id="path3291"
        transform="translate(-153.22 100.79) scale(1.058)"
        d="M319.2 356.69c-5.516 0-10.994 2.208-14.877 5.979-3.883 3.77-6.129 9.047-6.129 14.354 0 5.305 2.246 10.584 6.129 14.354s9.36 5.98 14.877 5.979c5.516 0 10.994-2.208 14.877-5.979 3.883-3.77 6.13-9.05 6.129-14.355 0-5.305-2.246-10.583-6.129-14.354-3.883-3.77-9.361-5.978-14.877-5.978z"
        filter="url(#filter2469)"
        opacity={1}
      />
      <path
        id="path3293"
        transform="translate(-154.48 99.303) scale(1.0619)"
        d="M319.2 360.57c-4.48 0-9.058 1.855-12.176 4.883-3.121 3.03-4.95 7.359-4.951 11.57 0 4.211 1.83 8.541 4.951 11.572 3.118 3.027 7.695 4.883 12.176 4.883s9.058-1.856 12.176-4.883c3.121-3.031 4.951-7.361 4.951-11.572 0-4.212-1.83-8.54-4.951-11.57-3.118-3.028-7.695-4.883-12.176-4.883z"
        filter="url(#filter9442)"
        opacity={0.95}
      />
      <path
        id="path3295"
        transform="translate(-79.258 197.47) scale(.2177)"
        d="M1211.6 1292.8a87.207 84.687 0 00-68.947 33.002 117.14 70.714 0 0070.228 14.225 117.14 70.714 0 0068.348-13.393 87.207 84.687 0 00-69.629-33.834z"
        filter="url(#filter9290)"
        opacity={1}
      />
    </g>
    <ellipse
      id="ellipse5322"
      transform="matrix(.66554 0 0 .608 57.349 115.27)"
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
    <ellipse
      id="ellipse5324"
      transform="matrix(.66554 0 0 .608 70.183 115.27)"
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
    <ellipse
      id="ellipse5326"
      transform="matrix(.66554 0 0 .608 83.168 115.47)"
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
    <ellipse
      id="ellipse5328"
      transform="matrix(.66554 0 0 .608 57.349 130.09)"
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
    <ellipse
      id="ellipse5330"
      transform="matrix(.66554 0 0 .608 70.183 130.09)"
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
    <ellipse
      id="ellipse5332"
      transform="matrix(.66554 0 0 .608 83.168 130.29)"
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
    <ellipse
      id="ellipse5334"
      transform="matrix(.66554 0 0 .608 57.349 147.55)"
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
    <ellipse
      id="ellipse5336"
      transform="matrix(.66554 0 0 .608 70.183 147.55)"
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
    <ellipse
      id="ellipse5338"
      transform="matrix(.66554 0 0 .608 83.168 147.75)"
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
    <ellipse
      id="ellipse5340"
      transform="matrix(.66554 0 0 .608 57.349 154.96)"
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
    <ellipse
      id="ellipse5342"
      transform="matrix(.66554 0 0 .608 70.183 154.96)"
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
    <ellipse
      id="ellipse5344"
      transform="matrix(.66554 0 0 .608 83.168 155.16)"
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
    <ellipse
      id="ellipse5346"
      transform="matrix(.66554 0 0 .608 57.349 98.871)"
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
    <ellipse
      id="ellipse5348"
      transform="matrix(.66554 0 0 .608 70.183 98.871)"
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
    <ellipse
      id="ellipse5350"
      transform="matrix(.66554 0 0 .608 83.168 99.069)"
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
    <ellipse
      id="ellipse5352"
      transform="matrix(.66554 0 0 .608 57.349 106.81)"
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
    <ellipse
      id="ellipse5354"
      transform="matrix(.66554 0 0 .608 83.168 107.01)"
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
    <ellipse
      id="ellipse5356"
      transform="matrix(.66554 0 0 .608 70.183 122.68)"
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
    <ellipse
      id="ellipse5358"
      transform="matrix(.66554 0 0 .608 83.168 122.88)"
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
    <ellipse
      id="ellipse5360"
      transform="matrix(.66554 0 0 .608 57.349 139.09)"
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
    <ellipse
      id="ellipse5362"
      transform="matrix(.66554 0 0 .608 70.183 139.09)"
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
  </g>
    );
    
};




  
