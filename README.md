Either clone this repo and run:
```bash
npm install
```

or complete the following steps:

### Step 1: Initialize a New Project

First, create a new directory for your project and initialize it

```bash
mkdir <project-name>
cd <project-name>
npm init -y
```

### Step 2: Install Dependencies

Install React, TypeScript, and Styleguidist along with necessary loaders and plugins.

```bash
npm install react react-dom
npm install --save-dev typescript ts-loader react-styleguidist webpack
```

### Step 3: TypeScript Configuration

Create a `tsconfig.json` file in the root of your project with the following content:

```json
{
    "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "jsx": "react",
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true
    },
    "include": [
        "src/**/*"
    ]
}
```

### Step 4: Styleguidist Configuration

Create a `styleguide.config.js` file in the root of your project with the following content to configure Styleguidist:

```javascript
module.exports = {
    components: 'src/components/**/*.tsx',
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'ts-loader'
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        }
    }
};
```

### Step 5: Create a Sample Component

Create a `src/components` directory and add a sample TypeScript component:

```bash
mkdir -p src/components
```

Inside `src/components`, create `Hello.tsx`:

```tsx
import React from 'react';

interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => <div>Hello, {name}!</div>;

export default Hello;
```

### Step 6: Running Styleguidist

Add a script to your `package.json` to easily run Styleguidist:

```json
{
  "scripts": {
    "styleguide": "styleguidist server",
    "styleguide:build": "styleguidist build"
  }
}
```

### Step 7: Start the Styleguidist Server

Run the Styleguidist server:

```bash
npm run styleguide
```

### Step 8 (Optional): Create .gitignore

```bash
# Dependency directories
node_modules/

# Build outputs
/dist
/build
/out

# Debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE and Editor folders
.vscode/
.idea/
*.swp
*.swo
*.sublime-workspace
*.sublime-project

# Styleguidist build output
styleguide/

# Optional: Operating System generated files
.DS_Store
Thumbs.db
```
