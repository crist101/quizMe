@echo off
setlocal enabledelayedexpansion
::just a sample adapter here:
set "adapter=Ethernet adapter VirtualBox Host-Only Network"
set adapterfound=false
echo Network Connection Test
for /f "usebackq tokens=1-2 delims=:" %%f in (`ipconfig /all`) do (
    set "item=%%f"
    if /i "!item!"=="!adapter!" (
        set adapterfound=true
    ) else if not "!item!"=="!item:IP Address=!" if "!adapterfound!"=="true" (
        echo Your IP Address is: %%g
        set adapterfound=false
    )
)