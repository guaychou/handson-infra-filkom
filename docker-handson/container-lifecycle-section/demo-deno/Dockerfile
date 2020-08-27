FROM lordchou/deno:latest  AS builder
ENV TZ="Asia/Jakarta"
ENV PORT="3000"
RUN adduser -S -D -H -h /app appuser
RUN mkdir /app
WORKDIR /app
COPY *.ts /app
ADD controllers controllers
ADD logger logger
RUN chown -R appuser /app
USER appuser
RUN deno install --allow-net --allow-read --allow-env --name server *.ts
RUN mv /app/.deno/bin/server /app/server
RUN deno cache app.ts
HEALTHCHECK --interval=10s --timeout=10s --start-period=5s --retries=3 CMD curl -sS 127.0.0.1:${PORT}/_/healthz || exit 1
ENTRYPOINT [ "/app/server" ]