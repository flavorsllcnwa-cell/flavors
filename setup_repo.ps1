<#
PowerShell helper to clone or attach the GitHub repo flavorsllcnwa-cell/flavors into D:\flavors
Run in an elevated or normal PowerShell prompt.
#>

param(
  [string]$RemoteUrl = 'https://github.com/flavorsllcnwa-cell/flavors.git'
)

function Check-Git {
  $g = Get-Command git -ErrorAction SilentlyContinue
  if(-not $g){
    Write-Error "git is not installed or not in PATH. Install Git from https://git-scm.com/download/win and re-run this script."
    exit 1
  }
}

Check-Git

$target = "D:\flavors"
if(-not (Test-Path $target)){
  New-Item -ItemType Directory -Path $target | Out-Null
}

# If the folder is empty, clone directly
if(-not (Get-ChildItem -Path $target -Force -ErrorAction SilentlyContinue)){
  Write-Host "Cloning $RemoteUrl into $target"
  git clone $RemoteUrl $target
  exit $LASTEXITCODE
}

# If .git missing, init and add remote
Set-Location $target
if(-not (Test-Path (Join-Path $target '.git'))){
  git init
  git remote add origin $RemoteUrl
  git fetch origin --prune
  Write-Host "Fetched remote. To checkout remote main: git checkout -B main origin/main"
} else {
  Write-Host ".git found. Fetching origin..."
  git fetch origin --prune
}

Write-Host "To create a working branch: git checkout -b feature/buffet"
Write-Host "Then push: git push -u origin feature/buffet"

exit 0