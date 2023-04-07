{
  "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "type": "dashboard"
      }
    ]
  },
  "editable": true,
  "gnetId": null,
  "graphTooltip": 0,
  "id": 57,
  "links": [
    {
      "icon": "external link",
      "tags": [
        "PQM"
      ],
      "type": "dashboards"
    }
  ],
  "panels": [
    {
      "datasource": "PQM",
      "fieldConfig": {
        "defaults": {
          "custom": {}
        },
        "overrides": []
      },
      "gridPos": {
        "h": 16,
        "w": 24,
        "x": 0,
        "y": 0
      },
      "id": 2,
      "options": {
        "fase": "A",
        "marca": "GENERAL ELECTRIC",
        "modelo": "AXSDC012",
        "nombre": "PQM II",
        "sistema": "1 y 2",
        "ubicacion": "PATIO GEN S1"
      },
      "pluginVersion": "7.4.5",
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "metrics": [
            {
              "field": "DATA.APPPOW_3PHAS.VALUE",
              "id": "1",
              "type": "avg"
            },
            {
              "field": "DATA.CURR_A.VALUE",
              "id": "3",
              "type": "avg"
            },
            {
              "field": "DATA.CURR_AVG.VALUE",
              "id": "4",
              "type": "avg"
            },
            {
              "field": "DATA.CURR_B.VALUE",
              "id": "5",
              "type": "avg"
            },
            {
              "field": "DATA.CURR_C.VALUE",
              "id": "6",
              "type": "avg"
            },
            {
              "field": "DATA.CURR_UNB.VALUE",
              "id": "7",
              "type": "avg"
            },
            {
              "field": "DATA.ENY_APP.VALUE",
              "id": "8",
              "type": "avg"
            },
            {
              "field": "DATA.ENY_NEG_REACT.VALUE",
              "id": "9",
              "type": "avg"
            },
            {
              "field": "DATA.ENY_NEG_REAL.VALUE",
              "id": "10",
              "type": "avg"
            },
            {
              "field": "DATA.ENY_POS_REACT.VALUE",
              "id": "11",
              "type": "avg"
            },
            {
              "field": "DATA.ENY_POS_REAL.VALUE",
              "id": "12",
              "type": "avg"
            },
            {
              "field": "DATA.FREQ.VALUE",
              "id": "13",
              "type": "avg"
            },
            {
              "field": "DATA.MODBUS_ST.VALUE",
              "id": "14",
              "type": "avg"
            },
            {
              "field": "DATA.POWFAC_3PHAS.VALUE",
              "id": "15",
              "type": "avg"
            },
            {
              "field": "DATA.REACTPOW_3PHAS.VALUE",
              "id": "16",
              "type": "avg"
            },
            {
              "field": "DATA.REALPOW_3PHAS.VALUE",
              "id": "17",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_UNB.VALUE",
              "id": "18",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_VAB.VALUE",
              "id": "19",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_VAN.VALUE",
              "id": "20",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_VBC.VALUE",
              "id": "21",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_VBN.VALUE",
              "id": "22",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_VCA.VALUE",
              "id": "23",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_VCN.VALUE",
              "id": "24",
              "type": "avg"
            }
          ],
          "query": "EQUIPO:\"TDLOW_PQMII\"",
          "queryType": "randomWalk",
          "refId": "A",
          "timeField": "@timestamp"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "",
      "transparent": true,
      "type": "telconet-pqm"
    },
    {
      "datasource": "PQM",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 10,
            "gradientMode": "none",
            "hideFrom": {
              "graph": false,
              "legend": false,
              "tooltip": false
            },
            "lineInterpolation": "linear",
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "never",
            "spanNulls": true
          },
          "mappings": [],
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 80
              }
            ]
          },
          "unit": "short"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 0,
        "y": 16
      },
      "id": 4,
      "options": {
        "graph": {},
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltipOptions": {
          "mode": "none"
        }
      },
      "pluginVersion": "7.4.5",
      "repeat": null,
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "metrics": [
            {
              "field": "DATA.REALPOW_3PHAS.VALUE",
              "id": "1",
              "type": "avg"
            }
          ],
          "query": "",
          "queryType": "randomWalk",
          "refId": "A",
          "timeField": "@timestamp"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "POTENCIA REAL",
      "transparent": true,
      "type": "timeseries"
    },
    {
      "datasource": "PQM",
      "fieldConfig": {
        "defaults": {
          "color": {
            "mode": "palette-classic"
          },
          "custom": {
            "axisLabel": "",
            "axisPlacement": "auto",
            "barAlignment": 0,
            "drawStyle": "line",
            "fillOpacity": 7,
            "gradientMode": "opacity",
            "hideFrom": {
              "graph": false,
              "legend": false,
              "tooltip": false
            },
            "lineInterpolation": "linear",
            "lineStyle": {
              "fill": "solid"
            },
            "lineWidth": 1,
            "pointSize": 5,
            "scaleDistribution": {
              "type": "linear"
            },
            "showPoints": "auto",
            "spanNulls": true
          },
          "mappings": [],
          "max": 500,
          "thresholds": {
            "mode": "absolute",
            "steps": [
              {
                "color": "green",
                "value": null
              },
              {
                "color": "red",
                "value": 500
              }
            ]
          },
          "unit": "volt"
        },
        "overrides": []
      },
      "gridPos": {
        "h": 7,
        "w": 12,
        "x": 12,
        "y": 16
      },
      "id": 5,
      "options": {
        "graph": {},
        "legend": {
          "calcs": [],
          "displayMode": "list",
          "placement": "bottom"
        },
        "tooltipOptions": {
          "mode": "none"
        }
      },
      "pluginVersion": "7.4.5",
      "targets": [
        {
          "alias": "",
          "bucketAggs": [
            {
              "id": "2",
              "settings": {
                "interval": "auto"
              },
              "type": "date_histogram"
            }
          ],
          "metrics": [
            {
              "field": "DATA.VOL_VAB.VALUE",
              "id": "1",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_VBC.VALUE",
              "id": "3",
              "type": "avg"
            },
            {
              "field": "DATA.VOL_VCA.VALUE",
              "id": "4",
              "type": "avg"
            }
          ],
          "query": "TDLOW_PQMII",
          "queryType": "randomWalk",
          "refId": "A",
          "timeField": "@timestamp"
        }
      ],
      "timeFrom": null,
      "timeShift": null,
      "title": "VOLTAJES PQM",
      "transparent": true,
      "type": "timeseries"
    }
  ],
  "refresh": "5s",
  "schemaVersion": 27,
  "style": "dark",
  "tags": [
    "ELECTRICO",
    "PQM",
    "UNI"
  ],
  "templating": {
    "list": []
  },
  "time": {
    "from": "now-1h",
    "to": "now"
  },
  "timepicker": {},
  "timezone": "",
  "title": "PQM",
  "uid": "4nyCaCD7k",
  "version": 45
}