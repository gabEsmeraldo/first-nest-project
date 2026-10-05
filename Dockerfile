#Deps
FROM node:22-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

#Builder
FROM node:22-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

RUN npm run build
RUN npm prune && npm cache clean --force

#Runner
FROM node:22-alpine AS runner
LABEL version="1.0.0" description="first nest project api"

WORKDIR /usr/src/app

RUN apk --no-cache add libaio libnsl libc6-compat curl bash unzip && \
    cd /tmp && \
    curl -o instantclient-basiclite.zip https://download.oracle.com/otn_software/linux/instantclient/2114000/instantclient-basiclite-linux.x64-21.14.0.0.0dbru.zip -SL && \
    unzip instantclient-basiclite.zip && \
    mv instantclient*/ /usr/lib/instantclient && \
    rm instantclient-basiclite.zip && \
    ln -s /usr/lib/instantclient/libclntsh.so.21.1 /usr/lib/libclntsh.so && \
    ln -s /usr/lib/instantclient/libocci.so.21.1 /usr/lib/libocci.so && \
    ln -s /usr/lib/instantclient/libociicus.so /usr/lib/libociicus.so && \
    ln -s /usr/lib/instantclient/libnnz21.so /usr/lib/libnnz21.so && \
    ln -s /usr/lib/libnsl.so.2 /usr/lib/libnsl.so.1 && \
    ln -s /lib/libc.so.6 /usr/lib/libresolv.so.2 && \
    ln -s /lib64/ld-linux-x86-64.so.2 /usr/lib/ld-linux-x86-64.so.2

ENV ORACLE_BASE="/usr/lib/instantclient" \
    LD_LIBRARY_PATH="/usr/lib/instantclient" \
    TNS_ADMIN="/usr/lib/instantclient" \
    ORACLE_HOME="/usr/lib/instantclient" \
    NODE_ENV=production

WORKDIR /usr/src/app


COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

RUN chown -R node:node /usr/src/app
USER node

EXPOSE 3000

CMD ["node", "dist/src/main.js"]