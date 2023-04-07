version: "3.3"

services:
  grafana:
    image: grafana/grafana:7.4.5
    ports:
      - 3000:3000
    volumes:
      - ./grafana-data:/var/lib/grafana
      - ./grafana-plugins:/var/lib/grafana/plugins
      - ./grafana.ini:/etc/grafana/grafana.ini
    logging:
      driver: "json-file"
      options:
        max-file: "5"
        max-size: "10m"
