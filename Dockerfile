# Node.js 18 version Apline Linux 이미지 사용
FROM node:18-alpine as build-stage

# 작업 디렉토리는 /app 으로 설정
WORKDIR /app

# Corepack 활성화 Yarn, pnpm 등 패키지 매니저를 사용할 수 있도록 설정
RUN corepack enable

# 패키지 설치에 필요한 파일 복사 후 pnpm을 사용해 설치
COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install

# 전체 애플리케이션 코드 복사 및 pnpm을 사용해 빌드
COPY . .
RUN pnpm build

# Nginx를 사용한 배포
FROM nginx:stable-alpine as production-stage

# 빌드된 정적 파일을 Nginx 웹 루트로 복사
COPY --from=build-stage /app/dist /usr/share/nginx/html/app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx 포트 80 노출
EXPOSE 80
# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
