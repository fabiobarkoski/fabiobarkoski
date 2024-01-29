const readmeContent = (cards) => {
  return `## Hey, welcome to my GitHub!
My name is Fábio and I'm a Software Developer, currently working with Python and trying to contribute as much as I can to open-source projects.

Reach me on my socials:
[Linkedin](https://www.linkedin.com/in/fabio-barkoski/) - [Matrix](https://matrix.to/#/@fabiovb:matrix.org)
##
<h3 align="center">Recent Projects:</h3>
<a href="${cards[0].url}"><img src="https://github-readme-stats.vercel.app/api/pin/?username=fabiobarkoski&repo=${cards[0].name}&title_color=7aa2f7&text_color=9ca3af&bg_color=24283b&border_color=121111&icon_color=bb9af7&border_radius=20" height="120"/></a>
<a href="${cards[1].url}"><img src="https://github-readme-stats.vercel.app/api/pin/?username=fabiobarkoski&repo=${cards[1].name}&title_color=7aa2f7&text_color=9ca3af&bg_color=24283b&border_color=121111&icon_color=bb9af7&border_radius=20" height="120"/></a>`;
};

export { readmeContent };
