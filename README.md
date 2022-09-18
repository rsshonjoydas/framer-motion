[![Facebook-Page][facebook-shield]][facebook-url]
[![Twitter][twitter-shield]][twitter-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h3 align="center">Next Boilerplate
  <div align="center"><h3>Project Link: <a href="https://github.com/rsshonjoydas/next-boilerplate">GitHub</a> or <a href="https://codesandbox.io/s/github/rsshonjoydas/next-boilerplate/tree/main">CodeSandbox</a></h3></div>

  <div align="center"><h6>This Project Link: <a href="https://github.com/rsshonjoydas/framer-motion">GitHub</a> or <a href="https://codesandbox.io/s/github/rsshonjoydas/framer-motion/tree/main">CodeSandbox</a></h6></div>
  <div align="center"><h6>This Project live Link: <a href="https://framer-motion-rust.vercel.app/">Vercel</a> or <a href="https://fvvlh6.sse.codesandbox.io/">CodeSandbox</a></h6></div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [How to run](#how-to-run)
- [Manual Setup](#manual-setup)
- [Contact](#contact)

<!-- HOW TO RUN -->

## How to run

Please follow the below instructions to run this project in your computer:

1. Clone this repository
   ```sh
   git clone git@github.com:rsshonjoydas/next-boilerplate.git
   ```
2. Install this project using yarn

   ```
   yarn install
   ```

3. Your app should be available in http://localhost:3000

## Manual Setup

1.  Install Next JS

    ```sh
    yarn create next-app --typescript
    ```

2.  Add this configuration to your project `tsconfig.json`

    ```json
    {
      "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "skipLibCheck": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "noEmit": true,
        "esModuleInterop": true,
        "module": "esnext",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "jsx": "preserve",
        "incremental": true,
        "allowUnreachableCode": false,
        "allowUnusedLabels": false,
        "declaration": true,
        "noFallthroughCasesInSwitch": true,
        "noImplicitReturns": false,
        "pretty": true,
        "removeComments": false,
        "sourceMap": true
      },
      "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
      "exclude": ["node_modules"]
    }
    ```

3.  Add this configuration to your project `next.config.json`

    ```js
    const path = require('path');

    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      swcMinify: true,
      images: {
        loader: 'akamai',
        path: '/',
        domains: [
          'res.cloudinary.com',
          'lh3.googleusercontent.com',
          'nextstorage.googleapis.com',
          'graph.facebook.com',
        ],
      },
      sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
    };

    module.exports = nextConfig;
    ```

4.  Engine Locking configuration `optional`

    - Create `.npmrc` file and add below the code

      ```sh
      engine-strict=true
      ```

    - Create `.nvmrc` file and add below the code

      ```sh
      lts/fermium
      ```

    - Add this configuration to your project `package.json`

      ```json
      "engines": {
         "node": ">=14.0.0",
         "yarn": ">=1.22.0",
         "npm": "please-use-yarn"
       }
      ```

5.  Airbnb style guide setup

    - Install those packages in devDependencies

      ```sh
      yarn add -D @next/eslint-plugin-next \
                  @typescript-eslint/eslint-plugin \
                  @typescript-eslint/parser \
                  eslint-config-airbnb \
                  eslint-config-prettier \
                  eslint-plugin-import \
                  eslint-plugin-jsx-a11y \
                  eslint-plugin-react \
                  eslint-plugin-react-hooks \
                  prettier
      ```

    - We need to add some configuration to a file named `.eslintrc.json` like this:

      ```json
      {
        "env": {
          "browser": true,
          "es2021": true
        },
        "extends": ["plugin:@next/next/recommended", "airbnb", "prettier"],
        "globals": {
          "React": "readonly"
        },
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
          "ecmaFeatures": {
            "jsx": true,
            "tsx": true
          },
          "ecmaVersion": "latest",
          "sourceType": "module"
        },
        "plugins": ["react", "@typescript-eslint"],
        "rules": {
          "no-console": "off",
          "react/react-in-jsx-scope": "off",
          "react/state-in-constructor": "off",
          "jsx-a11y/click-events-have-key-events": "off",
          "react/prop-types": "off",
          "import/no-extraneous-dependencies": "off",
          "indent": "off",
          "linebreak-style": "off",
          "react/function-component-definition": "off",
          "react/jsx-props-no-spreading": "off",
          "no-plusplus": "off",
          "jsx-a11y/no-redundant-roles": "off",
          "jsx-a11y/anchor-is-valid": "off",
          "jsx-a11y/label-has-associated-control": "off",
          "jsx-a11y/no-static-element-interactions": "off",
          "import/extensions": "off",
          "import/no-unresolved": "off",
          "react/no-danger": "off",
          "import/prefer-default-export": "off",
          "jsx-a11y/no-noninteractive-element-interactions": "off",
          "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
          "no-unused-vars": "error"
        }
      }
      ```

    - We need to add some configuration to a file named `.prettierrc` like this:

      ```json
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "jsxSingleQuote": true,
        "printWidth": 100,
        "tabWidth": 2,
        "semi": true,
        "endOfLine": "auto"
      }
      ```

    - We need to add some configuration to a file named `.prettierignore` like this:
      ```sh
      .yarn
      yarn.lock
      .github
      .next
      next-env.d.ts
      out
      dist
      public
      node_modules
      ```

6.  SCSS for Tailwind CSS with configuration

    - Install sass in your dependencies

      ```sh
      yarn add sass
      ```

    - Install configuration packages in your devDependencies

      ```sh
      yarn add -D tailwindcss \
                  postcss \
                  autoprefixer
      ```

    - We need to add some configuration to a file named `postcss.config.js` like this:

      ```js
      module.exports = {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      };
      ```

    - We need to add some configuration to a file named `tailwind.config.js` like this:

      ```js
      const defaultTheme = require('tailwindcss/defaultTheme');

      module.exports = {
        content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              primary: {
                DEFAULT: 'rgba(155, 89, 182,1.0)',
                50: 'rgba(142, 68, 173,1.0)',
                100: 'rgb(243 232 255)',
                200: 'rgb(233 213 255)',
                300: 'rgb(216 180 254)',
                400: 'rgb(192 132 252)',
                500: 'rgb(168 85 247)',
                600: 'rgb(147 51 234)',
                700: 'rgb(126 34 206)',
                800: 'rgb(107 33 168)',
                900: 'rgb(88 28 135)',
              },
              secondary: {
                DEFAULT: 'rgba(162, 155, 254,1.0)',
                50: 'rgba(108, 92, 231,1.0)',
                100: 'rgb(237 233 254)',
                200: 'rgb(221 214 254)',
                300: 'rgb(196 181 253)',
                400: 'rgb(167 139 250)',
                500: 'rgb(139 92 246)',
                600: 'rgb(124 58 237)',
                700: 'rgb(109 40 217)',
                800: 'rgb(91 33 182)',
                900: 'rgb(76 29 149)',
              },
              error: {
                300: 'rgba(231, 76, 60,1.0)',
                600: 'rgba(192, 57, 43,1.0)',
              },
              warn: {
                300: 'rgba(241, 196, 15,1.0)',
                600: 'rgba(243, 156, 18,1.0)',
              },
              info: {
                300: 'rgba(52, 152, 219,1.0)',
                600: 'rgba(41, 128, 185,1.0)',
              },
              success: {
                300: 'rgba(46, 204, 113,1.0)',
                600: 'rgba(39, 174, 96,1.0)',
              },
              light: {
                DEFAULT: 'rgba(255, 255, 255,1.0)',
                100: 'rgba(241, 242, 246,1.0)',
                200: 'rgba(236, 240, 241,1.0)',
                300: 'rgba(223, 228, 234,1.0)',
                400: 'rgba(223, 230, 233,1.0)',
                500: 'rgba(206, 214, 224,1.0)',
                600: 'rgba(189, 195, 199,1.0)',
                700: 'rgba(178, 190, 195,1.0)',
                800: 'rgba(149, 165, 166,1.0)',
                900: 'rgba(127, 140, 141,1.0)',
              },
              dark: {
                DEFAULT: 'rgba(45, 52, 54,1.0)',
                100: 'rgba(47, 53, 66,1.0)',
                200: 'rgba(44, 62, 80,1.0)',
                300: 'rgba(52, 73, 94,1.0)',
                400: 'rgba(75, 101, 132,1.0)',
                500: 'rgba(119, 140, 163,1.0)',
                600: 'rgba(164, 176, 190,1.0)',
                700: 'rgba(116, 125, 140,1.0)',
                800: 'rgba(99, 110, 114,1.0)',
                900: 'rgba(87, 96, 111,1.0)',
              },
              gradient: {
                orange: 'linear-gradient(10deg, #ffaa00, #ff6a00)',
                purple: 'linear-gradient(15deg, #ef5dff, #b648ff)',
                green: 'linear-gradient(15deg, #6adb00, #04e800)',
                success: 'linear-gradient(15deg, #6adb00, #04e800)',
                error: 'linear-gradient(15deg, #ff596d, #d72c2c)',
                warning: 'linear-gradient(15deg, #ffac37, #ff9238)',
                light: 'linear-gradient(15deg, #e7e7e7, #f4f4f4)',
                dark: 'linear-gradient(15deg, #202121, #292a2d)',
              },
            },
            fontFamily: {
              sans: ['Roboto, sans-serif', ...defaultTheme.fontFamily.sans],
              poppins: 'Poppins, sans-serif;',
              montserrat: 'Montserrat, sans-serif;',
              cursive: 'Moon Dance, sans-serif',
            },
            boxShadow: {
              'light-shadow':
                'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -30px, rgba(0, 0, 0, 0.3) 0px 30px 60px -40px',
              'dark-shadow': 'box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
            },
          },
        },
        variant: {
          extend: {
            boxShadow: ['dark'],
          },
        },
        plugins: [require('tailwindcss'), require('postcss'), require('autoprefixer')],
      };
      ```

7.  Docker setup with Nginx

    - We need to add some configuration to a file named `Dockerfile` like this

      ```sh
      # //TODO: Stage 1: development
      # Base on offical Node.js Alpine image
      FROM node:16-alpine as development

      # Set working directory
      WORKDIR /app

      # Copy package.json and package-lock.json before other files
      # Utilise Docker cache to save re-installing dependencies if unchanged
      COPY package*.json .

      # Install dependencies
      RUN yarn install && yarn cache clean

      # Copy all files
      COPY . .

      # Build app
      RUN yarn build

      # //TODO: Stage 2: production
      # Base on offical Nginx Alpine image
      FROM nginx:1.21.5-alpine

      COPY --from=development /app/out /usr/share/nginx/html

      COPY --from=development /app/nginx/default.conf /etc/nginx/conf.d/default.conf

      # Run yarn start script with Nginx when container starts
      CMD [ "nginx", "-g", "daemon off;" ]
      ```

    - We need to add some configuration to a file named `docker-compose.yml` like this

      ```sh
      version: '3.8'

      services:
        next-boilerplate:
          container_name: next-boilerplate
          restart: unless-stopped
          build:
            context: .
          ports:
            - 3000:3000
          env_file:
            - ./.env.local
          networks:
            - mydockernet

      networks:
        mydockernet:
          driver: bridge
      ```

    - We need to add some configuration to a file named `.dockerignore` like this
      ```sh
      .git/
      .gitignore
      .next/                # Existing Next.js builds
      .dockerignore
      .husky
      .vscode
      Dockerfile
      Dockerfile.dev
      Dockerfile.prod
      docker-compose.yml
      docker-compose-dev.yml
      docker-compose-prod.yml
      node_modules/         # Installed inside container
      nginx/                # We'll create this directory soon
      dist
      out
      README.md
      ```
    - We need Nginx configuration to create file in the root directory `nginx/default.conf` and add below configuration

      ```sh
      server {
        listen 3000;
        server_name _;
        root /usr/share/nginx/html;
        index index.html index.htm;
        location / {
          try_files $uri /index.html =404;
        }
      }
      ```

    - run the command in your terminal

      ```sh
      docker-compose build     # Build image
      docker-compose up -d     # Run container in background and print container ID
      docker-compose down      # Container delete
      docker-compose stop      # Container Temporary stop
      docker-compose start     # Run Temporary stop container
      ```

    > Optional, Docker for development mode

    - We need to add some configuration to a file named `docker-compose-dev.yml` like this:

      ```sh
      version: '3.8'

      services:
        next-boilerplate-dev:
          container_name: next-boilerplate-dev
          restart: unless-stopped
          build:
            context: .
            target: development
          volumes:
            - ./:/app/
          ports:
            - 3000:3000
          env_file:
            - ./.env.local
          command: yarn dev
          networks:
            - mydockernet

      networks:
        mydockernet:
          driver: bridge
      ```

    - run the command in your terminal
      ```sh
      docker-compose -f docker-compose-dev.yml up -d      # Run container in background and print container ID
      docker-compose -f docker-compose-dev.yml down       # Container delete
      docker-compose -f docker-compose-dev.yml stop       # Container Temporary stop
      docker-compose -f docker-compose-dev.yml start      # Run Temporary stop container
      ```

8.  Git hooks and husky

    - Install configuration packages in your devDependencies

      ```sh
      yarn add -D @commitlint/cli \
                  @commitlint/config-conventional \
                  husky \
                  lint-staged \
                  validate-branch-name
      ```

    - We need to add some configuration to a file named `commitlint.config.js` like this:

      ```js
      module.exports = {
        extends: ['@commitlint/config-conventional'],
        rules: {
          'type-enum': [
            2,
            'always',
            [
              'build',
              'chore',
              'ci',
              'docs',
              'feat',
              'fix',
              'perf',
              'refactor',
              'revert',
              'style',
              'test',
              'button',
              'docker',
            ],
          ],
        },
      };
      ```

    - We also need to enable the husky hooks:

      ```sh
      yarn husky install
      ```

    - Finally, let's set up lint-staged in the `package.json` file so that it runs Prettier on JS files:

      ```json
      {
        "scripts": {
          "prepare": "husky install"
        },
        "lint-staged": {
          "**/*.{ts,tsx}": ["prettier --write --ignore-unknown", "eslint --fix"]
        }
      }
      ```

    - Now that we are done installing husky, we need to add a pre-commit hook to run before the code is committed.

      ```sh
      yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
      yarn husky add .husky/pre-commit "yarn validate-branch-name"
      yarn husky add .husky/pre-commit "yarn lint-staged"
      ```

    - Now that we are done installing husky, we need to add a pre-push hook to run before the code is pushed.

      ```sh
      yarn husky add .husky/pre-push "yarn build"
      ```

###### Git commit message

> feat, fix, docs, style, refactor, test, chore, perf, ci, build and temp.

| Type     | Description                                                                                             |
| -------- | ------------------------------------------------------------------------------------------------------- |
| feat     | A new feature.                                                                                          |
| fix      | A bug fix.                                                                                              |
| docs     | Documentation only changes.                                                                             |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc). |
| refactor | A code change that neither fixes a bug nor adds a feature.                                              |
| test     | Adding missing tests or correcting existing ones.                                                       |
| chore    | Changes to the build process or auxiliary tools and libraries such as documentation generation.         |
| perf     | A code change that improves performance.                                                                |
| ci       | Changes to your CI configuration files and scripts.                                                     |
| build    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).    |
| temp     | Temporary commit that won't be included in your CHANGELOG.                                              |

- scope:
  Optional, can be anything specifying the scope of the commit change.
  For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc.  
   In App Development, scope can be a page, a module or a component.

- subject:
  Brief summary of the change in present tense. Not capitalized. No period at the end.

###### Skipping Hooks

In the terminal, you can bypass hooks by adding the --no-verify option, like in this example:

```sh
git commit -m "skipping hooks" --no-verify
```

  <!-- CONTACT -->

## Contact

Shonjoy Das - [rsshonjoy@gmail.com](mailto:rsshonjoy@gmail.com)

<!-- MARKDOWN LINKS & IMAGES -->

[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor
[facebook-url]: https://facebook.com/rsshonjoydas
[twitter-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=twitter&color=555&logoColor
[twitter-url]: https://twitter.com/rsshonjoydas
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor
[instagram-url]: https://instagram.com/rsshonjoydas
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB
[linkedin-url]: https://linkedin.com/in/rsshonjoydas
