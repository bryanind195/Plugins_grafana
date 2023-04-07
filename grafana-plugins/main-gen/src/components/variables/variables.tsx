import React from 'react'

///-------------tipo de dato--------------///
type Gen1 = {
    boton_gen1: string; //estado_eq-4-6
    //nombre_gen1: string; //gen_nom_on-3-0-6-9
    color_gen1: string; //g5795,shape-4-3-8,light-2-8-5
    barra1_gen1:string; //g7895-79
    contacto_gen1: string; //shape-3-0-6-6-6-1-3-9-0-8-3
    barra2_gen1:string; //g7945-6
    modo_gen1:string; //text10992-9-0-1-1-3-7-6
    volt_gen1: number; //alt1-6-4
    amp_gen1: number; //alt2-1-6
    kw_gen1: number; //alt3-7-5
    carga_gen1: number; //alt4-5-1
    diesel_gen1: number; //alt4-1-2-2
    
};

type Gen2 = {
    boton_gen2: string; //estado_eq-4-74
    //nombre_gen2: string; //gen_nom_on-3-0-2-6
    color_gen2: string; //g5606, light-2-8, shape-4-3
    barra1_gen2:string; //g7895-7
    contacto_gen2: string; //shape-3-0-6-6-6-1-3-9-0-8-1
    barra2_gen2:string; //g7945-8
    modo_gen2:string; //text10992-9-0-1-1-3-1-5
    volt_gen2: number; //alt1-1-5
    amp_gen2: number; //alt2-8-5
    kw_gen2: number; // alt3-4-0
    carga_gen2: number; //alt4-17-0
    diesel_gen2: number; //alt4-1-3-4
    
};

type Gen3 = {
    boton_gen3: string; //estado_eq-4-7
    //nombre_gen3: string; //gen_nom_on-3-0-9
    color_gen3: string; // g4211,light-2,shape-4
    barra1_gen3:string; //g7895
    contacto_gen3: string; // shape-3-0-6-6-6-1-3-9-0-8
    barra2_gen3:string; // g8295
    modo_gen3:string; //text10992-9-0-1-1-3-71
    volt_gen3: number; //alt1-9
    amp_gen3: number; //alt2-19
    kw_gen3: number; //alt3-9
    carga_gen3: number; //alt4-54
    diesel_gen3: number; //alt4-1-9
    
};

type Gen4 = {
    boton_gen4: string; //estado_eq-4-0
    //nombre_gen4: string;//gen_nom_on-3-0-6
    color_gen4: string;//g5795-0, shape-4-3-8-2, light-2-8-5-0
    barra1_gen4:string;//g8354-4
    contacto_gen4: string;//shape-3-0-6-6-6-1-3-9-0-8-19-2
    barra2_gen4:string;//g8319-9
    modo_gen4:string;// text10992-9-0-1-1-3-7
    volt_gen4: number;//alt1-6
    amp_gen4: number;//alt2-1
    kw_gen4: number;//alt3-7
    carga_gen4: number;//alt4-5
    diesel_gen4: number;//alt4-1-2
    
};

type Gen5 = {
    boton_gen5: string;//estado_eq-4
    //nombre_gen5: string;//gen_nom_on-3-0-2
    color_gen5: string;//g5606-4, light-2-8-3, shape-4-3-2
    barra1_gen5:string;//g8354-1
    contacto_gen5: string;//shape-3-0-6-6-6-1-3-9-0-8-19-7
    barra2_gen5:string;// g8319-4
    modo_gen5:string;//text10992-9-0-1-1-3-1
    volt_gen5: number;//alt1-1
    amp_gen5: number;//alt2-8
    kw_gen5: number;//alt3-4
    carga_gen5: number;//alt4-17
    diesel_gen5: number;//alt4-1-3
    
};

type Gen6 = {
    boton_gen6: string; //estado_eq
    //nombre_gen6: string;//gen_nom_on-3-0
    color_gen6: string;//g4211-9, shape-4-7, light-2-2
    barra1_gen6:string;//g8354
    contacto_gen6: string;//shape-3-0-6-6-6-1-3-9-0-8-19
    barra2_gen6:string;//g8319
    modo_gen6:string;//text10992-9-0-1-1-3
    volt_gen6: number;//alt1
    amp_gen6: number;//alt2
    kw_gen6: number;//alt3
    carga_gen6: number;//alt4
    diesel_gen6: number;//alt4-1
    
};

type Tdlow_A0 = {
    boton_tdlow_A0: string; // estado_eq-4-3-56-3
   // nombre_tdlow_A0: string;//gen_nom_on-1-5-1-0-6-1
    color_tdlow_A0_torre: string;//g104,path4-2
    color_tdlow_A0_indust: string;//g26,shape
    modo_tdlow_A0:string;//text10992-9-0-1-1-3-7-6-4
    voltff_tdlow_A0: number;//alt1-6-4-0
    voltfn_tdlow_A0: number;//alt1-6-4-0-4
    amp_tdlow_A0: number;//alt2-1-6-4
    kw_tdlow_A0: number;//alt3-7-5-0
    carga_tdlow_A0: number;//alt4-5-1-9
    kvar_tdlow_A0: number;//alt4-1-2-2-6
    
};

type Tdlow_A1 = {
    boton_tdlow_A1: string;// estado_eq-4-3-56
    //nombre_tdlow_A1: string;//gen_nom_on-1-5-1-0-6
    piloto_tdlow_A1: string; //gen5_off_mode-8-7
    volt_tdlow_A1: number;//temp_retagua-7-0-6-8-1-6
    amp_tdlow_A1: number;//temp_retagua-7-0-6-8-1-6-88
    kw_tdlow_A1: number;//temp_retagua-7-0-6-8-1-6-88-2
    kva_tdlow_A1: number;//temp_retagua-7-0-6-8-1-6-88-2-2
    
    
};

type Tdlow_A2 = {
    boton_tdlow_A2: string; //estado_eq-4-3-56-1
    //nombre_tdlow_A2: string;//gen_nom_on-1-5-1-0-6-5
    piloto_tdlow_A2: string;//gen5_off_mode-8-7-6
    volt_tdlow_A2: number;//temp_retagua-7-0-6-8-1-6-7
    amp_tdlow_A2: number;//temp_retagua-7-0-6-8-1-6-88-8
    kw_tdlow_A2: number;//temp_retagua-7-0-6-8-1-6-88-2-5
    kva_tdlow_A2: number;//temp_retagua-7-0-6-8-1-6-88-2-2-9
    
};

type Tableros = {
    piloto1_ats3a: string;//gen5_off_mode-8-4-5
    piloto2_ats3a: string;//gen5_off_mode-8-4-6-3
    piloto1_ats4a: string;//gen5_off_mode-8-4-5-0
    piloto2_ats4a: string;//gen5_off_mode-8-4-6-3-0
    piloto1_tpdu1a: string;//gen5_off_mode-8-4-5-4
    piloto2_tpdu1a: string;//gen5_off_mode-8-4-6-3-5
    piloto1_tpdu2a: string;//gen5_off_mode-8-4-5-0-2
    piloto2_tpdu2a: string;//gen5_off_mode-8-4-6-3-0-1
    
};

export interface DataGeneradores{
    gen1: Gen1;
    gen2: Gen2;
    gen3: Gen3;
    gen4: Gen4;
    gen5: Gen5;
    gen6: Gen6;
    tdlow_A0: Tdlow_A0;
    tdlow_A1: Tdlow_A1;
    tdlow_A2: Tdlow_A2;
    tableros: Tableros;
}

export const Variables = ({
    gen1, gen2, gen3, gen4, gen5, gen6, tdlow_A0, tdlow_A1, tdlow_A2, tableros

}: DataGeneradores) => {
    return (
        
    <g id="layer4">
        <g id="g11377">
          <g id="g8319" 
              //className={gen6.barra2_gen6}
              opacity={0.999}>
            <g
              id="g6502-5-2-1-6-2-3"
              transform="matrix(.7902 0 0 .68831 -.469 68.919)"
              strokeWidth={0.99948}
            >
              <g
                id="g15-9-0-5-0-7-4-3-9-5"
                transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                strokeWidth={10.227}
              >
                <g id="frame-2-7-1-1-2-5-9-5-8-0">
                  <path
                    id="rect4-5-1-5-8-0-73-8-8-0-2"
                    d="M0 0h100v100H0z"
                    fill="none"
                    strokeWidth={10.227}
                  />
                </g>
                <g id="shape-3-0-6-6-6-1-3-9-1-0" fill="#fc0">
                  <path
                    id="rect7-4-1-8-4-3-3-4-9-0"
                    d="M0 38.5h100v25H0z"
                    fill="#fc0"
                    strokeWidth={10.227}
                  />
                </g>
                <g id="dark-1-2-6-5-0-9-2-2-8-7" fill="#fc0">
                  <path id="rect10-3-0-53-9-6-7-5-6-6-8" d="M0 37.5h100v1H0z" />
                  <path id="rect12-1-0-3-2-4-65-2-4-4-8" d="M0 61.5h100v1H0z" />
                </g>
              </g>
            </g>
            <g id="g7909-1" transform="translate(.114 70.387)" opacity={0.999}>
              <g
                id="g6502-5-2-1-6-5-9-6"
                transform="matrix(.39838 0 0 .18319 18.798 48.319)"
              >
                <g
                  id="g15-9-0-5-0-7-4-3-7-6-5"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                >
                  <g id="frame-2-7-1-1-2-5-9-5-89-94-6">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-6-9-9"
                      fill="none"
                      d="M0 0H100V100H0z"
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-0-8-19"
                        
                        fill="#0ff">
                    <path
                      id="rect7-4-1-8-4-3-3-4-3-4-1"
                      fill="#0ff"
                      className={gen6.contacto_gen6}
                      d="M0 38.5H100V63.5H0z"
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-7-7-9" fill="#0ff">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-65-4-53"
                      d="M0 37.5H100V38.5H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-1-9-1"
                      d="M0 61.5H100V62.5H0z"
                    />
                  </g>
                </g>
              </g>
              <path
                id="path18021-7-5-86"
                d="M37.232 65.163l-3.013-5.524z"
                //fill="#00f"                
                strokeOpacity={0.99216}
                strokeWidth={0.49047}
                stroke="#fc0"
                className={gen6.barra2_gen6}
              />
              <ellipse
                id="path17699-3-27-2-6"
                cx={38.363}
                cy={65.718}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#ff0"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
              <ellipse
                id="path17699-3-27-9-4-7"
                cx={38.395}
                cy={60.208}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#767676"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
            </g>
          </g>
          <g id="g11076">
            <g id="g8354" 
                  className={gen6.barra1_gen6}
                  opacity={0.999}>
              <g
                id="g6502-5-2"
                transform="matrix(.83717 0 0 .94237 -2.736 69.388)"
              >
                <g
                  id="g15-9-0-5-0-7"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                >
                  <g id="frame-2-7-1-1-2-5">
                    <path
                      id="rect4-5-1-5-8-0-73"
                      fill="none"
                      d="M0 0H100V100H0z"
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1" fill="#fc0">
                    <path
                      id="rect7-4-1-8-4-3"                      
                      fill="#fc0"
                      className={gen6.barra1_gen6}
                      d="M0 37.5H100V62.5H0z"
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9" fill="#fc0">
                    <path id="rect10-3-0-53-9-6-7" d="M0 37.5H100V38.5H0z" />
                    <path id="rect12-1-0-3-2-4-65" d="M0 61.5H100V62.5H0z" />
                  </g>
                </g>
              </g>
              <g
                id="g8559-1"
                transform="matrix(.79345 0 0 .79284 -74.21 22.105)"
              >
                <g
                  id="g15-8-7-5-5-6-6-53"
                  transform="matrix(-.06334 0 0 -.06284 145.05 170.33)"
                >
                  <g id="frame-7-5-9-8-4-9-95">
                    <path
                      id="rect4-7-2-3-4-9-2-5"
                      fill="none"
                      d="M0 0H100V100H0z"
                    />
                  </g>
                  <g
                    id="shape-1-2-12-7-1-1-0"
                    fill="#fc0"
                    strokeWidth={0.99927}
                    stroke="#fc0"
                  >
                    <path
                      id="path7-0-9-2-6-0-2-1"
                      d="M25 37.5H0v25h25c6.904 0 12.5 5.596 12.5 12.5v25h25V75c0-20.711-16.789-37.5-37.5-37.5z"
                      fill="#fc0"
                      className={gen5.barra1_gen5}
                      strokeWidth={0.99927}
                      stroke="#fc0"
                    />
                  </g>
                  <g id="dark-81-4-95-0-4-4-9" fill="#fc0">
                    <path
                      id="path10-9-0-0-7-7-9"
                      d="M25 37.5H0v1h25c20.126 0 36.5 16.374 36.5 36.5v25h1V75c0-20.711-16.789-37.5-37.5-37.5z"
                    />
                    <path
                      id="path12-8-6-3-5-7-4-1"
                      d="M38.5 75c0-7.444-6.056-13.5-13.5-13.5H0v1h25c6.904 0 12.5 5.596 12.5 12.5v25h1z"
                    />
                  </g>
                </g>
              </g>
              <g
                id="g6485-0-0-4"
                transform="matrix(.0867 0 0 .8143 39.442 96.574) matrix(.39463 0 0 .06066 16.589 68.304)"
                fill="#fc0"
              >
                <g id="shape-3-7-1-2-9">
                  <path
                    id="rect7-5-0-2-6"
                    fill="#fc0"
                    className={gen6.barra1_gen6}
                    d="M0 37.5H100V62.5H0z"
                  />
                </g>
                <g id="dark-1-8-2-8-8">
                  <path id="rect10-3-3-2-3-0" d="M0 37.5H100V38.5H0z" />
                  <path id="rect12-1-5-4-2-4" d="M0 61.5H100V62.5H0z" />
                </g>
              </g>
            </g>
            <text
              id="alt1"
              transform="scale(.95616 1.0458)"
              x={49.351311}
              y={166.85384}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.1242}
              wordSpacing={0}
            >
              <tspan
                id="tspan2620"
                x={49.351311}
                y={166.85384}
                fill="#fff"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.1242}
              >
                {gen6.volt_gen6}
              </tspan>
            </text>
            <text
              id="alt2"
              transform="scale(.95616 1.0458)"
              x={49.400505}
              y={170.39442}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.1242}
              wordSpacing={0}
            >
              <tspan
                id="tspan2620-6"
                x={49.400505}
                y={170.39442}
                fill="#fff"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.1242}
              >
                {gen6.amp_gen6}
              </tspan>
            </text>
            <text
              id="alt3"
              transform="scale(.95616 1.0458)"
              x={49.149185}
              y={173.84576}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.1242}
              wordSpacing={0}
            >
              <tspan
                id="tspan2620-9"
                x={49.149185}
                y={173.84576}
                fill="#fff"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.1242}
              >
                {gen6.kw_gen6}
              </tspan>
            </text>
            <text
              id="alt4"
              transform="scale(.95616 1.0458)"
              x={51.210815}
              y={177.44353}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.1242}
              wordSpacing={0}
            >
              <tspan
                id="tspan2620-6-3"
                x={51.210815}
                y={177.44353}
                fill="#fff"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.1242}
              >
                {gen6.carga_gen6}
              </tspan>
            </text>
            <text
              id="alt4-1"
              transform="scale(.95616 1.0458)"
              x={51.206917}
              y={181.03226}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.1242}
              wordSpacing={0}
            >
              <tspan
                id="tspan2620-6-3-1"
                x={51.206917}
                y={181.03226}
                fill="#fff"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.1242}
              >
                {gen6.diesel_gen6}
              </tspan>
            </text>
            <text
              id="text10992-9-0-1-1"
              transform="scale(.9421 1.0615)"
              x={60.411358}
              y={164.40541}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9451px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.22088}
              wordSpacing={0}
            >
              <tspan
                id="tspan2511-7-9-3"
                x={60.411358}
                y={164.40541}
                fill="#dbe2e3"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.22088}
              >
                {"VOLTAGE "}
              </tspan>
            </text>
            <text
              id="text10992-9-0-1-2-8"
              transform="scale(.9421 1.0615)"
              x={60.479}
              y={167.90359}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9451px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.22088}
              wordSpacing={0}
            >
              <tspan
                id="tspan2511-7-9-1-4"
                x={60.479}
                y={167.90359}
                fill="#dbe2e3"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.22088}
              >
                {"AMPERE"}
              </tspan>
            </text>
            <text
              id="text10992-9-0-1-2-4-44"
              transform="scale(.9421 1.0615)"
              x={60.353786}
              y={171.33768}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9451px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.22088}
              wordSpacing={0}
            >
              <tspan
                id="tspan2511-7-9-1-8-9"
                x={60.353786}
                y={171.33768}
                fill="#dbe2e3"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.22088}
              >
                {"KW "}
              </tspan>
            </text>
            <text
              id="text10992-9-0-1-2-4-4-4"
              transform="scale(.9421 1.0615)"
              x={60.361996}
              y={174.86046}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9451px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.22088}
              wordSpacing={0}
            >
              <tspan
                id="tspan2511-7-9-1-8-7-6"
                x={60.361996}
                y={174.86046}
                fill="#dbe2e3"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.22088}
              >
                {"% CARGA "}
              </tspan>
            </text>
            <text
              id="text10992-9-0-1-2-4-7-5"
              transform="scale(.9421 1.0615)"
              x={60.381466}
              y={178.38701}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9451px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.22088}
              wordSpacing={0}
            >
              <tspan
                id="tspan2594-6-1-6-3-0"
                x={60.381466}
                y={178.38701}
                fill="#dbe2e3"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.9807px"
                strokeWidth={0.22088}
              >
                {"% DIESEL"}
              </tspan>
            </text>
            <text
              id="text10992-9-0-1-1-3"
              transform="scale(1.0593 .94402)"
              x={49.849197}
              y={179.40863}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#ff0"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.6668px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.20001}
              wordSpacing={0}
            >
              <tspan
                id="tspan2511-7-9-3-0"
                x={49.849197}
                y={179.40863}
                fill="#ff0"
                fontFamily="Franklin Gothic Medium"
                fontSize="2.699px"
                strokeWidth={0.20001}
              >
                {gen6.modo_gen6}
              </tspan>
            </text>
            <g id="g9110">
              <g
                id="g4211-9"
                className={gen6.color_gen6}
                transform="matrix(.27234 0 0 .28717 28.91 138.92)"
                opacity={0.999}
              >
                <g id="g4023-0" transform="translate(-341.25 -93.544)">
                  <g id="g363-2" transform="matrix(-1 0 0 1 495.88 85.312)">
                    <g id="shape-4-7" 
                    className={gen6.color_gen6}
                    fill="#999">
                      <path
                        id="rect4-8"
                        d="M0 74.984H100V82.35799999999999H0z"
                      />
                      <path
                        id="polygon6-8"
                        d="M37.71 69.921L18.855 69.921 18.855 44.87 47.475 44.87 54.545 51.066 54.545 72.951 42.02 72.951z"
                      />
                      <path
                        id="rect8-5"
                        d="M12.929 46.474H25.32V61.571H12.929z"
                      />
                      <path
                        id="rect10-7"
                        d="M48.754 52.4H61.144999999999996V70.729H48.754z"
                      />
                      <path
                        id="rect12-5"
                        d="M10.774 50.783H25.319V57.261H10.774z"
                      />
                      <path
                        id="rect14-4"
                        d="M55.421 51.066H65.589V72.884H55.421z"
                      />
                      <path
                        id="rect16-8"
                        d="M65.387 52.646H98.114V71.065H65.387z"
                      />
                      <path
                        id="rect18-1"
                        d="M81.919 46.756H97.205V52.647H81.919z"
                      />
                      <path
                        id="polygon20-9"
                        d="M97.205 45.476L81.919 45.476 81.919 33.086 99.226 33.086z"
                      />
                      <circle
                        id="circle22-3"
                        cx={54.141}
                        cy={41.773}
                        r={6.061}
                      />
                      <path
                        id="rect24-6-6"
                        d="M2.694 71.537H10.100999999999999V76.385H2.694z"
                      />
                      <path
                        id="rect26-3"
                        d="M17.576 69.921H23.771V76.38600000000001H17.576z"
                      />
                      <path
                        id="rect28-2"
                        d="M49.562 69.921H55.757V76.38600000000001H49.562z"
                      />
                      <path
                        id="rect30-1"
                        d="M67.475 69.921H73.66999999999999V76.38600000000001H67.475z"
                      />
                      <path
                        id="rect32-3"
                        d="M83.367 69.921H89.56200000000001V76.38600000000001H83.367z"
                      />
                      <path
                        id="rect34-3"
                        d="M26.465 32.21H31.044V45.139H26.465z"
                      />
                      <path
                        id="rect36-5"
                        d="M25.589 37.867H31.918999999999997V39.483H25.589z"
                      />
                      <path
                        id="path38-4"
                        d="M23.501 45.679h-2.828v-3.502a1.82 1.82 0 00-1.818-1.818h-8.081V37.53h8.081a4.651 4.651 0 014.646 4.646z"
                      />
                      <path
                        id="path40-7"
                        d="M44.579 49.113h-2.828v-3.502a4.65 4.65 0 014.646-4.646h8.889v2.828h-8.889a1.82 1.82 0 00-1.818 1.818z"
                      />
                      <path
                        id="polygon42-1"
                        d="M53.434 49.82L47.172 49.82 47.172 44.702 58.485 44.702z"
                      />
                      <path
                        id="path44-1"
                        d="M36.162 45.409h-2.828v-3.098c0-2.488 2.084-4.512 4.646-4.512h15.892v2.828H37.98c-1.002 0-1.818.755-1.818 1.684z"
                      />
                      <path
                        id="path46-8-3"
                        d="M24.444 33.692c0-1.339 1.93-2.424 4.31-2.424s4.31 1.085 4.31 2.424"
                      />
                    </g>
                    <g id="light-2-2" 
                    className={gen6.color_gen6}
                    fill="#ccc">
                      <path
                        id="rect49-1"
                        d="M65.387 52.646H98.114V58.69H65.387z"
                      />
                      <path
                        id="rect51-2"
                        d="M26.465 39.483H31.044V45.14H26.465z"
                      />
                      <path
                        id="rect53-2"
                        d="M26.465 33.692H31.044V37.867H26.465z"
                      />
                      <path
                        id="rect55-0"
                        d="M1.212 34.062H11.717V72.345H1.212z"
                      />
                    </g>
                    <g id="linear-6-9">
                      <path
                        id="rect63-1"
                        className="linear"
                        fill="url(#linearGradient8497)"
                        d="M37.172 47.093H41.616V53.154H37.172z"
                      />
                      <path
                        id="rect70-0"
                        className="linear"
                        fill="url(#linearGradient8499)"
                        d="M43.596 52.951H45.373999999999995V55.375H43.596z"
                      />
                      <path
                        id="rect77-2"
                        className="linear"
                        fill="url(#linearGradient8501)"
                        d="M41.818 47.093H47.150999999999996V54.366H41.818z"
                      />
                    </g>
                    <g id="dark-3-8" fill="#4d4d4d">
                      <path
                        id="rect80-2"
                        d="M51.717 77.282H96.768V82.35799999999999H51.717z"
                      />
                      <path
                        id="rect82-6"
                        d="M3.165 77.282H48.216V82.35799999999999H3.165z"
                      />
                      <path
                        id="polygon84-6"
                        d="M54.04 49.206L57.422 45.779 54.04 45.779z"
                      />
                      <circle
                        id="circle86-9"
                        cx={54.141}
                        cy={41.773}
                        r={2.02}
                      />
                      <path
                        id="rect88-3"
                        d="M21.886 68.911H51.986999999999995V69.921H21.886z"
                      />
                      <path
                        id="polygon90-84"
                        d="M24.04 68.911L24.646 68.911 24.646 66.689 26.667 66.689 26.667 66.285 24.646 66.285 24.04 66.285 24.04 66.689z"
                      />
                      <path
                        id="polygon92-5"
                        d="M28.114 68.911L28.721 68.911 28.721 66.689 30.741 66.689 30.741 66.285 28.721 66.285 28.114 66.285 28.114 66.689z"
                      />
                      <path
                        id="polygon94-73"
                        d="M32.189 68.911L32.795 68.911 32.795 66.689 34.815 66.689 34.815 66.285 32.795 66.285 32.189 66.285 32.189 66.689z"
                      />
                      <path
                        id="polygon96-6"
                        d="M36.263 68.911L36.869 68.911 36.869 66.689 38.889 66.689 38.889 66.285 36.869 66.285 36.263 66.285 36.263 66.689z"
                      />
                      <path
                        id="polygon98-0"
                        d="M40.337 68.911L40.943 68.911 40.943 66.689 42.963 66.689 42.963 66.285 40.943 66.285 40.337 66.285 40.337 66.689z"
                      />
                      <path
                        id="polygon100-3"
                        d="M44.411 68.911L45.017 68.911 45.017 66.689 47.037 66.689 47.037 66.285 45.017 66.285 44.411 66.285 44.411 66.689z"
                      />
                      <path
                        id="polygon102-7"
                        d="M48.485 68.911L49.091 68.911 49.091 66.689 51.111 66.689 51.111 66.285 49.091 66.285 48.485 66.285 48.485 66.689z"
                      />
                      <path
                        id="polygon104-0"
                        d="M24.04 68.911L24.646 68.911 24.646 66.689 26.667 66.689 26.667 66.285 24.646 66.285 24.04 66.285 24.04 66.689z"
                      />
                      <path
                        id="polygon106-60"
                        d="M28.114 68.911L28.721 68.911 28.721 66.689 30.741 66.689 30.741 66.285 28.721 66.285 28.114 66.285 28.114 66.689z"
                      />
                      <path
                        id="polygon108-9"
                        d="M32.189 68.911L32.795 68.911 32.795 66.689 34.815 66.689 34.815 66.285 32.795 66.285 32.189 66.285 32.189 66.689z"
                      />
                      <path
                        id="polygon110-9"
                        d="M36.263 68.911L36.869 68.911 36.869 66.689 38.889 66.689 38.889 66.285 36.869 66.285 36.263 66.285 36.263 66.689z"
                      />
                      <path
                        id="polygon112-44"
                        d="M40.337 68.911L40.943 68.911 40.943 66.689 42.963 66.689 42.963 66.285 40.943 66.285 40.337 66.285 40.337 66.689z"
                      />
                      <path
                        id="polygon114-2"
                        d="M44.411 68.911L45.017 68.911 45.017 66.689 47.037 66.689 47.037 66.285 45.017 66.285 44.411 66.285 44.411 66.689z"
                      />
                      <path
                        id="polygon116-0"
                        d="M48.485 68.911L49.091 68.911 49.091 66.689 51.111 66.689 51.111 66.285 49.091 66.285 48.485 66.285 48.485 66.689z"
                      />
                      <path
                        id="polygon118-6"
                        d="M49.293 59.618L34.545 59.618 34.545 63.456 35.152 63.456 35.152 60.224 49.293 60.224z"
                      />
                      <path
                        id="path120-1"
                        d="M28.485 62.85a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                      />
                      <path
                        id="rect122-4"
                        d="M51.111 55.982H55.555V62.851H51.111z"
                      />
                      <path
                        id="rect124-0"
                        d="M65.387 65.207H98.114V71.06599999999999H65.387z"
                      />
                      <path
                        id="rect126-9"
                        d="M12.929 60.224H18.855V61.571H12.929z"
                      />
                      <path
                        id="path128-8"
                        d="M28.485 55.577a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                      />
                      <path
                        id="path130-7"
                        d="M27.071 54.567a1.414 1.414 0 112.828 0v6.061a1.414 1.414 0 11-2.828 0z"
                      />
                      <path
                        id="rect132-4"
                        d="M81.919 47.516H97.205V48.016H81.919z"
                      />
                    </g>
                    <g id="shadow-3-4">
                      <path
                        id="rect135-8"
                        d="M56.927 55.308H57.517V68.641H56.927z"
                      />
                      <path
                        id="rect137-9"
                        d="M57.836 55.308H58.426V68.641H57.836z"
                      />
                      <path
                        id="rect139-7"
                        d="M58.745 55.308H59.335V68.641H58.745z"
                      />
                      <path
                        id="rect141-3"
                        d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                      />
                      <path
                        id="rect143-2"
                        d="M60.564 55.308H61.154V68.641H60.564z"
                      />
                      <path
                        id="rect145-3"
                        d="M61.473 55.308H62.063V68.641H61.473z"
                      />
                      <path
                        id="rect147-1"
                        d="M62.382 55.308H62.972V68.641H62.382z"
                      />
                      <path
                        id="rect149-8"
                        d="M63.291 55.308H63.881V68.641H63.291z"
                      />
                      <path
                        id="rect151-2"
                        d="M56.927 55.308H57.517V68.641H56.927z"
                      />
                      <path
                        id="rect153-7"
                        d="M57.836 55.308H58.426V68.641H57.836z"
                      />
                      <path
                        id="rect155-2"
                        d="M58.745 55.308H59.335V68.641H58.745z"
                      />
                      <path
                        id="rect157-6"
                        d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                      />
                      <path
                        id="rect159-3"
                        d="M60.564 55.308H61.154V68.641H60.564z"
                      />
                      <path
                        id="rect161-2"
                        d="M61.473 55.308H62.063V68.641H61.473z"
                      />
                      <path
                        id="rect163-1"
                        d="M62.382 55.308H62.972V68.641H62.382z"
                      />
                      <path
                        id="rect165-4"
                        d="M63.291 55.308H63.881V68.641H63.291z"
                      />
                      <path
                        id="path167-61"
                        d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                      />
                      <path
                        id="path169-2"
                        d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                      />
                      <path
                        id="path171-0"
                        d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                      />
                      <path
                        id="path173-9"
                        d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                      />
                      <path
                        id="path175-5"
                        d="M36.162 44.87v-2.559c0-.929.816-1.684 1.818-1.684h10.212c.024-.127.056-.251.088-.375H37.419c-1.038 0-1.883.814-1.883 1.816v2.802z"
                      />
                      <g id="g201-7">
                        <g id="g187-4">
                          <circle
                            id="circle177-3"
                            cx={68.388}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle179-48"
                            cx={75.272}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle181-5"
                            cx={82.155}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle183-1"
                            cx={89.038}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle185-7"
                            cx={95.921}
                            cy={64.736}
                            r={0.52}
                          />
                        </g>
                        <g id="g199-2">
                          <circle
                            id="circle189-9"
                            cx={68.388}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle191-6"
                            cx={75.272}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle193-0"
                            cx={82.155}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle195-6"
                            cx={89.038}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle197-7"
                            cx={95.921}
                            cy={64.736}
                            r={0.52}
                          />
                        </g>
                      </g>
                      <g id="g227-8">
                        <g id="g213-0">
                          <circle
                            id="circle203-4"
                            cx={68.388}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle205-3"
                            cx={75.272}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle207-9"
                            cx={82.155}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle209-4"
                            cx={89.038}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle211-4"
                            cx={95.921}
                            cy={59.988}
                            r={0.52}
                          />
                        </g>
                        <g id="g225-1">
                          <circle
                            id="circle215-0"
                            cx={68.388}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle217-8"
                            cx={75.272}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle219-24"
                            cx={82.155}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle221-0"
                            cx={89.038}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle223-2"
                            cx={95.921}
                            cy={59.988}
                            r={0.52}
                          />
                        </g>
                      </g>
                      <path
                        id="path229-1"
                        d="M29.899 60.628a1.414 1.414 0 11-2.828 0z"
                      />
                      <path
                        id="polygon231-7"
                        d="M1.972 35.125L10.505 35.125 10.505 35.625 2.472 35.625 2.472 71.032 1.972 71.032z"
                      />
                      <path
                        id="rect233-4"
                        d="M3.636 72.499H9.139V73.307H3.636z"
                      />
                      <path
                        id="polygon235-4"
                        d="M18.386 70.666L23.139 70.666 23.139 71.474 19 71.474 19 74.724 18.386 74.724z"
                      />
                      <path
                        id="polygon237-0"
                        d="M50.136 70.666L54.889 70.666 54.889 71.474 50.75 71.474 50.75 74.724 50.136 74.724z"
                      />
                      <path
                        id="polygon239-46"
                        d="M67.886 71.916L72.639 71.916 72.639 72.724 68.5 72.724 68.5 74.974 67.886 74.974z"
                      />
                      <path
                        id="polygon241-9"
                        d="M84.136 71.916L88.889 71.916 88.889 72.724 84.75 72.724 84.75 74.974 84.136 74.974z"
                      />
                      <g id="g279-1">
                        <g id="g259-1">
                          <path
                            id="rect243-7"
                            d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                          />
                          <path
                            id="rect245-0"
                            d="M71.211 54.558H71.801V58.266H71.211z"
                          />
                          <path
                            id="rect247-1"
                            d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                          />
                          <path
                            id="rect249-2"
                            d="M73.03 54.558H73.62V58.266H73.03z"
                          />
                          <path
                            id="rect251-1"
                            d="M73.939 54.558H74.529V58.266H73.939z"
                          />
                          <path
                            id="rect253-2"
                            d="M74.848 54.558H75.438V58.266H74.848z"
                          />
                          <path
                            id="rect255-5"
                            d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                          />
                          <path
                            id="rect257-2"
                            d="M76.666 54.558H77.256V58.266H76.666z"
                          />
                        </g>
                        <g id="g277-9">
                          <path
                            id="rect261-9"
                            d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                          />
                          <path
                            id="rect263-1"
                            d="M71.211 54.558H71.801V58.266H71.211z"
                          />
                          <path
                            id="rect265-8"
                            d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                          />
                          <path
                            id="rect267-79"
                            d="M73.03 54.558H73.62V58.266H73.03z"
                          />
                          <path
                            id="rect269-16"
                            d="M73.939 54.558H74.529V58.266H73.939z"
                          />
                          <path
                            id="rect271-8"
                            d="M74.848 54.558H75.438V58.266H74.848z"
                          />
                          <path
                            id="rect273-0"
                            d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                          />
                          <path
                            id="rect275-7"
                            d="M76.666 54.558H77.256V58.266H76.666z"
                          />
                        </g>
                      </g>
                      <g id="g317-27">
                        <g id="g297-12">
                          <path
                            id="rect281-6"
                            d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                          />
                          <path
                            id="rect283-0"
                            d="M91.211 66.558H91.801V70.266H91.211z"
                          />
                          <path
                            id="rect285-1"
                            d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                          />
                          <path
                            id="rect287-5"
                            d="M93.03 66.558H93.62V70.266H93.03z"
                          />
                          <path
                            id="rect289-6"
                            d="M93.939 66.558H94.529V70.266H93.939z"
                          />
                          <path
                            id="rect291-4"
                            d="M94.848 66.558H95.438V70.266H94.848z"
                          />
                          <path
                            id="rect293-6"
                            d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                          />
                          <path
                            id="rect295-3"
                            d="M96.666 66.558H97.256V70.266H96.666z"
                          />
                        </g>
                        <g id="g315-5">
                          <path
                            id="rect299-7"
                            d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                          />
                          <path
                            id="rect301-3"
                            d="M91.211 66.558H91.801V70.266H91.211z"
                          />
                          <path
                            id="rect303-16"
                            d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                          />
                          <path
                            id="rect305-0"
                            d="M93.03 66.558H93.62V70.266H93.03z"
                          />
                          <path
                            id="rect307-9"
                            d="M93.939 66.558H94.529V70.266H93.939z"
                          />
                          <path
                            id="rect309-6"
                            d="M94.848 66.558H95.438V70.266H94.848z"
                          />
                          <path
                            id="rect311-8"
                            d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                          />
                          <path
                            id="rect313-7"
                            d="M96.666 66.558H97.256V70.266H96.666z"
                          />
                        </g>
                      </g>
                      <path
                        id="rect319-46"
                        d="M55.758 71.874H65.59V72.884H55.758z"
                      />
                      <path
                        id="polygon321-5"
                        d="M48.754 69.921L37.71 69.921 42.02 72.951 49.562 72.951 49.562 70.729 48.754 70.729z"
                      />
                      <path
                        id="path323-5"
                        d="M32.727 45.369c0-.275-.225-.5-.5-.5h-.116a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5H30.5c-.275 0-.5.225-.5.5v.03c0 .275-.153.5-.341.5s-.341-.225-.341-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.24a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.054c-.275 0-.5.225-.5.5v3.015c0 .275.225.5.5.5h.054c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.24c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.153-.5.341-.5s.341.225.341.5v.03c0 .275.225.5.5.5h.612c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.116c.275 0 .5-.225.5-.5v-3.015z"
                      />
                      <path
                        id="path325-2"
                        d="M26.97 58.507h-.455c-.416 0-.874-.434-1.112-.862l-1.235-2.224c-.241-.435-.43-1.164-.43-1.661v-4.344h.606v4.344c0 .396.162 1.021.354 1.366l1.235 2.224c.185.334.486.55.582.552h.455z"
                      />
                      <path
                        id="path327-7"
                        d="M38.99 56.082h-6.263a1.112 1.112 0 01-1.111-1.11v-2.778a.506.506 0 00-.505-.505h-1.566c-.532 0-1.156-.223-1.452-.519-.295-.295-.518-.811-.518-1.198v-.556h.606v.556c0 .225.162.592.34.771.161.16.632.341 1.023.341h1.566c.613 0 1.111.498 1.111 1.11v2.778c0 .278.226.505.504.505h6.263a.506.506 0 00.505-.505v-1.818h.606v1.818a1.109 1.109 0 01-1.109 1.11z"
                      />
                      <path
                        id="path329-2"
                        d="M43.838 57.698H33.737a1.112 1.112 0 01-1.111-1.11v-2.627c0-.317-.262-.69-.56-.799-.575-.21-1.662-.987-1.662-2.434v-.908h.606v.908c0 1.377 1.213 1.845 1.265 1.864.536.195.958.797.958 1.368v2.627c0 .278.227.505.505.505h10.101a.506.506 0 00.505-.505v-1.213h.606v1.213c0 .613-.499 1.111-1.112 1.111z"
                      />
                      <path
                        id="rect331-4"
                        d="M83.232 45.45H85.118V46.773H83.232z"
                      />
                      <path
                        id="rect333-2"
                        d="M93.872 45.45H95.758V46.773H93.872z"
                      />
                      <path
                        id="polygon335-93"
                        d="M56.465 69.012L64.343 69.012 64.343 54.77 64.748 54.77 64.748 69.416 56.465 69.416z"
                      />
                      <path
                        id="path337-5"
                        d="M18.855 39.942h-7.138v.417h7.138a1.82 1.82 0 011.818 1.818c0-1.233-.816-2.235-1.818-2.235z"
                      />
                      <path
                        id="polygon339-0"
                        d="M48.215 77.282L3.165 77.282 3.165 82.358 4.175 82.358 4.175 78.292 48.215 78.292z"
                      />
                      <path
                        id="polygon341-4"
                        d="M96.768 77.282L51.717 77.282 51.717 82.358 52.727 82.358 52.727 78.292 96.768 78.292z"
                      />
                    </g>
                    <g id="hlight-0-8" fill="#fff">
                      <path
                        id="path344-7"
                        d="M49.572 37.8H37.98c-2.562 0-4.646 2.023-4.646 4.512 0-2.006 2.084-3.637 4.646-3.637h10.959a6.09 6.09 0 01.633-.875z"
                      />
                      <path
                        id="path346-6"
                        d="M28.485 52.648c1.053 0 1.933.734 2.162 1.717a2.222 2.222 0 10-4.324 0 2.221 2.221 0 012.162-1.717z"
                      />
                      <path
                        id="polygon348-2"
                        d="M56.114 54.418L64.242 54.418 64.242 54.918 56.614 54.918 56.614 69.314 56.114 69.314z"
                      />
                      <path
                        id="rect350-4"
                        d="M49.625 44.25H57.5V44.75H49.625z"
                      />
                      <path
                        id="path352-5"
                        d="M54.141 36.52a6.056 6.056 0 016.04 5.657c.009-.134.02-.268.02-.404a6.06 6.06 0 10-12.122 0c0 .136.012.27.02.404.211-3.158 2.832-5.657 6.042-5.657z"
                      />
                      <path
                        id="rect354-1"
                        d="M12.929 46.474H18.855V47.821H12.929z"
                      />
                      <path
                        id="path356-5"
                        d="M27.534 54.205a.951.951 0 011.902 0"
                      />
                      <path
                        id="path358-8"
                        d="M18.855 37.53h-7.138v.5h7.138c2.562 0 4.646 1.86 4.646 4.146a4.651 4.651 0 00-4.646-4.646z"
                      />
                      <path
                        id="rect360-8"
                        d="M55.421 51.066H65.589V52.076H55.421z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g
                id="g4030-4-3-9-7"
                transform="matrix(.20604 0 0 .21647 37.06 155.81)"
                opacity={0.999}
                strokeWidth={0.81961}
                stroke="#00afd4"
              >
                <path
                  id="path1448-8-2-3-3-9"
                  d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
                  fill="none"
                  opacity={0.8}
                  strokeWidth=".21686px"
                  stroke="#00afd4"
                />
              </g>
              <path
                id="rect4837-8-8-5-1"
                fill="none"
                opacity={0.66}
                paintOrder="markers stroke fill"
                strokeDashoffset={5.65}
                strokeLinecap="square"
                strokeLinejoin="round"
                strokeWidth={0.0978}
                stroke="#00fbff"
                d="M51.201 162.16H61.0116V165.3595H51.201z"
              />
              <path
                id="estado_eq"
                className={gen6.boton_gen6}
                fillRule="evenodd"
                fill="url(#linearGradient4474-7)"
                opacity={0.999}
                strokeWidth={0.045384}
                d="M51.201 162.16H61.0116V165.3595H51.201z"
              />
              <text
                id="gen_nom_on-3-0"
                transform="scale(.92249 1.084)"
                x={56.053928}
                y={152.10588}
                style={{ lineHeight: 1.25 }}
                xmlSpace="preserve"
                fill="#fff"
                fontFamily="sans-serif"
                fontSize="2.6194px"
                letterSpacing={0}
                opacity={0.999}
                strokeWidth={0.098226}
                wordSpacing={0}
              >
                <tspan
                  id="tspan6769-3-3"
                  x={56.053928}
                  y={152.10588}
                  fill="#fff"
                  fontFamily="Franklin Gothic Medium"
                  fontSize="3.0453px"
                  strokeWidth={0.098226}
                >
                  {"GEN - 6"}
                </tspan>
              </text>
            </g>
          </g>
        </g>
        <g id="g12013">
          <text
            id="alt1-1"
            transform="scale(.95616 1.0458)"
            x={89.093819}
            y={166.85384}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-5"
              x={89.093819}
              y={166.85384}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen5.volt_gen5}
            </tspan>
          </text>
          <text
            id="alt2-8"
            transform="scale(.95616 1.0458)"
            x={89.143013}
            y={170.39442}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-5"
              x={89.143013}
              y={170.39442}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen5.amp_gen5}
            </tspan>
          </text>
          <text
            id="alt3-4"
            transform="scale(.95616 1.0458)"
            x={88.891701}
            y={173.84578}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-9-2"
              x={88.891701}
              y={173.84578}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen5.kw_gen5}
            </tspan>
          </text>
          <text
            id="alt4-17"
            transform="scale(.95616 1.0458)"
            x={90.953331}
            y={177.44353}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-9"
              x={90.953331}
              y={177.44353}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen5.carga_gen5}
            </tspan>
          </text>
          <text
            id="alt4-1-3"
            transform="scale(.95616 1.0458)"
            x={90.949425}
            y={181.03226}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-1-6"
              x={90.949425}
              y={181.03226}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen5.diesel_gen5}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-7"
            transform="scale(.9421 1.0615)"
            x={100.74705}
            y={164.40543}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-8"
              x={100.74705}
              y={164.40543}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"VOLTAGE "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-8-1"
            transform="scale(.9421 1.0615)"
            x={100.81469}
            y={167.90361}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-4-6"
              x={100.81469}
              y={167.90361}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"AMPERE"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-44-2"
            transform="scale(.9421 1.0615)"
            x={100.68948}
            y={171.33769}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-9-4"
              x={100.68948}
              y={171.33769}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"KW "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-4-4-5"
            transform="scale(.9421 1.0615)"
            x={100.69769}
            y={174.86047}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-7-6-4"
              x={100.69769}
              y={174.86047}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% CARGA "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-7-5-4"
            transform="scale(.9421 1.0615)"
            x={100.71716}
            y={178.38702}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2594-6-1-6-3-0-2"
              x={100.71716}
              y={178.38702}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% DIESEL"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-3-1"
            transform="scale(1.0593 .94402)"
            x={85.722321}
            y={179.40865}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#ff0"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.6668px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.20001}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-0-6"
              x={85.722321}
              y={179.40865}
              fill="#ff0"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.699px"
              strokeWidth={0.20001}
            >
              {gen5.modo_gen5}
            </tspan>
          </text>
          <g id="g8354-1" 
                className={gen5.barra1_gen5}
                transform="translate(37.814 .016)"
                opacity={0.999}>
            <g
              id="g6502-5-2-01"
              transform="matrix(.83717 0 0 .94237 -2.736 69.388)"
            >
              <g
                id="g15-9-0-5-0-7-6"
                transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
              >
                <g id="frame-2-7-1-1-2-5-3">
                  <path
                    id="rect4-5-1-5-8-0-73-19"
                    fill="none"
                    d="M0 0H100V100H0z"
                  />
                </g>
                <g id="shape-3-0-6-6-6-1-9" fill="#fc0">
                  <path
                    id="rect7-4-1-8-4-3-7"
                    fill="#fc0"
                    className={gen5.barra1_gen5}
                    d="M0 37.5H100V62.5H0z"
                  />
                </g>
                <g id="dark-1-2-6-5-0-9-9" fill="#fc0">
                  <path id="rect10-3-0-53-9-6-7-2" d="M0 37.5H100V38.5H0z" />
                  <path id="rect12-1-0-3-2-4-65-1" d="M0 61.5H100V62.5H0z" />
                </g>
              </g>
            </g>
            <g
              id="g8559-1-7"
              transform="matrix(.79345 0 0 .79284 -74.21 22.105)"
            >
              <g
                id="g15-8-7-5-5-6-6-53-4"
                transform="matrix(-.06334 0 0 -.06284 145.05 170.33)"
              >
                <g id="frame-7-5-9-8-4-9-95-6">
                  <path
                    id="rect4-7-2-3-4-9-2-5-4"
                    fill="none"
                    d="M0 0H100V100H0z"
                  />
                </g>
                <g
                  id="shape-1-2-12-7-1-1-0-8"
                  fill="#fc0"
                  strokeWidth={0.99927}
                  stroke="#fc0"
                >
                  <path
                    id="path7-0-9-2-6-0-2-1-8"
                    d="M25 37.5H0v25h25c6.904 0 12.5 5.596 12.5 12.5v25h25V75c0-20.711-16.789-37.5-37.5-37.5z"
                    fill="#fc0"
                    className={gen5.barra1_gen5}
                    strokeWidth={0.99927}
                    stroke="#fc0"
                  />
                </g>
                <g id="dark-81-4-95-0-4-4-9-9" fill="#fc0">
                  <path
                    id="path10-9-0-0-7-7-9-7"
                    d="M25 37.5H0v1h25c20.126 0 36.5 16.374 36.5 36.5v25h1V75c0-20.711-16.789-37.5-37.5-37.5z"
                  />
                  <path
                    id="path12-8-6-3-5-7-4-1-5"
                    d="M38.5 75c0-7.444-6.056-13.5-13.5-13.5H0v1h25c6.904 0 12.5 5.596 12.5 12.5v25h1z"
                  />
                </g>
              </g>
            </g>
            <g
              id="g6485-0-0-4-6"
              transform="matrix(.0867 0 0 .8143 39.442 96.574) matrix(.39463 0 0 .06066 16.589 68.304)"
              fill="#fc0"
            >
              <g id="shape-3-7-1-2-9-6">
                <path
                  id="rect7-5-0-2-6-7"
                  fill="#fc0"
                  className={gen5.barra1_gen5}
                  d="M0 37.5H100V62.5H0z"
                />
              </g>
              <g id="dark-1-8-2-8-8-2">
                <path id="rect10-3-3-2-3-0-8" d="M0 37.5H100V38.5H0z" />
                <path id="rect12-1-5-4-2-4-7" d="M0 61.5H100V62.5H0z" />
              </g>
            </g>
          </g>
          <g id="g8319-4" 
          //className={gen5.barra2_gen5}
          transform="translate(37.814 .016)"
           opacity={0.999}>
            <g
              id="g6502-5-2-1-6-2-3-15"
              transform="matrix(.7902 0 0 .68831 -.469 68.919)"
              strokeWidth={0.99948}
            >
              <g
                id="g15-9-0-5-0-7-4-3-9-5-6"
                transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                strokeWidth={10.227}
              >
                <g id="frame-2-7-1-1-2-5-9-5-8-0-6">
                  <path
                    id="rect4-5-1-5-8-0-73-8-8-0-2-9"
                    d="M0 0h100v100H0z"
                    fill="none"
                    strokeWidth={10.227}
                  />
                </g>
                <g id="shape-3-0-6-6-6-1-3-9-1-0-0" fill="#fc0">
                  <path
                    id="rect7-4-1-8-4-3-3-4-9-0-2"
                    d="M0 38.5h100v25H0z"
                    fill="#fc0"
                    strokeWidth={10.227}
                  />
                </g>
                <g id="dark-1-2-6-5-0-9-2-2-8-7-90" fill="#fc0">
                  <path
                    id="rect10-3-0-53-9-6-7-5-6-6-8-3"
                    d="M0 37.5h100v1H0z"
                  />
                  <path
                    id="rect12-1-0-3-2-4-65-2-4-4-8-6"
                    d="M0 61.5h100v1H0z"
                  />
                </g>
              </g>
            </g>
            <g
              id="g7909-1-5"
              transform="translate(.114 70.387)"
              opacity={0.999}
            >
              <g
                id="g6502-5-2-1-6-5-9-6-4"
                transform="matrix(.39838 0 0 .18319 18.798 48.319)"
              >
                <g
                  id="g15-9-0-5-0-7-4-3-7-6-5-0"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                >
                  <g id="frame-2-7-1-1-2-5-9-5-89-94-6-3">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-6-9-9-2"
                      fill="none"
                      d="M0 0H100V100H0z"
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-0-8-19-7"                     
                    fill="#0ff">
                    <path
                      id="rect7-4-1-8-4-3-3-4-3-4-1-4"
                      fill="#0ff"
                      className={gen5.contacto_gen5}
                      d="M0 38.5H100V63.5H0z"
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-7-7-9-4" fill="#0ff">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-65-4-53-5"
                      d="M0 37.5H100V38.5H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-1-9-1-9"
                      d="M0 61.5H100V62.5H0z"
                    />
                  </g>
                </g>
              </g>
              <path
                id="path18021-7-5-86-6"
                d="M37.232 65.163l-3.013-5.524z"
                //fill="#00f"                
                strokeOpacity={0.99216}
                strokeWidth={0.49047}
                stroke="#fc0"
                className={gen5.barra2_gen5}
              />
              <ellipse
                id="path17699-3-27-2-6-9"
                cx={38.363}
                cy={65.718}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#ff0"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
              <ellipse
                id="path17699-3-27-9-4-7-8"
                cx={38.395}
                cy={60.208}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#767676"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
            </g>
          </g>
          <g id="g9694">
            <g
              id="g5606-4"
              className={gen5.color_gen5}              
              transform="matrix(.83717 0 0 .8143 .416 108.5)"
              opacity={0.999}
            >
              <g
                id="g4211-7-4"
                transform="matrix(.32531 0 0 .35265 79.204 37.372)"
              >
                <g id="g4023-2-8" transform="translate(-341.25 -93.544)">
                  <g id="g363-6-8" transform="matrix(-1 0 0 1 495.88 85.312)">
                    <g id="shape-4-3-2"
                    className={gen5.color_gen5}
                    fill="#999">
                      <path
                        id="rect4-58-9"
                        d="M0 74.984H100V82.35799999999999H0z"
                      />
                      <path
                        id="polygon6-7-3"
                        d="M37.71 69.921L18.855 69.921 18.855 44.87 47.475 44.87 54.545 51.066 54.545 72.951 42.02 72.951z"
                      />
                      <path
                        id="rect8-1-7"
                        d="M12.929 46.474H25.32V61.571H12.929z"
                      />
                      <path
                        id="rect10-23-0"
                        d="M48.754 52.4H61.144999999999996V70.729H48.754z"
                      />
                      <path
                        id="rect12-2-9"
                        d="M10.774 50.783H25.319V57.261H10.774z"
                      />
                      <path
                        id="rect14-0-9"
                        d="M55.421 51.066H65.589V72.884H55.421z"
                      />
                      <path
                        id="rect16-7-9"
                        d="M65.387 52.646H98.114V71.065H65.387z"
                      />
                      <path
                        id="rect18-4-8"
                        d="M81.919 46.756H97.205V52.647H81.919z"
                      />
                      <path
                        id="polygon20-6-6"
                        d="M99.226 33.086L97.205 45.476 81.919 45.476 81.919 33.086z"
                      />
                      <circle
                        id="circle22-6-8"
                        cx={54.141}
                        cy={41.773}
                        r={6.061}
                      />
                      <path
                        id="rect24-6-4-8"
                        d="M2.694 71.537H10.100999999999999V76.385H2.694z"
                      />
                      <path
                        id="rect26-8-2"
                        d="M17.576 69.921H23.771V76.38600000000001H17.576z"
                      />
                      <path
                        id="rect28-8-2"
                        d="M49.562 69.921H55.757V76.38600000000001H49.562z"
                      />
                      <path
                        id="rect30-8-3"
                        d="M67.475 69.921H73.66999999999999V76.38600000000001H67.475z"
                      />
                      <path
                        id="rect32-8-2"
                        d="M83.367 69.921H89.56200000000001V76.38600000000001H83.367z"
                      />
                      <path
                        id="rect34-9-2"
                        d="M26.465 32.21H31.044V45.139H26.465z"
                      />
                      <path
                        id="rect36-0-5"
                        d="M25.589 37.867H31.918999999999997V39.483H25.589z"
                      />
                      <path
                        id="path38-6-89"
                        d="M23.501 45.679h-2.828v-3.502a1.82 1.82 0 00-1.818-1.818h-8.081V37.53h8.081a4.651 4.651 0 014.646 4.646z"
                      />
                      <path
                        id="path40-4-4"
                        d="M44.579 49.113h-2.828v-3.502a4.65 4.65 0 014.646-4.646h8.889v2.828h-8.889a1.82 1.82 0 00-1.818 1.818z"
                      />
                      <path
                        id="polygon42-5-6"
                        d="M58.485 44.702L53.434 49.82 47.172 49.82 47.172 44.702z"
                      />
                      <path
                        id="path44-0-3"
                        d="M36.162 45.409h-2.828v-3.098c0-2.488 2.084-4.512 4.646-4.512h15.892v2.828H37.98c-1.002 0-1.818.755-1.818 1.684z"
                      />
                      <path
                        id="path46-8-5-9"
                        d="M24.444 33.692c0-1.339 1.93-2.424 4.31-2.424s4.31 1.085 4.31 2.424"
                      />
                    </g>
                    <g id="light-2-8-3"
                    className={gen5.color_gen5}
                    fill="#ccc">
                      <path
                        id="rect49-6-44"
                        d="M65.387 52.646H98.114V58.69H65.387z"
                      />
                      <path
                        id="rect51-5-1"
                        d="M26.465 39.483H31.044V45.14H26.465z"
                      />
                      <path
                        id="rect53-9-7"
                        d="M26.465 33.692H31.044V37.867H26.465z"
                      />
                      <path
                        id="rect55-6-6"
                        d="M1.212 34.062H11.717V72.345H1.212z"
                      />
                    </g>
                    <g id="linear-6-5-1">
                      <path
                        id="rect63-6-4"
                        className="linear"
                        fill="url(#linearGradient8497)"
                        d="M37.172 47.093H41.616V53.154H37.172z"
                      />
                      <path
                        id="rect70-2-1"
                        className="linear"
                        fill="url(#linearGradient8499)"
                        d="M43.596 52.951H45.373999999999995V55.375H43.596z"
                      />
                      <path
                        id="rect77-7-9"
                        className="linear"
                        fill="url(#linearGradient8501)"
                        d="M41.818 47.093H47.150999999999996V54.366H41.818z"
                      />
                    </g>
                    <g id="dark-3-1-4" fill="#4d4d4d">
                      <path
                        id="rect80-9-0"
                        d="M51.717 77.282H96.768V82.35799999999999H51.717z"
                      />
                      <path
                        id="rect82-4-5"
                        d="M3.165 77.282H48.216V82.35799999999999H3.165z"
                      />
                      <path
                        id="polygon84-9-0"
                        d="M57.422 45.779L54.04 45.779 54.04 49.206z"
                      />
                      <circle
                        id="circle86-5-6"
                        cx={54.141}
                        cy={41.773}
                        r={2.02}
                      />
                      <path
                        id="rect88-4-3"
                        d="M21.886 68.911H51.986999999999995V69.921H21.886z"
                      />
                      <path
                        id="polygon90-8-4"
                        d="M24.04 66.689L24.04 68.911 24.646 68.911 24.646 66.689 26.667 66.689 26.667 66.285 24.646 66.285 24.04 66.285z"
                      />
                      <path
                        id="polygon92-2-9"
                        d="M28.114 66.689L28.114 68.911 28.721 68.911 28.721 66.689 30.741 66.689 30.741 66.285 28.721 66.285 28.114 66.285z"
                      />
                      <path
                        id="polygon94-7-3"
                        d="M32.189 66.689L32.189 68.911 32.795 68.911 32.795 66.689 34.815 66.689 34.815 66.285 32.795 66.285 32.189 66.285z"
                      />
                      <path
                        id="polygon96-5-6"
                        d="M36.263 66.689L36.263 68.911 36.869 68.911 36.869 66.689 38.889 66.689 38.889 66.285 36.869 66.285 36.263 66.285z"
                      />
                      <path
                        id="polygon98-3-1"
                        d="M40.337 66.689L40.337 68.911 40.943 68.911 40.943 66.689 42.963 66.689 42.963 66.285 40.943 66.285 40.337 66.285z"
                      />
                      <path
                        id="polygon100-5-7"
                        d="M44.411 66.689L44.411 68.911 45.017 68.911 45.017 66.689 47.037 66.689 47.037 66.285 45.017 66.285 44.411 66.285z"
                      />
                      <path
                        id="polygon102-2-23"
                        d="M48.485 66.689L48.485 68.911 49.091 68.911 49.091 66.689 51.111 66.689 51.111 66.285 49.091 66.285 48.485 66.285z"
                      />
                      <path
                        id="polygon104-2-5"
                        d="M24.04 66.689L24.04 68.911 24.646 68.911 24.646 66.689 26.667 66.689 26.667 66.285 24.646 66.285 24.04 66.285z"
                      />
                      <path
                        id="polygon106-6-3"
                        d="M28.114 66.689L28.114 68.911 28.721 68.911 28.721 66.689 30.741 66.689 30.741 66.285 28.721 66.285 28.114 66.285z"
                      />
                      <path
                        id="polygon108-6-2"
                        d="M32.189 66.689L32.189 68.911 32.795 68.911 32.795 66.689 34.815 66.689 34.815 66.285 32.795 66.285 32.189 66.285z"
                      />
                      <path
                        id="polygon110-4-3"
                        d="M36.263 66.689L36.263 68.911 36.869 68.911 36.869 66.689 38.889 66.689 38.889 66.285 36.869 66.285 36.263 66.285z"
                      />
                      <path
                        id="polygon112-4-59"
                        d="M40.337 66.689L40.337 68.911 40.943 68.911 40.943 66.689 42.963 66.689 42.963 66.285 40.943 66.285 40.337 66.285z"
                      />
                      <path
                        id="polygon114-9-96"
                        d="M44.411 66.689L44.411 68.911 45.017 68.911 45.017 66.689 47.037 66.689 47.037 66.285 45.017 66.285 44.411 66.285z"
                      />
                      <path
                        id="polygon116-4-7"
                        d="M48.485 66.689L48.485 68.911 49.091 68.911 49.091 66.689 51.111 66.689 51.111 66.285 49.091 66.285 48.485 66.285z"
                      />
                      <path
                        id="polygon118-2-0"
                        d="M34.545 59.618L34.545 63.456 35.152 63.456 35.152 60.224 49.293 60.224 49.293 59.618z"
                      />
                      <path
                        id="path120-6-1"
                        d="M28.485 62.85a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                      />
                      <path
                        id="rect122-0-4"
                        d="M51.111 55.982H55.555V62.851H51.111z"
                      />
                      <path
                        id="rect124-7-4"
                        d="M65.387 65.207H98.114V71.06599999999999H65.387z"
                      />
                      <path
                        id="rect126-8-9"
                        d="M12.929 60.224H18.855V61.571H12.929z"
                      />
                      <path
                        id="path128-4-5"
                        d="M28.485 55.577a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                      />
                      <path
                        id="path130-2-14"
                        d="M27.071 54.567a1.414 1.414 0 112.828 0v6.061a1.414 1.414 0 11-2.828 0z"
                      />
                      <path
                        id="rect132-3-5"
                        d="M81.919 47.516H97.205V48.016H81.919z"
                      />
                    </g>
                    <g id="shadow-3-2-09">
                      <path
                        id="rect135-6-6"
                        d="M56.927 55.308H57.517V68.641H56.927z"
                      />
                      <path
                        id="rect137-3-7"
                        d="M57.836 55.308H58.426V68.641H57.836z"
                      />
                      <path
                        id="rect139-0-6"
                        d="M58.745 55.308H59.335V68.641H58.745z"
                      />
                      <path
                        id="rect141-6-6"
                        d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                      />
                      <path
                        id="rect143-4-27"
                        d="M60.564 55.308H61.154V68.641H60.564z"
                      />
                      <path
                        id="rect145-7-55"
                        d="M61.473 55.308H62.063V68.641H61.473z"
                      />
                      <path
                        id="rect147-8-2"
                        d="M62.382 55.308H62.972V68.641H62.382z"
                      />
                      <path
                        id="rect149-9-1"
                        d="M63.291 55.308H63.881V68.641H63.291z"
                      />
                      <path
                        id="rect151-3-9"
                        d="M56.927 55.308H57.517V68.641H56.927z"
                      />
                      <path
                        id="rect153-2-7"
                        d="M57.836 55.308H58.426V68.641H57.836z"
                      />
                      <path
                        id="rect155-4-0"
                        d="M58.745 55.308H59.335V68.641H58.745z"
                      />
                      <path
                        id="rect157-1-3"
                        d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                      />
                      <path
                        id="rect159-7-1"
                        d="M60.564 55.308H61.154V68.641H60.564z"
                      />
                      <path
                        id="rect161-7-0"
                        d="M61.473 55.308H62.063V68.641H61.473z"
                      />
                      <path
                        id="rect163-8-4"
                        d="M62.382 55.308H62.972V68.641H62.382z"
                      />
                      <path
                        id="rect165-2-8"
                        d="M63.291 55.308H63.881V68.641H63.291z"
                      />
                      <path
                        id="path167-6-3"
                        d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                      />
                      <path
                        id="path169-7-7"
                        d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                      />
                      <path
                        id="path171-5-8"
                        d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                      />
                      <path
                        id="path173-2-7"
                        d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                      />
                      <path
                        id="path175-4-2"
                        d="M36.162 44.87v-2.559c0-.929.816-1.684 1.818-1.684h10.212c.024-.127.056-.251.088-.375H37.419c-1.038 0-1.883.814-1.883 1.816v2.802z"
                      />
                      <g id="g201-1-9">
                        <g id="g187-7-4">
                          <circle
                            id="circle177-9-6"
                            cx={68.388}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle179-4-3"
                            cx={75.272}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle181-0-1"
                            cx={82.155}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle183-3-6"
                            cx={89.038}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle185-9-8"
                            cx={95.921}
                            cy={64.736}
                            r={0.52}
                          />
                        </g>
                        <g id="g199-8-8">
                          <circle
                            id="circle189-4-9"
                            cx={68.388}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle191-1-5"
                            cx={75.272}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle193-9-1"
                            cx={82.155}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle195-4-5"
                            cx={89.038}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle197-2-3"
                            cx={95.921}
                            cy={64.736}
                            r={0.52}
                          />
                        </g>
                      </g>
                      <g id="g227-7-9">
                        <g id="g213-4-4">
                          <circle
                            id="circle203-1-26"
                            cx={68.388}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle205-0-2"
                            cx={75.272}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle207-4-22"
                            cx={82.155}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle209-3-0"
                            cx={89.038}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle211-5-3"
                            cx={95.921}
                            cy={59.988}
                            r={0.52}
                          />
                        </g>
                        <g id="g225-8-9">
                          <circle
                            id="circle215-1-72"
                            cx={68.388}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle217-0-6"
                            cx={75.272}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle219-2-7"
                            cx={82.155}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle221-4-8"
                            cx={89.038}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle223-1-32"
                            cx={95.921}
                            cy={59.988}
                            r={0.52}
                          />
                        </g>
                      </g>
                      <path
                        id="path229-5-8"
                        d="M29.899 60.628a1.414 1.414 0 11-2.828 0z"
                      />
                      <path
                        id="polygon231-5-1"
                        d="M10.505 35.125L10.505 35.625 2.472 35.625 2.472 71.032 1.972 71.032 1.972 35.125z"
                      />
                      <path
                        id="rect233-0-5"
                        d="M3.636 72.499H9.139V73.307H3.636z"
                      />
                      <path
                        id="polygon235-1-9"
                        d="M23.139 70.666L23.139 71.474 19 71.474 19 74.724 18.386 74.724 18.386 70.666z"
                      />
                      <path
                        id="polygon237-8-0"
                        d="M54.889 70.666L54.889 71.474 50.75 71.474 50.75 74.724 50.136 74.724 50.136 70.666z"
                      />
                      <path
                        id="polygon239-4-7"
                        d="M72.639 71.916L72.639 72.724 68.5 72.724 68.5 74.974 67.886 74.974 67.886 71.916z"
                      />
                      <path
                        id="polygon241-4-2"
                        d="M88.889 71.916L88.889 72.724 84.75 72.724 84.75 74.974 84.136 74.974 84.136 71.916z"
                      />
                      <g id="g279-6-5">
                        <g id="g259-9-4">
                          <path
                            id="rect243-3-6"
                            d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                          />
                          <path
                            id="rect245-9-5"
                            d="M71.211 54.558H71.801V58.266H71.211z"
                          />
                          <path
                            id="rect247-0-7"
                            d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                          />
                          <path
                            id="rect249-4-1"
                            d="M73.03 54.558H73.62V58.266H73.03z"
                          />
                          <path
                            id="rect251-3-95"
                            d="M73.939 54.558H74.529V58.266H73.939z"
                          />
                          <path
                            id="rect253-3-18"
                            d="M74.848 54.558H75.438V58.266H74.848z"
                          />
                          <path
                            id="rect255-0-4"
                            d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                          />
                          <path
                            id="rect257-5-6"
                            d="M76.666 54.558H77.256V58.266H76.666z"
                          />
                        </g>
                        <g id="g277-4-0">
                          <path
                            id="rect261-1-4"
                            d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                          />
                          <path
                            id="rect263-8-4"
                            d="M71.211 54.558H71.801V58.266H71.211z"
                          />
                          <path
                            id="rect265-0-5"
                            d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                          />
                          <path
                            id="rect267-7-5"
                            d="M73.03 54.558H73.62V58.266H73.03z"
                          />
                          <path
                            id="rect269-1-2"
                            d="M73.939 54.558H74.529V58.266H73.939z"
                          />
                          <path
                            id="rect271-5-5"
                            d="M74.848 54.558H75.438V58.266H74.848z"
                          />
                          <path
                            id="rect273-7-1"
                            d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                          />
                          <path
                            id="rect275-0-4"
                            d="M76.666 54.558H77.256V58.266H76.666z"
                          />
                        </g>
                      </g>
                      <g id="g317-2-4">
                        <g id="g297-1-4">
                          <path
                            id="rect281-9-4"
                            d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                          />
                          <path
                            id="rect283-3-5"
                            d="M91.211 66.558H91.801V70.266H91.211z"
                          />
                          <path
                            id="rect285-7-77"
                            d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                          />
                          <path
                            id="rect287-6-5"
                            d="M93.03 66.558H93.62V70.266H93.03z"
                          />
                          <path
                            id="rect289-3-1"
                            d="M93.939 66.558H94.529V70.266H93.939z"
                          />
                          <path
                            id="rect291-0-7"
                            d="M94.848 66.558H95.438V70.266H94.848z"
                          />
                          <path
                            id="rect293-0-3"
                            d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                          />
                          <path
                            id="rect295-5-8"
                            d="M96.666 66.558H97.256V70.266H96.666z"
                          />
                        </g>
                        <g id="g315-8-3">
                          <path
                            id="rect299-3-9"
                            d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                          />
                          <path
                            id="rect301-2-9"
                            d="M91.211 66.558H91.801V70.266H91.211z"
                          />
                          <path
                            id="rect303-1-3"
                            d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                          />
                          <path
                            id="rect305-6-2"
                            d="M93.03 66.558H93.62V70.266H93.03z"
                          />
                          <path
                            id="rect307-1-8"
                            d="M93.939 66.558H94.529V70.266H93.939z"
                          />
                          <path
                            id="rect309-8-0"
                            d="M94.848 66.558H95.438V70.266H94.848z"
                          />
                          <path
                            id="rect311-0-2"
                            d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                          />
                          <path
                            id="rect313-1-9"
                            d="M96.666 66.558H97.256V70.266H96.666z"
                          />
                        </g>
                      </g>
                      <path
                        id="rect319-4-8"
                        d="M55.758 71.874H65.59V72.884H55.758z"
                      />
                      <path
                        id="polygon321-4-9"
                        d="M37.71 69.921L42.02 72.951 49.562 72.951 49.562 70.729 48.754 70.729 48.754 69.921z"
                      />
                      <path
                        id="path323-8-4"
                        d="M32.727 45.369c0-.275-.225-.5-.5-.5h-.116a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5H30.5c-.275 0-.5.225-.5.5v.03c0 .275-.153.5-.341.5s-.341-.225-.341-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.24a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.054c-.275 0-.5.225-.5.5v3.015c0 .275.225.5.5.5h.054c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.24c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.153-.5.341-.5s.341.225.341.5v.03c0 .275.225.5.5.5h.612c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.116c.275 0 .5-.225.5-.5v-3.015z"
                      />
                      <path
                        id="path325-1-9"
                        d="M26.97 58.507h-.455c-.416 0-.874-.434-1.112-.862l-1.235-2.224c-.241-.435-.43-1.164-.43-1.661v-4.344h.606v4.344c0 .396.162 1.021.354 1.366l1.235 2.224c.185.334.486.55.582.552h.455z"
                      />
                      <path
                        id="path327-2-3"
                        d="M38.99 56.082h-6.263a1.112 1.112 0 01-1.111-1.11v-2.778a.506.506 0 00-.505-.505h-1.566c-.532 0-1.156-.223-1.452-.519-.295-.295-.518-.811-.518-1.198v-.556h.606v.556c0 .225.162.592.34.771.161.16.632.341 1.023.341h1.566c.613 0 1.111.498 1.111 1.11v2.778c0 .278.226.505.504.505h6.263a.506.506 0 00.505-.505v-1.818h.606v1.818a1.109 1.109 0 01-1.109 1.11z"
                      />
                      <path
                        id="path329-6-0"
                        d="M43.838 57.698H33.737a1.112 1.112 0 01-1.111-1.11v-2.627c0-.317-.262-.69-.56-.799-.575-.21-1.662-.987-1.662-2.434v-.908h.606v.908c0 1.377 1.213 1.845 1.265 1.864.536.195.958.797.958 1.368v2.627c0 .278.227.505.505.505h10.101a.506.506 0 00.505-.505v-1.213h.606v1.213c0 .613-.499 1.111-1.112 1.111z"
                      />
                      <path
                        id="rect331-0-9"
                        d="M83.232 45.45H85.118V46.773H83.232z"
                      />
                      <path
                        id="rect333-7-6"
                        d="M93.872 45.45H95.758V46.773H93.872z"
                      />
                      <path
                        id="polygon335-9-1"
                        d="M64.343 69.012L64.343 54.77 64.748 54.77 64.748 69.416 56.465 69.416 56.465 69.012z"
                      />
                      <path
                        id="path337-8-9"
                        d="M18.855 39.942h-7.138v.417h7.138a1.82 1.82 0 011.818 1.818c0-1.233-.816-2.235-1.818-2.235z"
                      />
                      <path
                        id="polygon339-5-9"
                        d="M3.165 77.282L3.165 82.358 4.175 82.358 4.175 78.292 48.215 78.292 48.215 77.282z"
                      />
                      <path
                        id="polygon341-9-78"
                        d="M51.717 77.282L51.717 82.358 52.727 82.358 52.727 78.292 96.768 78.292 96.768 77.282z"
                      />
                    </g>
                    <g id="hlight-0-9-7" fill="#fff">
                      <path
                        id="path344-2-2"
                        d="M49.572 37.8H37.98c-2.562 0-4.646 2.023-4.646 4.512 0-2.006 2.084-3.637 4.646-3.637h10.959a6.09 6.09 0 01.633-.875z"
                      />
                      <path
                        id="path346-0-8"
                        d="M28.485 52.648c1.053 0 1.933.734 2.162 1.717a2.222 2.222 0 10-4.324 0 2.221 2.221 0 012.162-1.717z"
                      />
                      <path
                        id="polygon348-0-4"
                        d="M64.242 54.418L64.242 54.918 56.614 54.918 56.614 69.314 56.114 69.314 56.114 54.418z"
                      />
                      <path
                        id="rect350-5-31"
                        d="M49.625 44.25H57.5V44.75H49.625z"
                      />
                      <path
                        id="path352-6-1"
                        d="M54.141 36.52a6.056 6.056 0 016.04 5.657c.009-.134.02-.268.02-.404a6.06 6.06 0 10-12.122 0c0 .136.012.27.02.404.211-3.158 2.832-5.657 6.042-5.657z"
                      />
                      <path
                        id="rect354-3-7"
                        d="M12.929 46.474H18.855V47.821H12.929z"
                      />
                      <path
                        id="path356-2-2"
                        d="M27.534 54.205a.951.951 0 011.902 0"
                      />
                      <path
                        id="path358-6-2"
                        d="M18.855 37.53h-7.138v.5h7.138c2.562 0 4.646 1.86 4.646 4.146a4.651 4.651 0 00-4.646-4.646z"
                      />
                      <path
                        id="rect360-1-5"
                        d="M55.421 51.066H65.589V52.076H55.421z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g
              id="g4030-4-3-9-7-3"
              transform="matrix(.20604 0 0 .21647 75.06 155.81)"
              opacity={0.999}
              strokeWidth={0.81961}
              stroke="#00afd4"
            >
              <path
                id="path1448-8-2-3-3-9-4"
                d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
                fill="none"
                opacity={0.8}
                strokeWidth=".21686px"
                stroke="#00afd4"
              />
            </g>
            <path
              id="rect4837-8-8-5-1-6"
              fill="none"
              opacity={0.66}
              paintOrder="markers stroke fill"
              strokeDashoffset={5.65}
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeWidth={0.0978}
              stroke="#00fbff"
              d="M89.201 162.16H99.01159999999999V165.3595H89.201z"
            />
            <path
              id="estado_eq-4"
              className={gen5.boton_gen5}
              fillRule="evenodd"
              fill="url(#linearGradient4474-7-3)"
              opacity={0.999}
              strokeWidth={0.045384}
              d="M89.201 162.16H99.01159999999999V165.3595H89.201z"
            />
            <text
              id="gen_nom_on-3-0-2"
              transform="scale(.92249 1.084)"
              x={97.247147}
              y={152.10588}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.6194px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.098226}
              wordSpacing={0}
            >
              <tspan
                id="tspan6769-3-3-3"
                x={97.247147}
                y={152.10588}
                fill="#fff"
                fontFamily="Franklin Gothic Medium"
                fontSize="3.0453px"
                strokeWidth={0.098226}
              >
                {"GEN - 5"}
              </tspan>
            </text>
          </g>
        </g>
        <g id="g12649">
          <text
            id="alt1-6"
            transform="scale(.95616 1.0458)"
            x={129.21732}
            y={166.85385}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-92"
              x={129.21732}
              y={166.85385}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen4.volt_gen4}
            </tspan>
          </text>
          <text
            id="alt2-1"
            transform="scale(.95616 1.0458)"
            x={129.26651}
            y={170.39444}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-9"
              x={129.26651}
              y={170.39444}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen4.amp_gen4}
            </tspan>
          </text>
          <text
            id="alt3-7"
            transform="scale(.95616 1.0458)"
            x={129.0152}
            y={173.84578}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-9-9"
              x={129.0152}
              y={173.84578}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen4.kw_gen4}
            </tspan>
          </text>
          <text
            id="alt4-5"
            transform="scale(.95616 1.0458)"
            x={131.07683}
            y={177.44354}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-3"
              x={131.07683}
              y={177.44354}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen4.carga_gen4}
            </tspan>
          </text>
          <text
            id="alt4-1-2"
            transform="scale(.95616 1.0458)"
            x={131.07292}
            y={181.03227}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-1-2"
              x={131.07292}
              y={181.03227}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen4.diesel_gen4}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-6"
            transform="scale(.9421 1.0615)"
            x={141.46942}
            y={164.40541}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-3"
              x={141.46942}
              y={164.40541}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"VOLTAGE "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-8-7"
            transform="scale(.9421 1.0615)"
            x={141.53706}
            y={167.90359}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-4-5"
              x={141.53706}
              y={167.90359}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"AMPERE"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-44-0"
            transform="scale(.9421 1.0615)"
            x={141.41185}
            y={171.33768}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-9-47"
              x={141.41185}
              y={171.33768}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"KW "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-4-4-59"
            transform="scale(.9421 1.0615)"
            x={141.42006}
            y={174.86046}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-7-6-9"
              x={141.42006}
              y={174.86046}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% CARGA "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-7-5-0"
            transform="scale(.9421 1.0615)"
            x={141.43953}
            y={178.38701}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2594-6-1-6-3-0-9"
              x={141.43953}
              y={178.38701}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% DIESEL"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-3-7"
            transform="scale(1.0593 .94402)"
            x={121.93936}
            y={179.40865}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#ff0"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.6668px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.20001}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-0-3"
              x={121.93936}
              y={179.40865}
              fill="#ff0"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.699px"
              strokeWidth={0.20001}
            >
              {gen4.modo_gen4}
            </tspan>
          </text>
          <g id="g8354-4" 
          className={gen4.barra1_gen4}
          transform="translate(76.158 .065)" 
          opacity={0.999}>
            <g
              id="g6502-5-2-8"
              transform="matrix(.83717 0 0 .94237 -2.736 69.388)"
            >
              <g
                id="g15-9-0-5-0-7-8"
                transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
              >
                <g id="frame-2-7-1-1-2-5-5">
                  <path
                    id="rect4-5-1-5-8-0-73-0"
                    fill="none"
                    d="M0 0H100V100H0z"
                  />
                </g>
                <g id="shape-3-0-6-6-6-1-7" fill="#fc0">
                  <path
                    id="rect7-4-1-8-4-3-9"
                    fill="#fc0"
                    className={gen4.barra1_gen4}
                    d="M0 37.5H100V62.5H0z"
                  />
                </g>
                <g id="dark-1-2-6-5-0-9-8" fill="#fc0">
                  <path id="rect10-3-0-53-9-6-7-13" d="M0 37.5H100V38.5H0z" />
                  <path id="rect12-1-0-3-2-4-65-5" d="M0 61.5H100V62.5H0z" />
                </g>
              </g>
            </g>
            <g
              id="g8559-1-6"
              transform="matrix(.79345 0 0 .79284 -74.21 22.105)"
            >
              <g
                id="g15-8-7-5-5-6-6-53-7"
                transform="matrix(-.06334 0 0 -.06284 145.05 170.33)"
              >
                <g id="frame-7-5-9-8-4-9-95-9">
                  <path
                    id="rect4-7-2-3-4-9-2-5-2"
                    fill="none"
                    d="M0 0H100V100H0z"
                  />
                </g>
                <g
                  id="shape-1-2-12-7-1-1-0-1"
                  fill="#fc0"
                  strokeWidth={0.99927}
                  stroke="#fc0"
                >
                  <path
                    id="path7-0-9-2-6-0-2-1-6"
                    d="M25 37.5H0v25h25c6.904 0 12.5 5.596 12.5 12.5v25h25V75c0-20.711-16.789-37.5-37.5-37.5z"
                    fill="#fc0"
                    className={gen4.barra1_gen4}
                    strokeWidth={0.99927}
                    stroke="#fc0"
                  />
                </g>
                <g id="dark-81-4-95-0-4-4-9-4" fill="#fc0">
                  <path
                    id="path10-9-0-0-7-7-9-9"
                    d="M25 37.5H0v1h25c20.126 0 36.5 16.374 36.5 36.5v25h1V75c0-20.711-16.789-37.5-37.5-37.5z"
                  />
                  <path
                    id="path12-8-6-3-5-7-4-1-8"
                    d="M38.5 75c0-7.444-6.056-13.5-13.5-13.5H0v1h25c6.904 0 12.5 5.596 12.5 12.5v25h1z"
                  />
                </g>
              </g>
            </g>
            <g
              id="g6485-0-0-4-2"
              transform="matrix(.0867 0 0 .8143 39.442 96.574) matrix(.39463 0 0 .06066 16.589 68.304)"
              fill="#fc0"
            >
              <g id="shape-3-7-1-2-9-5">
                <path
                  id="rect7-5-0-2-6-0"
                  fill="#fc0"
                  className={gen4.barra1_gen4}
                  d="M0 37.5H100V62.5H0z"
                />
              </g>
              <g id="dark-1-8-2-8-8-9">
                <path id="rect10-3-3-2-3-0-1" d="M0 37.5H100V38.5H0z" />
                <path id="rect12-1-5-4-2-4-3" d="M0 61.5H100V62.5H0z" />
              </g>
            </g>
          </g>
          <g id="g8319-9"
          //className={gen4.barra2_gen4}
           transform="translate(76.158 .065)" 
           opacity={0.999}>
            <g
              id="g6502-5-2-1-6-2-3-9"
              transform="matrix(.7902 0 0 .68831 -.469 68.919)"
              strokeWidth={0.99948}
            >
              <g
                id="g15-9-0-5-0-7-4-3-9-5-9"
                transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                strokeWidth={10.227}
              >
                <g id="frame-2-7-1-1-2-5-9-5-8-0-7">
                  <path
                    id="rect4-5-1-5-8-0-73-8-8-0-2-2"
                    d="M0 0h100v100H0z"
                    fill="none"
                    strokeWidth={10.227}
                  />
                </g>
                <g id="shape-3-0-6-6-6-1-3-9-1-0-1" fill="#fc0">
                  <path
                    id="rect7-4-1-8-4-3-3-4-9-0-4"
                    d="M0 38.5h100v25H0z"
                    fill="#fc0"
                    strokeWidth={10.227}
                  />
                </g>
                <g id="dark-1-2-6-5-0-9-2-2-8-7-1" fill="#fc0">
                  <path
                    id="rect10-3-0-53-9-6-7-5-6-6-8-4"
                    d="M0 37.5h100v1H0z"
                  />
                  <path
                    id="rect12-1-0-3-2-4-65-2-4-4-8-2"
                    d="M0 61.5h100v1H0z"
                  />
                </g>
              </g>
            </g>
            <g
              id="g7909-1-0"
              transform="translate(.114 70.387)"
              opacity={0.999}
            >
              <g
                id="g6502-5-2-1-6-5-9-6-3"
                transform="matrix(.39838 0 0 .18319 18.798 48.319)"
              >
                <g
                  id="g15-9-0-5-0-7-4-3-7-6-5-3"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                >
                  <g id="frame-2-7-1-1-2-5-9-5-89-94-6-8">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-6-9-9-5"
                      fill="none"
                      d="M0 0H100V100H0z"
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-0-8-19-2" 
                        
                        fill="#0ff">
                    <path
                      id="rect7-4-1-8-4-3-3-4-3-4-1-5"
                      fill="#0ff"
                      className={gen4.contacto_gen4}
                      d="M0 38.5H100V63.5H0z"
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-7-7-9-1" fill="#0ff">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-65-4-53-7"
                      d="M0 37.5H100V38.5H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-1-9-1-6"
                      d="M0 61.5H100V62.5H0z"
                    />
                  </g>
                </g>
              </g>
              <path
                id="path18021-7-5-86-8"
                d="M37.232 65.163l-3.013-5.524z"
                //fill="#00f"                
                strokeOpacity={0.99216}
                strokeWidth={0.49047}
                stroke="#fc0"
                className={gen4.barra2_gen4}
              />
              <ellipse
                id="path17699-3-27-2-6-4"
                cx={38.363}
                cy={65.718}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#ff0"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
              <ellipse
                id="path17699-3-27-9-4-7-4"
                cx={38.395}
                cy={60.208}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#767676"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
            </g>
          </g>
          <g id="g10277">
            <g
              id="g5795-0"
              className={gen4.color_gen4}              
              transform="matrix(.83717 0 0 .8143 -1.553 108.5)"
              opacity={0.999}
            >
              <g
                id="g4211-7-8-7"
                transform="matrix(.32531 0 0 .35265 127.36 37.372)"
              >
                <g id="g4023-2-0-8" transform="translate(-341.25 -93.544)">
                  <g id="g363-6-4-5" transform="matrix(-1 0 0 1 495.88 85.312)">
                    <g id="shape-4-3-8-2"
                    className= {gen4.color_gen4}
                    fill="#999">
                      <path
                        id="rect4-58-5-3"
                        d="M0 74.984H100V82.35799999999999H0z"
                      />
                      <path
                        id="polygon6-7-2-1"
                        d="M54.545 51.066L54.545 72.951 42.02 72.951 37.71 69.921 18.855 69.921 18.855 44.87 47.475 44.87z"
                      />
                      <path
                        id="rect8-1-9-6"
                        d="M12.929 46.474H25.32V61.571H12.929z"
                      />
                      <path
                        id="rect10-23-2-8"
                        d="M48.754 52.4H61.144999999999996V70.729H48.754z"
                      />
                      <path
                        id="rect12-2-0-9"
                        d="M10.774 50.783H25.319V57.261H10.774z"
                      />
                      <path
                        id="rect14-0-4-9"
                        d="M55.421 51.066H65.589V72.884H55.421z"
                      />
                      <path
                        id="rect16-7-4-1"
                        d="M65.387 52.646H98.114V71.065H65.387z"
                      />
                      <path
                        id="rect18-4-0-3"
                        d="M81.919 46.756H97.205V52.647H81.919z"
                      />
                      <path
                        id="polygon20-6-9-7"
                        d="M99.226 33.086L97.205 45.476 81.919 45.476 81.919 33.086z"
                      />
                      <circle
                        id="circle22-6-4-9"
                        cx={54.141}
                        cy={41.773}
                        r={6.061}
                      />
                      <path
                        id="rect24-6-4-2-8"
                        d="M2.694 71.537H10.100999999999999V76.385H2.694z"
                      />
                      <path
                        id="rect26-8-5-4"
                        d="M17.576 69.921H23.771V76.38600000000001H17.576z"
                      />
                      <path
                        id="rect28-8-3-3"
                        d="M49.562 69.921H55.757V76.38600000000001H49.562z"
                      />
                      <path
                        id="rect30-8-2-1"
                        d="M67.475 69.921H73.66999999999999V76.38600000000001H67.475z"
                      />
                      <path
                        id="rect32-8-0-3"
                        d="M83.367 69.921H89.56200000000001V76.38600000000001H83.367z"
                      />
                      <path
                        id="rect34-9-3-7"
                        d="M26.465 32.21H31.044V45.139H26.465z"
                      />
                      <path
                        id="rect36-0-6-1"
                        d="M25.589 37.867H31.918999999999997V39.483H25.589z"
                      />
                      <path
                        id="path38-6-8-0"
                        d="M23.501 45.679h-2.828v-3.502a1.82 1.82 0 00-1.818-1.818h-8.081V37.53h8.081a4.651 4.651 0 014.646 4.646z"
                      />
                      <path
                        id="path40-4-2-2"
                        d="M44.579 49.113h-2.828v-3.502a4.65 4.65 0 014.646-4.646h8.889v2.828h-8.889a1.82 1.82 0 00-1.818 1.818z"
                      />
                      <path
                        id="polygon42-5-7-2"
                        d="M58.485 44.702L53.434 49.82 47.172 49.82 47.172 44.702z"
                      />
                      <path
                        id="path44-0-1-4"
                        d="M36.162 45.409h-2.828v-3.098c0-2.488 2.084-4.512 4.646-4.512h15.892v2.828H37.98c-1.002 0-1.818.755-1.818 1.684z"
                      />
                      <path
                        id="path46-8-5-5-8"
                        d="M24.444 33.692c0-1.339 1.93-2.424 4.31-2.424s4.31 1.085 4.31 2.424"
                      />
                    </g>
                    <g id="light-2-8-5-0" 
                    className={gen4.color_gen4}
                    fill="#ccc">
                      <path
                        id="rect49-6-4-1"
                        d="M65.387 52.646H98.114V58.69H65.387z"
                      />
                      <path
                        id="rect51-5-7-7"
                        d="M26.465 39.483H31.044V45.14H26.465z"
                      />
                      <path
                        id="rect53-9-3-4"
                        d="M26.465 33.692H31.044V37.867H26.465z"
                      />
                      <path
                        id="rect55-6-1-9"
                        d="M1.212 34.062H11.717V72.345H1.212z"
                      />
                    </g>
                    <g id="linear-6-5-3-3">
                      <path
                        id="rect63-6-8-5"
                        className="linear"
                        fill="url(#linearGradient8497)"
                        d="M37.172 47.093H41.616V53.154H37.172z"
                      />
                      <path
                        id="rect70-2-0-0"
                        className="linear"
                        fill="url(#linearGradient8499)"
                        d="M43.596 52.951H45.373999999999995V55.375H43.596z"
                      />
                      <path
                        id="rect77-7-8-1"
                        className="linear"
                        fill="url(#linearGradient8501)"
                        d="M41.818 47.093H47.150999999999996V54.366H41.818z"
                      />
                    </g>
                    <g id="dark-3-1-0-4" fill="#4d4d4d">
                      <path
                        id="rect80-9-1-8"
                        d="M51.717 77.282H96.768V82.35799999999999H51.717z"
                      />
                      <path
                        id="rect82-4-8-7"
                        d="M3.165 77.282H48.216V82.35799999999999H3.165z"
                      />
                      <path
                        id="polygon84-9-4-6"
                        d="M54.04 45.779L54.04 49.206 57.422 45.779z"
                      />
                      <circle
                        id="circle86-5-2-2"
                        cx={54.141}
                        cy={41.773}
                        r={2.02}
                      />
                      <path
                        id="rect88-4-9-5"
                        d="M21.886 68.911H51.986999999999995V69.921H21.886z"
                      />
                      <path
                        id="polygon90-8-7-0"
                        d="M26.667 66.689L26.667 66.285 24.646 66.285 24.04 66.285 24.04 66.689 24.04 68.911 24.646 68.911 24.646 66.689z"
                      />
                      <path
                        id="polygon92-2-0-2"
                        d="M30.741 66.689L30.741 66.285 28.721 66.285 28.114 66.285 28.114 66.689 28.114 68.911 28.721 68.911 28.721 66.689z"
                      />
                      <path
                        id="polygon94-7-6-7"
                        d="M34.815 66.689L34.815 66.285 32.795 66.285 32.189 66.285 32.189 66.689 32.189 68.911 32.795 68.911 32.795 66.689z"
                      />
                      <path
                        id="polygon96-5-3-3"
                        d="M38.889 66.689L38.889 66.285 36.869 66.285 36.263 66.285 36.263 66.689 36.263 68.911 36.869 68.911 36.869 66.689z"
                      />
                      <path
                        id="polygon98-3-3-5"
                        d="M42.963 66.689L42.963 66.285 40.943 66.285 40.337 66.285 40.337 66.689 40.337 68.911 40.943 68.911 40.943 66.689z"
                      />
                      <path
                        id="polygon100-5-1-1"
                        d="M47.037 66.689L47.037 66.285 45.017 66.285 44.411 66.285 44.411 66.689 44.411 68.911 45.017 68.911 45.017 66.689z"
                      />
                      <path
                        id="polygon102-2-2-1"
                        d="M51.111 66.689L51.111 66.285 49.091 66.285 48.485 66.285 48.485 66.689 48.485 68.911 49.091 68.911 49.091 66.689z"
                      />
                      <path
                        id="polygon104-2-0-8"
                        d="M26.667 66.689L26.667 66.285 24.646 66.285 24.04 66.285 24.04 66.689 24.04 68.911 24.646 68.911 24.646 66.689z"
                      />
                      <path
                        id="polygon106-6-0-3"
                        d="M30.741 66.689L30.741 66.285 28.721 66.285 28.114 66.285 28.114 66.689 28.114 68.911 28.721 68.911 28.721 66.689z"
                      />
                      <path
                        id="polygon108-6-8-0"
                        d="M34.815 66.689L34.815 66.285 32.795 66.285 32.189 66.285 32.189 66.689 32.189 68.911 32.795 68.911 32.795 66.689z"
                      />
                      <path
                        id="polygon110-4-4-9"
                        d="M38.889 66.689L38.889 66.285 36.869 66.285 36.263 66.285 36.263 66.689 36.263 68.911 36.869 68.911 36.869 66.689z"
                      />
                      <path
                        id="polygon112-4-5-6"
                        d="M42.963 66.689L42.963 66.285 40.943 66.285 40.337 66.285 40.337 66.689 40.337 68.911 40.943 68.911 40.943 66.689z"
                      />
                      <path
                        id="polygon114-9-9-8"
                        d="M47.037 66.689L47.037 66.285 45.017 66.285 44.411 66.285 44.411 66.689 44.411 68.911 45.017 68.911 45.017 66.689z"
                      />
                      <path
                        id="polygon116-4-8-5"
                        d="M51.111 66.689L51.111 66.285 49.091 66.285 48.485 66.285 48.485 66.689 48.485 68.911 49.091 68.911 49.091 66.689z"
                      />
                      <path
                        id="polygon118-2-8-6"
                        d="M49.293 60.224L49.293 59.618 34.545 59.618 34.545 63.456 35.152 63.456 35.152 60.224z"
                      />
                      <path
                        id="path120-6-8-6"
                        d="M28.485 62.85a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                      />
                      <path
                        id="rect122-0-7-5"
                        d="M51.111 55.982H55.555V62.851H51.111z"
                      />
                      <path
                        id="rect124-7-2-4"
                        d="M65.387 65.207H98.114V71.06599999999999H65.387z"
                      />
                      <path
                        id="rect126-8-0-7"
                        d="M12.929 60.224H18.855V61.571H12.929z"
                      />
                      <path
                        id="path128-4-3-2"
                        d="M28.485 55.577a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                      />
                      <path
                        id="path130-2-1-9"
                        d="M27.071 54.567a1.414 1.414 0 112.828 0v6.061a1.414 1.414 0 11-2.828 0z"
                      />
                      <path
                        id="rect132-3-0-9"
                        d="M81.919 47.516H97.205V48.016H81.919z"
                      />
                    </g>
                    <g id="shadow-3-2-0-6">
                      <path
                        id="rect135-6-8-0"
                        d="M56.927 55.308H57.517V68.641H56.927z"
                      />
                      <path
                        id="rect137-3-6-8"
                        d="M57.836 55.308H58.426V68.641H57.836z"
                      />
                      <path
                        id="rect139-0-4-9"
                        d="M58.745 55.308H59.335V68.641H58.745z"
                      />
                      <path
                        id="rect141-6-9-1"
                        d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                      />
                      <path
                        id="rect143-4-2-7"
                        d="M60.564 55.308H61.154V68.641H60.564z"
                      />
                      <path
                        id="rect145-7-5-3"
                        d="M61.473 55.308H62.063V68.641H61.473z"
                      />
                      <path
                        id="rect147-8-4-5"
                        d="M62.382 55.308H62.972V68.641H62.382z"
                      />
                      <path
                        id="rect149-9-3-2"
                        d="M63.291 55.308H63.881V68.641H63.291z"
                      />
                      <path
                        id="rect151-3-3-3"
                        d="M56.927 55.308H57.517V68.641H56.927z"
                      />
                      <path
                        id="rect153-2-2-3"
                        d="M57.836 55.308H58.426V68.641H57.836z"
                      />
                      <path
                        id="rect155-4-9-6"
                        d="M58.745 55.308H59.335V68.641H58.745z"
                      />
                      <path
                        id="rect157-1-6-6"
                        d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                      />
                      <path
                        id="rect159-7-3-2"
                        d="M60.564 55.308H61.154V68.641H60.564z"
                      />
                      <path
                        id="rect161-7-7-5"
                        d="M61.473 55.308H62.063V68.641H61.473z"
                      />
                      <path
                        id="rect163-8-8-2"
                        d="M62.382 55.308H62.972V68.641H62.382z"
                      />
                      <path
                        id="rect165-2-7-7"
                        d="M63.291 55.308H63.881V68.641H63.291z"
                      />
                      <path
                        id="path167-6-7-8"
                        d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                      />
                      <path
                        id="path169-7-9-3"
                        d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                      />
                      <path
                        id="path171-5-1-7"
                        d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                      />
                      <path
                        id="path173-2-8-9"
                        d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                      />
                      <path
                        id="path175-4-9-0"
                        d="M36.162 44.87v-2.559c0-.929.816-1.684 1.818-1.684h10.212c.024-.127.056-.251.088-.375H37.419c-1.038 0-1.883.814-1.883 1.816v2.802z"
                      />
                      <g id="g201-1-1-6">
                        <g id="g187-7-2-7">
                          <circle
                            id="circle177-9-0-8"
                            cx={68.388}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle179-4-9-9"
                            cx={75.272}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle181-0-4-3"
                            cx={82.155}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle183-3-8-3"
                            cx={89.038}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle185-9-7-7"
                            cx={95.921}
                            cy={64.736}
                            r={0.52}
                          />
                        </g>
                        <g id="g199-8-5-7">
                          <circle
                            id="circle189-4-8-4"
                            cx={68.388}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle191-1-2-4"
                            cx={75.272}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle193-9-7-5"
                            cx={82.155}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle195-4-9-4"
                            cx={89.038}
                            cy={64.736}
                            r={0.52}
                          />
                          <circle
                            id="circle197-2-4-7"
                            cx={95.921}
                            cy={64.736}
                            r={0.52}
                          />
                        </g>
                      </g>
                      <g id="g227-7-2-3">
                        <g id="g213-4-1-7">
                          <circle
                            id="circle203-1-2-6"
                            cx={68.388}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle205-0-8-3"
                            cx={75.272}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle207-4-2-6"
                            cx={82.155}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle209-3-4-2"
                            cx={89.038}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle211-5-8-3"
                            cx={95.921}
                            cy={59.988}
                            r={0.52}
                          />
                        </g>
                        <g id="g225-8-0-3">
                          <circle
                            id="circle215-1-7-6"
                            cx={68.388}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle217-0-3-1"
                            cx={75.272}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle219-2-6-0"
                            cx={82.155}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle221-4-1-0"
                            cx={89.038}
                            cy={59.988}
                            r={0.52}
                          />
                          <circle
                            id="circle223-1-3-4"
                            cx={95.921}
                            cy={59.988}
                            r={0.52}
                          />
                        </g>
                      </g>
                      <path
                        id="path229-5-4-5"
                        d="M29.899 60.628a1.414 1.414 0 11-2.828 0z"
                      />
                      <path
                        id="polygon231-5-9-1"
                        d="M1.972 71.032L1.972 35.125 10.505 35.125 10.505 35.625 2.472 35.625 2.472 71.032z"
                      />
                      <path
                        id="rect233-0-0-0"
                        d="M3.636 72.499H9.139V73.307H3.636z"
                      />
                      <path
                        id="polygon235-1-1-6"
                        d="M18.386 74.724L18.386 70.666 23.139 70.666 23.139 71.474 19 71.474 19 74.724z"
                      />
                      <path
                        id="polygon237-8-1-7"
                        d="M50.136 74.724L50.136 70.666 54.889 70.666 54.889 71.474 50.75 71.474 50.75 74.724z"
                      />
                      <path
                        id="polygon239-4-1-2"
                        d="M67.886 74.974L67.886 71.916 72.639 71.916 72.639 72.724 68.5 72.724 68.5 74.974z"
                      />
                      <path
                        id="polygon241-4-0-6"
                        d="M84.136 74.974L84.136 71.916 88.889 71.916 88.889 72.724 84.75 72.724 84.75 74.974z"
                      />
                      <g id="g279-6-0-8">
                        <g id="g259-9-1-8">
                          <path
                            id="rect243-3-1-4"
                            d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                          />
                          <path
                            id="rect245-9-4-3"
                            d="M71.211 54.558H71.801V58.266H71.211z"
                          />
                          <path
                            id="rect247-0-0-6"
                            d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                          />
                          <path
                            id="rect249-4-5-5"
                            d="M73.03 54.558H73.62V58.266H73.03z"
                          />
                          <path
                            id="rect251-3-9-5"
                            d="M73.939 54.558H74.529V58.266H73.939z"
                          />
                          <path
                            id="rect253-3-1-9"
                            d="M74.848 54.558H75.438V58.266H74.848z"
                          />
                          <path
                            id="rect255-0-7-0"
                            d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                          />
                          <path
                            id="rect257-5-7-0"
                            d="M76.666 54.558H77.256V58.266H76.666z"
                          />
                        </g>
                        <g id="g277-4-3-5">
                          <path
                            id="rect261-1-0-0"
                            d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                          />
                          <path
                            id="rect263-8-2-4"
                            d="M71.211 54.558H71.801V58.266H71.211z"
                          />
                          <path
                            id="rect265-0-8-1"
                            d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                          />
                          <path
                            id="rect267-7-6-7"
                            d="M73.03 54.558H73.62V58.266H73.03z"
                          />
                          <path
                            id="rect269-1-3-9"
                            d="M73.939 54.558H74.529V58.266H73.939z"
                          />
                          <path
                            id="rect271-5-9-5"
                            d="M74.848 54.558H75.438V58.266H74.848z"
                          />
                          <path
                            id="rect273-7-4-7"
                            d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                          />
                          <path
                            id="rect275-0-9-6"
                            d="M76.666 54.558H77.256V58.266H76.666z"
                          />
                        </g>
                      </g>
                      <g id="g317-2-8-6">
                        <g id="g297-1-0-2">
                          <path
                            id="rect281-9-5-7"
                            d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                          />
                          <path
                            id="rect283-3-6-2"
                            d="M91.211 66.558H91.801V70.266H91.211z"
                          />
                          <path
                            id="rect285-7-7-8"
                            d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                          />
                          <path
                            id="rect287-6-3-7"
                            d="M93.03 66.558H93.62V70.266H93.03z"
                          />
                          <path
                            id="rect289-3-4-7"
                            d="M93.939 66.558H94.529V70.266H93.939z"
                          />
                          <path
                            id="rect291-0-6-5"
                            d="M94.848 66.558H95.438V70.266H94.848z"
                          />
                          <path
                            id="rect293-0-7-4"
                            d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                          />
                          <path
                            id="rect295-5-3-3"
                            d="M96.666 66.558H97.256V70.266H96.666z"
                          />
                        </g>
                        <g id="g315-8-8-7">
                          <path
                            id="rect299-3-8-1"
                            d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                          />
                          <path
                            id="rect301-2-0-8"
                            d="M91.211 66.558H91.801V70.266H91.211z"
                          />
                          <path
                            id="rect303-1-5-5"
                            d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                          />
                          <path
                            id="rect305-6-6-3"
                            d="M93.03 66.558H93.62V70.266H93.03z"
                          />
                          <path
                            id="rect307-1-4-2"
                            d="M93.939 66.558H94.529V70.266H93.939z"
                          />
                          <path
                            id="rect309-8-2-9"
                            d="M94.848 66.558H95.438V70.266H94.848z"
                          />
                          <path
                            id="rect311-0-5-5"
                            d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                          />
                          <path
                            id="rect313-1-1-4"
                            d="M96.666 66.558H97.256V70.266H96.666z"
                          />
                        </g>
                      </g>
                      <path
                        id="rect319-4-1-8"
                        d="M55.758 71.874H65.59V72.884H55.758z"
                      />
                      <path
                        id="polygon321-4-6-5"
                        d="M48.754 70.729L48.754 69.921 37.71 69.921 42.02 72.951 49.562 72.951 49.562 70.729z"
                      />
                      <path
                        id="path323-8-0-0"
                        d="M32.727 45.369c0-.275-.225-.5-.5-.5h-.116a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5H30.5c-.275 0-.5.225-.5.5v.03c0 .275-.153.5-.341.5s-.341-.225-.341-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.24a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.054c-.275 0-.5.225-.5.5v3.015c0 .275.225.5.5.5h.054c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.24c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.153-.5.341-.5s.341.225.341.5v.03c0 .275.225.5.5.5h.612c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.116c.275 0 .5-.225.5-.5v-3.015z"
                      />
                      <path
                        id="path325-1-5-8"
                        d="M26.97 58.507h-.455c-.416 0-.874-.434-1.112-.862l-1.235-2.224c-.241-.435-.43-1.164-.43-1.661v-4.344h.606v4.344c0 .396.162 1.021.354 1.366l1.235 2.224c.185.334.486.55.582.552h.455z"
                      />
                      <path
                        id="path327-2-1-2"
                        d="M38.99 56.082h-6.263a1.112 1.112 0 01-1.111-1.11v-2.778a.506.506 0 00-.505-.505h-1.566c-.532 0-1.156-.223-1.452-.519-.295-.295-.518-.811-.518-1.198v-.556h.606v.556c0 .225.162.592.34.771.161.16.632.341 1.023.341h1.566c.613 0 1.111.498 1.111 1.11v2.778c0 .278.226.505.504.505h6.263a.506.506 0 00.505-.505v-1.818h.606v1.818a1.109 1.109 0 01-1.109 1.11z"
                      />
                      <path
                        id="path329-6-4-1"
                        d="M43.838 57.698H33.737a1.112 1.112 0 01-1.111-1.11v-2.627c0-.317-.262-.69-.56-.799-.575-.21-1.662-.987-1.662-2.434v-.908h.606v.908c0 1.377 1.213 1.845 1.265 1.864.536.195.958.797.958 1.368v2.627c0 .278.227.505.505.505h10.101a.506.506 0 00.505-.505v-1.213h.606v1.213c0 .613-.499 1.111-1.112 1.111z"
                      />
                      <path
                        id="rect331-0-5-4"
                        d="M83.232 45.45H85.118V46.773H83.232z"
                      />
                      <path
                        id="rect333-7-0-4"
                        d="M93.872 45.45H95.758V46.773H93.872z"
                      />
                      <path
                        id="polygon335-9-0-2"
                        d="M56.465 69.416L56.465 69.012 64.343 69.012 64.343 54.77 64.748 54.77 64.748 69.416z"
                      />
                      <path
                        id="path337-8-4-9"
                        d="M18.855 39.942h-7.138v.417h7.138a1.82 1.82 0 011.818 1.818c0-1.233-.816-2.235-1.818-2.235z"
                      />
                      <path
                        id="polygon339-5-5-5"
                        d="M48.215 78.292L48.215 77.282 3.165 77.282 3.165 82.358 4.175 82.358 4.175 78.292z"
                      />
                      <path
                        id="polygon341-9-7-0"
                        d="M96.768 78.292L96.768 77.282 51.717 77.282 51.717 82.358 52.727 82.358 52.727 78.292z"
                      />
                    </g>
                    <g id="hlight-0-9-4-0" fill="#fff">
                      <path
                        id="path344-2-0-8"
                        d="M49.572 37.8H37.98c-2.562 0-4.646 2.023-4.646 4.512 0-2.006 2.084-3.637 4.646-3.637h10.959a6.09 6.09 0 01.633-.875z"
                      />
                      <path
                        id="path346-0-3-6"
                        d="M28.485 52.648c1.053 0 1.933.734 2.162 1.717a2.222 2.222 0 10-4.324 0 2.221 2.221 0 012.162-1.717z"
                      />
                      <path
                        id="polygon348-0-1-5"
                        d="M56.114 69.314L56.114 54.418 64.242 54.418 64.242 54.918 56.614 54.918 56.614 69.314z"
                      />
                      <path
                        id="rect350-5-3-9"
                        d="M49.625 44.25H57.5V44.75H49.625z"
                      />
                      <path
                        id="path352-6-5-4"
                        d="M54.141 36.52a6.056 6.056 0 016.04 5.657c.009-.134.02-.268.02-.404a6.06 6.06 0 10-12.122 0c0 .136.012.27.02.404.211-3.158 2.832-5.657 6.042-5.657z"
                      />
                      <path
                        id="rect354-3-1-0"
                        d="M12.929 46.474H18.855V47.821H12.929z"
                      />
                      <path
                        id="path356-2-1-8"
                        d="M27.534 54.205a.951.951 0 011.902 0"
                      />
                      <path
                        id="path358-6-4-5"
                        d="M18.855 37.53h-7.138v.5h7.138c2.562 0 4.646 1.86 4.646 4.146a4.651 4.651 0 00-4.646-4.646z"
                      />
                      <path
                        id="rect360-1-7-1"
                        d="M55.421 51.066H65.589V52.076H55.421z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g
              id="g4030-4-3-9-7-4"
              transform="matrix(.20604 0 0 .21647 113.42 155.81)"
              opacity={0.999}
              strokeWidth={0.81961}
              stroke="#00afd4"
            >
              <path
                id="path1448-8-2-3-3-9-6"
                d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
                fill="none"
                opacity={0.8}
                strokeWidth=".21686px"
                stroke="#00afd4"
              />
            </g>
            <path
              id="rect4837-8-8-5-1-2"
              fill="none"
              opacity={0.66}
              paintOrder="markers stroke fill"
              strokeDashoffset={5.65}
              strokeLinecap="square"
              strokeLinejoin="round"
              strokeWidth={0.0978}
              stroke="#00fbff"
              d="M127.57 162.16H137.3806V165.3595H127.57z"
            />
            <path
              id="estado_eq-4-0"
              className={gen4.boton_gen4}
              fillRule="evenodd"
              fill="url(#linearGradient4474-7-3-6)"
              opacity={0.999}
              strokeWidth={0.045384}
              d="M127.57 162.16H137.3806V165.3595H127.57z"
            />
            <text
              id="gen_nom_on-3-0-6"
              transform="scale(.92249 1.084)"
              x={138.83528}
              y={152.10588}
              style={{ lineHeight: 1.25 }}
              xmlSpace="preserve"
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.6194px"
              letterSpacing={0}
              opacity={0.999}
              strokeWidth={0.098226}
              wordSpacing={0}
            >
              <tspan
                id="tspan6769-3-3-34"
                x={138.83528}
                y={152.10588}
                fill="#fff"
                fontFamily="Franklin Gothic Medium"
                fontSize="3.0453px"
                strokeWidth={0.098226}
              >
                {"GEN - 4"}
              </tspan>
            </text>
          </g>
        </g>
        <g id="g13472">
          <g
            id="g4211"
            className={gen3.color_gen3}
            transform="matrix(.27234 0 0 .28717 28.943 25.983)"
            opacity={0.999}
          >
            <g id="g4023" transform="translate(-341.25 -93.544)">
              <g id="g363" transform="matrix(-1 0 0 1 495.88 85.312)">
                <g id="shape-4"
                className={gen3.color_gen3}
                fill="#999">
                  <path id="rect4" d="M0 74.984H100V82.35799999999999H0z" />
                  <path
                    id="polygon6"
                    d="M18.855 69.921L18.855 44.87 47.475 44.87 54.545 51.066 54.545 72.951 42.02 72.951 37.71 69.921z"
                  />
                  <path id="rect8" d="M12.929 46.474H25.32V61.571H12.929z" />
                  <path
                    id="rect10"
                    d="M48.754 52.4H61.144999999999996V70.729H48.754z"
                  />
                  <path id="rect12" d="M10.774 50.783H25.319V57.261H10.774z" />
                  <path id="rect14" d="M55.421 51.066H65.589V72.884H55.421z" />
                  <path id="rect16" d="M65.387 52.646H98.114V71.065H65.387z" />
                  <path id="rect18" d="M81.919 46.756H97.205V52.647H81.919z" />
                  <path
                    id="polygon20"
                    d="M81.919 33.086L99.226 33.086 97.205 45.476 81.919 45.476z"
                  />
                  <circle id="circle22" cx={54.141} cy={41.773} r={6.061} />
                  <path
                    id="rect24-6"
                    d="M2.694 71.537H10.100999999999999V76.385H2.694z"
                  />
                  <path
                    id="rect26"
                    d="M17.576 69.921H23.771V76.38600000000001H17.576z"
                  />
                  <path
                    id="rect28"
                    d="M49.562 69.921H55.757V76.38600000000001H49.562z"
                  />
                  <path
                    id="rect30"
                    d="M67.475 69.921H73.66999999999999V76.38600000000001H67.475z"
                  />
                  <path
                    id="rect32"
                    d="M83.367 69.921H89.56200000000001V76.38600000000001H83.367z"
                  />
                  <path id="rect34" d="M26.465 32.21H31.044V45.139H26.465z" />
                  <path
                    id="rect36"
                    d="M25.589 37.867H31.918999999999997V39.483H25.589z"
                  />
                  <path
                    id="path38"
                    d="M23.501 45.679h-2.828v-3.502a1.82 1.82 0 00-1.818-1.818h-8.081V37.53h8.081a4.651 4.651 0 014.646 4.646z"
                  />
                  <path
                    id="path40"
                    d="M44.579 49.113h-2.828v-3.502a4.65 4.65 0 014.646-4.646h8.889v2.828h-8.889a1.82 1.82 0 00-1.818 1.818z"
                  />
                  <path
                    id="polygon42"
                    d="M47.172 44.702L58.485 44.702 53.434 49.82 47.172 49.82z"
                  />
                  <path
                    id="path44"
                    d="M36.162 45.409h-2.828v-3.098c0-2.488 2.084-4.512 4.646-4.512h15.892v2.828H37.98c-1.002 0-1.818.755-1.818 1.684z"
                  />
                  <path
                    id="path46-8"
                    d="M24.444 33.692c0-1.339 1.93-2.424 4.31-2.424s4.31 1.085 4.31 2.424"
                  />
                </g>
                <g id="light-2" 
                className={gen3.color_gen3}
                fill="#ccc">
                  <path id="rect49" d="M65.387 52.646H98.114V58.69H65.387z" />
                  <path id="rect51" d="M26.465 39.483H31.044V45.14H26.465z" />
                  <path id="rect53" d="M26.465 33.692H31.044V37.867H26.465z" />
                  <path id="rect55" d="M1.212 34.062H11.717V72.345H1.212z" />
                </g>
                <g id="linear-6">
                  <path
                    id="rect63"
                    className="linear"
                    fill="url(#SVGID_1_-99)"
                    d="M37.172 47.093H41.616V53.154H37.172z"
                  />
                  <path
                    id="rect70"
                    className="linear"
                    fill="url(#SVGID_2_-1)"
                    d="M43.596 52.951H45.373999999999995V55.375H43.596z"
                  />
                  <path
                    id="rect77"
                    className="linear"
                    fill="url(#SVGID_3_-90)"
                    d="M41.818 47.093H47.150999999999996V54.366H41.818z"
                  />
                </g>
                <g id="dark-3" fill="#4d4d4d">
                  <path
                    id="rect80"
                    d="M51.717 77.282H96.768V82.35799999999999H51.717z"
                  />
                  <path
                    id="rect82"
                    d="M3.165 77.282H48.216V82.35799999999999H3.165z"
                  />
                  <path
                    id="polygon84"
                    d="M54.04 49.206L57.422 45.779 54.04 45.779z"
                  />
                  <circle id="circle86" cx={54.141} cy={41.773} r={2.02} />
                  <path
                    id="rect88"
                    d="M21.886 68.911H51.986999999999995V69.921H21.886z"
                  />
                  <path
                    id="polygon90"
                    d="M24.646 66.689L26.667 66.689 26.667 66.285 24.646 66.285 24.04 66.285 24.04 66.689 24.04 68.911 24.646 68.911z"
                  />
                  <path
                    id="polygon92"
                    d="M28.721 66.689L30.741 66.689 30.741 66.285 28.721 66.285 28.114 66.285 28.114 66.689 28.114 68.911 28.721 68.911z"
                  />
                  <path
                    id="polygon94"
                    d="M32.795 66.689L34.815 66.689 34.815 66.285 32.795 66.285 32.189 66.285 32.189 66.689 32.189 68.911 32.795 68.911z"
                  />
                  <path
                    id="polygon96"
                    d="M36.869 66.689L38.889 66.689 38.889 66.285 36.869 66.285 36.263 66.285 36.263 66.689 36.263 68.911 36.869 68.911z"
                  />
                  <path
                    id="polygon98"
                    d="M40.943 66.689L42.963 66.689 42.963 66.285 40.943 66.285 40.337 66.285 40.337 66.689 40.337 68.911 40.943 68.911z"
                  />
                  <path
                    id="polygon100"
                    d="M45.017 66.689L47.037 66.689 47.037 66.285 45.017 66.285 44.411 66.285 44.411 66.689 44.411 68.911 45.017 68.911z"
                  />
                  <path
                    id="polygon102"
                    d="M49.091 66.689L51.111 66.689 51.111 66.285 49.091 66.285 48.485 66.285 48.485 66.689 48.485 68.911 49.091 68.911z"
                  />
                  <path
                    id="polygon104"
                    d="M24.646 66.689L26.667 66.689 26.667 66.285 24.646 66.285 24.04 66.285 24.04 66.689 24.04 68.911 24.646 68.911z"
                  />
                  <path
                    id="polygon106"
                    d="M28.721 66.689L30.741 66.689 30.741 66.285 28.721 66.285 28.114 66.285 28.114 66.689 28.114 68.911 28.721 68.911z"
                  />
                  <path
                    id="polygon108"
                    d="M32.795 66.689L34.815 66.689 34.815 66.285 32.795 66.285 32.189 66.285 32.189 66.689 32.189 68.911 32.795 68.911z"
                  />
                  <path
                    id="polygon110"
                    d="M36.869 66.689L38.889 66.689 38.889 66.285 36.869 66.285 36.263 66.285 36.263 66.689 36.263 68.911 36.869 68.911z"
                  />
                  <path
                    id="polygon112"
                    d="M40.943 66.689L42.963 66.689 42.963 66.285 40.943 66.285 40.337 66.285 40.337 66.689 40.337 68.911 40.943 68.911z"
                  />
                  <path
                    id="polygon114"
                    d="M45.017 66.689L47.037 66.689 47.037 66.285 45.017 66.285 44.411 66.285 44.411 66.689 44.411 68.911 45.017 68.911z"
                  />
                  <path
                    id="polygon116"
                    d="M49.091 66.689L51.111 66.689 51.111 66.285 49.091 66.285 48.485 66.285 48.485 66.689 48.485 68.911 49.091 68.911z"
                  />
                  <path
                    id="polygon118"
                    d="M49.293 59.618L34.545 59.618 34.545 63.456 35.152 63.456 35.152 60.224 49.293 60.224z"
                  />
                  <path
                    id="path120"
                    d="M28.485 62.85a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                  />
                  <path id="rect122" d="M51.111 55.982H55.555V62.851H51.111z" />
                  <path
                    id="rect124"
                    d="M65.387 65.207H98.114V71.06599999999999H65.387z"
                  />
                  <path id="rect126" d="M12.929 60.224H18.855V61.571H12.929z" />
                  <path
                    id="path128"
                    d="M28.485 55.577a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                  />
                  <path
                    id="path130"
                    d="M27.071 54.567a1.414 1.414 0 112.828 0v6.061a1.414 1.414 0 11-2.828 0z"
                  />
                  <path id="rect132" d="M81.919 47.516H97.205V48.016H81.919z" />
                </g>
                <g id="shadow-3">
                  <path id="rect135" d="M56.927 55.308H57.517V68.641H56.927z" />
                  <path id="rect137" d="M57.836 55.308H58.426V68.641H57.836z" />
                  <path id="rect139" d="M58.745 55.308H59.335V68.641H58.745z" />
                  <path
                    id="rect141"
                    d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                  />
                  <path id="rect143" d="M60.564 55.308H61.154V68.641H60.564z" />
                  <path id="rect145" d="M61.473 55.308H62.063V68.641H61.473z" />
                  <path id="rect147" d="M62.382 55.308H62.972V68.641H62.382z" />
                  <path id="rect149" d="M63.291 55.308H63.881V68.641H63.291z" />
                  <path id="rect151" d="M56.927 55.308H57.517V68.641H56.927z" />
                  <path id="rect153" d="M57.836 55.308H58.426V68.641H57.836z" />
                  <path id="rect155" d="M58.745 55.308H59.335V68.641H58.745z" />
                  <path
                    id="rect157"
                    d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                  />
                  <path id="rect159" d="M60.564 55.308H61.154V68.641H60.564z" />
                  <path id="rect161" d="M61.473 55.308H62.063V68.641H61.473z" />
                  <path id="rect163" d="M62.382 55.308H62.972V68.641H62.382z" />
                  <path id="rect165" d="M63.291 55.308H63.881V68.641H63.291z" />
                  <path
                    id="path167"
                    d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                  />
                  <path
                    id="path169"
                    d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                  />
                  <path
                    id="path171"
                    d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                  />
                  <path
                    id="path173"
                    d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                  />
                  <path
                    id="path175"
                    d="M36.162 44.87v-2.559c0-.929.816-1.684 1.818-1.684h10.212c.024-.127.056-.251.088-.375H37.419c-1.038 0-1.883.814-1.883 1.816v2.802z"
                  />
                  <g id="g201">
                    <g id="g187">
                      <circle id="circle177" cx={68.388} cy={64.736} r={0.52} />
                      <circle id="circle179" cx={75.272} cy={64.736} r={0.52} />
                      <circle id="circle181" cx={82.155} cy={64.736} r={0.52} />
                      <circle id="circle183" cx={89.038} cy={64.736} r={0.52} />
                      <circle id="circle185" cx={95.921} cy={64.736} r={0.52} />
                    </g>
                    <g id="g199">
                      <circle id="circle189" cx={68.388} cy={64.736} r={0.52} />
                      <circle id="circle191" cx={75.272} cy={64.736} r={0.52} />
                      <circle id="circle193" cx={82.155} cy={64.736} r={0.52} />
                      <circle id="circle195" cx={89.038} cy={64.736} r={0.52} />
                      <circle id="circle197" cx={95.921} cy={64.736} r={0.52} />
                    </g>
                  </g>
                  <g id="g227">
                    <g id="g213">
                      <circle id="circle203" cx={68.388} cy={59.988} r={0.52} />
                      <circle id="circle205" cx={75.272} cy={59.988} r={0.52} />
                      <circle id="circle207" cx={82.155} cy={59.988} r={0.52} />
                      <circle id="circle209" cx={89.038} cy={59.988} r={0.52} />
                      <circle id="circle211" cx={95.921} cy={59.988} r={0.52} />
                    </g>
                    <g id="g225">
                      <circle id="circle215" cx={68.388} cy={59.988} r={0.52} />
                      <circle id="circle217" cx={75.272} cy={59.988} r={0.52} />
                      <circle id="circle219" cx={82.155} cy={59.988} r={0.52} />
                      <circle id="circle221" cx={89.038} cy={59.988} r={0.52} />
                      <circle id="circle223" cx={95.921} cy={59.988} r={0.52} />
                    </g>
                  </g>
                  <path
                    id="path229"
                    d="M29.899 60.628a1.414 1.414 0 11-2.828 0z"
                  />
                  <path
                    id="polygon231"
                    d="M1.972 35.125L10.505 35.125 10.505 35.625 2.472 35.625 2.472 71.032 1.972 71.032z"
                  />
                  <path id="rect233" d="M3.636 72.499H9.139V73.307H3.636z" />
                  <path
                    id="polygon235"
                    d="M18.386 70.666L23.139 70.666 23.139 71.474 19 71.474 19 74.724 18.386 74.724z"
                  />
                  <path
                    id="polygon237"
                    d="M50.136 70.666L54.889 70.666 54.889 71.474 50.75 71.474 50.75 74.724 50.136 74.724z"
                  />
                  <path
                    id="polygon239"
                    d="M67.886 71.916L72.639 71.916 72.639 72.724 68.5 72.724 68.5 74.974 67.886 74.974z"
                  />
                  <path
                    id="polygon241"
                    d="M84.136 71.916L88.889 71.916 88.889 72.724 84.75 72.724 84.75 74.974 84.136 74.974z"
                  />
                  <g id="g279">
                    <g id="g259">
                      <path
                        id="rect243"
                        d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                      />
                      <path
                        id="rect245"
                        d="M71.211 54.558H71.801V58.266H71.211z"
                      />
                      <path
                        id="rect247"
                        d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                      />
                      <path
                        id="rect249"
                        d="M73.03 54.558H73.62V58.266H73.03z"
                      />
                      <path
                        id="rect251"
                        d="M73.939 54.558H74.529V58.266H73.939z"
                      />
                      <path
                        id="rect253"
                        d="M74.848 54.558H75.438V58.266H74.848z"
                      />
                      <path
                        id="rect255"
                        d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                      />
                      <path
                        id="rect257"
                        d="M76.666 54.558H77.256V58.266H76.666z"
                      />
                    </g>
                    <g id="g277">
                      <path
                        id="rect261"
                        d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                      />
                      <path
                        id="rect263"
                        d="M71.211 54.558H71.801V58.266H71.211z"
                      />
                      <path
                        id="rect265"
                        d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                      />
                      <path
                        id="rect267"
                        d="M73.03 54.558H73.62V58.266H73.03z"
                      />
                      <path
                        id="rect269"
                        d="M73.939 54.558H74.529V58.266H73.939z"
                      />
                      <path
                        id="rect271"
                        d="M74.848 54.558H75.438V58.266H74.848z"
                      />
                      <path
                        id="rect273"
                        d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                      />
                      <path
                        id="rect275"
                        d="M76.666 54.558H77.256V58.266H76.666z"
                      />
                    </g>
                  </g>
                  <g id="g317">
                    <g id="g297">
                      <path
                        id="rect281"
                        d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                      />
                      <path
                        id="rect283"
                        d="M91.211 66.558H91.801V70.266H91.211z"
                      />
                      <path
                        id="rect285"
                        d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                      />
                      <path
                        id="rect287"
                        d="M93.03 66.558H93.62V70.266H93.03z"
                      />
                      <path
                        id="rect289"
                        d="M93.939 66.558H94.529V70.266H93.939z"
                      />
                      <path
                        id="rect291"
                        d="M94.848 66.558H95.438V70.266H94.848z"
                      />
                      <path
                        id="rect293"
                        d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                      />
                      <path
                        id="rect295"
                        d="M96.666 66.558H97.256V70.266H96.666z"
                      />
                    </g>
                    <g id="g315">
                      <path
                        id="rect299"
                        d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                      />
                      <path
                        id="rect301"
                        d="M91.211 66.558H91.801V70.266H91.211z"
                      />
                      <path
                        id="rect303"
                        d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                      />
                      <path
                        id="rect305"
                        d="M93.03 66.558H93.62V70.266H93.03z"
                      />
                      <path
                        id="rect307"
                        d="M93.939 66.558H94.529V70.266H93.939z"
                      />
                      <path
                        id="rect309"
                        d="M94.848 66.558H95.438V70.266H94.848z"
                      />
                      <path
                        id="rect311"
                        d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                      />
                      <path
                        id="rect313"
                        d="M96.666 66.558H97.256V70.266H96.666z"
                      />
                    </g>
                  </g>
                  <path id="rect319" d="M55.758 71.874H65.59V72.884H55.758z" />
                  <path
                    id="polygon321"
                    d="M48.754 69.921L37.71 69.921 42.02 72.951 49.562 72.951 49.562 70.729 48.754 70.729z"
                  />
                  <path
                    id="path323"
                    d="M32.727 45.369c0-.275-.225-.5-.5-.5h-.116a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5H30.5c-.275 0-.5.225-.5.5v.03c0 .275-.153.5-.341.5s-.341-.225-.341-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.24a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.054c-.275 0-.5.225-.5.5v3.015c0 .275.225.5.5.5h.054c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.24c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.153-.5.341-.5s.341.225.341.5v.03c0 .275.225.5.5.5h.612c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.116c.275 0 .5-.225.5-.5v-3.015z"
                  />
                  <path
                    id="path325"
                    d="M26.97 58.507h-.455c-.416 0-.874-.434-1.112-.862l-1.235-2.224c-.241-.435-.43-1.164-.43-1.661v-4.344h.606v4.344c0 .396.162 1.021.354 1.366l1.235 2.224c.185.334.486.55.582.552h.455z"
                  />
                  <path
                    id="path327"
                    d="M38.99 56.082h-6.263a1.112 1.112 0 01-1.111-1.11v-2.778a.506.506 0 00-.505-.505h-1.566c-.532 0-1.156-.223-1.452-.519-.295-.295-.518-.811-.518-1.198v-.556h.606v.556c0 .225.162.592.34.771.161.16.632.341 1.023.341h1.566c.613 0 1.111.498 1.111 1.11v2.778c0 .278.226.505.504.505h6.263a.506.506 0 00.505-.505v-1.818h.606v1.818a1.109 1.109 0 01-1.109 1.11z"
                  />
                  <path
                    id="path329"
                    d="M43.838 57.698H33.737a1.112 1.112 0 01-1.111-1.11v-2.627c0-.317-.262-.69-.56-.799-.575-.21-1.662-.987-1.662-2.434v-.908h.606v.908c0 1.377 1.213 1.845 1.265 1.864.536.195.958.797.958 1.368v2.627c0 .278.227.505.505.505h10.101a.506.506 0 00.505-.505v-1.213h.606v1.213c0 .613-.499 1.111-1.112 1.111z"
                  />
                  <path id="rect331" d="M83.232 45.45H85.118V46.773H83.232z" />
                  <path id="rect333" d="M93.872 45.45H95.758V46.773H93.872z" />
                  <path
                    id="polygon335"
                    d="M56.465 69.012L64.343 69.012 64.343 54.77 64.748 54.77 64.748 69.416 56.465 69.416z"
                  />
                  <path
                    id="path337"
                    d="M18.855 39.942h-7.138v.417h7.138a1.82 1.82 0 011.818 1.818c0-1.233-.816-2.235-1.818-2.235z"
                  />
                  <path
                    id="polygon339"
                    d="M48.215 77.282L3.165 77.282 3.165 82.358 4.175 82.358 4.175 78.292 48.215 78.292z"
                  />
                  <path
                    id="polygon341"
                    d="M96.768 77.282L51.717 77.282 51.717 82.358 52.727 82.358 52.727 78.292 96.768 78.292z"
                  />
                </g>
                <g id="hlight-0" fill="#fff">
                  <path
                    id="path344"
                    d="M49.572 37.8H37.98c-2.562 0-4.646 2.023-4.646 4.512 0-2.006 2.084-3.637 4.646-3.637h10.959a6.09 6.09 0 01.633-.875z"
                  />
                  <path
                    id="path346"
                    d="M28.485 52.648c1.053 0 1.933.734 2.162 1.717a2.222 2.222 0 10-4.324 0 2.221 2.221 0 012.162-1.717z"
                  />
                  <path
                    id="polygon348"
                    d="M56.114 54.418L64.242 54.418 64.242 54.918 56.614 54.918 56.614 69.314 56.114 69.314z"
                  />
                  <path id="rect350" d="M49.625 44.25H57.5V44.75H49.625z" />
                  <path
                    id="path352"
                    d="M54.141 36.52a6.056 6.056 0 016.04 5.657c.009-.134.02-.268.02-.404a6.06 6.06 0 10-12.122 0c0 .136.012.27.02.404.211-3.158 2.832-5.657 6.042-5.657z"
                  />
                  <path id="rect354" d="M12.929 46.474H18.855V47.821H12.929z" />
                  <path id="path356" d="M27.534 54.205a.951.951 0 011.902 0" />
                  <path
                    id="path358"
                    d="M18.855 37.53h-7.138v.5h7.138c2.562 0 4.646 1.86 4.646 4.146a4.651 4.651 0 00-4.646-4.646z"
                  />
                  <path id="rect360" d="M55.421 51.066H65.589V52.076H55.421z" />
                </g>
              </g>
            </g>
          </g>
          <g
            id="g4030-4-3-9-7-40"
            transform="matrix(.20604 0 0 .21647 35.668 -3.115)"
            opacity={0.999}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-3-9-5"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.8}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-5-1-7"
            fill="none"
            opacity={0.66}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.0978}
            stroke="#00fbff"
            d="M49.809 3.2408H59.6196V6.440300000000001H49.809z"
          />
          <text
            id="alt1-9"
            transform="scale(.95616 1.0458)"
            x={47.895714}
            y={14.898335}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-58"
              x={47.895714}
              y={14.898335}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen3.volt_gen3}
            </tspan>
          </text>
          <text
            id="alt2-19"
            transform="scale(.95616 1.0458)"
            x={47.944908}
            y={18.438925}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-39"
              x={47.944908}
              y={18.438925}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen3.amp_gen3}
            </tspan>
          </text>
          <text
            id="alt3-9"
            transform="scale(.95616 1.0458)"
            x={47.693588}
            y={21.890265}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-9-3"
              x={47.693588}
              y={21.890265}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen3.kw_gen3}
            </tspan>
          </text>
          <text
            id="alt4-54"
            transform="scale(.95616 1.0458)"
            x={49.755219}
            y={25.488028}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-2"
              x={49.755219}
              y={25.488028}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen3.carga_gen3}
            </tspan>
          </text>
          <g id="g8295" 
                //className={gen3.barra2_gen3}
                opacity={0.999}>
            <g id="g7909">
              <g
                id="g6502-5-2-1-6-5-9"
                transform="matrix(.39838 0 0 .18319 18.798 48.319)"
              >
                <g
                  id="g15-9-0-5-0-7-4-3-7-6"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                >
                  <g id="frame-2-7-1-1-2-5-9-5-89-94">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-6-9"
                      fill="none"
                      d="M0 0H100V100H0z"
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-0-8" 
                        
                        fill="#0ff">
                    <path
                      id="rect7-4-1-8-4-3-3-4-3-4"
                      fill="#0ff"
                      className={gen3.contacto_gen3}
                      d="M0 38.5H100V63.5H0z"
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-7-7" fill="#0ff">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-65-4"
                      d="M0 37.5H100V38.5H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-1-9"
                      d="M0 61.5H100V62.5H0z"
                    />
                  </g>
                </g>
              </g>
              <path
                id="path18021-7-5"
                d="M37.232 65.163l-3.013-5.524z"
                //fill="#00f"                
                strokeOpacity={0.99216}
                strokeWidth={0.49047}
                stroke="#fc0"
                className={gen3.barra2_gen3}
              />
              <ellipse
                id="path17699-3-27-2"
                cx={38.363}
                cy={65.718}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#ff0"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
              <ellipse
                id="path17699-3-27-9-4"
                cx={38.395}
                cy={60.208}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#767676"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
            </g>
            <g id="g7920">
              <g
                id="g6502-5-2-1-6-2-3-1"
                transform="matrix(.7902 0 0 .68831 -.474 17.346)"
                strokeWidth={0.99948}
              >
                <g
                  id="g15-9-0-5-0-7-4-3-9-5-1"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                  strokeWidth={10.227}
                >
                  <g id="frame-2-7-1-1-2-5-9-5-8-0-17">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-0-2-7"
                      d="M0 0h100v100H0z"
                      fill="none"
                      strokeWidth={10.227}
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-1-0-3" fill="#00f">
                    <path
                      id="rect7-4-1-8-4-3-3-4-9-0-3"
                      d="M0 38.5h100v25H0z"
                      fill="#fc0"
                      strokeWidth={10.227}
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-8-7-9" fill="#fc0">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-6-8-9"
                      d="M0 37.5h100v1H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-4-8-20"
                      d="M0 61.5h100v1H0z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <text
            id="alt4-1-9"
            transform="scale(.95616 1.0458)"
            x={49.75132}
            y={29.076757}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-1-1"
              x={49.75132}
              y={29.076757}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen3.diesel_gen3}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-78"
            transform="scale(.9421 1.0615)"
            x={58.934032}
            y={14.684592}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-84"
              x={58.934032}
              y={14.684592}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"VOLTAGE "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-8-5"
            transform="scale(.9421 1.0615)"
            x={59.001675}
            y={18.182777}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-4-53"
              x={59.001675}
              y={18.182777}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"AMPERE"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-44-4"
            transform="scale(.9421 1.0615)"
            x={58.876461}
            y={21.616859}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-9-49"
              x={58.876461}
              y={21.616859}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"KW "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-4-4-3"
            transform="scale(.9421 1.0615)"
            x={58.88467}
            y={25.139641}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-7-6-6"
              x={58.88467}
              y={25.139641}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% CARGA "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-7-5-3"
            transform="scale(.9421 1.0615)"
            x={58.90414}
            y={28.666189}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2594-6-1-6-3-0-28"
              x={58.90414}
              y={28.666189}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% DIESEL"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-3-71"
            transform="scale(1.0593 .94402)"
            x={48.535316}
            y={11.062773}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#ff0"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.6668px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.20001}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-0-2"
              x={48.535316}
              y={11.062773}
              fill="#ff0"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.699px"
              strokeWidth={0.20001}
            >
              {gen3.modo_gen3}
            </tspan>
          </text>
          <g id="g7895" 
          className={gen3.barra1_gen3}
          opacity={0.999}>
            <g
              id="g6485"
              transform="matrix(.0867 0 0 .8143 39.475 -16.363) matrix(.39463 0 0 .06066 16.589 68.304)"
              fill="#fc0"
            >
              <g id="shape-3-7">
                <path id="rect7-5"
                 fill="#fc0" 
                 className={gen3.barra1_gen3}
                 d="M0 37.5H100V62.5H0z" />
              </g>
              <g id="dark-1-8">
                <path id="rect10-3-3" d="M0 37.5H100V38.5H0z" />
                <path id="rect12-1-5" d="M0 61.5H100V62.5H0z" />
              </g>
            </g>
            <g
              id="g6492"
              transform="matrix(.83717 0 0 .8143 26.583 -16.363) matrix(-.06085 0 0 .06085 17.118 68.292)"
              fill="#fc0"
            >
              <g id="shape-1-4">
                <path
                  id="path7-0-7"
                  d="M25 37.5H0v25h25c6.904 0 12.5 5.596 12.5 12.5v25h25V75c0-20.711-16.789-37.5-37.5-37.5z"
                  fill="#fc0"
                  className={gen3.barra1_gen3}
                />
              </g>
              <g id="dark-81-46">
                <path
                  id="path10-90"
                  d="M25 37.5H0v1h25c20.126 0 36.5 16.374 36.5 36.5v25h1V75c0-20.711-16.789-37.5-37.5-37.5z"
                />
                <path
                  id="path12-8-2"
                  d="M38.5 75c0-7.444-6.056-13.5-13.5-13.5H0v1h25c6.904 0 12.5 5.596 12.5 12.5v25h1z"
                />
              </g>
            </g>
            <g
              id="g6502-5-2-0"
              transform="matrix(.83717 0 0 .94237 -2.728 -23.738)"
              opacity={0.999}
            >
              <g
                id="g15-9-0-5-0-7-42"
                transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
              >
                <g id="frame-2-7-1-1-2-5-93">
                  <path
                    id="rect4-5-1-5-8-0-73-1"
                    fill="none"
                    d="M0 0H100V100H0z"
                  />
                </g>
                <g id="dark-1-2-6-5-0-9-6" fill="#00f">
                  <g id="g7817" fill="#fc0">
                    <g id="shape-3-0-6-6-6-1-6" opacity={0.999}>
                      <path
                        id="rect7-4-1-8-4-3-0"
                        fill="#fc0"
                        className={gen3.barra1_gen3}
                        d="M0 37.5H100V62.5H0z"
                      />
                    </g>
                    <path id="rect10-3-0-53-9-6-7-1" d="M0 37.5H100V38.5H0z" />
                    <path id="rect12-1-0-3-2-4-65-48" d="M0 61.5H100V62.5H0z" />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <path
            id="estado_eq-4-7"
            className={gen3.boton_gen3}
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-2)"
            opacity={0.999}
            strokeWidth={0.045384}
            d="M49.809 3.2408H59.6196V6.440300000000001H49.809z"
          />
          <text
            id="gen_nom_on-3-0-9"
            transform="scale(.92249 1.084)"
            x={54.545197}
            y={5.5018392}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.6194px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.098226}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-3-3-2"
              x={54.545197}
              y={5.5018392}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.0453px"
              strokeWidth={0.098226}
            >
              {"GEN - 3"}
            </tspan>
          </text>
        </g>
        <g id="g14294">
          <g
            id="g5606"
            className={gen2.color_gen2}
            transform="matrix(.83717 0 0 .8143 .45 -4.433)"
            opacity={0.999}
          >
            <g id="g4211-7" transform="matrix(.32531 0 0 .35265 79.204 37.372)">
              <g id="g4023-2" transform="translate(-341.25 -93.544)">
                <g id="g363-6" transform="matrix(-1 0 0 1 495.88 85.312)">
                  <g id="shape-4-3" 
                  className={gen2.color_gen2}
                  fill="#999">
                    <path
                      id="rect4-58"
                      d="M0 74.984H100V82.35799999999999H0z"
                    />
                    <path
                      id="polygon6-7"
                      d="M18.855 69.921L18.855 44.87 47.475 44.87 54.545 51.066 54.545 72.951 42.02 72.951 37.71 69.921z"
                    />
                    <path
                      id="rect8-1"
                      d="M12.929 46.474H25.32V61.571H12.929z"
                    />
                    <path
                      id="rect10-23"
                      d="M48.754 52.4H61.144999999999996V70.729H48.754z"
                    />
                    <path
                      id="rect12-2"
                      d="M10.774 50.783H25.319V57.261H10.774z"
                    />
                    <path
                      id="rect14-0"
                      d="M55.421 51.066H65.589V72.884H55.421z"
                    />
                    <path
                      id="rect16-7"
                      d="M65.387 52.646H98.114V71.065H65.387z"
                    />
                    <path
                      id="rect18-4"
                      d="M81.919 46.756H97.205V52.647H81.919z"
                    />
                    <path
                      id="polygon20-6"
                      d="M81.919 45.476L81.919 33.086 99.226 33.086 97.205 45.476z"
                    />
                    <circle id="circle22-6" cx={54.141} cy={41.773} r={6.061} />
                    <path
                      id="rect24-6-4"
                      d="M2.694 71.537H10.100999999999999V76.385H2.694z"
                    />
                    <path
                      id="rect26-8"
                      d="M17.576 69.921H23.771V76.38600000000001H17.576z"
                    />
                    <path
                      id="rect28-8"
                      d="M49.562 69.921H55.757V76.38600000000001H49.562z"
                    />
                    <path
                      id="rect30-8"
                      d="M67.475 69.921H73.66999999999999V76.38600000000001H67.475z"
                    />
                    <path
                      id="rect32-8"
                      d="M83.367 69.921H89.56200000000001V76.38600000000001H83.367z"
                    />
                    <path
                      id="rect34-9"
                      d="M26.465 32.21H31.044V45.139H26.465z"
                    />
                    <path
                      id="rect36-0"
                      d="M25.589 37.867H31.918999999999997V39.483H25.589z"
                    />
                    <path
                      id="path38-6"
                      d="M23.501 45.679h-2.828v-3.502a1.82 1.82 0 00-1.818-1.818h-8.081V37.53h8.081a4.651 4.651 0 014.646 4.646z"
                    />
                    <path
                      id="path40-4"
                      d="M44.579 49.113h-2.828v-3.502a4.65 4.65 0 014.646-4.646h8.889v2.828h-8.889a1.82 1.82 0 00-1.818 1.818z"
                    />
                    <path
                      id="polygon42-5"
                      d="M47.172 49.82L47.172 44.702 58.485 44.702 53.434 49.82z"
                    />
                    <path
                      id="path44-0"
                      d="M36.162 45.409h-2.828v-3.098c0-2.488 2.084-4.512 4.646-4.512h15.892v2.828H37.98c-1.002 0-1.818.755-1.818 1.684z"
                    />
                    <path
                      id="path46-8-5"
                      d="M24.444 33.692c0-1.339 1.93-2.424 4.31-2.424s4.31 1.085 4.31 2.424"
                    />
                  </g>
                  <g id="light-2-8"
                  className={gen2.color_gen2}
                  fill="#ccc">
                    <path
                      id="rect49-6"
                      d="M65.387 52.646H98.114V58.69H65.387z"
                    />
                    <path
                      id="rect51-5"
                      d="M26.465 39.483H31.044V45.14H26.465z"
                    />
                    <path
                      id="rect53-9"
                      d="M26.465 33.692H31.044V37.867H26.465z"
                    />
                    <path
                      id="rect55-6"
                      d="M1.212 34.062H11.717V72.345H1.212z"
                    />
                  </g>
                  <g id="linear-6-5">
                    <path
                      id="rect63-6"
                      className="linear"
                      fill="url(#SVGID_1_-99)"
                      d="M37.172 47.093H41.616V53.154H37.172z"
                    />
                    <path
                      id="rect70-2"
                      className="linear"
                      fill="url(#SVGID_2_-1)"
                      d="M43.596 52.951H45.373999999999995V55.375H43.596z"
                    />
                    <path
                      id="rect77-7"
                      className="linear"
                      fill="url(#SVGID_3_-90)"
                      d="M41.818 47.093H47.150999999999996V54.366H41.818z"
                    />
                  </g>
                  <g id="dark-3-1" fill="#4d4d4d">
                    <path
                      id="rect80-9"
                      d="M51.717 77.282H96.768V82.35799999999999H51.717z"
                    />
                    <path
                      id="rect82-4"
                      d="M3.165 77.282H48.216V82.35799999999999H3.165z"
                    />
                    <path
                      id="polygon84-9"
                      d="M57.422 45.779L54.04 45.779 54.04 49.206z"
                    />
                    <circle id="circle86-5" cx={54.141} cy={41.773} r={2.02} />
                    <path
                      id="rect88-4"
                      d="M21.886 68.911H51.986999999999995V69.921H21.886z"
                    />
                    <path
                      id="polygon90-8"
                      d="M24.646 68.911L24.646 66.689 26.667 66.689 26.667 66.285 24.646 66.285 24.04 66.285 24.04 66.689 24.04 68.911z"
                    />
                    <path
                      id="polygon92-2"
                      d="M28.721 68.911L28.721 66.689 30.741 66.689 30.741 66.285 28.721 66.285 28.114 66.285 28.114 66.689 28.114 68.911z"
                    />
                    <path
                      id="polygon94-7"
                      d="M32.795 68.911L32.795 66.689 34.815 66.689 34.815 66.285 32.795 66.285 32.189 66.285 32.189 66.689 32.189 68.911z"
                    />
                    <path
                      id="polygon96-5"
                      d="M36.869 68.911L36.869 66.689 38.889 66.689 38.889 66.285 36.869 66.285 36.263 66.285 36.263 66.689 36.263 68.911z"
                    />
                    <path
                      id="polygon98-3"
                      d="M40.943 68.911L40.943 66.689 42.963 66.689 42.963 66.285 40.943 66.285 40.337 66.285 40.337 66.689 40.337 68.911z"
                    />
                    <path
                      id="polygon100-5"
                      d="M45.017 68.911L45.017 66.689 47.037 66.689 47.037 66.285 45.017 66.285 44.411 66.285 44.411 66.689 44.411 68.911z"
                    />
                    <path
                      id="polygon102-2"
                      d="M49.091 68.911L49.091 66.689 51.111 66.689 51.111 66.285 49.091 66.285 48.485 66.285 48.485 66.689 48.485 68.911z"
                    />
                    <path
                      id="polygon104-2"
                      d="M24.646 68.911L24.646 66.689 26.667 66.689 26.667 66.285 24.646 66.285 24.04 66.285 24.04 66.689 24.04 68.911z"
                    />
                    <path
                      id="polygon106-6"
                      d="M28.721 68.911L28.721 66.689 30.741 66.689 30.741 66.285 28.721 66.285 28.114 66.285 28.114 66.689 28.114 68.911z"
                    />
                    <path
                      id="polygon108-6"
                      d="M32.795 68.911L32.795 66.689 34.815 66.689 34.815 66.285 32.795 66.285 32.189 66.285 32.189 66.689 32.189 68.911z"
                    />
                    <path
                      id="polygon110-4"
                      d="M36.869 68.911L36.869 66.689 38.889 66.689 38.889 66.285 36.869 66.285 36.263 66.285 36.263 66.689 36.263 68.911z"
                    />
                    <path
                      id="polygon112-4"
                      d="M40.943 68.911L40.943 66.689 42.963 66.689 42.963 66.285 40.943 66.285 40.337 66.285 40.337 66.689 40.337 68.911z"
                    />
                    <path
                      id="polygon114-9"
                      d="M45.017 68.911L45.017 66.689 47.037 66.689 47.037 66.285 45.017 66.285 44.411 66.285 44.411 66.689 44.411 68.911z"
                    />
                    <path
                      id="polygon116-4"
                      d="M49.091 68.911L49.091 66.689 51.111 66.689 51.111 66.285 49.091 66.285 48.485 66.285 48.485 66.689 48.485 68.911z"
                    />
                    <path
                      id="polygon118-2"
                      d="M34.545 59.618L34.545 63.456 35.152 63.456 35.152 60.224 49.293 60.224 49.293 59.618z"
                    />
                    <path
                      id="path120-6"
                      d="M28.485 62.85a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                    />
                    <path
                      id="rect122-0"
                      d="M51.111 55.982H55.555V62.851H51.111z"
                    />
                    <path
                      id="rect124-7"
                      d="M65.387 65.207H98.114V71.06599999999999H65.387z"
                    />
                    <path
                      id="rect126-8"
                      d="M12.929 60.224H18.855V61.571H12.929z"
                    />
                    <path
                      id="path128-4"
                      d="M28.485 55.577a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                    />
                    <path
                      id="path130-2"
                      d="M27.071 54.567a1.414 1.414 0 112.828 0v6.061a1.414 1.414 0 11-2.828 0z"
                    />
                    <path
                      id="rect132-3"
                      d="M81.919 47.516H97.205V48.016H81.919z"
                    />
                  </g>
                  <g id="shadow-3-2">
                    <path
                      id="rect135-6"
                      d="M56.927 55.308H57.517V68.641H56.927z"
                    />
                    <path
                      id="rect137-3"
                      d="M57.836 55.308H58.426V68.641H57.836z"
                    />
                    <path
                      id="rect139-0"
                      d="M58.745 55.308H59.335V68.641H58.745z"
                    />
                    <path
                      id="rect141-6"
                      d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                    />
                    <path
                      id="rect143-4"
                      d="M60.564 55.308H61.154V68.641H60.564z"
                    />
                    <path
                      id="rect145-7"
                      d="M61.473 55.308H62.063V68.641H61.473z"
                    />
                    <path
                      id="rect147-8"
                      d="M62.382 55.308H62.972V68.641H62.382z"
                    />
                    <path
                      id="rect149-9"
                      d="M63.291 55.308H63.881V68.641H63.291z"
                    />
                    <path
                      id="rect151-3"
                      d="M56.927 55.308H57.517V68.641H56.927z"
                    />
                    <path
                      id="rect153-2"
                      d="M57.836 55.308H58.426V68.641H57.836z"
                    />
                    <path
                      id="rect155-4"
                      d="M58.745 55.308H59.335V68.641H58.745z"
                    />
                    <path
                      id="rect157-1"
                      d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                    />
                    <path
                      id="rect159-7"
                      d="M60.564 55.308H61.154V68.641H60.564z"
                    />
                    <path
                      id="rect161-7"
                      d="M61.473 55.308H62.063V68.641H61.473z"
                    />
                    <path
                      id="rect163-8"
                      d="M62.382 55.308H62.972V68.641H62.382z"
                    />
                    <path
                      id="rect165-2"
                      d="M63.291 55.308H63.881V68.641H63.291z"
                    />
                    <path
                      id="path167-6"
                      d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                    />
                    <path
                      id="path169-7"
                      d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                    />
                    <path
                      id="path171-5"
                      d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                    />
                    <path
                      id="path173-2"
                      d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                    />
                    <path
                      id="path175-4"
                      d="M36.162 44.87v-2.559c0-.929.816-1.684 1.818-1.684h10.212c.024-.127.056-.251.088-.375H37.419c-1.038 0-1.883.814-1.883 1.816v2.802z"
                    />
                    <g id="g201-1">
                      <g id="g187-7">
                        <circle
                          id="circle177-9"
                          cx={68.388}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle179-4"
                          cx={75.272}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle181-0"
                          cx={82.155}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle183-3"
                          cx={89.038}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle185-9"
                          cx={95.921}
                          cy={64.736}
                          r={0.52}
                        />
                      </g>
                      <g id="g199-8">
                        <circle
                          id="circle189-4"
                          cx={68.388}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle191-1"
                          cx={75.272}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle193-9"
                          cx={82.155}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle195-4"
                          cx={89.038}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle197-2"
                          cx={95.921}
                          cy={64.736}
                          r={0.52}
                        />
                      </g>
                    </g>
                    <g id="g227-7">
                      <g id="g213-4">
                        <circle
                          id="circle203-1"
                          cx={68.388}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle205-0"
                          cx={75.272}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle207-4"
                          cx={82.155}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle209-3"
                          cx={89.038}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle211-5"
                          cx={95.921}
                          cy={59.988}
                          r={0.52}
                        />
                      </g>
                      <g id="g225-8">
                        <circle
                          id="circle215-1"
                          cx={68.388}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle217-0"
                          cx={75.272}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle219-2"
                          cx={82.155}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle221-4"
                          cx={89.038}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle223-1"
                          cx={95.921}
                          cy={59.988}
                          r={0.52}
                        />
                      </g>
                    </g>
                    <path
                      id="path229-5"
                      d="M29.899 60.628a1.414 1.414 0 11-2.828 0z"
                    />
                    <path
                      id="polygon231-5"
                      d="M10.505 35.125L10.505 35.625 2.472 35.625 2.472 71.032 1.972 71.032 1.972 35.125z"
                    />
                    <path
                      id="rect233-0"
                      d="M3.636 72.499H9.139V73.307H3.636z"
                    />
                    <path
                      id="polygon235-1"
                      d="M23.139 70.666L23.139 71.474 19 71.474 19 74.724 18.386 74.724 18.386 70.666z"
                    />
                    <path
                      id="polygon237-8"
                      d="M54.889 70.666L54.889 71.474 50.75 71.474 50.75 74.724 50.136 74.724 50.136 70.666z"
                    />
                    <path
                      id="polygon239-4"
                      d="M72.639 71.916L72.639 72.724 68.5 72.724 68.5 74.974 67.886 74.974 67.886 71.916z"
                    />
                    <path
                      id="polygon241-4"
                      d="M88.889 71.916L88.889 72.724 84.75 72.724 84.75 74.974 84.136 74.974 84.136 71.916z"
                    />
                    <g id="g279-6">
                      <g id="g259-9">
                        <path
                          id="rect243-3"
                          d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                        />
                        <path
                          id="rect245-9"
                          d="M71.211 54.558H71.801V58.266H71.211z"
                        />
                        <path
                          id="rect247-0"
                          d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                        />
                        <path
                          id="rect249-4"
                          d="M73.03 54.558H73.62V58.266H73.03z"
                        />
                        <path
                          id="rect251-3"
                          d="M73.939 54.558H74.529V58.266H73.939z"
                        />
                        <path
                          id="rect253-3"
                          d="M74.848 54.558H75.438V58.266H74.848z"
                        />
                        <path
                          id="rect255-0"
                          d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                        />
                        <path
                          id="rect257-5"
                          d="M76.666 54.558H77.256V58.266H76.666z"
                        />
                      </g>
                      <g id="g277-4">
                        <path
                          id="rect261-1"
                          d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                        />
                        <path
                          id="rect263-8"
                          d="M71.211 54.558H71.801V58.266H71.211z"
                        />
                        <path
                          id="rect265-0"
                          d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                        />
                        <path
                          id="rect267-7"
                          d="M73.03 54.558H73.62V58.266H73.03z"
                        />
                        <path
                          id="rect269-1"
                          d="M73.939 54.558H74.529V58.266H73.939z"
                        />
                        <path
                          id="rect271-5"
                          d="M74.848 54.558H75.438V58.266H74.848z"
                        />
                        <path
                          id="rect273-7"
                          d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                        />
                        <path
                          id="rect275-0"
                          d="M76.666 54.558H77.256V58.266H76.666z"
                        />
                      </g>
                    </g>
                    <g id="g317-2">
                      <g id="g297-1">
                        <path
                          id="rect281-9"
                          d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                        />
                        <path
                          id="rect283-3"
                          d="M91.211 66.558H91.801V70.266H91.211z"
                        />
                        <path
                          id="rect285-7"
                          d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                        />
                        <path
                          id="rect287-6"
                          d="M93.03 66.558H93.62V70.266H93.03z"
                        />
                        <path
                          id="rect289-3"
                          d="M93.939 66.558H94.529V70.266H93.939z"
                        />
                        <path
                          id="rect291-0"
                          d="M94.848 66.558H95.438V70.266H94.848z"
                        />
                        <path
                          id="rect293-0"
                          d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                        />
                        <path
                          id="rect295-5"
                          d="M96.666 66.558H97.256V70.266H96.666z"
                        />
                      </g>
                      <g id="g315-8">
                        <path
                          id="rect299-3"
                          d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                        />
                        <path
                          id="rect301-2"
                          d="M91.211 66.558H91.801V70.266H91.211z"
                        />
                        <path
                          id="rect303-1"
                          d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                        />
                        <path
                          id="rect305-6"
                          d="M93.03 66.558H93.62V70.266H93.03z"
                        />
                        <path
                          id="rect307-1"
                          d="M93.939 66.558H94.529V70.266H93.939z"
                        />
                        <path
                          id="rect309-8"
                          d="M94.848 66.558H95.438V70.266H94.848z"
                        />
                        <path
                          id="rect311-0"
                          d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                        />
                        <path
                          id="rect313-1"
                          d="M96.666 66.558H97.256V70.266H96.666z"
                        />
                      </g>
                    </g>
                    <path
                      id="rect319-4"
                      d="M55.758 71.874H65.59V72.884H55.758z"
                    />
                    <path
                      id="polygon321-4"
                      d="M37.71 69.921L42.02 72.951 49.562 72.951 49.562 70.729 48.754 70.729 48.754 69.921z"
                    />
                    <path
                      id="path323-8"
                      d="M32.727 45.369c0-.275-.225-.5-.5-.5h-.116a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5H30.5c-.275 0-.5.225-.5.5v.03c0 .275-.153.5-.341.5s-.341-.225-.341-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.24a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.054c-.275 0-.5.225-.5.5v3.015c0 .275.225.5.5.5h.054c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.24c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.153-.5.341-.5s.341.225.341.5v.03c0 .275.225.5.5.5h.612c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.116c.275 0 .5-.225.5-.5v-3.015z"
                    />
                    <path
                      id="path325-1"
                      d="M26.97 58.507h-.455c-.416 0-.874-.434-1.112-.862l-1.235-2.224c-.241-.435-.43-1.164-.43-1.661v-4.344h.606v4.344c0 .396.162 1.021.354 1.366l1.235 2.224c.185.334.486.55.582.552h.455z"
                    />
                    <path
                      id="path327-2"
                      d="M38.99 56.082h-6.263a1.112 1.112 0 01-1.111-1.11v-2.778a.506.506 0 00-.505-.505h-1.566c-.532 0-1.156-.223-1.452-.519-.295-.295-.518-.811-.518-1.198v-.556h.606v.556c0 .225.162.592.34.771.161.16.632.341 1.023.341h1.566c.613 0 1.111.498 1.111 1.11v2.778c0 .278.226.505.504.505h6.263a.506.506 0 00.505-.505v-1.818h.606v1.818a1.109 1.109 0 01-1.109 1.11z"
                    />
                    <path
                      id="path329-6"
                      d="M43.838 57.698H33.737a1.112 1.112 0 01-1.111-1.11v-2.627c0-.317-.262-.69-.56-.799-.575-.21-1.662-.987-1.662-2.434v-.908h.606v.908c0 1.377 1.213 1.845 1.265 1.864.536.195.958.797.958 1.368v2.627c0 .278.227.505.505.505h10.101a.506.506 0 00.505-.505v-1.213h.606v1.213c0 .613-.499 1.111-1.112 1.111z"
                    />
                    <path
                      id="rect331-0"
                      d="M83.232 45.45H85.118V46.773H83.232z"
                    />
                    <path
                      id="rect333-7"
                      d="M93.872 45.45H95.758V46.773H93.872z"
                    />
                    <path
                      id="polygon335-9"
                      d="M64.343 69.012L64.343 54.77 64.748 54.77 64.748 69.416 56.465 69.416 56.465 69.012z"
                    />
                    <path
                      id="path337-8"
                      d="M18.855 39.942h-7.138v.417h7.138a1.82 1.82 0 011.818 1.818c0-1.233-.816-2.235-1.818-2.235z"
                    />
                    <path
                      id="polygon339-5"
                      d="M3.165 77.282L3.165 82.358 4.175 82.358 4.175 78.292 48.215 78.292 48.215 77.282z"
                    />
                    <path
                      id="polygon341-9"
                      d="M51.717 77.282L51.717 82.358 52.727 82.358 52.727 78.292 96.768 78.292 96.768 77.282z"
                    />
                  </g>
                  <g id="hlight-0-9" fill="#fff">
                    <path
                      id="path344-2"
                      d="M49.572 37.8H37.98c-2.562 0-4.646 2.023-4.646 4.512 0-2.006 2.084-3.637 4.646-3.637h10.959a6.09 6.09 0 01.633-.875z"
                    />
                    <path
                      id="path346-0"
                      d="M28.485 52.648c1.053 0 1.933.734 2.162 1.717a2.222 2.222 0 10-4.324 0 2.221 2.221 0 012.162-1.717z"
                    />
                    <path
                      id="polygon348-0"
                      d="M64.242 54.418L64.242 54.918 56.614 54.918 56.614 69.314 56.114 69.314 56.114 54.418z"
                    />
                    <path id="rect350-5" d="M49.625 44.25H57.5V44.75H49.625z" />
                    <path
                      id="path352-6"
                      d="M54.141 36.52a6.056 6.056 0 016.04 5.657c.009-.134.02-.268.02-.404a6.06 6.06 0 10-12.122 0c0 .136.012.27.02.404.211-3.158 2.832-5.657 6.042-5.657z"
                    />
                    <path
                      id="rect354-3"
                      d="M12.929 46.474H18.855V47.821H12.929z"
                    />
                    <path
                      id="path356-2"
                      d="M27.534 54.205a.951.951 0 011.902 0"
                    />
                    <path
                      id="path358-6"
                      d="M18.855 37.53h-7.138v.5h7.138c2.562 0 4.646 1.86 4.646 4.146a4.651 4.651 0 00-4.646-4.646z"
                    />
                    <path
                      id="rect360-1"
                      d="M55.421 51.066H65.589V52.076H55.421z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g
            id="g4030-4-3-9-7-3-1"
            transform="matrix(.20604 0 0 .21647 73.575 -3.115)"
            opacity={0.999}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-3-9-4-2"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.8}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-5-1-6-9"
            fill="none"
            opacity={0.66}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.0978}
            stroke="#00fbff"
            d="M87.716 3.2408H97.5266V6.440300000000001H87.716z"
          />
          <text
            id="alt1-1-5"
            transform="scale(.95616 1.0458)"
            x={87.54039}
            y={14.898331}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-5-1"
              x={87.54039}
              y={14.898331}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen2.volt_gen2}
            </tspan>
          </text>
          <text
            id="alt2-8-5"
            transform="scale(.95616 1.0458)"
            x={87.589584}
            y={18.438921}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-5-2"
              x={87.589584}
              y={18.438921}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen2.amp_gen2}
            </tspan>
          </text>
          <text
            id="alt3-4-0"
            transform="scale(.95616 1.0458)"
            x={87.338272}
            y={21.890276}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-9-2-8"
              x={87.338272}
              y={21.890276}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen2.kw_gen2}
            </tspan>
          </text>
          <text
            id="alt4-17-0"
            transform="scale(.95616 1.0458)"
            x={89.399902}
            y={25.488024}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-9-8"
              x={89.399902}
              y={25.488024}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen2.carga_gen2}
            </tspan>
          </text>
          <text
            id="alt4-1-3-4"
            transform="scale(.95616 1.0458)"
            x={89.395996}
            y={29.076754}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-1-6-2"
              x={89.395996}
              y={29.076754}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen2.diesel_gen2}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-7-6"
            transform="scale(.9421 1.0615)"
            x={99.170433}
            y={14.684608}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-8-2"
              x={99.170433}
              y={14.684608}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"VOLTAGE "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-8-1-2"
            transform="scale(.9421 1.0615)"
            x={99.238075}
            y={18.182793}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-4-6-5"
              x={99.238075}
              y={18.182793}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"AMPERE"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-44-2-7"
            transform="scale(.9421 1.0615)"
            x={99.112862}
            y={21.616875}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-9-4-3"
              x={99.112862}
              y={21.616875}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"KW "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-4-4-5-6"
            transform="scale(.9421 1.0615)"
            x={99.121071}
            y={25.139656}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-7-6-4-7"
              x={99.121071}
              y={25.139656}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% CARGA "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-7-5-4-6"
            transform="scale(.9421 1.0615)"
            x={99.140541}
            y={28.666206}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2594-6-1-6-3-0-2-6"
              x={99.140541}
              y={28.666206}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% DIESEL"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-3-1-5"
            transform="scale(1.0593 .94402)"
            x={84.320137}
            y={11.06278}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#ff0"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.6668px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.20001}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-0-6-1"
              x={84.320137}
              y={11.06278}
              fill="#ff0"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.699px"
              strokeWidth={0.20001}
            >
              {gen2.modo_gen2}
            </tspan>
          </text>
          <g id="g7945-8"
          //className={gen2.barra2_gen2}
           transform="translate(37.814 .016)" 
           opacity={0.999}>
            <g id="g7909-3">
              <g
                id="g6502-5-2-1-6-5-9-1"
                transform="matrix(.39838 0 0 .18319 18.798 48.319)"
              >
                <g
                  id="g15-9-0-5-0-7-4-3-7-6-4"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                >
                  <g id="frame-2-7-1-1-2-5-9-5-89-94-8">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-6-9-0"
                      fill="none"
                      d="M0 0H100V100H0z"
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-0-8-1" 
                        
                        fill="#0ff">
                    <path
                      id="rect7-4-1-8-4-3-3-4-3-4-8"
                      fill="#0ff"
                      className={gen2.contacto_gen2}
                      d="M0 38.5H100V63.5H0z"
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-7-7-2" fill="#0ff">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-65-4-0"
                      d="M0 37.5H100V38.5H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-1-9-2"
                      d="M0 61.5H100V62.5H0z"
                    />
                  </g>
                </g>
              </g>
              <path
                id="path18021-7-5-6"
                d="M37.232 65.163l-3.013-5.524z"
                //fill="#00f"                
                strokeOpacity={0.99216}
                strokeWidth={0.49047}
                //opacity={0}
                stroke="#fc0"
                className={gen2.barra2_gen2}
              />
              <ellipse
                id="path17699-3-27-2-0"
                cx={38.363}
                cy={65.718}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#ff0"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
              <ellipse
                id="path17699-3-27-9-4-8"
                cx={38.395}
                cy={60.208}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#767676"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
            </g>
            <g id="g7920-8">
              <g
                id="g6502-5-2-1-6-2-3-1-1"
                transform="matrix(.7902 0 0 .68831 -.474 17.346)"
                strokeWidth={0.99948}
              >
                <g
                  id="g15-9-0-5-0-7-4-3-9-5-1-3"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                  strokeWidth={10.227}
                >
                  <g id="frame-2-7-1-1-2-5-9-5-8-0-17-5">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-0-2-7-8"
                      d="M0 0h100v100H0z"
                      fill="none"
                      strokeWidth={10.227}
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-1-0-3-3" fill="#00f">
                    <path
                      id="rect7-4-1-8-4-3-3-4-9-0-3-3"
                      d="M0 38.5h100v25H0z"
                      fill="#fc0"
                      strokeWidth={10.227}
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-8-7-9-6" fill="#fc0">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-6-8-9-4"
                      d="M0 37.5h100v1H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-4-8-20-1"
                      d="M0 61.5h100v1H0z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="g7895-7" 
          className={gen2.barra1_gen2}
          transform="translate(37.814 .016)"
           opacity={0.999}>
            <g
              id="g6485-7"
              transform="matrix(.0867 0 0 .8143 39.475 -16.363) matrix(.39463 0 0 .06066 16.589 68.304)"
              fill="#fc0"
            >
              <g id="shape-3-7-1">
                <path id="rect7-5-8" 
                fill="#fc0" 
                className={gen2.barra1_gen2}
                d="M0 37.5H100V62.5H0z" />
              </g>
              <g id="dark-1-8-5">
                <path id="rect10-3-3-5" d="M0 37.5H100V38.5H0z" />
                <path id="rect12-1-5-8" d="M0 61.5H100V62.5H0z" />
              </g>
            </g>
            <g
              id="g6492-8"
              transform="matrix(.83717 0 0 .8143 26.583 -16.363) matrix(-.06085 0 0 .06085 17.118 68.292)"
              fill="#fc0"
            >
              <g id="shape-1-4-5">
                <path
                  id="path7-0-7-8"
                  d="M25 37.5H0v25h25c6.904 0 12.5 5.596 12.5 12.5v25h25V75c0-20.711-16.789-37.5-37.5-37.5z"
                  fill="#fc0"
                  className={gen2.barra1_gen2}
                />
              </g>
              <g id="dark-81-46-1">
                <path
                  id="path10-90-5"
                  d="M25 37.5H0v1h25c20.126 0 36.5 16.374 36.5 36.5v25h1V75c0-20.711-16.789-37.5-37.5-37.5z"
                />
                <path
                  id="path12-8-2-1"
                  d="M38.5 75c0-7.444-6.056-13.5-13.5-13.5H0v1h25c6.904 0 12.5 5.596 12.5 12.5v25h1z"
                />
              </g>
            </g>
            <g
              id="g6502-5-2-0-4"
              transform="matrix(.83717 0 0 .94237 -2.728 -23.738)"
              opacity={0.999}
            >
              <g
                id="g15-9-0-5-0-7-42-0"
                transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
              >
                <g id="frame-2-7-1-1-2-5-93-0">
                  <path
                    id="rect4-5-1-5-8-0-73-1-7"
                    fill="none"
                    d="M0 0H100V100H0z"
                  />
                </g>
                <g id="dark-1-2-6-5-0-9-6-8" fill="#00f">
                  <g id="g7817-2" fill="#fc0">
                    <g id="shape-3-0-6-6-6-1-6-7" opacity={0.999}>
                      <path
                        id="rect7-4-1-8-4-3-0-4"
                        fill="#fc0"
                        className={gen2.barra1_gen2}
                        d="M0 37.5H100V62.5H0z"
                      />
                    </g>
                    <path
                      id="rect10-3-0-53-9-6-7-1-5"
                      d="M0 37.5H100V38.5H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-48-9"
                      d="M0 61.5H100V62.5H0z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <path
            id="estado_eq-4-74"
            className = {gen2.boton_gen2}
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-8)"
            opacity={0.999}
            strokeWidth={0.045384}
            d="M87.716 3.2408H97.5266V6.440300000000001H87.716z"
          />
          <text
            id="gen_nom_on-3-0-2-6"
            transform="scale(.92249 1.084)"
            x={95.637009}
            y={5.5018406}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.6194px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.098226}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-3-3-3-9"
              x={95.637009}
              y={5.5018406}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.0453px"
              strokeWidth={0.098226}
            >
              {"GEN - 2"}
            </tspan>
          </text>
        </g>
        <g id="g15117">
          <g
            id="g5795"
            fill= "red"
            className ={gen1.color_gen1}
            transform="matrix(.83717 0 0 .8143 -1.52 -4.433)"
            opacity={0.999}
          >
            <g
              id="g4211-7-8"
              transform="matrix(.32531 0 0 .35265 127.36 37.372)"
            >
              <g id="g4023-2-0" transform="translate(-341.25 -93.544)">
                <g id="g363-6-4" transform="matrix(-1 0 0 1 495.88 85.312)">
                  <g id="shape-4-3-8" 
                    className ={gen1.color_gen1}               
                    fill="#999">
                    <path
                      id="rect4-58-5"
                      d="M0 74.984H100V82.35799999999999H0z"
                    />
                    <path
                      id="polygon6-7-2"
                      d="M54.545 72.951L42.02 72.951 37.71 69.921 18.855 69.921 18.855 44.87 47.475 44.87 54.545 51.066z"
                    />
                    <path
                      id="rect8-1-9"
                      d="M12.929 46.474H25.32V61.571H12.929z"
                    />
                    <path
                      id="rect10-23-2"
                      d="M48.754 52.4H61.144999999999996V70.729H48.754z"
                    />
                    <path
                      id="rect12-2-0"
                      d="M10.774 50.783H25.319V57.261H10.774z"
                    />
                    <path
                      id="rect14-0-4"
                      d="M55.421 51.066H65.589V72.884H55.421z"
                    />
                    <path
                      id="rect16-7-4"
                      d="M65.387 52.646H98.114V71.065H65.387z"
                    />
                    <path
                      id="rect18-4-0"
                      d="M81.919 46.756H97.205V52.647H81.919z"
                    />
                    <path
                      id="polygon20-6-9"
                      d="M81.919 45.476L81.919 33.086 99.226 33.086 97.205 45.476z"
                    />
                    <circle
                      id="circle22-6-4"
                      cx={54.141}
                      cy={41.773}
                      r={6.061}
                    />
                    <path
                      id="rect24-6-4-2"
                      d="M2.694 71.537H10.100999999999999V76.385H2.694z"
                    />
                    <path
                      id="rect26-8-5"
                      d="M17.576 69.921H23.771V76.38600000000001H17.576z"
                    />
                    <path
                      id="rect28-8-3"
                      d="M49.562 69.921H55.757V76.38600000000001H49.562z"
                    />
                    <path
                      id="rect30-8-2"
                      d="M67.475 69.921H73.66999999999999V76.38600000000001H67.475z"
                    />
                    <path
                      id="rect32-8-0"
                      d="M83.367 69.921H89.56200000000001V76.38600000000001H83.367z"
                    />
                    <path
                      id="rect34-9-3"
                      d="M26.465 32.21H31.044V45.139H26.465z"
                    />
                    <path
                      id="rect36-0-6"
                      d="M25.589 37.867H31.918999999999997V39.483H25.589z"
                    />
                    <path
                      id="path38-6-8"
                      d="M23.501 45.679h-2.828v-3.502a1.82 1.82 0 00-1.818-1.818h-8.081V37.53h8.081a4.651 4.651 0 014.646 4.646z"
                    />
                    <path
                      id="path40-4-2"
                      d="M44.579 49.113h-2.828v-3.502a4.65 4.65 0 014.646-4.646h8.889v2.828h-8.889a1.82 1.82 0 00-1.818 1.818z"
                    />
                    <path
                      id="polygon42-5-7"
                      d="M47.172 49.82L47.172 44.702 58.485 44.702 53.434 49.82z"
                    />
                    <path
                      id="path44-0-1"
                      d="M36.162 45.409h-2.828v-3.098c0-2.488 2.084-4.512 4.646-4.512h15.892v2.828H37.98c-1.002 0-1.818.755-1.818 1.684z"
                    />
                    <path
                      id="path46-8-5-5"
                      d="M24.444 33.692c0-1.339 1.93-2.424 4.31-2.424s4.31 1.085 4.31 2.424"
                    />
                  </g>
                  <g id="light-2-8-5" 
                  className={gen1.color_gen1}
                  fill="#ccc">
                    <path
                      id="rect49-6-4"
                      d="M65.387 52.646H98.114V58.69H65.387z"
                    />
                    <path
                      id="rect51-5-7"
                      d="M26.465 39.483H31.044V45.14H26.465z"
                    />
                    <path
                      id="rect53-9-3"
                      d="M26.465 33.692H31.044V37.867H26.465z"
                    />
                    <path
                      id="rect55-6-1"
                      d="M1.212 34.062H11.717V72.345H1.212z"
                    />
                  </g>
                  <g id="linear-6-5-3">
                    <path
                      id="rect63-6-8"
                      className="linear"
                      fill="url(#SVGID_1_-99)"
                      d="M37.172 47.093H41.616V53.154H37.172z"
                    />
                    <path
                      id="rect70-2-0"
                      className="linear"
                      fill="url(#SVGID_2_-1)"
                      d="M43.596 52.951H45.373999999999995V55.375H43.596z"
                    />
                    <path
                      id="rect77-7-8"
                      className="linear"
                      fill="url(#SVGID_3_-90)"
                      d="M41.818 47.093H47.150999999999996V54.366H41.818z"
                    />
                  </g>
                  <g id="dark-3-1-0" fill="#4d4d4d">
                    <path
                      id="rect80-9-1"
                      d="M51.717 77.282H96.768V82.35799999999999H51.717z"
                    />
                    <path
                      id="rect82-4-8"
                      d="M3.165 77.282H48.216V82.35799999999999H3.165z"
                    />
                    <path
                      id="polygon84-9-4"
                      d="M54.04 45.779L54.04 49.206 57.422 45.779z"
                    />
                    <circle
                      id="circle86-5-2"
                      cx={54.141}
                      cy={41.773}
                      r={2.02}
                    />
                    <path
                      id="rect88-4-9"
                      d="M21.886 68.911H51.986999999999995V69.921H21.886z"
                    />
                    <path
                      id="polygon90-8-7"
                      d="M24.646 66.285L24.04 66.285 24.04 66.689 24.04 68.911 24.646 68.911 24.646 66.689 26.667 66.689 26.667 66.285z"
                    />
                    <path
                      id="polygon92-2-0"
                      d="M28.721 66.285L28.114 66.285 28.114 66.689 28.114 68.911 28.721 68.911 28.721 66.689 30.741 66.689 30.741 66.285z"
                    />
                    <path
                      id="polygon94-7-6"
                      d="M32.795 66.285L32.189 66.285 32.189 66.689 32.189 68.911 32.795 68.911 32.795 66.689 34.815 66.689 34.815 66.285z"
                    />
                    <path
                      id="polygon96-5-3"
                      d="M36.869 66.285L36.263 66.285 36.263 66.689 36.263 68.911 36.869 68.911 36.869 66.689 38.889 66.689 38.889 66.285z"
                    />
                    <path
                      id="polygon98-3-3"
                      d="M40.943 66.285L40.337 66.285 40.337 66.689 40.337 68.911 40.943 68.911 40.943 66.689 42.963 66.689 42.963 66.285z"
                    />
                    <path
                      id="polygon100-5-1"
                      d="M45.017 66.285L44.411 66.285 44.411 66.689 44.411 68.911 45.017 68.911 45.017 66.689 47.037 66.689 47.037 66.285z"
                    />
                    <path
                      id="polygon102-2-2"
                      d="M49.091 66.285L48.485 66.285 48.485 66.689 48.485 68.911 49.091 68.911 49.091 66.689 51.111 66.689 51.111 66.285z"
                    />
                    <path
                      id="polygon104-2-0"
                      d="M24.646 66.285L24.04 66.285 24.04 66.689 24.04 68.911 24.646 68.911 24.646 66.689 26.667 66.689 26.667 66.285z"
                    />
                    <path
                      id="polygon106-6-0"
                      d="M28.721 66.285L28.114 66.285 28.114 66.689 28.114 68.911 28.721 68.911 28.721 66.689 30.741 66.689 30.741 66.285z"
                    />
                    <path
                      id="polygon108-6-8"
                      d="M32.795 66.285L32.189 66.285 32.189 66.689 32.189 68.911 32.795 68.911 32.795 66.689 34.815 66.689 34.815 66.285z"
                    />
                    <path
                      id="polygon110-4-4"
                      d="M36.869 66.285L36.263 66.285 36.263 66.689 36.263 68.911 36.869 68.911 36.869 66.689 38.889 66.689 38.889 66.285z"
                    />
                    <path
                      id="polygon112-4-5"
                      d="M40.943 66.285L40.337 66.285 40.337 66.689 40.337 68.911 40.943 68.911 40.943 66.689 42.963 66.689 42.963 66.285z"
                    />
                    <path
                      id="polygon114-9-9"
                      d="M45.017 66.285L44.411 66.285 44.411 66.689 44.411 68.911 45.017 68.911 45.017 66.689 47.037 66.689 47.037 66.285z"
                    />
                    <path
                      id="polygon116-4-8"
                      d="M49.091 66.285L48.485 66.285 48.485 66.689 48.485 68.911 49.091 68.911 49.091 66.689 51.111 66.689 51.111 66.285z"
                    />
                    <path
                      id="polygon118-2-8"
                      d="M49.293 60.224L49.293 59.618 34.545 59.618 34.545 63.456 35.152 63.456 35.152 60.224z"
                    />
                    <path
                      id="path120-6-8"
                      d="M28.485 62.85a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                    />
                    <path
                      id="rect122-0-7"
                      d="M51.111 55.982H55.555V62.851H51.111z"
                    />
                    <path
                      id="rect124-7-2"
                      d="M65.387 65.207H98.114V71.06599999999999H65.387z"
                    />
                    <path
                      id="rect126-8-0"
                      d="M12.929 60.224H18.855V61.571H12.929z"
                    />
                    <path
                      id="path128-4-3"
                      d="M28.485 55.577a2.222 2.222 0 01-2.162-1.717 2.222 2.222 0 104.324 0 2.22 2.22 0 01-2.162 1.717z"
                    />
                    <path
                      id="path130-2-1"
                      d="M27.071 54.567a1.414 1.414 0 112.828 0v6.061a1.414 1.414 0 11-2.828 0z"
                    />
                    <path
                      id="rect132-3-0"
                      d="M81.919 47.516H97.205V48.016H81.919z"
                    />
                  </g>
                  <g id="shadow-3-2-0">
                    <path
                      id="rect135-6-8"
                      d="M56.927 55.308H57.517V68.641H56.927z"
                    />
                    <path
                      id="rect137-3-6"
                      d="M57.836 55.308H58.426V68.641H57.836z"
                    />
                    <path
                      id="rect139-0-4"
                      d="M58.745 55.308H59.335V68.641H58.745z"
                    />
                    <path
                      id="rect141-6-9"
                      d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                    />
                    <path
                      id="rect143-4-2"
                      d="M60.564 55.308H61.154V68.641H60.564z"
                    />
                    <path
                      id="rect145-7-5"
                      d="M61.473 55.308H62.063V68.641H61.473z"
                    />
                    <path
                      id="rect147-8-4"
                      d="M62.382 55.308H62.972V68.641H62.382z"
                    />
                    <path
                      id="rect149-9-3"
                      d="M63.291 55.308H63.881V68.641H63.291z"
                    />
                    <path
                      id="rect151-3-3"
                      d="M56.927 55.308H57.517V68.641H56.927z"
                    />
                    <path
                      id="rect153-2-2"
                      d="M57.836 55.308H58.426V68.641H57.836z"
                    />
                    <path
                      id="rect155-4-9"
                      d="M58.745 55.308H59.335V68.641H58.745z"
                    />
                    <path
                      id="rect157-1-6"
                      d="M59.655 55.308H60.245000000000005V68.641H59.655z"
                    />
                    <path
                      id="rect159-7-3"
                      d="M60.564 55.308H61.154V68.641H60.564z"
                    />
                    <path
                      id="rect161-7-7"
                      d="M61.473 55.308H62.063V68.641H61.473z"
                    />
                    <path
                      id="rect163-8-8"
                      d="M62.382 55.308H62.972V68.641H62.382z"
                    />
                    <path
                      id="rect165-2-7"
                      d="M63.291 55.308H63.881V68.641H63.291z"
                    />
                    <path
                      id="path167-6-7"
                      d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                    />
                    <path
                      id="path169-7-9"
                      d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                    />
                    <path
                      id="path171-5-1"
                      d="M49.383 44.702a6.036 6.036 0 01-1.282-3.333c-.009.134-.02.268-.02.404 0 1.063.275 2.061.756 2.929z"
                    />
                    <path
                      id="path173-2-8"
                      d="M60.182 41.369a6.063 6.063 0 01-3.376 5.035l-1.238 1.254a6.06 6.06 0 004.634-5.885c0-.137-.012-.27-.02-.404z"
                    />
                    <path
                      id="path175-4-9"
                      d="M36.162 44.87v-2.559c0-.929.816-1.684 1.818-1.684h10.212c.024-.127.056-.251.088-.375H37.419c-1.038 0-1.883.814-1.883 1.816v2.802z"
                    />
                    <g id="g201-1-1">
                      <g id="g187-7-2">
                        <circle
                          id="circle177-9-0"
                          cx={68.388}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle179-4-9"
                          cx={75.272}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle181-0-4"
                          cx={82.155}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle183-3-8"
                          cx={89.038}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle185-9-7"
                          cx={95.921}
                          cy={64.736}
                          r={0.52}
                        />
                      </g>
                      <g id="g199-8-5">
                        <circle
                          id="circle189-4-8"
                          cx={68.388}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle191-1-2"
                          cx={75.272}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle193-9-7"
                          cx={82.155}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle195-4-9"
                          cx={89.038}
                          cy={64.736}
                          r={0.52}
                        />
                        <circle
                          id="circle197-2-4"
                          cx={95.921}
                          cy={64.736}
                          r={0.52}
                        />
                      </g>
                    </g>
                    <g id="g227-7-2">
                      <g id="g213-4-1">
                        <circle
                          id="circle203-1-2"
                          cx={68.388}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle205-0-8"
                          cx={75.272}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle207-4-2"
                          cx={82.155}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle209-3-4"
                          cx={89.038}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle211-5-8"
                          cx={95.921}
                          cy={59.988}
                          r={0.52}
                        />
                      </g>
                      <g id="g225-8-0">
                        <circle
                          id="circle215-1-7"
                          cx={68.388}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle217-0-3"
                          cx={75.272}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle219-2-6"
                          cx={82.155}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle221-4-1"
                          cx={89.038}
                          cy={59.988}
                          r={0.52}
                        />
                        <circle
                          id="circle223-1-3"
                          cx={95.921}
                          cy={59.988}
                          r={0.52}
                        />
                      </g>
                    </g>
                    <path
                      id="path229-5-4"
                      d="M29.899 60.628a1.414 1.414 0 11-2.828 0z"
                    />
                    <path
                      id="polygon231-5-9"
                      d="M1.972 71.032L1.972 35.125 10.505 35.125 10.505 35.625 2.472 35.625 2.472 71.032z"
                    />
                    <path
                      id="rect233-0-0"
                      d="M3.636 72.499H9.139V73.307H3.636z"
                    />
                    <path
                      id="polygon235-1-1"
                      d="M18.386 74.724L18.386 70.666 23.139 70.666 23.139 71.474 19 71.474 19 74.724z"
                    />
                    <path
                      id="polygon237-8-1"
                      d="M50.136 74.724L50.136 70.666 54.889 70.666 54.889 71.474 50.75 71.474 50.75 74.724z"
                    />
                    <path
                      id="polygon239-4-1"
                      d="M67.886 74.974L67.886 71.916 72.639 71.916 72.639 72.724 68.5 72.724 68.5 74.974z"
                    />
                    <path
                      id="polygon241-4-0"
                      d="M84.136 74.974L84.136 71.916 88.889 71.916 88.889 72.724 84.75 72.724 84.75 74.974z"
                    />
                    <g id="g279-6-0">
                      <g id="g259-9-1">
                        <path
                          id="rect243-3-1"
                          d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                        />
                        <path
                          id="rect245-9-4"
                          d="M71.211 54.558H71.801V58.266H71.211z"
                        />
                        <path
                          id="rect247-0-0"
                          d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                        />
                        <path
                          id="rect249-4-5"
                          d="M73.03 54.558H73.62V58.266H73.03z"
                        />
                        <path
                          id="rect251-3-9"
                          d="M73.939 54.558H74.529V58.266H73.939z"
                        />
                        <path
                          id="rect253-3-1"
                          d="M74.848 54.558H75.438V58.266H74.848z"
                        />
                        <path
                          id="rect255-0-7"
                          d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                        />
                        <path
                          id="rect257-5-7"
                          d="M76.666 54.558H77.256V58.266H76.666z"
                        />
                      </g>
                      <g id="g277-4-3">
                        <path
                          id="rect261-1-0"
                          d="M70.302 54.558H70.89200000000001V58.266H70.302z"
                        />
                        <path
                          id="rect263-8-2"
                          d="M71.211 54.558H71.801V58.266H71.211z"
                        />
                        <path
                          id="rect265-0-8"
                          d="M72.12 54.558H72.71000000000001V58.266H72.12z"
                        />
                        <path
                          id="rect267-7-6"
                          d="M73.03 54.558H73.62V58.266H73.03z"
                        />
                        <path
                          id="rect269-1-3"
                          d="M73.939 54.558H74.529V58.266H73.939z"
                        />
                        <path
                          id="rect271-5-9"
                          d="M74.848 54.558H75.438V58.266H74.848z"
                        />
                        <path
                          id="rect273-7-4"
                          d="M75.757 54.558H76.34700000000001V58.266H75.757z"
                        />
                        <path
                          id="rect275-0-9"
                          d="M76.666 54.558H77.256V58.266H76.666z"
                        />
                      </g>
                    </g>
                    <g id="g317-2-8">
                      <g id="g297-1-0">
                        <path
                          id="rect281-9-5"
                          d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                        />
                        <path
                          id="rect283-3-6"
                          d="M91.211 66.558H91.801V70.266H91.211z"
                        />
                        <path
                          id="rect285-7-7"
                          d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                        />
                        <path
                          id="rect287-6-3"
                          d="M93.03 66.558H93.62V70.266H93.03z"
                        />
                        <path
                          id="rect289-3-4"
                          d="M93.939 66.558H94.529V70.266H93.939z"
                        />
                        <path
                          id="rect291-0-6"
                          d="M94.848 66.558H95.438V70.266H94.848z"
                        />
                        <path
                          id="rect293-0-7"
                          d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                        />
                        <path
                          id="rect295-5-3"
                          d="M96.666 66.558H97.256V70.266H96.666z"
                        />
                      </g>
                      <g id="g315-8-8">
                        <path
                          id="rect299-3-8"
                          d="M90.302 66.558H90.89200000000001V70.266H90.302z"
                        />
                        <path
                          id="rect301-2-0"
                          d="M91.211 66.558H91.801V70.266H91.211z"
                        />
                        <path
                          id="rect303-1-5"
                          d="M92.12 66.558H92.71000000000001V70.266H92.12z"
                        />
                        <path
                          id="rect305-6-6"
                          d="M93.03 66.558H93.62V70.266H93.03z"
                        />
                        <path
                          id="rect307-1-4"
                          d="M93.939 66.558H94.529V70.266H93.939z"
                        />
                        <path
                          id="rect309-8-2"
                          d="M94.848 66.558H95.438V70.266H94.848z"
                        />
                        <path
                          id="rect311-0-5"
                          d="M95.757 66.558H96.34700000000001V70.266H95.757z"
                        />
                        <path
                          id="rect313-1-1"
                          d="M96.666 66.558H97.256V70.266H96.666z"
                        />
                      </g>
                    </g>
                    <path
                      id="rect319-4-1"
                      d="M55.758 71.874H65.59V72.884H55.758z"
                    />
                    <path
                      id="polygon321-4-6"
                      d="M48.754 70.729L48.754 69.921 37.71 69.921 42.02 72.951 49.562 72.951 49.562 70.729z"
                    />
                    <path
                      id="path323-8-0"
                      d="M32.727 45.369c0-.275-.225-.5-.5-.5h-.116a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5H30.5c-.275 0-.5.225-.5.5v.03c0 .275-.153.5-.341.5s-.341-.225-.341-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.24a.501.501 0 01-.5-.5v-.03c0-.275-.225-.5-.5-.5h-1.603c-.275 0-.5.225-.5.5v.03c0 .275-.225.5-.5.5h-.054c-.275 0-.5.225-.5.5v3.015c0 .275.225.5.5.5h.054c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.24c.275 0 .5.225.5.5v.03c0 .275.225.5.5.5h1.603c.275 0 .5-.225.5-.5v-.03c0-.275.153-.5.341-.5s.341.225.341.5v.03c0 .275.225.5.5.5h.612c.275 0 .5-.225.5-.5v-.03c0-.275.225-.5.5-.5h.116c.275 0 .5-.225.5-.5v-3.015z"
                    />
                    <path
                      id="path325-1-5"
                      d="M26.97 58.507h-.455c-.416 0-.874-.434-1.112-.862l-1.235-2.224c-.241-.435-.43-1.164-.43-1.661v-4.344h.606v4.344c0 .396.162 1.021.354 1.366l1.235 2.224c.185.334.486.55.582.552h.455z"
                    />
                    <path
                      id="path327-2-1"
                      d="M38.99 56.082h-6.263a1.112 1.112 0 01-1.111-1.11v-2.778a.506.506 0 00-.505-.505h-1.566c-.532 0-1.156-.223-1.452-.519-.295-.295-.518-.811-.518-1.198v-.556h.606v.556c0 .225.162.592.34.771.161.16.632.341 1.023.341h1.566c.613 0 1.111.498 1.111 1.11v2.778c0 .278.226.505.504.505h6.263a.506.506 0 00.505-.505v-1.818h.606v1.818a1.109 1.109 0 01-1.109 1.11z"
                    />
                    <path
                      id="path329-6-4"
                      d="M43.838 57.698H33.737a1.112 1.112 0 01-1.111-1.11v-2.627c0-.317-.262-.69-.56-.799-.575-.21-1.662-.987-1.662-2.434v-.908h.606v.908c0 1.377 1.213 1.845 1.265 1.864.536.195.958.797.958 1.368v2.627c0 .278.227.505.505.505h10.101a.506.506 0 00.505-.505v-1.213h.606v1.213c0 .613-.499 1.111-1.112 1.111z"
                    />
                    <path
                      id="rect331-0-5"
                      d="M83.232 45.45H85.118V46.773H83.232z"
                    />
                    <path
                      id="rect333-7-0"
                      d="M93.872 45.45H95.758V46.773H93.872z"
                    />
                    <path
                      id="polygon335-9-0"
                      d="M56.465 69.416L56.465 69.012 64.343 69.012 64.343 54.77 64.748 54.77 64.748 69.416z"
                    />
                    <path
                      id="path337-8-4"
                      d="M18.855 39.942h-7.138v.417h7.138a1.82 1.82 0 011.818 1.818c0-1.233-.816-2.235-1.818-2.235z"
                    />
                    <path
                      id="polygon339-5-5"
                      d="M48.215 78.292L48.215 77.282 3.165 77.282 3.165 82.358 4.175 82.358 4.175 78.292z"
                    />
                    <path
                      id="polygon341-9-7"
                      d="M96.768 78.292L96.768 77.282 51.717 77.282 51.717 82.358 52.727 82.358 52.727 78.292z"
                    />
                  </g>
                  <g id="hlight-0-9-4" fill="#fff">
                    <path
                      id="path344-2-0"
                      d="M49.572 37.8H37.98c-2.562 0-4.646 2.023-4.646 4.512 0-2.006 2.084-3.637 4.646-3.637h10.959a6.09 6.09 0 01.633-.875z"
                    />
                    <path
                      id="path346-0-3"
                      d="M28.485 52.648c1.053 0 1.933.734 2.162 1.717a2.222 2.222 0 10-4.324 0 2.221 2.221 0 012.162-1.717z"
                    />
                    <path
                      id="polygon348-0-1"
                      d="M56.114 69.314L56.114 54.418 64.242 54.418 64.242 54.918 56.614 54.918 56.614 69.314z"
                    />
                    <path
                      id="rect350-5-3"
                      d="M49.625 44.25H57.5V44.75H49.625z"
                    />
                    <path
                      id="path352-6-5"
                      d="M54.141 36.52a6.056 6.056 0 016.04 5.657c.009-.134.02-.268.02-.404a6.06 6.06 0 10-12.122 0c0 .136.012.27.02.404.211-3.158 2.832-5.657 6.042-5.657z"
                    />
                    <path
                      id="rect354-3-1"
                      d="M12.929 46.474H18.855V47.821H12.929z"
                    />
                    <path
                      id="path356-2-1"
                      d="M27.534 54.205a.951.951 0 011.902 0"
                    />
                    <path
                      id="path358-6-4"
                      d="M18.855 37.53h-7.138v.5h7.138c2.562 0 4.646 1.86 4.646 4.146a4.651 4.651 0 00-4.646-4.646z"
                    />
                    <path
                      id="rect360-1-7"
                      d="M55.421 51.066H65.589V52.076H55.421z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g
            id="g4030-4-3-9-7-4-3"
            transform="matrix(.20604 0 0 .21647 111.94 -3.115)"
            opacity={0.999}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-3-9-6-4"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.8}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-5-1-2-1"
            fill="none"
            opacity={0.66}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.0978}
            stroke="#00fbff"
            d="M126.08 3.2408H135.8906V6.440300000000001H126.08z"
          />
          <text
            id="alt1-6-4"
            transform="scale(.95616 1.0458)"
            x={127.66388}
            y={14.898346}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-92-9"
              x={127.66388}
              y={14.898346}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen1.volt_gen1}
            </tspan>
          </text>
          <text
            id="alt2-1-6"
            transform="scale(.95616 1.0458)"
            x={127.71307}
            y={18.438936}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-9-5"
              x={127.71307}
              y={18.438936}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen1.amp_gen1}
            </tspan>
          </text>
          <text
            id="alt3-7-5"
            transform="scale(.95616 1.0458)"
            x={127.46176}
            y={21.890276}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-9-9-5"
              x={127.46176}
              y={21.890276}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen1.kw_gen1}
            </tspan>
          </text>
          <text
            id="alt4-5-1"
            transform="scale(.95616 1.0458)"
            x={129.52339}
            y={25.488039}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-3-1"
              x={129.52339}
              y={25.488039}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen1.carga_gen1}
            </tspan>
          </text>
          <text
            id="alt4-1-2-2"
            transform="scale(.95616 1.0458)"
            x={129.51949}
            y={29.076769}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9807px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1242}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-1-2-8"
              x={129.51949}
              y={29.076769}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.1242}
            >
              {gen1.diesel_gen1}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-6-2"
            transform="scale(.9421 1.0615)"
            x={139.89281}
            y={14.684593}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-3-9"
              x={139.89281}
              y={14.684593}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"VOLTAGE "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-8-7-7"
            transform="scale(.9421 1.0615)"
            x={139.96045}
            y={18.182777}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-4-5-0"
              x={139.96045}
              y={18.182777}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"AMPERE"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-44-0-4"
            transform="scale(.9421 1.0615)"
            x={139.83524}
            y={21.616859}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-9-47-3"
              x={139.83524}
              y={21.616859}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"KW "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-4-4-59-9"
            transform="scale(.9421 1.0615)"
            x={139.84344}
            y={25.139641}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-7-6-9-5"
              x={139.84344}
              y={25.139641}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% CARGA "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-7-5-0-7"
            transform="scale(.9421 1.0615)"
            x={139.86292}
            y={28.666191}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.9451px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.22088}
            wordSpacing={0}
          >
            <tspan
              id="tspan2594-6-1-6-3-0-9-1"
              x={139.86292}
              y={28.666191}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.9807px"
              strokeWidth={0.22088}
            >
              {"% DIESEL"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-3-7-6"
            transform="scale(1.0593 .94402)"
            x={120.53718}
            y={11.06278}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#ff0"
            fontFamily="Franklin Gothic Medium"
            fontSize="2.6668px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.20001}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-0-3-0"
              x={120.53718}
              y={11.06278}
              fill="#ff0"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.699px"
              strokeWidth={0.20001}
            >
              {gen1.modo_gen1}
            </tspan>
          </text>
          <g id="g7945-6" transform="translate(76.158 .065)" opacity={0.999}>
            <g id="g7909-4">
              <g
                id="g6502-5-2-1-6-5-9-3"
                transform="matrix(.39838 0 0 .18319 18.798 48.319)"
              >
                <g
                  id="g15-9-0-5-0-7-4-3-7-6-1"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                >
                  <g id="frame-2-7-1-1-2-5-9-5-89-94-5">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-6-9-4"
                      fill="none"
                      d="M0 0H100V100H0z"
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-0-8-3" 
                  
                  fill="#0ff">
                    <path
                      id="rect7-4-1-8-4-3-3-4-3-4-7"
                      fill="#0ff"
                      className={gen1.contacto_gen1}
                      d="M0 38.5H100V63.5H0z"
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-7-7-1" fill="#0ff">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-65-4-5"
                      d="M0 37.5H100V38.5H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-1-9-24"
                      d="M0 61.5H100V62.5H0z"
                    />
                  </g>
                </g>
              </g>
              <path
                id="path18021-7-5-8"
                d="M37.232 65.163l-3.013-5.524z"
                //fill="#00f"
                strokeOpacity={0.99216}
                strokeWidth={0.49047}
                stroke="#fc0"                
                className={gen1.barra2_gen1}
              />
              <ellipse
                id="path17699-3-27-2-2"
                cx={38.363}
                cy={65.718}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#ff0"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
              <ellipse
                id="path17699-3-27-9-4-4"
                cx={38.395}
                cy={60.208}
                rx={1.3165}
                ry={1.2704}
                fillOpacity={0.016064}
                fill="#767676"
                strokeOpacity={0.99216}
                strokeWidth={0.28309}
                stroke="#fc0"
              />
            </g>
            <g id="g7920-2">
              <g
                id="g6502-5-2-1-6-2-3-1-5"
                transform="matrix(.7902 0 0 .68831 -.474 17.346)"
                strokeWidth={0.99948}
              >
                <g
                  id="g15-9-0-5-0-7-4-3-9-5-1-9"
                  transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
                  strokeWidth={10.227}
                >
                  <g id="frame-2-7-1-1-2-5-9-5-8-0-17-0">
                    <path
                      id="rect4-5-1-5-8-0-73-8-8-0-2-7-7"
                      d="M0 0h100v100H0z"
                      fill="none"
                      strokeWidth={10.227}
                    />
                  </g>
                  <g id="shape-3-0-6-6-6-1-3-9-1-0-3-6" fill="#00f">
                    <path
                      id="rect7-4-1-8-4-3-3-4-9-0-3-7"
                      d="M0 38.5h100v25H0z"
                      fill="#fc0"

                      strokeWidth={10.227}
                    />
                  </g>
                  <g id="dark-1-2-6-5-0-9-2-2-8-7-9-7" fill="#fc0">
                    <path
                      id="rect10-3-0-53-9-6-7-5-6-6-8-9-47"
                      d="M0 37.5h100v1H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-2-4-4-8-20-4"
                      d="M0 61.5h100v1H0z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <g id="g7895-79" 
          transform="translate(76.158 .065)"          
           opacity={0.999}>
            <g
              id="g6485-3"
              transform="matrix(.0867 0 0 .8143 39.475 -16.363) matrix(.39463 0 0 .06066 16.589 68.304)"
              fill="#fc0"
              className={gen1.barra1_gen1}
            >
              <g id="shape-3-7-7">
                <path id="rect7-5-87" 
                fill="#fc0"
                className={gen1.barra1_gen1}
                 d="M0 37.5H100V62.5H0z" />
              </g>
              <g id="dark-1-8-9">
                <path id="rect10-3-3-2" d="M0 37.5H100V38.5H0z" />
                <path id="rect12-1-5-9" d="M0 61.5H100V62.5H0z" />
              </g>
            </g>
            <g
              id="g6492-7"
              transform="matrix(.83717 0 0 .8143 26.583 -16.363) matrix(-.06085 0 0 .06085 17.118 68.292)"
              fill="#fc0"
            >
              <g id="shape-1-4-9">
                <path
                  id="path7-0-7-4"
                  d="M25 37.5H0v25h25c6.904 0 12.5 5.596 12.5 12.5v25h25V75c0-20.711-16.789-37.5-37.5-37.5z"
                  fill="#fc0"
                  className={gen1.barra1_gen1}
                />
              </g>
              <g id="dark-81-46-16">
                <path
                  id="path10-90-6"
                  d="M25 37.5H0v1h25c20.126 0 36.5 16.374 36.5 36.5v25h1V75c0-20.711-16.789-37.5-37.5-37.5z"
                />
                <path
                  id="path12-8-2-3"
                  d="M38.5 75c0-7.444-6.056-13.5-13.5-13.5H0v1h25c6.904 0 12.5 5.596 12.5 12.5v25h1z"
                />
              </g>
            </g>
            <g
              id="g6502-5-2-0-7"
              transform="matrix(.83717 0 0 .94237 -2.728 -23.738)"
              opacity={0.999}
            >
              <g
                id="g15-9-0-5-0-7-42-05"
                transform="matrix(0 -.15747 .06066 0 46.057 87.842)"
              >
                <g id="frame-2-7-1-1-2-5-93-9">
                  <path
                    id="rect4-5-1-5-8-0-73-1-5"
                    fill="none"
                    d="M0 0H100V100H0z"
                  />
                </g>
                <g id="dark-1-2-6-5-0-9-6-1" fill="#00f">
                  <g id="g7817-4" fill="#fc0">
                    <g id="shape-3-0-6-6-6-1-6-9" opacity={0.999}>
                      <path
                        id="rect7-4-1-8-4-3-0-3"
                        fill="#fc0"
                        className={gen1.barra1_gen1}
                        d="M0 37.5H100V62.5H0z"
                      />
                    </g>
                    <path
                      id="rect10-3-0-53-9-6-7-1-1"
                      d="M0 37.5H100V38.5H0z"
                    />
                    <path
                      id="rect12-1-0-3-2-4-65-48-4"
                      d="M0 61.5H100V62.5H0z"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
          <path
            id="estado_eq-4-6"
            className={gen1.boton_gen1}
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-7)"
            opacity={0.999}
            strokeWidth={0.045384}
            d="M126.08 3.2408H135.8906V6.440300000000001H126.08z"
          />
          <text
            id="gen_nom_on-3-0-6-9"
            transform="scale(.92249 1.084)"
            x={137.22514}
            y={5.5018406}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.6194px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.098226}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-3-3-34-6"
              x={137.22514}
              y={5.5018406}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.0453px"
              strokeWidth={0.098226}
            >
              {"GEN - 1"}
            </tspan>
          </text>
        </g>
        <g id="g15410" opacity={0.999}>
          <path
            id="estado_eq-4-3-5"
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-67-8)"
            opacity={0.999}
            strokeWidth={0.045439}
            d="M51.412 82.5H62.772999999999996V85.2696H51.412z"
          />
          <g
            id="gen_off_mode-5-4-0-5"
           
            transform="matrix(.71939 0 0 .55677 -284.86 51.66)"
            opacity={0.999}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-4-6-3"
              className={tableros.piloto2_ats3a}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-8-4-8"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-4-6-6)"
              opacity={0.592}
            />
          </g>
          <g
            id="gen_off_mode-5-4-6"
            
            transform="matrix(.71939 0 0 .55677 -294.37 51.709)"
            opacity={0.999}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-4-5"
              className={tableros.piloto1_ats3a}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-8-7"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-4-4)"
              opacity={0.592}
            />
          </g>
          <text
            id="text13665-1-9-8"
            transform="scale(.95262 1.0497)"
            x={63.264874}
            y={91.283157}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.3043px"
            strokeWidth={0.032607}
          >
            <tspan
              id="tspan13663-0-08-7"
              x={63.264874}
              y={91.283157}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight={700}
              strokeWidth={0.032607}
            >
              {"GEN"}
            </tspan>
          </text>
          <text
            id="text13665-1-9-5-3"
            transform="scale(.95262 1.0497)"
            x={53.396885}
            y={91.368546}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.3043px"
            strokeWidth={0.032607}
          >
            <tspan
              id="tspan13663-0-08-2-5"
              x={53.396885}
              y={91.368546}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight={700}
              strokeWidth={0.032607}
            >
              {"EEE"}
            </tspan>
          </text>
          <g
            id="g4030-4-3-0-9"
            transform="matrix(.2386 0 0 .18739 35.024 77.005)"
            opacity={0.999}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-6-6"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.75}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-7-7"
            fill="none"
            opacity={0.25}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.097918}
            stroke="#00fbff"
            d="M51.412 82.5H62.772999999999996V85.2696H51.412z"
          />
          <text
            id="gen_nom_on-1-0"
            transform="scale(.94768 1.0552)"
            x={55.599373}
            y={80.342743}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.331px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.087412}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-6-9"
              x={55.599373}
              y={80.342743}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.71px"
              strokeWidth={0.087412}
            >
              {"ATS - 3A"}
            </tspan>
          </text>
        </g>
        <g id="g15428" opacity={0.999}>
          <path
            id="estado_eq-4-3-5-4"
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-67-8-2)"
            opacity={0.999}
            strokeWidth={0.045439}
            d="M51.492 99.434H62.852999999999994V102.2036H51.492z"
          />
          <g
            id="gen_off_mode-5-4-0-5-0"
            
            transform="matrix(.71939 0 0 .55677 -284.77 68.593)"
            opacity={0.999}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-4-6-3-0"
              className={tableros.piloto2_ats4a}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-8-4-8-4"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-4-6-6-2)"
              opacity={0.592}
            />
          </g>
          <g
            id="gen_off_mode-5-4-6-9"            
            transform="matrix(.71939 0 0 .55677 -294.29 68.643)"
            opacity={0.999}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-4-5-0"
              className={tableros.piloto1_ats4a}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-8-7-3"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-4-4-6)"
              opacity={0.592}
            />
          </g>
          <text
            id="text13665-1-9-8-0"
            transform="scale(.95262 1.0497)"
            x={63.349392}
            y={107.41452}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.3043px"
            strokeWidth={0.032607}
          >
            <tspan
              id="tspan13663-0-08-7-6"
              x={63.349392}
              y={107.41452}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight={700}
              strokeWidth={0.032607}
            >
              {"GEN"}
            </tspan>
          </text>
          <text
            id="text13665-1-9-5-3-9"
            transform="scale(.95262 1.0497)"
            x={53.481403}
            y={107.49991}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.3043px"
            strokeWidth={0.032607}
          >
            <tspan
              id="tspan13663-0-08-2-5-5"
              x={53.481403}
              y={107.49991}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight={700}
              strokeWidth={0.032607}
            >
              {"EEE"}
            </tspan>
          </text>
          <g
            id="g4030-4-3-0-9-8"
            transform="matrix(.2386 0 0 .18739 35.105 93.939)"
            opacity={0.999}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-6-6-2"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.75}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-7-7-9"
            fill="none"
            opacity={0.25}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.097918}
            stroke="#00fbff"
            d="M51.492 99.434H62.852999999999994V102.2036H51.492z"
          />
          <text
            id="gen_nom_on-1-0-1"
            transform="scale(.94768 1.0552)"
            x={55.684319}
            y={96.390503}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.331px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.087412}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-6-9-4"
              x={55.684319}
              y={96.390503}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.71px"
              strokeWidth={0.087412}
            >
              {"ATS - 4A"}
            </tspan>
          </text>
        </g>
        <g id="g15446">
          <path
            id="estado_eq-4-3-5-7"
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-67-8-0)"
            opacity={0.999}
            strokeWidth={0.045439}
            d="M91.04 82.515H102.40100000000001V85.2846H91.04z"
          />
          <g
            id="gen_off_mode-5-4-0-5-3"
            
            transform="matrix(.71939 0 0 .55677 -245.23 51.675)"
            opacity={0.999}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-4-6-3-5"
              className={tableros.piloto2_tpdu1a}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-8-4-8-7"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-4-6-6-5)"
              opacity={0.592}
            />
          </g>
          <g
            id="gen_off_mode-5-4-6-8"
            
            transform="matrix(.71939 0 0 .55677 -254.75 51.725)"
            opacity={0.999}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-4-5-4"
              className={tableros.piloto1_tpdu1a}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-8-7-7"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-4-4-1)"
              opacity={0.592}
            />
          </g>
          <text
            id="text13665-1-9-8-5"
            transform="scale(.95262 1.0497)"
            x={104.86393}
            y={91.297615}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.3043px"
            strokeWidth={0.032607}
          >
            <tspan
              id="tspan13663-0-08-7-66"
              x={104.86393}
              y={91.297615}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight={700}
              strokeWidth={0.032607}
            >
              {"GEN"}
            </tspan>
          </text>
          <text
            id="text13665-1-9-5-3-2"
            transform="scale(.95262 1.0497)"
            x={94.995934}
            y={91.383003}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.3043px"
            strokeWidth={0.032607}
          >
            <tspan
              id="tspan13663-0-08-2-5-3"
              x={94.995934}
              y={91.383003}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight={700}
              strokeWidth={0.032607}
            >
              {"EEE"}
            </tspan>
          </text>
          <g
            id="g4030-4-3-0-9-0"
            transform="matrix(.2386 0 0 .18739 74.652 77.02)"
            opacity={0.999}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-6-6-8"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.75}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-7-7-5"
            fill="none"
            opacity={0.25}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.097918}
            stroke="#00fbff"
            d="M91.04 82.515H102.40100000000001V85.2846H91.04z"
          />
          <text
            id="gen_nom_on-1-0-5"
            transform="scale(.94768 1.0552)"
            x={96.856735}
            y={80.357124}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.331px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.087412}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-6-9-2"
              x={96.856735}
              y={80.357124}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.71px"
              strokeWidth={0.087412}
            >
              {"T-PDU-1A"}
            </tspan>
          </text>
        </g>
        <g id="g15464">
          <path
            id="estado_eq-4-3-5-4-7"
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-67-8-2-4)"
            opacity={0.999}
            strokeWidth={0.045439}
            d="M91.12 99.449H102.48100000000001V102.2186H91.12z"
          />
          <g
            id="gen_off_mode-5-4-0-5-0-3"
            
            transform="matrix(.71939 0 0 .55677 -245.15 68.608)"
            opacity={0.999}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-4-6-3-0-1"
              className={tableros.piloto2_tpdu2a}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-8-4-8-4-1"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-4-6-6-2-7)"
              opacity={0.592}
            />
          </g>
          <g
            id="gen_off_mode-5-4-6-9-9"
            
            transform="matrix(.71939 0 0 .55677 -254.67 68.658)"
            opacity={0.999}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-4-5-0-2"
              className={tableros.piloto1_tpdu2a}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-8-7-3-2"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-4-4-6-5)"
              opacity={0.592}
            />
          </g>
          <text
            id="text13665-1-9-8-0-5"
            transform="scale(.95262 1.0497)"
            x={104.94845}
            y={107.42897}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.3043px"
            strokeWidth={0.032607}
          >
            <tspan
              id="tspan13663-0-08-7-6-8"
              x={104.94845}
              y={107.42897}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight={700}
              strokeWidth={0.032607}
            >
              {"GEN"}
            </tspan>
          </text>
          <text
            id="text13665-1-9-5-3-9-3"
            transform="scale(.95262 1.0497)"
            x={95.080437}
            y={107.51437}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.3043px"
            strokeWidth={0.032607}
          >
            <tspan
              id="tspan13663-0-08-2-5-5-9"
              x={95.080437}
              y={107.51437}
              fill="#fff"
              fontFamily="sans-serif"
              fontWeight={700}
              strokeWidth={0.032607}
            >
              {"EEE"}
            </tspan>
          </text>
          <g
            id="g4030-4-3-0-9-8-1"
            transform="matrix(.2386 0 0 .18739 74.733 93.954)"
            opacity={0.999}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-6-6-2-8"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.75}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-7-7-9-4"
            fill="none"
            opacity={0.25}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.097918}
            stroke="#00fbff"
            d="M91.12 99.449H102.48100000000001V102.2186H91.12z"
          />
          <text
            id="gen_nom_on-1-0-1-7"
            transform="scale(.94768 1.0552)"
            x={96.941681}
            y={96.404884}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.331px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.087412}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-6-9-4-6"
              x={96.941681}
              y={96.404884}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="2.71px"
              strokeWidth={0.087412}
            >
              {"T-PDU-2A"}
            </tspan>
          </text>
        </g>
        <g id="g10652" opacity={0.999}>
          <g id="g10539">
            <g id="g26" 
            className={tdlow_A0.color_tdlow_A0_indust}
            transform="matrix(.24078 0 0 .15914 174.13 116.74)">
              <g id="shape">
                <path
                  className={tdlow_A0.color_tdlow_A0_indust}
                  id="polygon4"
                  fill="#666"
                  d="M100 100L100 58 93.745 58 91.639 3.5 85.861 3.5 83.755 58 78.875 58 67 48.5 67 58 63.438 58 51.563 48.5 51.563 58 48 58 36.125 48.5 36.125 58 32.563 58 20.688 48.5 20.688 58 17.125 58 5.25 48.5 5.25 58 0 58 0 100z"
                />
              </g>
              <g id="hlights" fill="#fff">
                <path id="rect7-0" d="M9.5 65.5H14.5V75H9.5z" />
                <path id="rect9" d="M25.2 65.5H30.2V75H25.2z" />
                <path id="rect11" d="M40.9 65.5H45.9V75H40.9z" />
                <path id="rect13" d="M56.6 65.5H61.6V75H56.6z" />
                <path id="rect15" d="M72.3 65.5H77.3V75H72.3z" />
                <path id="rect17" d="M88 65.5H93V75H88z" />
                <path
                  id="polygon19"
                  d="M10 100L9 100 9 82.5 32.5 82.5 32.5 100 32 100 32 83.5 10 83.5z"
                />
                <path
                  id="polygon21"
                  d="M39.5 100L38.5 100 38.5 82.5 62 82.5 62 100 61.5 100 61.5 83.5 39.5 83.5z"
                />
                <path
                  id="polygon23"
                  d="M74.5 100L73.5 100 73.5 91.5 79 91.5 79 100 78.5 100 78.5 92.5 74.5 92.5z"
                />
              </g>
            </g>
            <g
              id="g104"
              className={tdlow_A0.color_tdlow_A0_torre}
              transform="matrix(.2988 0 0 .22337 188.48 116.13)"
              fill="gray"
            >
              <g id="shape-2">
                <path
                  id="path4-2"
                  className={tdlow_A0.color_tdlow_A0_torre}
                  d="M67.419 21.663l-15.101-3.972V6.97h10.081a.372.372 0 00.129-.723L52.34 2.475a.383.383 0 00-.13-.023h-.067L50.246.162a.45.45 0 00-.691 0l-1.897 2.29h-.067a.387.387 0 00-.13.023L37.272 6.247a.374.374 0 00.129.723h10.081v10.722l-15.101 3.972a.374.374 0 00.095.734h15.006v11.456a.745.745 0 00-.023.006L37.27 37.7a.374.374 0 00.131.722h10.044l-7.703 61.149-.055.429h1.967a.37.37 0 00.271-.117l7.975-8.429 7.975 8.429a.375.375 0 00.271.117h1.968l-.056-.429-7.7-61.126.015-.023h10.026a.373.373 0 00.131-.722l-10.188-3.84-.023-.006V22.397h15.006a.373.373 0 00.094-.734zM44.502 68.955H55.3l.011.088-5.38 5.56-5.433-5.615zm.58-.746l4.848-6.203 4.848 6.203zm-.434-.414l1.361-10.805 3.543 4.532zm4.867 7.238l-6.644 6.866 1.531-12.151zm.415.429l6.557 6.777H43.373zm6.957 7.523L49.9 90.369l-6.986-7.384zm-6.541-7.952l5.06-5.23 1.515 12.025zm-.037-13.511l3.491-4.466 1.341 10.648zm-.379-.485l-3.816-4.882.004-.035h7.564l.013.101zm-.374-10.4l-3.296 4.357.941-7.471zm-2.188-3.883h5.125l-2.563 3.388zm2.562 4.377l3.209 4.242h-6.417zm.375-.494l2.304-3.046.921 7.308zm2.104-4.629h-5.017l.009-.072 2.529-3.822 2.455 3.71zM47.57 44.6l.641-5.085 1.362 2.058zm.755-5.994l.023-.184h3.105l.033.26-1.556 2.351zm.331-8.548l1.325-1.325 1.325 1.325zm2.484.447l-1.159 1.159-1.159-1.159zm-2.762-.803v-2.573l1.286 1.287zm0 .992l1.286 1.286-1.286 1.286zm1.287 5.425l-1.286 1.286v-2.573zm-.904-1.536h2.441l-1.22 1.22zm1.22 1.853l1.24 1.24h-2.479zm1.442-1.441v2.25l-1.125-1.125zm0-1.159h-2.98l1.539-1.539 1.441 1.441zm-1.125-1.855l1.125-1.125v2.249zm1.125-2.44l-1.125-1.125 1.125-1.125zm0-2.883l-1.441 1.441-1.603-1.603v-.049h3.044zm-2.721-.659l1.279-1.279 1.279 1.279zm-.324-.31v-2.573l1.286 1.286zm3.045-.161l-1.125-1.125 1.125-1.125zm-1.442-1.442l-1.603-1.603v-.086h3.044v.248zm-8.989-3.916l.97 1.481h-2.573l1.575-1.473zm.457-.12l2.692-.708-1.684 2.246zm3.258-.717l2.318 2.318h-4.056zM54.724 4.154l1.416 2.07h-3.672l2.246-2.073zm-3.301 14.833v2.25l-1.125-1.125zm-1.442.808l-1.373-1.373h2.746zm.317-3.602l1.125-1.125v2.25zm.849 1.483h-2.332l1.166-1.166zm.178-3.143l-1.344 1.344-1.344-1.344zm-2.669-.447l1.325-1.325 1.325 1.325zm2.767-.517l-1.125-1.125 1.125-1.125zm-1.442-1.442l-1.325-1.325h2.65zm-1.325-1.773l1.325-1.325 1.325 1.325zm1.009 2.09l-1.286 1.286v-2.573zm0 3.749l-1.286 1.286v-2.573zm0 3.919l-1.286 1.286v-2.573zm.316.317l1.223 1.223h-2.445zm1.442-10.592l-1.125-1.125 1.125-1.125zm-1.442-1.441L48.555 6.97h2.852zm1.442-2.644L48.87 3.198h2.553v2.554zM48.378 3.34l2.883 2.883h-2.883zm1.287 5.372l-1.286 1.286V7.426zm7.292 12.939h-4.056l2.318-2.318zm-1.142-2.268l2.643.695-.989 1.51zm3.1.815l.095.025 1.526 1.428h-2.573zm-4.113-1.081L52.318 21.6v-3.137zm1.881-12.893l-1.232-1.801 4.866 1.801zm-2.44-2.248l-1.925 1.777v-2.49zM49.9 1.15l1.079 1.303H48.82zm-2.417 2.113v2.578L45.601 3.96zm-.251 2.961h-3.507l1.437-2.07zm-2.775-1.841l-1.278 1.84h-3.694zm3.026 17.093l-2.385-2.385 2.385-.627zm-7.43-1.058l-1.319 1.234h-3.371zm7.43 14.231v2.573l-1.869-1.869zm-.18 3.027h-3.628l1.487-2.141zm-2.87-1.878l-1.304 1.878H39.45zm-2.939 63.456h-.809l1.95-15.478 6.752 7.136zm8.92-8.342l6.752-7.136 1.95 15.478h-.809zm1.803-46.424l-1.929-2.915L51.6 39.59zm.281-6.812l2.22-2.106 1.404 2.106zm4.163 0l-1.238-1.857 4.928 1.857zm-2.396-2.294l-1.947 1.847v-2.58zm6.926-13.731l-1.27-1.188 4.517 1.188z"
                  fill="gray"
                />
              </g>
              <g id="dark">
                <g id="g21">
                  <path id="path7" d="M61.547 7.751a.785.785 0 011.57 0z" />
                  <path id="path9" d="M61.547 8.547a.785.785 0 011.57 0z" />
                  <path id="path11" d="M61.547 9.343a.785.785 0 011.57 0z" />
                  <path id="path13" d="M61.547 10.138a.785.785 0 011.57 0z" />
                  <path id="path15" d="M61.547 10.934a.785.785 0 011.57 0z" />
                  <path id="path17" d="M61.547 11.729a.785.785 0 011.57 0z" />
                  <path id="path19" d="M61.547 12.525a.785.785 0 011.57 0z" />
                </g>
                <g id="g37">
                  <path id="path23" d="M36.547 7.751a.785.785 0 011.57 0z" />
                  <path id="path25" d="M36.547 8.547a.785.785 0 011.57 0z" />
                  <path id="path27" d="M36.547 9.343a.785.785 0 011.57 0z" />
                  <path id="path29" d="M36.547 10.138a.785.785 0 011.57 0z" />
                  <path id="path31" d="M36.547 10.934a.785.785 0 011.57 0z" />
                  <path id="path33" d="M36.547 11.729a.785.785 0 011.57 0z" />
                  <path id="path35" d="M36.547 12.525a.785.785 0 011.57 0z" />
                </g>
                <g id="g53">
                  <path
                    id="path39"
                    d="M62.332 38.459a.785.785 0 00-.785.785h1.57a.784.784 0 00-.785-.785z"
                  />
                  <path
                    id="path41"
                    d="M62.332 39.255a.785.785 0 00-.785.785h1.57a.784.784 0 00-.785-.785z"
                  />
                  <path
                    id="path43"
                    d="M62.332 40.05a.785.785 0 00-.785.785h1.57a.785.785 0 00-.785-.785z"
                  />
                  <path
                    id="path45"
                    d="M62.332 40.846a.785.785 0 00-.785.785h1.57a.784.784 0 00-.785-.785z"
                  />
                  <path
                    id="path47"
                    d="M62.332 41.641a.785.785 0 00-.785.785h1.57a.785.785 0 00-.785-.785z"
                  />
                  <path
                    id="path49"
                    d="M62.332 42.437a.785.785 0 00-.785.785h1.57a.785.785 0 00-.785-.785z"
                  />
                  <path
                    id="path51"
                    d="M62.332 43.233a.785.785 0 00-.785.785h1.57a.784.784 0 00-.785-.785z"
                  />
                </g>
                <g id="g69">
                  <path
                    id="path55"
                    d="M37.332 38.459a.785.785 0 00-.785.785h1.57a.784.784 0 00-.785-.785z"
                  />
                  <path
                    id="path57"
                    d="M37.332 39.255a.785.785 0 00-.785.785h1.57a.784.784 0 00-.785-.785z"
                  />
                  <path
                    id="path59"
                    d="M37.332 40.05a.785.785 0 00-.785.785h1.57a.785.785 0 00-.785-.785z"
                  />
                  <path
                    id="path61"
                    d="M37.332 40.846a.785.785 0 00-.785.785h1.57a.784.784 0 00-.785-.785z"
                  />
                  <path
                    id="path63"
                    d="M37.332 41.641a.785.785 0 00-.785.785h1.57a.785.785 0 00-.785-.785z"
                  />
                  <path
                    id="path65"
                    d="M37.332 42.437a.785.785 0 00-.785.785h1.57a.785.785 0 00-.785-.785z"
                  />
                  <path
                    id="path67"
                    d="M37.332 43.233a.785.785 0 00-.785.785h1.57a.784.784 0 00-.785-.785z"
                  />
                </g>
                <g id="g85">
                  <path id="path71" d="M66.622 23.162a.785.785 0 011.57 0z" />
                  <path id="path73" d="M66.622 23.957a.785.785 0 011.57 0z" />
                  <path id="path75" d="M66.622 24.753a.785.785 0 011.57 0z" />
                  <path id="path77" d="M66.622 25.549a.785.785 0 011.57 0z" />
                  <path id="path79" d="M66.622 26.344a.785.785 0 011.57 0z" />
                  <path id="path81" d="M66.622 27.14a.785.785 0 011.57 0z" />
                  <path id="path83" d="M66.622 27.936a.785.785 0 011.57 0z" />
                </g>
                <g id="g101">
                  <path id="path87" d="M31.808 23.162a.785.785 0 011.57 0z" />
                  <path id="path89" d="M31.808 23.957a.785.785 0 011.57 0z" />
                  <path id="path91" d="M31.808 24.753a.785.785 0 011.57 0z" />
                  <path id="path93" d="M31.808 25.549a.785.785 0 011.57 0z" />
                  <path id="path95" d="M31.808 26.344a.785.785 0 011.57 0z" />
                  <path id="path97" d="M31.808 27.14a.785.785 0 011.57 0z" />
                  <path id="path99" d="M31.808 27.936a.785.785 0 011.57 0z" />
                </g>
              </g>
            </g>
          </g>
          <text
            id="alt1-6-4-0"
            transform="scale(.99071 1.0094)"
            x={180.1642}
            y={84.821686}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.7095px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.15456}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-92-9-4"
              x={180.1642}
              y={84.821686}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.15456}
            >
              {tdlow_A0.voltff_tdlow_A0}
            </tspan>
          </text>
          <text
            id="alt2-1-6-4"
            transform="scale(.99071 1.0094)"
            x={180.11833}
            y={93.842102}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.7095px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.15456}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-9-5-9"
              x={180.11833}
              y={93.842102}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.15456}
            >
              {tdlow_A0.amp_tdlow_A0}
            </tspan>
          </text>
          <text
            id="alt3-7-5-0"
            transform="scale(.99071 1.0094)"
            x={180.12682}
            y={98.08773}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.7095px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.15456}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-9-9-5-0"
              x={180.12682}
              y={98.08773}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.15456}
            >
              {tdlow_A0.kw_tdlow_A0}
            </tspan>
          </text>
          <text
            id="alt4-5-1-9"
            transform="scale(.99071 1.0094)"
            x={182.37129}
            y={102.61479}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.7095px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.15456}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-3-1-3"
              x={182.37129}
              y={102.61479}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.15456}
            >
              {tdlow_A0.carga_tdlow_A0}
            </tspan>
          </text>
          <text
            id="alt4-1-2-2-6"
            transform="matrix(1.0917 0 0 1.1123 -30.054 -14.033)"
            x={195.11404}
            y={109.83671}
            style={{ inlineSize: 0, lineHeight: 1.25, whiteSpace: "pre" }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.3663px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.14026}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-6-3-1-2-8-2"
              x={191.12682}
              y={109.83671}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.3663px"
              strokeWidth={0.14026}
            >
              {tdlow_A0.kvar_tdlow_A0}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-6-2-3"
            transform="scale(.97614 1.0244)"
            x={195.70094}
            y={83.580887}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.6653px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.27489}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-3-9-6"
              x={195.70094}
              y={83.580887}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.27489}
            >
              {"VOLTAGE FF "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-8-7-7-7"
            transform="scale(.97614 1.0244)"
            x={195.67641}
            y={92.480659}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.6653px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.27489}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-4-5-0-9"
              x={195.67641}
              y={92.480659}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.27489}
            >
              {"AMPERES"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-44-0-4-8"
            transform="scale(.97614 1.0244)"
            x={195.5206}
            y={96.754425}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.6653px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.27489}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-9-47-3-6"
              x={195.5206}
              y={96.754425}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.27489}
            >
              {"KW "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-4-4-59-9-3"
            transform="scale(.97614 1.0244)"
            x={195.53081}
            y={101.13857}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.6653px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.27489}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-1-8-7-6-9-5-5"
              x={195.53081}
              y={101.13857}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.27489}
            >
              {"% CARGA "}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-2-4-7-5-0-7-3"
            transform="scale(.97614 1.0244)"
            x={195.55502}
            y={105.52742}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.6653px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.27489}
            wordSpacing={0}
          >
            <tspan
              id="tspan2594-6-1-6-3-0-9-1-6"
              x={195.55502}
              y={105.52742}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.27489}
            >
              {"KVA"}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-3-7-6-4"
            transform="scale(1.0976 .9111)"            
            x={169.22263}
            y={87.197449}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#ff0"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.3188px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.24891}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-0-3-0-2"
              x={169.22263}
              y={87.197449}
              fill="#ff0"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.3589px"
              strokeWidth={0.24891}
            >
              {tdlow_A0.modo_tdlow_A0}
            </tspan>
          </text>
          <path
            id="estado_eq-4-3-56-3"
            className={tdlow_A0.boton_tdlow_A0}
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-67-3-0)"
            opacity={0.999}
            strokeWidth={0.11646}
            d="M178.72 64.532H205.09199999999998V72.3691H178.72z"
          />
          <g
            id="g4030-4-3-0-0-7-8-8-9"
            transform="matrix(.55388 0 0 .53025 140.68 48.982)"
            opacity={0.999}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-6-5-9-6-5-0"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.75}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-7-9-6-4-9-3"
            fill="none"
            className={tdlow_A0.boton_tdlow_A0}
            opacity={0.25}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.25096}
            stroke="#00fbff"
            d="M178.72 64.532H205.09199999999998V72.3691H178.72z"
          />
          <text
            id="gen_nom_on-1-5-1-0-6-1"
            transform="scale(.91498 1.0929)"
            x={196.14333}
            y={64.339737}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="4.7015px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.1763}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-6-6-1-8-6-0"
              x={196.14333}
              y={64.339737}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="5.466px"
              strokeWidth={0.1763}
            >
              {"TDLOW-A0"}
            </tspan>
          </text>
          <text
            id="alt1-6-4-0-4"
            transform="scale(.99071 1.0094)"
            x={180.10919}
            y={89.332932}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.7095px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.15456}
            wordSpacing={0}
          >
            <tspan
              id="tspan2620-92-9-4-6"
              x={180.10919}
              y={89.332932}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.15456}
            >
              {tdlow_A0.voltfn_tdlow_A0}
            </tspan>
          </text>
          <text
            id="text10992-9-0-1-1-6-2-3-9"
            transform="scale(.97614 1.0244)"
            x={195.64513}
            y={88.025787}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#dbe2e3"
            fontFamily="Franklin Gothic Medium"
            fontSize="3.6653px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.27489}
            wordSpacing={0}
          >
            <tspan
              id="tspan2511-7-9-3-3-9-6-8"
              x={195.64513}
              y={88.025787}
              fill="#dbe2e3"
              fontFamily="Franklin Gothic Medium"
              fontSize="3.7095px"
              strokeWidth={0.27489}
            >
              {"VOLTAGE FN "}
            </tspan>
          </text>
        </g>
        <g id="g16927">
          <text
            id="text5111-7-4-6"
            transform="scale(.90236 1.1082)"
            x={295.03625}
            y={12.696431}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="4.2616px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.15416}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5"
              x={295.03625}
              y={12.696431}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="6.8185px"
              strokeWidth={0.15416}
            >
              {"SISTEMA 1"}
            </tspan>
          </text>
          <g
            id="g6209"
            transform="matrix(1.0746 0 0 1.088 -10.558 41.199)"
            opacity={0.999}
          >
            <path
              id="path118-0-2"
              d="M305.56 32.559h-.087v-1.202c-3.298-.033-6.317-1.951-7.733-4.914l-.551.253-.036-.077a9.158 9.158 0 01.288-8.277l.042-.075.53.29a8.61 8.61 0 014.853-3.961l-.443-1.392.082-.026c.986-.31 2.013-.467 3.055-.467 1.104 0 2.19.176 3.23.524l.081.027-.47 1.385a8.59 8.59 0 015.812 8.117 8.595 8.595 0 01-4.381 7.473l.588 1.052-.075.041a9.927 9.927 0 01-4.785 1.229zm-7.736-6.343l.037.078c1.383 2.972 4.406 4.892 7.699 4.892h.086v1.201a9.757 9.757 0 004.54-1.165l-.589-1.051.076-.042a8.425 8.425 0 004.367-7.365 8.42 8.42 0 00-5.775-7.982l-.082-.027.47-1.385a9.996 9.996 0 00-3.093-.487c-.995 0-1.977.146-2.92.433l.443 1.391-.083.026a8.44 8.44 0 00-4.877 3.981l-.041.076-.53-.29a8.987 8.987 0 00-.278 7.969z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path120-2-7-6"
              d="M297.91 17.639l-.143-.096a9.454 9.454 0 013.3-2.982l.083.15a9.278 9.278 0 00-3.24 2.928z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path122-2-8"
              d="M304.3 32.016a9.35 9.35 0 01-6.822-4.494l.149-.087a9.18 9.18 0 006.696 4.411z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path124-5-9"
              d="M311.58 29.938l-.11-.132a9.154 9.154 0 002.875-4.217l.165.054a9.327 9.327 0 01-2.93 4.295z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <ellipse
              id="path24257"
              cx={305.6}
              cy={22.87}
              rx={6.5495}
              ry={6.3831}
              fill="#0043aa"
              opacity={0.3}
              stopColor="#000"
              strokeWidth={0.16157}
              stroke="#0043aa"
            />
            <path
              id="path126-5-7"
              d="M314.51 25.643l-.164-.053c.297-.91.447-1.86.447-2.827h.173c0 .984-.153 1.953-.456 2.88z"
              fill="#10677d"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path128-1-6-3"
              d="M305.49 30.876a8.47 8.47 0 01-.919-.059l.125-1.021c.264.031.535.049.803.05zm.92-.043l-.107-1.024a7.28 7.28 0 00.794-.126l.222 1.005a8.268 8.268 0 01-.91.145zm-2.745-.176a8.206 8.206 0 01-.884-.263l.353-.967c.25.09.51.167.77.228zm4.542-.216l-.336-.973c.253-.086.503-.188.745-.302l.444.93a8.09 8.09 0 01-.853.345zm-6.274-.407a8.148 8.148 0 01-.8-.452l.562-.865c.225.145.46.278.699.395zm7.936-.376l-.547-.874c.227-.14.448-.295.658-.46l.642.808c-.24.188-.493.365-.753.526zm-9.481-.615a8.245 8.245 0 01-.68-.619l.743-.718c.187.19.386.372.593.54zm10.924-.518l-.73-.73c.19-.187.371-.387.539-.594l.807.645c-.192.237-.4.466-.616.68zm-12.207-.79a8.175 8.175 0 01-.523-.753l.884-.536c.14.226.293.448.457.657zm13.36-.633l-.876-.55c.144-.226.276-.46.392-.699l.932.45a8.224 8.224 0 01-.448.8zm-14.318-.927a8.051 8.051 0 01-.34-.85l.983-.325c.084.251.184.501.296.742zm15.12-.717l-.977-.342c.089-.25.164-.509.223-.767l1.01.229a8.12 8.12 0 01-.255.88zm-15.701-1.017a7.986 7.986 0 01-.139-.905l1.032-.097c.025.265.066.53.12.79zm16.112-.765l-1.03-.115c.03-.262.045-.53.045-.798h1.036c0 .305-.018.612-.051.913zm-15.25-1.036l-1.037-.017c.005-.304.028-.611.067-.912l1.028.132a7.096 7.096 0 00-.058.797zm14.243-.431a7.043 7.043 0 00-.107-.792l1.017-.194c.058.298.1.603.123.907zm-14.037-1.151l-1.006-.247c.073-.294.164-.589.271-.875l.972.359c-.094.25-.174.506-.237.763zm13.733-.415a7.02 7.02 0 00-.284-.747l.947-.417c.124.277.234.565.325.856zm-13.174-1.08l-.924-.466c.138-.27.294-.537.462-.791l.866.566a7.165 7.165 0 00-.404.691zm12.524-.378a7.124 7.124 0 00-.446-.665l.83-.617c.183.243.354.5.51.761zm-11.64-.955l-.797-.659c.196-.233.408-.458.629-.668l.717.743c-.194.184-.378.38-.55.584zm10.676-.322a7.181 7.181 0 00-.584-.55l.67-.785c.234.197.46.41.668.63zm-9.517-.782l-.628-.818c.243-.184.5-.357.763-.513l.531.884c-.229.136-.453.286-.666.447zm8.29-.25a7.165 7.165 0 00-.692-.407l.478-.914c.271.14.538.297.792.466zm-6.912-.568l-.428-.937c.28-.126.568-.237.86-.33l.319.979a7.2 7.2 0 00-.75.288zm5.487-.166a7.136 7.136 0 00-.767-.242l.258-.997c.296.076.591.169.878.277zm-3.959-.324l-.204-1.008c.3-.06.606-.104.912-.13l.088 1.025a7.14 7.14 0 00-.796.113zm2.403-.072a7.27 7.27 0 00-.802-.065l.027-1.029c.307.008.616.033.917.075z"
              fill="#a80"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path130-6-9-3"
              d="M305.56 29.412c-3.692 0-6.695-2.983-6.695-6.649s3.003-6.649 6.695-6.649c3.691 0 6.695 2.983 6.695 6.649s-3.004 6.649-6.695 6.649zm0-12.955c-3.501 0-6.35 2.829-6.35 6.306s2.849 6.306 6.35 6.306c3.5 0 6.35-2.829 6.35-6.306s-2.85-6.306-6.35-6.306z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
          </g>
          <g
            id="g6218"
            transform="matrix(1.0746 0 0 1.088 -78.629 12.107)"
            opacity={0.999}
          >
            <ellipse
              id="path24257-5"
              cx={304.84}
              cy={49.325}
              rx={6.7135}
              ry={6.4478}
              fill="#0043aa"
              opacity={0.3}
              stopColor="#000"
              strokeWidth={0.16441}
              stroke="#0043aa"
            />
            <path
              id="path104-9-9"
              d="M304.83 56.557c-4.14 0-7.508-3.252-7.508-7.248 0-3.997 3.368-7.249 7.508-7.249 4.14 0 7.508 3.252 7.508 7.249 0 3.996-3.368 7.248-7.508 7.248zm0-13.864c-3.779 0-6.853 2.968-6.853 6.616 0 3.648 3.074 6.616 6.853 6.616s6.853-2.968 6.853-6.616c0-3.648-3.074-6.616-6.853-6.616z"
              fill="#a80"
              strokeWidth={0.089666}
            />
            <path
              id="path106-3-9"
              d="M304.83 55.495h-.101l.004-.254c.171.003.344-.002.513-.013l.018.253c-.143.01-.289.014-.434.014zm-.635-.03a6.703 6.703 0 01-.53-.072l.047-.249c.168.03.34.053.509.07zm1.6-.04l-.039-.25a6.52 6.52 0 00.504-.095l.06.247c-.172.04-.349.072-.525.098zm-2.652-.147a6.501 6.501 0 01-.51-.156l.09-.238c.16.057.325.107.49.15zm3.692-.092l-.081-.24c.161-.052.323-.11.48-.175l.102.233a6.476 6.476 0 01-.5.182zm-4.696-.261a6.508 6.508 0 01-.476-.237l.13-.22c.148.082.302.158.456.227zm5.68-.143l-.123-.224c.15-.076.3-.16.443-.25l.142.214a6.44 6.44 0 01-.463.26zm-6.61-.368a6.422 6.422 0 01-.428-.31l.166-.196c.132.104.27.204.41.297zm7.51-.188l-.16-.201c.136-.1.268-.207.395-.317l.176.187c-.132.116-.27.227-.411.331zm-8.338-.465a6.327 6.327 0 01-.37-.374l.198-.167c.112.124.231.244.354.359zm9.13-.228l-.191-.173c.116-.12.228-.246.334-.376l.206.157c-.11.135-.228.267-.349.392zm-9.835-.548a6.136 6.136 0 01-.3-.427l.223-.133c.09.14.186.277.288.41zm10.498-.262l-.219-.14c.095-.137.184-.28.266-.424l.23.122c-.086.15-.179.3-.277.442zm-11.06-.615a6.112 6.112 0 01-.222-.47l.243-.095c.064.152.136.304.213.45zm11.575-.29l-.24-.103c.07-.15.133-.305.189-.46l.247.082a6.003 6.003 0 01-.196.481zm-11.978-.666a6.051 6.051 0 01-.138-.5l.256-.054c.037.16.081.321.132.478zm12.328-.31l-.254-.062c.042-.159.077-.322.106-.485l.258.042c-.03.17-.066.34-.11.505zm-12.56-.698a6.2 6.2 0 01-.049-.514l.262-.013c.01.164.025.33.048.493zm12.737-.32l-.262-.02a5.84 5.84 0 00.022-.495h.262c0 .171-.007.345-.022.516zm-.242-.636a5.575 5.575 0 00-.031-.494l.26-.026c.019.17.03.343.033.515zm-12.287-.067l-.262-.007c.006-.173.019-.346.039-.515l.26.029a5.77 5.77 0 00-.037.494zm12.182-.918a5.816 5.816 0 00-.116-.482l.253-.067c.047.165.088.335.12.503zm-12.065-.065l-.257-.05c.035-.167.078-.336.127-.501l.252.07c-.047.159-.088.32-.122.481zm11.792-.888a5.927 5.927 0 00-.198-.457l.238-.107c.075.154.144.314.206.476zm-11.507-.062l-.244-.09c.063-.161.134-.32.212-.475l.236.11a5.731 5.731 0 00-.204.455zm11.072-.834a5.805 5.805 0 00-.274-.418l.216-.144c.1.14.197.287.286.436zm-10.626-.058l-.226-.13c.09-.146.188-.292.292-.433l.213.147a6.094 6.094 0 00-.279.416zm10.042-.756a6.099 6.099 0 00-.342-.369l.188-.176c.123.122.243.252.357.385zm-9.449-.052l-.2-.163c.114-.13.236-.259.361-.38l.186.178c-.12.117-.237.24-.347.365zm8.734-.657a6.08 6.08 0 00-.401-.31l.155-.204c.144.102.284.21.418.323zm-8.01-.044l-.17-.193a6.38 6.38 0 01.422-.318l.152.206a6.105 6.105 0 00-.404.305zm7.183-.542a6.087 6.087 0 00-.449-.24l.118-.227c.16.078.317.162.468.252zm-6.349-.035l-.135-.217a6.4 6.4 0 01.47-.246l.116.228a6.11 6.11 0 00-.451.235zm5.433-.41a6.32 6.32 0 00-.485-.164l.077-.242c.17.05.34.108.505.172zm-4.512-.024l-.095-.236c.166-.062.336-.118.506-.166l.074.242c-.163.047-.326.1-.485.16zm3.531-.265a6.38 6.38 0 00-.506-.085l.034-.25c.176.021.353.05.527.087zm-2.548-.014l-.053-.248c.173-.034.351-.062.529-.083l.03.252c-.17.02-.34.046-.506.079zm1.531-.115a5.865 5.865 0 00-.513-.002l-.01-.253c.077-.003.156-.003.232-.004.101 0 .203.002.303.007z"
              fill="#767d10"
              strokeWidth={0.089666}
            />
            <path
              id="path108-2-0"
              d="M298.63 43.748l-.096-.086a8.727 8.727 0 014.78-2.52l.023.125a8.595 8.595 0 00-4.707 2.481z"
              fill="#0043aa"
              strokeWidth={0.089666}
            />
            <path
              id="path110-5-5"
              d="M300.48 56.461a8.477 8.477 0 01-3.542-3.878l.12-.05a8.349 8.349 0 003.488 3.82z"
              fill="#0043aa"
              strokeWidth={0.089666}
            />
            <path
              id="path112-2-5"
              d="M310.51 55.534l-.087-.095c1.824-1.551 2.87-3.786 2.87-6.13 0-.829-.129-1.646-.381-2.43l.125-.037c.256.796.386 1.625.386 2.467 0 2.38-1.062 4.65-2.913 6.225z"
              fill="#0043aa"
              strokeWidth={0.089666}
            />
            <path
              id="path114-6-2"
              d="M304.83 58.515a9.92 9.92 0 01-2.142-.233l-.064-.015.332-1.396c-3.622-.832-6.151-3.901-6.18-7.498h-1.482v-.064c0-2.059.69-4.006 1.992-5.631l.04-.05 1.173.876c1.526-1.872 3.803-2.952 6.265-2.97v-1.43h.066c2.44 0 4.762.889 6.537 2.503l.048.044-1.017 1.042c1.604 1.482 2.487 3.474 2.487 5.616 0 3.207-2.077 6.118-5.175 7.263l.52 1.34-.062.023a9.803 9.803 0 01-3.338.58zm-2.049-.343a9.778 9.778 0 005.28-.334l-.519-1.34.061-.022c3.081-1.111 5.151-3.992 5.151-7.167 0-2.128-.885-4.106-2.493-5.568l-.048-.043 1.016-1.042a9.552 9.552 0 00-6.333-2.426v1.43h-.066c-2.468 0-4.753 1.083-6.267 2.972l-.04.05-1.173-.877a8.79 8.79 0 00-1.924 5.441h1.48v.063c0 3.586 2.526 6.652 6.144 7.454l.063.014z"
              fill="#0043aa"
              strokeWidth={0.089666}
            />
          </g>
          <ellipse
            id="path24257-5-3-3"
            cx={271.91}
            cy={65.65}
            rx={8.2906}
            ry={8.5776}
            fill="#0043aa"
            opacity={0.2997}
            stopColor="#000"
            strokeWidth={0.21072}
            stroke="#0043aa"
          />
          <path
            id="path20-7-7"
            d="M271.93 75.734c-5.38 0-9.756-4.536-9.756-10.111 0-2.111.621-4.134 1.797-5.85l.533.393a9.607 9.607 0 00-1.676 5.457c0 5.202 4.083 9.434 9.102 9.434s9.102-4.232 9.102-9.434c0-5.202-4.083-9.434-9.102-9.434a8.759 8.759 0 00-3.817.867l-.275-.615a9.388 9.388 0 014.092-.93c5.38 0 9.756 4.537 9.756 10.112s-4.376 10.11-9.756 10.11z"
            fill="#0043aa"
            opacity={0.999}
            strokeWidth={0.09253}
          />
          <g
            id="g44-1-4"
            transform="matrix(.09089 0 0 .0942 181.8 41.709)"
            fill="#a80"
            opacity={0.999}
          >
            <path
              id="path22-5-8"
              d="M1045.5 325.33l-3.253-4.307a79.346 79.346 0 002.74-2.155l3.425 4.169a90.798 90.798 0 01-2.912 2.293z"
            />
            <path
              id="path24-5-4"
              d="M1054 318.05l-3.759-3.871a85.63 85.63 0 004.838-5.107l4.067 3.542a89.06 89.06 0 01-5.146 5.436zm9.826-11.278l-4.349-3.195a84.217 84.217 0 003.928-5.84l4.599 2.821a90.59 90.59 0 01-4.178 6.214zm7.816-12.757l-4.819-2.424a84.441 84.441 0 002.895-6.411l5.006 2.013a88.336 88.336 0 01-3.082 6.822zm5.575-13.881l-5.157-1.583a83.996 83.996 0 001.777-6.801l5.273 1.142a89.185 89.185 0 01-1.893 7.242zm3.169-14.613l-5.351-.699a83.45 83.45 0 00.618-7.006l5.389.244a89.276 89.276 0 01-.656 7.461zm-4.697-14.747a83.897 83.897 0 00-.545-7.013l5.357-.643c.295 2.454.488 4.966.58 7.461zm-1.672-13.953a85.042 85.042 0 00-1.707-6.824l5.174-1.528a88.944 88.944 0 011.816 7.261zm-3.983-13.477a85.707 85.707 0 00-2.828-6.444l4.845-2.375a89.594 89.594 0 013.01 6.859zm-6.191-12.627a84.17 84.17 0 00-3.863-5.881l4.38-3.149a89.496 89.496 0 014.114 6.256zm-8.205-11.419a86.328 86.328 0 00-4.788-5.155l3.797-3.833a90.677 90.677 0 015.094 5.485zm-9.987-9.897a85.125 85.125 0 00-5.575-4.291l3.112-4.409a91.708 91.708 0 015.93 4.565zm-11.488-8.103a84.637 84.637 0 00-6.207-3.302l2.332-4.865a89.14 89.14 0 016.608 3.515zm-12.667-6.07a83.326 83.326 0 00-6.675-2.216l1.482-5.188a89.578 89.578 0 017.106 2.36zm-48.446-3.376l-1.19-5.262a89.366 89.366 0 017.366-1.344l.745 5.345a83.834 83.834 0 00-6.921 1.261zm34.936-.486a85.034 85.034 0 00-6.955-1.068l.597-5.362c2.48.276 4.968.659 7.398 1.136zm-21.01-1.455l-.296-5.387a92.037 92.037 0 017.482-.104l-.147 5.394a87.03 87.03 0 00-7.039.097z"
            />
            <path
              id="path26-8-7"
              d="M960.64 176.62l-2.156-5.914 2.536-.924a86.537 86.537 0 013.506-1.198l1.637 5.141c-.249.079-.495.16-.745.241l.292.805z"
            />
            <path
              id="path38-0-9-8"
              d="M919.8 210.27l-4.609-2.805a91.775 91.775 0 011.988-3.126l1.497-2.245 5.237 3.488-2.989 4.491-.713-.474c-.138.223-.274.446-.411.671z"
            />
            <path
              id="path40-2-0-8"
              d="M980.48 342.64a89.937 89.937 0 01-7.313-1.224l1.11-5.28a84.36 84.36 0 006.874 1.15zm-14.507-3.056a89 89 0 01-7.008-2.422l1.974-5.023a82.866 82.866 0 006.583 2.276zm-13.788-5.422a89.724 89.724 0 01-6.513-3.552l2.778-4.626a84.164 84.164 0 006.12 3.339zm-12.707-7.634a89.885 89.885 0 01-5.838-4.577l3.502-4.104a83.07 83.07 0 005.487 4.301zm-11.276-9.62a92.501 92.501 0 01-5.006-5.475l4.128-3.474a85.672 85.672 0 004.707 5.146zm-9.544-11.344a90.778 90.778 0 01-4.036-6.225l4.644-2.747a84.13 84.13 0 003.794 5.851zm-7.549-12.766a90.788 90.788 0 01-2.951-6.808l5.034-1.939a85.91 85.91 0 002.774 6.397zm-5.326-13.841a88.364 88.364 0 01-1.777-7.205l5.287-1.073a83.635 83.635 0 001.668 6.764zm-2.947-14.527a90.11 90.11 0 01-.565-7.396l5.393-.188c.08 2.328.26 4.665.53 6.95zm4.869-14.561l-5.389-.251c.112-2.459.334-4.946.649-7.389l5.351.697a84.961 84.961 0 00-.611 6.943zm1.799-13.816l-5.276-1.135a89.777 89.777 0 011.868-7.186l5.161 1.578a82.474 82.474 0 00-1.753 6.743zm4.067-13.319l-5.013-2a88.091 88.091 0 013.039-6.771l4.826 2.412a82.88 82.88 0 00-2.852 6.359z"
            />
            <path
              id="path42-7-4"
              d="M991.69 343.33c-1.244 0-2.48-.026-3.706-.076l.218-5.391c1.155.047 2.318.07 3.488.07z"
            />
          </g>
          <g
            id="g6224"
            transform="matrix(1.0746 0 0 1.088 -34.106 -16.966)"
            opacity={0.999}
          >
            <path
              id="path2-2"
              d="M305.91 84.187v-.154c.6 0 1.197-.068 1.777-.2l.034.151c-.59.134-1.2.202-1.811.203zm-1.812-.2a8.13 8.13 0 01-1.722-.596l.068-.14a7.98 7.98 0 001.689.586zm5.344-.603l-.068-.14a8.008 8.008 0 001.512-.948l.097.12a8.176 8.176 0 01-1.541.968zm-8.61-.958a8.188 8.188 0 01-1.29-1.28l.12-.097c.374.464.8.886 1.267 1.257zm11.44-1.293l-.121-.096c.373-.465.693-.972.952-1.507l.14.067a8.102 8.102 0 01-.971 1.536zm-13.704-1.52a8.03 8.03 0 01-.605-1.712l.15-.035c.134.58.334 1.144.594 1.679zm15.277-1.728l-.151-.035a7.97 7.97 0 00.198-1.768v-.034h.155v.034c0 .608-.068 1.215-.202 1.803zm-15.933-1.786h-.155v-.017c0-.603.067-1.204.198-1.786l.152.034a7.951 7.951 0 00-.195 1.752v.017zm15.774-1.818a7.888 7.888 0 00-.597-1.677l.14-.068c.266.545.47 1.12.608 1.71zm-14.993-1.633l-.14-.066a8.11 8.11 0 01.968-1.538l.121.096a7.955 7.955 0 00-.95 1.508zm13.437-1.546a8.027 8.027 0 00-1.27-1.254l.097-.121c.477.376.912.806 1.294 1.278zm-11.227-1.224l-.097-.12c.475-.38.993-.706 1.54-.97l.067.138c-.536.26-1.044.58-1.51.952zm8.44-.973a7.965 7.965 0 00-1.69-.582l.034-.15a8.128 8.128 0 011.724.593zm-5.243-.571l-.035-.15c.59-.136 1.2-.205 1.81-.207l.001.154c-.6.002-1.197.07-1.777.203z"
              fill="#0043aa"
              strokeWidth={0.086048}
            />
            <path
              id="path4-3"
              d="M305.9 83.415c-4.063 0-7.37-3.29-7.37-7.333 0-4.044 3.307-7.334 7.37-7.334s7.37 3.29 7.37 7.334c0 4.043-3.307 7.333-7.37 7.333zm0-14.203c-3.807 0-6.904 3.082-6.904 6.87 0 3.789 3.097 6.87 6.904 6.87s6.904-3.081 6.904-6.87c0-3.788-3.097-6.87-6.904-6.87z"
              fill="#a80"
              strokeWidth={0.086048}
            />
            <path
              id="path6-5"
              d="M305.9 85.267c-5.09 0-9.231-4.12-9.231-9.186h.465c0 4.81 3.932 8.723 8.766 8.723 4.833 0 8.766-3.913 8.766-8.723 0-4.81-3.933-8.723-8.766-8.723v-.463c5.09 0 9.231 4.12 9.231 9.186 0 5.065-4.141 9.186-9.231 9.186z"
              fill="#a80"
              strokeWidth={0.086048}
            />
            <ellipse
              id="path24257-5-3"
              cx={305.8}
              cy={75.991}
              rx={6.8739}
              ry={6.8186}
              fill="#0043aa"
              opacity={0.3}
              stopColor="#000"
              strokeWidth={0.17108}
              stroke="#0043aa"
            />
          </g>
          <g
            id="gen_off_mode-5-7"
            className={tdlow_A1.piloto_tdlow_A1}
            transform="matrix(1.5861 0 0 1.4278 -494.71 -65.311)"
            opacity={0.998}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-7"
              className={tdlow_A1.piloto_tdlow_A1}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-3"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-6)"
              opacity={0.592}
            />
          </g>
          <path
            id="estado_eq-4-3-56"
            className={tdlow_A1.boton_tdlow_A1}
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-67-3)"
            opacity={0.998}
            strokeWidth={0.076841}
            d="M272.95 19.863H292.661V24.428H272.95z"
          />
          <g
            id="g4030-4-3-0-0-7-8-8"
            transform="matrix(.41397 0 0 .30887 244.52 10.806)"
            opacity={0.998}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-6-5-9-6-5"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.75}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-7-9-6-4-9"            
            fill="none"
            opacity={0.24975}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.16559}
            stroke="#00fbff"
            d="M272.95 19.863H292.661V24.428H272.95z"
          />
          <text
            id="gen_nom_on-1-5-1-0-6"
            transform="scale(.89051 1.123)"
            x={306.90869}
            y={21.09045}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="3.6104px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.13539}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-6-6-1-8-6"
              x={306.90869}
              y={21.09045}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.1975px"
              strokeWidth={0.13539}
            >
              {"TD-LOW-A-1"}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6"
            transform="scale(1.0508 .95166)"
            x={231.97043}
            y={70.331535}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.9087px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.19973}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7"
              x={231.97043}
              y={70.331535}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="4.8736px"
              fontWeight={700}
              strokeWidth={0.19973}
            >
              {tdlow_A1.volt_tdlow_A1}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-8"
            transform="scale(1.1506 .86914)"
            x={214.97783}
            y={81.132454}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.2748px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.1562}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-7"
              x={214.97783}
              y={81.132454}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="3.8115px"
              fontWeight={700}
              strokeWidth={0.1562}
            >
              {"v"}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-88"
            transform="scale(1.0508 .95166)"
            x={253.59447}
            y={69.968872}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.9087px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.19973}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-1"
              x={253.59447}
              y={69.968872}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="4.8736px"
              fontWeight={700}
              strokeWidth={0.19973}
            >
              {tdlow_A1.amp_tdlow_A1}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-8-3"
            transform="scale(1.1506 .86914)"
            x={234.87888}
            y={81.446785}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.2748px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.1562}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-7-0"
              x={234.87888}
              y={81.446785}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="3.8115px"
              fontWeight={700}
              strokeWidth={0.1562}
            >
              {"A"}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-88-2"
            transform="scale(1.0508 .95166)"
            x={275.491}
            y={69.550644}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.9087px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.19973}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-1-2"
              x={275.491}
              y={69.550644}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="4.8736px"
              fontWeight={700}
              strokeWidth={0.19973}
            >
              {tdlow_A1.kw_tdlow_A1}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-8-3-6"
            transform="scale(1.0633 .94047)"
            x={274.3436}
            y={74.966972}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.1023px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.14436}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-7-0-0"
              x={274.3436}
              y={74.966972}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="3.5224px"
              fontWeight={700}
              strokeWidth={0.14436}
            >
              {"KW"}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-88-2-2"
            transform="scale(1.0508 .95166)"
            x={297.27118}
            y={69.689651}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.9087px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.19973}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-1-2-2"
              x={297.27118}
              y={69.689651}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="4.8736px"
              fontWeight={700}
              strokeWidth={0.19973}
            >
              {tdlow_A1.kva_tdlow_A1}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-8-3-6-7"
            transform="scale(1.0633 .94047)"
            x={294.79169}
            y={75.157875}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.1023px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.14436}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-7-0-0-3"
              x={294.79169}
              y={75.157875}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="3.5224px"
              fontWeight={700}
              strokeWidth={0.14436}
            >
              {"KVA"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1"
            transform="scale(.87255 1.1461)"
            x={278.51743}
            y={69.760841}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4"
              x={278.51743}
              y={69.760841}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"VOLTAGE"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4"
            transform="scale(.87255 1.1461)"
            x={306.10898}
            y={69.85173}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4"
              x={306.10898}
              y={69.85173}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"AMPERE"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-5"
            transform="scale(.87255 1.1461)"
            x={335.09015}
            y={69.541534}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-2"
              x={335.09015}
              y={69.541534}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"REAL"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-5-1"
            transform="scale(.87255 1.1461)"
            x={357.46927}
            y={69.599258}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-2-0"
              x={357.46927}
              y={69.599258}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"APPARENT"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-5-6"
            transform="scale(.87255 1.1461)"
            x={333.49445}
            y={72.377914}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-2-1"
              x={333.49445}
              y={72.377914}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"POWER"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-5-1-8"
            transform="scale(.87255 1.1461)"
            x={359.11356}
            y={72.418724}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-2-0-6"
              x={359.11356}
              y={72.418724}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"POWER"}
            </tspan>
          </text>
        </g>
        <path
          id="rect5797-8"
          fill="#fc0"
          opacity={0.999}
          strokeWidth={0.15674}
          stroke="#030303"
          d="M26.578 115.42H148.508V118.6712H26.578z"
        />
        <path
          id="rect5797-8-7"
          fill="#fc0"
          opacity={0.999}
          strokeWidth={0.15697}
          stroke="#030303"
          d="M25.977 77.574H148.277V80.8249H25.977z"
        />
        <g id="g16853">
          <text
            id="text5111-7-4-6-6"
            transform="scale(.90236 1.1082)"
            x={295.48373}
            y={106.24345}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="4.2616px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.15416}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-4"
              x={295.48373}
              y={106.24345}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="6.8185px"
              strokeWidth={0.15416}
            >
              {"SISTEMA 2"}
            </tspan>
          </text>
          <g
            id="g6209-1"
            transform="matrix(1.0746 0 0 1.088 -10.154 144.87)"
            opacity={0.998}
          >
            <path
              id="path118-0-2-6"
              d="M305.56 32.559h-.087v-1.202c-3.298-.033-6.317-1.951-7.733-4.914l-.551.253-.036-.077a9.158 9.158 0 01.288-8.277l.042-.075.53.29a8.61 8.61 0 014.853-3.961l-.443-1.392.082-.026c.986-.31 2.013-.467 3.055-.467 1.104 0 2.19.176 3.23.524l.081.027-.47 1.385a8.59 8.59 0 015.812 8.117 8.595 8.595 0 01-4.381 7.473l.588 1.052-.075.041a9.927 9.927 0 01-4.785 1.229zm-7.736-6.343l.037.078c1.383 2.972 4.406 4.892 7.699 4.892h.086v1.201a9.757 9.757 0 004.54-1.165l-.589-1.051.076-.042a8.425 8.425 0 004.367-7.365 8.42 8.42 0 00-5.775-7.982l-.082-.027.47-1.385a9.996 9.996 0 00-3.093-.487c-.995 0-1.977.146-2.92.433l.443 1.391-.083.026a8.44 8.44 0 00-4.877 3.981l-.041.076-.53-.29a8.987 8.987 0 00-.278 7.969z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path120-2-7-6-7"
              d="M297.91 17.639l-.143-.096a9.454 9.454 0 013.3-2.982l.083.15a9.278 9.278 0 00-3.24 2.928z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path122-2-8-6"
              d="M304.3 32.016a9.35 9.35 0 01-6.822-4.494l.149-.087a9.18 9.18 0 006.696 4.411z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path124-5-9-8"
              d="M311.58 29.938l-.11-.132a9.154 9.154 0 002.875-4.217l.165.054a9.327 9.327 0 01-2.93 4.295z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <ellipse
              id="path24257-51"
              cx={305.6}
              cy={22.87}
              rx={6.5495}
              ry={6.3831}
              fill="#0043aa"
              opacity={0.3}
              stopColor="#000"
              strokeWidth={0.16157}
              stroke="#0043aa"
            />
            <path
              id="path126-5-7-1"
              d="M314.51 25.643l-.164-.053c.297-.91.447-1.86.447-2.827h.173c0 .984-.153 1.953-.456 2.88z"
              fill="#10677d"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path128-1-6-3-75"
              d="M305.49 30.876a8.47 8.47 0 01-.919-.059l.125-1.021c.264.031.535.049.803.05zm.92-.043l-.107-1.024a7.28 7.28 0 00.794-.126l.222 1.005a8.268 8.268 0 01-.91.145zm-2.745-.176a8.206 8.206 0 01-.884-.263l.353-.967c.25.09.51.167.77.228zm4.542-.216l-.336-.973c.253-.086.503-.188.745-.302l.444.93a8.09 8.09 0 01-.853.345zm-6.274-.407a8.148 8.148 0 01-.8-.452l.562-.865c.225.145.46.278.699.395zm7.936-.376l-.547-.874c.227-.14.448-.295.658-.46l.642.808c-.24.188-.493.365-.753.526zm-9.481-.615a8.245 8.245 0 01-.68-.619l.743-.718c.187.19.386.372.593.54zm10.924-.518l-.73-.73c.19-.187.371-.387.539-.594l.807.645c-.192.237-.4.466-.616.68zm-12.207-.79a8.175 8.175 0 01-.523-.753l.884-.536c.14.226.293.448.457.657zm13.36-.633l-.876-.55c.144-.226.276-.46.392-.699l.932.45a8.224 8.224 0 01-.448.8zm-14.318-.927a8.051 8.051 0 01-.34-.85l.983-.325c.084.251.184.501.296.742zm15.12-.717l-.977-.342c.089-.25.164-.509.223-.767l1.01.229a8.12 8.12 0 01-.255.88zm-15.701-1.017a7.986 7.986 0 01-.139-.905l1.032-.097c.025.265.066.53.12.79zm16.112-.765l-1.03-.115c.03-.262.045-.53.045-.798h1.036c0 .305-.018.612-.051.913zm-15.25-1.036l-1.037-.017c.005-.304.028-.611.067-.912l1.028.132a7.096 7.096 0 00-.058.797zm14.243-.431a7.043 7.043 0 00-.107-.792l1.017-.194c.058.298.1.603.123.907zm-14.037-1.151l-1.006-.247c.073-.294.164-.589.271-.875l.972.359c-.094.25-.174.506-.237.763zm13.733-.415a7.02 7.02 0 00-.284-.747l.947-.417c.124.277.234.565.325.856zm-13.174-1.08l-.924-.466c.138-.27.294-.537.462-.791l.866.566a7.165 7.165 0 00-.404.691zm12.524-.378a7.124 7.124 0 00-.446-.665l.83-.617c.183.243.354.5.51.761zm-11.64-.955l-.797-.659c.196-.233.408-.458.629-.668l.717.743c-.194.184-.378.38-.55.584zm10.676-.322a7.181 7.181 0 00-.584-.55l.67-.785c.234.197.46.41.668.63zm-9.517-.782l-.628-.818c.243-.184.5-.357.763-.513l.531.884c-.229.136-.453.286-.666.447zm8.29-.25a7.165 7.165 0 00-.692-.407l.478-.914c.271.14.538.297.792.466zm-6.912-.568l-.428-.937c.28-.126.568-.237.86-.33l.319.979a7.2 7.2 0 00-.75.288zm5.487-.166a7.136 7.136 0 00-.767-.242l.258-.997c.296.076.591.169.878.277zm-3.959-.324l-.204-1.008c.3-.06.606-.104.912-.13l.088 1.025a7.14 7.14 0 00-.796.113zm2.403-.072a7.27 7.27 0 00-.802-.065l.027-1.029c.307.008.616.033.917.075z"
              fill="#a80"
              opacity={0.999}
              strokeWidth={0.089043}
            />
            <path
              id="path130-6-9-3-67"
              d="M305.56 29.412c-3.692 0-6.695-2.983-6.695-6.649s3.003-6.649 6.695-6.649c3.691 0 6.695 2.983 6.695 6.649s-3.004 6.649-6.695 6.649zm0-12.955c-3.501 0-6.35 2.829-6.35 6.306s2.849 6.306 6.35 6.306c3.5 0 6.35-2.829 6.35-6.306s-2.85-6.306-6.35-6.306z"
              fill="#0043aa"
              opacity={0.999}
              strokeWidth={0.089043}
            />
          </g>
          <g
            id="g6218-4"
            transform="matrix(1.0746 0 0 1.088 -78.225 115.78)"
            opacity={0.998}
          >
            <ellipse
              id="path24257-5-6"
              cx={304.84}
              cy={49.325}
              rx={6.7135}
              ry={6.4478}
              fill="#0043aa"
              opacity={0.3}
              stopColor="#000"
              strokeWidth={0.16441}
              stroke="#0043aa"
            />
            <path
              id="path104-9-9-9"
              d="M304.83 56.557c-4.14 0-7.508-3.252-7.508-7.248 0-3.997 3.368-7.249 7.508-7.249 4.14 0 7.508 3.252 7.508 7.249 0 3.996-3.368 7.248-7.508 7.248zm0-13.864c-3.779 0-6.853 2.968-6.853 6.616 0 3.648 3.074 6.616 6.853 6.616s6.853-2.968 6.853-6.616c0-3.648-3.074-6.616-6.853-6.616z"
              fill="#a80"
              strokeWidth={0.089666}
            />
            <path
              id="path106-3-9-8"
              d="M304.83 55.495h-.101l.004-.254c.171.003.344-.002.513-.013l.018.253c-.143.01-.289.014-.434.014zm-.635-.03a6.703 6.703 0 01-.53-.072l.047-.249c.168.03.34.053.509.07zm1.6-.04l-.039-.25a6.52 6.52 0 00.504-.095l.06.247c-.172.04-.349.072-.525.098zm-2.652-.147a6.501 6.501 0 01-.51-.156l.09-.238c.16.057.325.107.49.15zm3.692-.092l-.081-.24c.161-.052.323-.11.48-.175l.102.233a6.476 6.476 0 01-.5.182zm-4.696-.261a6.508 6.508 0 01-.476-.237l.13-.22c.148.082.302.158.456.227zm5.68-.143l-.123-.224c.15-.076.3-.16.443-.25l.142.214a6.44 6.44 0 01-.463.26zm-6.61-.368a6.422 6.422 0 01-.428-.31l.166-.196c.132.104.27.204.41.297zm7.51-.188l-.16-.201c.136-.1.268-.207.395-.317l.176.187c-.132.116-.27.227-.411.331zm-8.338-.465a6.327 6.327 0 01-.37-.374l.198-.167c.112.124.231.244.354.359zm9.13-.228l-.191-.173c.116-.12.228-.246.334-.376l.206.157c-.11.135-.228.267-.349.392zm-9.835-.548a6.136 6.136 0 01-.3-.427l.223-.133c.09.14.186.277.288.41zm10.498-.262l-.219-.14c.095-.137.184-.28.266-.424l.23.122c-.086.15-.179.3-.277.442zm-11.06-.615a6.112 6.112 0 01-.222-.47l.243-.095c.064.152.136.304.213.45zm11.575-.29l-.24-.103c.07-.15.133-.305.189-.46l.247.082a6.003 6.003 0 01-.196.481zm-11.978-.666a6.051 6.051 0 01-.138-.5l.256-.054c.037.16.081.321.132.478zm12.328-.31l-.254-.062c.042-.159.077-.322.106-.485l.258.042c-.03.17-.066.34-.11.505zm-12.56-.698a6.2 6.2 0 01-.049-.514l.262-.013c.01.164.025.33.048.493zm12.737-.32l-.262-.02a5.84 5.84 0 00.022-.495h.262c0 .171-.007.345-.022.516zm-.242-.636a5.575 5.575 0 00-.031-.494l.26-.026c.019.17.03.343.033.515zm-12.287-.067l-.262-.007c.006-.173.019-.346.039-.515l.26.029a5.77 5.77 0 00-.037.494zm12.182-.918a5.816 5.816 0 00-.116-.482l.253-.067c.047.165.088.335.12.503zm-12.065-.065l-.257-.05c.035-.167.078-.336.127-.501l.252.07c-.047.159-.088.32-.122.481zm11.792-.888a5.927 5.927 0 00-.198-.457l.238-.107c.075.154.144.314.206.476zm-11.507-.062l-.244-.09c.063-.161.134-.32.212-.475l.236.11a5.731 5.731 0 00-.204.455zm11.072-.834a5.805 5.805 0 00-.274-.418l.216-.144c.1.14.197.287.286.436zm-10.626-.058l-.226-.13c.09-.146.188-.292.292-.433l.213.147a6.094 6.094 0 00-.279.416zm10.042-.756a6.099 6.099 0 00-.342-.369l.188-.176c.123.122.243.252.357.385zm-9.449-.052l-.2-.163c.114-.13.236-.259.361-.38l.186.178c-.12.117-.237.24-.347.365zm8.734-.657a6.08 6.08 0 00-.401-.31l.155-.204c.144.102.284.21.418.323zm-8.01-.044l-.17-.193a6.38 6.38 0 01.422-.318l.152.206a6.105 6.105 0 00-.404.305zm7.183-.542a6.087 6.087 0 00-.449-.24l.118-.227c.16.078.317.162.468.252zm-6.349-.035l-.135-.217a6.4 6.4 0 01.47-.246l.116.228a6.11 6.11 0 00-.451.235zm5.433-.41a6.32 6.32 0 00-.485-.164l.077-.242c.17.05.34.108.505.172zm-4.512-.024l-.095-.236c.166-.062.336-.118.506-.166l.074.242c-.163.047-.326.1-.485.16zm3.531-.265a6.38 6.38 0 00-.506-.085l.034-.25c.176.021.353.05.527.087zm-2.548-.014l-.053-.248c.173-.034.351-.062.529-.083l.03.252c-.17.02-.34.046-.506.079zm1.531-.115a5.865 5.865 0 00-.513-.002l-.01-.253c.077-.003.156-.003.232-.004.101 0 .203.002.303.007z"
              fill="#767d10"
              strokeWidth={0.089666}
            />
            <path
              id="path108-2-0-3"
              d="M298.63 43.748l-.096-.086a8.727 8.727 0 014.78-2.52l.023.125a8.595 8.595 0 00-4.707 2.481z"
              fill="#0043aa"
              strokeWidth={0.089666}
            />
            <path
              id="path110-5-5-0"
              d="M300.48 56.461a8.477 8.477 0 01-3.542-3.878l.12-.05a8.349 8.349 0 003.488 3.82z"
              fill="#0043aa"
              strokeWidth={0.089666}
            />
            <path
              id="path112-2-5-99"
              d="M310.51 55.534l-.087-.095c1.824-1.551 2.87-3.786 2.87-6.13 0-.829-.129-1.646-.381-2.43l.125-.037c.256.796.386 1.625.386 2.467 0 2.38-1.062 4.65-2.913 6.225z"
              fill="#0043aa"
              strokeWidth={0.089666}
            />
            <path
              id="path114-6-2-8"
              d="M304.83 58.515a9.92 9.92 0 01-2.142-.233l-.064-.015.332-1.396c-3.622-.832-6.151-3.901-6.18-7.498h-1.482v-.064c0-2.059.69-4.006 1.992-5.631l.04-.05 1.173.876c1.526-1.872 3.803-2.952 6.265-2.97v-1.43h.066c2.44 0 4.762.889 6.537 2.503l.048.044-1.017 1.042c1.604 1.482 2.487 3.474 2.487 5.616 0 3.207-2.077 6.118-5.175 7.263l.52 1.34-.062.023a9.803 9.803 0 01-3.338.58zm-2.049-.343a9.778 9.778 0 005.28-.334l-.519-1.34.061-.022c3.081-1.111 5.151-3.992 5.151-7.167 0-2.128-.885-4.106-2.493-5.568l-.048-.043 1.016-1.042a9.552 9.552 0 00-6.333-2.426v1.43h-.066c-2.468 0-4.753 1.083-6.267 2.972l-.04.05-1.173-.877a8.79 8.79 0 00-1.924 5.441h1.48v.063c0 3.586 2.526 6.652 6.144 7.454l.063.014z"
              fill="#0043aa"
              strokeWidth={4.6241}
            />
          </g>
          <ellipse
            id="path24257-5-3-3-9"
            cx={272.31}
            cy={169.32}
            rx={8.2906}
            ry={8.5776}
            fill="#0043aa"
            opacity={0.2997}
            stopColor="#000"
            strokeWidth={0.21072}
            stroke="#0043aa"
          />
          <path
            id="path20-7-7-3"
            d="M272.34 179.4c-5.38 0-9.756-4.536-9.756-10.111 0-2.111.621-4.134 1.797-5.85l.533.393a9.607 9.607 0 00-1.676 5.457c0 5.202 4.083 9.434 9.102 9.434s9.102-4.232 9.102-9.434c0-5.202-4.083-9.434-9.102-9.434a8.759 8.759 0 00-3.817.867l-.275-.615a9.388 9.388 0 014.092-.93c5.38 0 9.756 4.537 9.756 10.112s-4.376 10.11-9.756 10.11z"
            fill="#0043aa"
            opacity={0.998}
            strokeWidth={0.09253}
          />
          <g
            id="g44-1-4-9"
            transform="matrix(.09089 0 0 .0942 182.2 145.38)"
            fill="#a80"
            opacity={0.998}
          >
            <path
              id="path22-5-8-1"
              d="M1045.5 325.33l-3.253-4.307a79.346 79.346 0 002.74-2.155l3.425 4.169a90.798 90.798 0 01-2.912 2.293z"
            />
            <path
              id="path24-5-4-63"
              d="M1054 318.05l-3.759-3.871a85.63 85.63 0 004.838-5.107l4.067 3.542a89.06 89.06 0 01-5.146 5.436zm9.826-11.278l-4.349-3.195a84.217 84.217 0 003.928-5.84l4.599 2.821a90.59 90.59 0 01-4.178 6.214zm7.816-12.757l-4.819-2.424a84.441 84.441 0 002.895-6.411l5.006 2.013a88.336 88.336 0 01-3.082 6.822zm5.575-13.881l-5.157-1.583a83.996 83.996 0 001.777-6.801l5.273 1.142a89.185 89.185 0 01-1.893 7.242zm3.169-14.613l-5.351-.699a83.45 83.45 0 00.618-7.006l5.389.244a89.276 89.276 0 01-.656 7.461zm-4.697-14.747a83.897 83.897 0 00-.545-7.013l5.357-.643c.295 2.454.488 4.966.58 7.461zm-1.672-13.953a85.042 85.042 0 00-1.707-6.824l5.174-1.528a88.944 88.944 0 011.816 7.261zm-3.983-13.477a85.707 85.707 0 00-2.828-6.444l4.845-2.375a89.594 89.594 0 013.01 6.859zm-6.191-12.627a84.17 84.17 0 00-3.863-5.881l4.38-3.149a89.496 89.496 0 014.114 6.256zm-8.205-11.419a86.328 86.328 0 00-4.788-5.155l3.797-3.833a90.677 90.677 0 015.094 5.485zm-9.987-9.897a85.125 85.125 0 00-5.575-4.291l3.112-4.409a91.708 91.708 0 015.93 4.565zm-11.488-8.103a84.637 84.637 0 00-6.207-3.302l2.332-4.865a89.14 89.14 0 016.608 3.515zm-12.667-6.07a83.326 83.326 0 00-6.675-2.216l1.482-5.188a89.578 89.578 0 017.106 2.36zm-48.446-3.376l-1.19-5.262a89.366 89.366 0 017.366-1.344l.745 5.345a83.834 83.834 0 00-6.921 1.261zm34.936-.486a85.034 85.034 0 00-6.955-1.068l.597-5.362c2.48.276 4.968.659 7.398 1.136zm-21.01-1.455l-.296-5.387a92.037 92.037 0 017.482-.104l-.147 5.394a87.03 87.03 0 00-7.039.097z"
            />
            <path
              id="path26-8-7-5"
              d="M960.64 176.62l-2.156-5.914 2.536-.924a86.537 86.537 0 013.506-1.198l1.637 5.141c-.249.079-.495.16-.745.241l.292.805z"
            />
            <path
              id="path38-0-9-8-5"
              d="M919.8 210.27l-4.609-2.805a91.775 91.775 0 011.988-3.126l1.497-2.245 5.237 3.488-2.989 4.491-.713-.474c-.138.223-.274.446-.411.671z"
            />
            <path
              id="path40-2-0-8-5"
              d="M980.48 342.64a89.937 89.937 0 01-7.313-1.224l1.11-5.28a84.36 84.36 0 006.874 1.15zm-14.507-3.056a89 89 0 01-7.008-2.422l1.974-5.023a82.866 82.866 0 006.583 2.276zm-13.788-5.422a89.724 89.724 0 01-6.513-3.552l2.778-4.626a84.164 84.164 0 006.12 3.339zm-12.707-7.634a89.885 89.885 0 01-5.838-4.577l3.502-4.104a83.07 83.07 0 005.487 4.301zm-11.276-9.62a92.501 92.501 0 01-5.006-5.475l4.128-3.474a85.672 85.672 0 004.707 5.146zm-9.544-11.344a90.778 90.778 0 01-4.036-6.225l4.644-2.747a84.13 84.13 0 003.794 5.851zm-7.549-12.766a90.788 90.788 0 01-2.951-6.808l5.034-1.939a85.91 85.91 0 002.774 6.397zm-5.326-13.841a88.364 88.364 0 01-1.777-7.205l5.287-1.073a83.635 83.635 0 001.668 6.764zm-2.947-14.527a90.11 90.11 0 01-.565-7.396l5.393-.188c.08 2.328.26 4.665.53 6.95zm4.869-14.561l-5.389-.251c.112-2.459.334-4.946.649-7.389l5.351.697a84.961 84.961 0 00-.611 6.943zm1.799-13.816l-5.276-1.135a89.777 89.777 0 011.868-7.186l5.161 1.578a82.474 82.474 0 00-1.753 6.743zm4.067-13.319l-5.013-2a88.091 88.091 0 013.039-6.771l4.826 2.412a82.88 82.88 0 00-2.852 6.359z"
            />
            <path
              id="path42-7-4-84"
              d="M991.69 343.33c-1.244 0-2.48-.026-3.706-.076l.218-5.391c1.155.047 2.318.07 3.488.07z"
            />
          </g>
          <g
            id="g6224-4"
            transform="matrix(1.0746 0 0 1.088 -33.702 86.703)"
            opacity={0.998}
          >
            <path
              id="path2-2-30"
              d="M305.91 84.187v-.154c.6 0 1.197-.068 1.777-.2l.034.151c-.59.134-1.2.202-1.811.203zm-1.812-.2a8.13 8.13 0 01-1.722-.596l.068-.14a7.98 7.98 0 001.689.586zm5.344-.603l-.068-.14a8.008 8.008 0 001.512-.948l.097.12a8.176 8.176 0 01-1.541.968zm-8.61-.958a8.188 8.188 0 01-1.29-1.28l.12-.097c.374.464.8.886 1.267 1.257zm11.44-1.293l-.121-.096c.373-.465.693-.972.952-1.507l.14.067a8.102 8.102 0 01-.971 1.536zm-13.704-1.52a8.03 8.03 0 01-.605-1.712l.15-.035c.134.58.334 1.144.594 1.679zm15.277-1.728l-.151-.035a7.97 7.97 0 00.198-1.768v-.034h.155v.034c0 .608-.068 1.215-.202 1.803zm-15.933-1.786h-.155v-.017c0-.603.067-1.204.198-1.786l.152.034a7.951 7.951 0 00-.195 1.752v.017zm15.774-1.818a7.888 7.888 0 00-.597-1.677l.14-.068c.266.545.47 1.12.608 1.71zm-14.993-1.633l-.14-.066a8.11 8.11 0 01.968-1.538l.121.096a7.955 7.955 0 00-.95 1.508zm13.437-1.546a8.027 8.027 0 00-1.27-1.254l.097-.121c.477.376.912.806 1.294 1.278zm-11.227-1.224l-.097-.12c.475-.38.993-.706 1.54-.97l.067.138c-.536.26-1.044.58-1.51.952zm8.44-.973a7.965 7.965 0 00-1.69-.582l.034-.15a8.128 8.128 0 011.724.593zm-5.243-.571l-.035-.15c.59-.136 1.2-.205 1.81-.207l.001.154c-.6.002-1.197.07-1.777.203z"
              fill="#0043aa"
              strokeWidth={0.086048}
            />
            <path
              id="path4-3-7"
              d="M305.9 83.415c-4.063 0-7.37-3.29-7.37-7.333 0-4.044 3.307-7.334 7.37-7.334s7.37 3.29 7.37 7.334c0 4.043-3.307 7.333-7.37 7.333zm0-14.203c-3.807 0-6.904 3.082-6.904 6.87 0 3.789 3.097 6.87 6.904 6.87s6.904-3.081 6.904-6.87c0-3.788-3.097-6.87-6.904-6.87z"
              fill="#a80"
              strokeWidth={0.086048}
            />
            <path
              id="path6-5-4"
              d="M305.9 85.267c-5.09 0-9.231-4.12-9.231-9.186h.465c0 4.81 3.932 8.723 8.766 8.723 4.833 0 8.766-3.913 8.766-8.723 0-4.81-3.933-8.723-8.766-8.723v-.463c5.09 0 9.231 4.12 9.231 9.186 0 5.065-4.141 9.186-9.231 9.186z"
              fill="#a80"
              strokeWidth={0.086048}
            />
            <ellipse
              id="path24257-5-3-32"
              cx={305.8}
              cy={75.991}
              rx={6.8739}
              ry={6.8186}
              fill="#0043aa"
              opacity={0.3}
              stopColor="#000"
              strokeWidth={0.17108}
              stroke="#0043aa"
            />
          </g>
          <g
            id="gen_off_mode-5-7-3"
            className={tdlow_A2.piloto_tdlow_A2}
            transform="matrix(1.5861 0 0 1.4278 -494.31 38.358)"
            opacity={0.998}
            fillRule="evenodd"
            paintOrder="markers stroke fill"
          >
            <ellipse
              id="gen5_off_mode-8-7-6"
              className={tdlow_A2.piloto_tdlow_A2}
              cx={481.73}
              cy={77.784}
              rx={2.3902}
              ry={2.6075}
              fill="#1bea77"
              opacity={0.88}
            />
            <ellipse
              id="ellipse11039-3-3-6"
              transform="matrix(.68945 0 0 .65737 175.5 53.606)"
              cx={444.15}
              cy={34.583}
              rx={1.8876}
              ry={1.5368}
              fill="#fff"
              filter="url(#filter2963-9-77-6-3-6-4)"
              opacity={0.592}
            />
          </g>
          <path
            id="estado_eq-4-3-56-1"
            className={tdlow_A2.boton_tdlow_A2}
            fillRule="evenodd"
            fill="url(#linearGradient4474-7-3-67-3-8)"
            opacity={0.998}
            strokeWidth={0.076841}
            d="M273.35 123.53H293.06100000000004V128.095H273.35z"
          />
          <g
            id="g4030-4-3-0-0-7-8-8-90"
            transform="matrix(.41397 0 0 .30887 244.92 114.47)"
            opacity={0.998}
            strokeWidth={0.81961}
            stroke="#00afd4"
          >
            <path
              id="path1448-8-2-3-6-5-9-6-5-2"
              d="M67.609 40.797v-8.67l-2.862-1.201v-2.579h55.263v2.89l-2.763 1.156v8.582l2.664 1.29v2.623H64.944v-2.846z"
              fill="none"
              opacity={0.75}
              strokeWidth=".21686px"
              stroke="#00afd4"
            />
          </g>
          <path
            id="rect4837-8-8-7-9-6-4-9-8"
            fill="none"
            opacity={0.24975}
            paintOrder="markers stroke fill"
            strokeDashoffset={5.65}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={0.16559}
            stroke="#00fbff"
            d="M273.35 123.53H293.06100000000004V128.095H273.35z"
          />
          <text
            id="gen_nom_on-1-5-1-0-6-5"
            transform="scale(.89051 1.123)"
            x={307.36212}
            y={113.40881}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="3.6104px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.13539}
            wordSpacing={0}
          >
            <tspan
              id="tspan6769-6-6-1-8-6-1"
              x={307.36212}
              y={113.40881}
              fill="#fff"
              fontFamily="Franklin Gothic Medium"
              fontSize="4.1975px"
              strokeWidth={0.13539}
            >
              {"TD-LOW-A-2"}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-7"
            transform="scale(1.0508 .95166)"
            x={232.35469}
            y={179.26625}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.9087px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.19973}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-8"
              x={232.35469}
              y={179.26625}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="4.8736px"
              fontWeight={700}
              strokeWidth={0.19973}
            >
              {tdlow_A2.volt_tdlow_A2}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-8-4"
            transform="scale(1.1506 .86914)"
            x={215.32878}
            y={200.40984}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.2748px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.1562}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-7-7"
              x={215.32878}
              y={200.40984}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="3.8115px"
              fontWeight={700}
              strokeWidth={0.1562}
            >
              {"v"}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-88-8"
            transform="scale(1.0508 .95166)"
            x={253.97873}
            y={178.90358}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.9087px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.19973}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-1-7"
              x={253.97873}
              y={178.90358}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="4.8736px"
              fontWeight={700}
              strokeWidth={0.19973}
            >
              {tdlow_A2.amp_tdlow_A2}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-8-3-1"
            transform="scale(1.1506 .86914)"
            x={235.22981}
            y={200.72418}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.2748px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.1562}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-7-0-00"
              x={235.22981}
              y={200.72418}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="3.8115px"
              fontWeight={700}
              strokeWidth={0.1562}
            >
              {"A"}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-88-2-5"
            transform="scale(1.0508 .95166)"
            x={275.87524}
            y={178.48537}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.9087px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.19973}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-1-2-8"
              x={275.87524}
              y={178.48537}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="4.8736px"
              fontWeight={700}
              strokeWidth={0.19973}
            >
              {tdlow_A2.kw_tdlow_A2}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-8-3-6-3"
            transform="scale(1.0633 .94047)"
            x={274.72336}
            y={185.19746}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.1023px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.14436}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-7-0-0-0"
              x={274.72336}
              y={185.19746}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="3.5224px"
              fontWeight={700}
              strokeWidth={0.14436}
            >
              {"KW"}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-88-2-2-9"
            transform="scale(1.0508 .95166)"
            x={297.65546}
            y={178.62437}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.9087px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.19973}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-1-2-2-4"
              x={297.65546}
              y={178.62437}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="4.8736px"
              fontWeight={700}
              strokeWidth={0.19973}
            >
              {tdlow_A2.kva_tdlow_A2}
            </tspan>
          </text>
          <text
            id="temp_retagua-7-0-6-8-1-6-8-3-6-7-7"
            transform="scale(1.0633 .94047)"
            x={295.17142}
            y={185.38837}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#fff"
            fontFamily="sans-serif"
            fontSize="2.1023px"
            fontWeight={700}
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.14436}
            wordSpacing={0}
          >
            <tspan
              id="tspan4601-2-5-15-6-3-7-7-0-0-3-1"
              x={295.17142}
              y={185.38837}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="3.5224px"
              fontWeight={700}
              strokeWidth={0.14436}
            >
              {"KVA"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-3"
            transform="scale(.87255 1.1461)"
            x={278.98016}
            y={160.2173}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-49"
              x={278.98016}
              y={160.2173}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"VOLTAGE"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-9"
            transform="scale(.87255 1.1461)"
            x={306.57172}
            y={160.30818}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-4"
              x={306.57172}
              y={160.30818}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"AMPERE"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-5-3"
            transform="scale(.87255 1.1461)"
            x={335.55289}
            y={159.99799}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-2-01"
              x={335.55289}
              y={159.99799}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"REAL"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-5-1-0"
            transform="scale(.87255 1.1461)"
            x={357.93201}
            y={160.05571}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-2-0-8"
              x={357.93201}
              y={160.05571}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"APPARENT"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-5-6-6"
            transform="scale(.87255 1.1461)"
            x={333.95718}
            y={162.83437}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.998}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-2-1-3"
              x={333.95718}
              y={162.83437}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"POWER"}
            </tspan>
          </text>
          <text
            id="text5111-7-4-6-2-1-4-5-1-8-7"
            transform="scale(.87255 1.1461)"
            x={359.57629}
            y={162.87517}
            style={{ lineHeight: 1.25 }}
            xmlSpace="preserve"
            fill="#000"
            fontFamily="sans-serif"
            fontSize="1.7882px"
            letterSpacing={0}
            opacity={0.999}
            strokeWidth={0.064687}
            wordSpacing={0}
          >
            <tspan
              id="tspan5109-4-8-5-6-4-4-2-0-6-3"
              x={359.57629}
              y={162.87517}
              fill="#fff"
              fontFamily="sans-serif"
              fontSize="2.8612px"
              strokeWidth={0.064687}
            >
              {"POWER"}
            </tspan>
          </text>
        </g>
    </g>
        
    )
}

//export default variables
