<h1 align="left" id="title">Portfolio Website</h1>
<br>
<p id="description">I redesigned a site developed with HTML and CSS that I found on GitHub, using Node.js and React to make it dynamic and make various aesthetic changes without any hassle.</p>


<br>

<img src="https://raw.githubusercontent.com/erenakbas57/Portfolio/master/src/assets/portfolio.png" alt="project-screenshot" width="900" height="400/">
<br><br>
<h2>🛠️ Installation Steps:</h2>
<br>


```
git clone https://github.com/<your-username>/Portfolio.git
cd Portfolio
npm i
npm start
```
<br>

You can easily adapt it to your own site by editing the data files in the **/src/Data** path.

<br>


<h2>🛠 Publish Steps:</h2>
<br>

while in the project's main directory

```
rm -rf .git
git init
git add .
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin master
```
<br>

In the **package.json** file, update the **homepage** field to: 

```
https://<your-username>.github.io/<your-repo>
```

<br>

```
npm install --save gh-pages
npm run deploy
```

<br>

<h2 align="left">Support:</h2>
<p>
  <a href="https://www.buymeacoffee.com/merenakbas"> <img align="center" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="250" height="75"</img></a>
</p>
