import React from 'react';

type Motor = {
  voltaje_bat: number;
  temp: number;
  pres_aceite: number;
  horas_uso: number;
  frecuencia: number;
};

type Alternador = {
  voltaje_ff: number;
  corriente: number;
  pot_kw: number;
  pot_kva: number;
  factor_pot: number;
};

type Modo_control = {
  modo_manual: string; // gen_stop_mod
  modo_auto: string; // gen_auto_mod
  modo_apagado: string; // gen_manual
  modo_encendido: string; // gen_off_mode
};

type Estados_alarmas = {
  war: string;
  sht: string;
  trip: string;
};

type Botones_Alarmas = {
  paro_emergencia: Estados_alarmas; //gen_es_warn_alm ,gen_es_shutd_alm ,gen_es_eltrip_alm //
  baja_pres_aceite: Estados_alarmas; //gen_lop_warn_alm, gen_lop_shutd_alm, gen_lop_eltrip_alm //
  baja_temp: Estados_alarmas; //gen_hct_warn_alm, gen_hct_shutd_alm, gen_hct_eltrip_alm
  bajas_revol: Estados_alarmas; //gen_us_warn_alm,gen_us_shutd_alm,gen_us_eltrip_alm
  altas_revol: Estados_alarmas; //gen_os_warn_alm,gen_os_shutd_alm,gen_os_eltrip_alm
  falla_arranque: Estados_alarmas; //gen_fs_warn_alm,gen_fs_shutd_alm,gen_fs_eltrip_alm
  bajo_volt_gen: Estados_alarmas; //gen_glv_warn_alm,gen_glv_shutd_alm,gen_glv_eltrip_alm
  alto_volt_gen: Estados_alarmas; //gen_ghv_warn_alm,gen_ghv_shutd_alm,gen_ghv_eltrip_alm
};

type Data_general = {
  fase: string;
  sistema: string;
  marca: string;
  modelo: string;
  ubicacion: string;
};

export interface DataGenerador {
  voltaje: number;
  temp: number;
  nivel: number;
  estado: string;
  boton_estado: string; // su id=st2
  nombre_gen: string;
  boton_gen: string; // su id=estado_eq
  motor: Motor;
  alternador: Alternador;
  modoControl: Modo_control;
  botones_Alarmas: Botones_Alarmas;
  dataGeneral: Data_general;
}

export const Variables = ({
  voltaje,
  temp,
  nivel,
  estado,
  nombre_gen,
  boton_estado,
  boton_gen,
  motor,
  alternador,
  botones_Alarmas,
  dataGeneral,
  modoControl,
}: DataGenerador) => {
  return (
    <g id="layer5">
      <g id="g1695">
        <path
          id="estado_eq"
          className={boton_gen}
          fillRule="evenodd"
          fill="url(#linearGradient4474)"
          opacity={0.999}
          strokeWidth={0.26219}
          d="M103.64 12.12H161.675V30.171H103.64z"
        />
        <text
          id="volt"
          transform="scale(1.0508 .95161)"
          x={24.600893}
          y={50.028843}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="5.8954px"
          letterSpacing={0}
          opacity={0.999}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan
            id="tspan5844"
            x={24.600893}
            y={50.028843}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="9.8778px"
            strokeWidth={0.28918}
          >
            {voltaje}
          </tspan>
        </text>
        <text
          id="fuel_level"
          x={223.22559}
          y={126.21124}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="12.347px"
          letterSpacing={0}
          opacity={0.999}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan9221"
            x={223.22559}
            y={126.21124}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="12.347px"
            strokeWidth={0.26458}
          >
            {nivel}
          </tspan>
        </text>
        <text
          id="cool_temp"
          transform="scale(1.0508 .95161)"
          x={212.24174}
          y={50.794903}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#fff"
          fontFamily="Franklin Gothic Medium"
          fontSize="12.347px"
          letterSpacing={0}
          opacity={0.999}
          strokeWidth={0.28918}
          wordSpacing={0}
        >
          <tspan
            id="tspan1960-4"
            x={212.24174}
            y={50.794903}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="12.347px"
            strokeWidth={0.28918}
          >
            {temp}
          </tspan>
        </text>
        <text
          id="st"
          x={225.8596}
          y={175.86026}
          style={{ lineHeight: 1.25 }}
          xmlSpace="preserve"
          fill="#000"
          fontFamily="sans-serif"
          fontSize="6.35px"
          letterSpacing={0}
          opacity={0.999}
          strokeWidth={0.26458}
          wordSpacing={0}
        >
          <tspan
            id="tspan5848-3"
            x={225.8596}
            y={175.86026}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {estado}
          </tspan>
        </text>
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
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {dataGeneral.fase}
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
          fontFamily="Franklin Gothic Medium"
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
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {dataGeneral.sistema}
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
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {dataGeneral.marca}
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
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {dataGeneral.modelo}
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
            fontFamily="Franklin Gothic Medium"
            fontSize="5.6444px"
            strokeWidth={0.47057}
          >
            {dataGeneral.ubicacion}
          </tspan>
        </text>

        <g id="st2" className={boton_estado} transform="translate(1.761 .066)" fill="red" opacity={0.999}>
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

        <g
          id="gen_lop_shutd_alm"
          transform="matrix(.11617 0 0 .10952 344.4 74.353)"
          className={botones_Alarmas.baja_pres_aceite.sht}
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
          className={botones_Alarmas.bajas_revol.war}
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
          className={botones_Alarmas.baja_temp.war}
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
          className={botones_Alarmas.baja_pres_aceite.war}
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
          className={botones_Alarmas.altas_revol.war}
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
          className={botones_Alarmas.falla_arranque.war}
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
          className={botones_Alarmas.paro_emergencia.war}
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
          className={botones_Alarmas.alto_volt_gen.war}
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
          className={botones_Alarmas.bajo_volt_gen.war}
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
          className={botones_Alarmas.baja_temp.sht}
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
          className={botones_Alarmas.bajas_revol.sht}
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
          className={botones_Alarmas.altas_revol.sht}
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
          className={botones_Alarmas.falla_arranque.sht}
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
          className={botones_Alarmas.paro_emergencia.sht}
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
          className={botones_Alarmas.alto_volt_gen.sht}
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
          className={botones_Alarmas.bajo_volt_gen.sht}
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
          className={botones_Alarmas.baja_temp.trip}
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
          className={botones_Alarmas.baja_pres_aceite.trip}
          transform="matrix(.11617 0 0 .10952 357.33 74.353)"
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
          className={botones_Alarmas.bajas_revol.trip}
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
          className={botones_Alarmas.altas_revol.trip}
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
          className={botones_Alarmas.paro_emergencia.trip}
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
          className={botones_Alarmas.alto_volt_gen.trip}
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
          className={botones_Alarmas.falla_arranque.trip}
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
          className={botones_Alarmas.bajo_volt_gen.trip}
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
        <text
          id="alt1"
          x={461.1286}
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
            x={461.1286}
            y={93.970551}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {alternador.voltaje_ff}
          </tspan>
        </text>
        <text
          id="alt2"
          x={460.93945}
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
            x={460.93945}
            y={102.28329}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {alternador.corriente}
          </tspan>
        </text>
        <text
          id="alt3"
          x={460.40408}
          y={109.81997}
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
            x={460.40408}
            y={109.81997}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {alternador.pot_kw}
          </tspan>
        </text>
        <text
          id="alt4"
          x={460.40408}
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
            x={460.40408}
            y={118.13271}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {alternador.pot_kva}
          </tspan>
        </text>
        <text
          id="alt4-1"
          x={459.85654}
          y={126.52782}
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
            id="tspan2620-6-3-1"
            x={459.85654}
            y={126.52782}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {alternador.factor_pot}
          </tspan>
        </text>
        <text
          id="mot1"
          x={460.40408}
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
            x={460.40408}
            y={145.88338}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {motor.voltaje_bat}
          </tspan>
        </text>
        <text
          id="mot2"
          x={460.84955}
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
            x={460.84955}
            y={154.73549}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {temp}
          </tspan>
        </text>
        <text
          id="mot3"
          x={460.75861}
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
            x={460.75861}
            y={163.21295}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {motor.pres_aceite}
          </tspan>
        </text>
        <text
          id="mot4"
          x={460.78632}
          y={170.60425}
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
            x={460.78632}
            y={170.60425}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {motor.horas_uso}
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
            fontFamily="Franklin Gothic Medium"
            fontSize="6.35px"
            strokeWidth={0.26458}
          >
            {motor.frecuencia}
          </tspan>
        </text>
        <g
          id="gen_stop_mod"
          transform="translate(.986)"
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
            className={modoControl.modo_manual}
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
          transform="translate(.986 .508)"
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
            className={modoControl.modo_auto}
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
          transform="translate(.255 -1.74)"
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
            className={modoControl.modo_manual}
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
          transform="translate(.547 -4.548)"
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
            className={modoControl.modo_apagado}
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
          id="gen_nom_on"
          x={113.51382}
          y={23.889875}
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
            x={105}
            y={23.889875}
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="11.289px"
            strokeWidth={0.36412}
          >
            {nombre_gen}
          </tspan>
        </text>
      </g>
    </g>
  );
};
