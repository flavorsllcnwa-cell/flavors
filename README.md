# flavors (scaffold)

This folder is a local scaffold so you can pull in the GitHub repository `flavorsllcnwa-cell/flavors` and work on a small site/page for the Snack Buffet.

What I created here
- `index.html` — a simple placeholder webpage with Snack Buffet info and placeholders for images/content you will provide.
- `setup_repo.ps1` — a PowerShell helper script with safe commands to clone or connect the remote repository into this folder and setup branches.
- `.gitignore` — a starter .gitignore for local work.
- `assets/` — folder for images and other static assets.

Next steps — recommended commands (PowerShell)

1) If you want to clone the remote GitHub repository into this folder (recommended):

# from an elevated or normal PowerShell prompt
# 1) Make sure the current folder is empty or you are ok to clone into it
cd D:\
# clone into the `flavors` folder (use `.` to clone into the current folder)
# Note: run this when D:\flavors either does not exist or is empty. Otherwise use the alternative commands below.
git clone https://github.com/flavorsllcnwa-cell/flavors.git D:\flavors

2) If the folder already has files (like this scaffold), you can instead init and add the remote, then fetch:
cd D:\flavors
if (-not (Test-Path ".git")) { git init }
git remote remove origin 2>$null; git remote add origin https://github.com/flavorsllcnwa-cell/flavors.git
# fetch without checking out to avoid overwriting
git fetch origin --prune
# create and track the main branch (if origin/main exists)
git checkout -B main origin/main

3) Create a working branch (recommended):
# create a feature branch for the buffet page
git checkout -b feature/buffet

4) Push your branch to the remote
git push -u origin feature/buffet

If you don't have git installed, install it from https://git-scm.com/download/win.

If you want me to pull remote content (I currently don't have network access from this environment), run the commands above locally and then tell me once the repo is cloned — I can then help scaffold pages, wire images, and add branches locally in this workspace.

Notes
- The `setup_repo.ps1` script in this folder has the same commands and some checks; it's provided as a convenience.
- If you prefer I leave this folder empty (no scaffold) so you can clone directly, tell me and I'll remove the files I added.

Enjoy — tell me how you'd like the Snack Buffet page laid out (I can create a full page with images, copy, pricing table, and an RSVP form or call-to-reserve button).