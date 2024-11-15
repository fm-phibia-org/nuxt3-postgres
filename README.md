# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


# firebase

## settings

### Create .env file likes the following

```
NUXT_API_KEY=
NUXT_AUTH_DOMAIN=
NUXT_DATABASE_URL=
NUXT_PROJECT_ID=
NUXT_STORAGE_BUCKET=
NUXT_MESSAGING_SENDER_ID=
NUXT_APP_ID=
NUXT_MEASUREMENT_ID=
```

## Data Connect
1. firebase login実行

2. 拡張機能からGoogleログイン



sudo mkdir /usr/java
cd /usr/java/
wget https://download.oracle.com/java/21/latest/jdk-21_linux-x64_bin.tar.gz

tar zxvf jdk-21_linux-x64_bin.tar.gz 


export JAVA_HOME=/usr/java/jdk-21.0.5
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/jre/lib:$JAVA_HOME/lib:$JAVA_HOME/lib/tools.jar
. .bashrc 