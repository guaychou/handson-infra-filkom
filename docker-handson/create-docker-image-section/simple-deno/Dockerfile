FROM lordchou/deno:latest
RUN adduser -S -D -H -h /app appuser
RUN mkdir /app
WORKDIR /app
COPY *.ts /app
RUN chown -R appuser /app
USER appuser
RUN deno install --allow-net --allow-read --allow-env --name server *.ts
RUN mv /app/.deno/bin/server /app/server
RUN deno cache main.ts
HEALTHCHECK --interval=10s --timeout=10s --start-period=5s --retries=3 CMD curl -sS 127.0.0.1:8000 || exit 1
ENTRYPOINT [ "/app/server" ]