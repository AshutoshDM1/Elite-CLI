#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import inquirer from "inquirer";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backendTypes = [
  { name: chalk.green("Express Basic"), value: "express-basic" },
  { name: chalk.blue("Express with TypeScript"), value: "express-ts" },
];

const frontendTypes = [
  { name: chalk.whiteBright("Next.js + Shadcn/UI"), value: "next-shadcn" },
  { name: chalk.magenta("Next.js + NextAuth"), value: "next-shadcn" },
  { name: chalk.blue("Vite + React + clerk"), value: "next-shadcn" },
];

// Add this function to filter out node_modules and other unwanted files
function filterCopyFiles(src, dest) {
  const stats = fs.statSync(src);
  
  // Skip node_modules directories
  if (stats.isDirectory() && src.includes('node_modules')) {
    return false;
  }
  
  // Skip other common files/directories you don't want to copy
  const skipPatterns = [
    '.DS_Store',
    '.git',
    '.next',
    'build'
  ];
  
  const baseName = path.basename(src);
  return !skipPatterns.includes(baseName);
}

async function init() {
  console.log(chalk.bold.cyan("\n🚀 Welcome to Elite CLI!\n"));

  // First, ask for project type (frontend/backend)
  const { projectType } = await inquirer.prompt([
    {
      type: "list",
      name: "projectType",
      message: chalk.white("What type of project do you want to create?"),
      choices: [
        { name: chalk.blue("Frontend"), value: "frontend" },
        { name: chalk.red("Backend"), value: "backend" },
      ],
    },
  ]);

  // Then ask for specific framework based on type
  const { framework } = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      message: chalk.yellow(`Select a ${projectType} framework:`),
      choices: projectType === "frontend" ? frontendTypes : backendTypes,
    },
  ]);

  // Ask for project name with default based on selection
  const defaultProjectName = `${projectType}`;
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: chalk.yellow("What is your project name?"),
      default: defaultProjectName,
    },
  ]);

  // Ask about package versions
  const { useLatestVersions } = await inquirer.prompt([
    {
      type: "confirm",
      name: "useLatestVersions",
      message: chalk.yellow(
        "Would you like to use the latest package versions?"
      ),
      default: true,
    },
  ]);

  console.log(
    chalk.cyan(
      `\nCreating a new ${chalk.bold(framework)} app in ${chalk.bold(
        projectName
      )}...\n`
    )
  );

  // Create project directory
  fs.mkdirSync(projectName);

  // Copy template files based on framework with filtering
  const templateDir = path.join(__dirname, `../templates/${framework}`);
  fs.cpSync(templateDir, projectName, { 
    recursive: true,
    filter: filterCopyFiles
  });

  // Update package versions if requested
  if (useLatestVersions) {
    const packageJsonPath = path.join(
      process.cwd(),
      projectName,
      "package.json"
    );
    await updatePackageVersions(packageJsonPath);
    console.log(chalk.green("✓ Updated all packages to latest versions"));
  }

  console.log(
    chalk.bold.green(`
✨ Project ${chalk.blue(projectName)} created successfully!

${chalk.yellow("To get started:")}
  ${chalk.cyan("cd")} ${projectName}
  ${chalk.cyan("npm install")}
  ${chalk.cyan("npm run dev")}
`)
  );
}

async function updatePackageVersions(packageJsonPath) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  if (packageJson.dependencies) {
    for (const dep in packageJson.dependencies) {
      packageJson.dependencies[dep] = "*";
    }
  }

  if (packageJson.devDependencies) {
    for (const dep in packageJson.devDependencies) {
      packageJson.devDependencies[dep] = "*";
    }
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

init().catch((err) => {
  console.error(chalk.red("Error:"), chalk.red(err));
  process.exit(1);
});
