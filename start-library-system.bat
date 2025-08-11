@echo off
echo Starting Library Management System...
echo.
echo This will start both the JSON Server (backend) and Angular Development Server
echo.
echo Press Ctrl+C to stop the servers when you're done
echo.
pause

echo Starting JSON Server on port 3000...
start "JSON Server" cmd /k "npx json-server --watch db.json --port 3000"

echo Waiting 3 seconds for JSON Server to start...
timeout /t 3 /nobreak > nul

echo Starting Angular Development Server on port 4200...
start "Angular Server" cmd /k "ng serve --port 4200"

echo.
echo Both servers are starting...
echo JSON Server: http://localhost:3000
echo Angular App: http://localhost:4200
echo.
echo The Library Management System will be available at: http://localhost:4200
echo.
pause
