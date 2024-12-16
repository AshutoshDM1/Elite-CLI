#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2] || 'my-express-app';

console.log(`Creating a new Elite-xpress app in ${projectName}...`);

// Create project directory
fs.mkdirSync(projectName);

// Copy template files
const templateDir = path.join(__dirname, '../template');
fs.cpSync(templateDir, projectName, { recursive: true });

// Initialize git
console.log('Initializing git repository...');
execSync('git init', { cwd: projectName });

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { cwd: projectName, stdio: 'inherit' });

console.log(`
✨ Project ${projectName} created successfully!

To get started:
  cd ${projectName}
  npm run dev
`);
