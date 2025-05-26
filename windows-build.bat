@echo off

:: NPM & Node.js
echo Checking Node.js and NPM...

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js and try again.
    exit /b 1
)

npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo NPM is not installed. Please install NPM and try again.
    exit /b 1
)

:: Install Dependencies
echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo Failed to install dependencies. Please check your NPM configuration.
    exit /b 1
)

:: Build Process
echo Building VulcrumJS files...
npx vulcrum -m build -p index.js
npx vulcrum -m build -p about.js