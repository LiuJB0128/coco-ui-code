rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:LiuJB0128/coco-ui.git &&
git push -f -u origin main &&
cd ..
echo https://liujb0128.github.io/coco-ui/index.html