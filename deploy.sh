#!/usr/bin/env sh
# abort on errors
set -e
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain    
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:tomoose11/tandtbuild.git master:gh-pages
echo 'done'
cd -