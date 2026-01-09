Get-ChildItem src -Recurse -Filter *.js |
Rename-Item -NewName { $_.BaseName + ".jsx" }
