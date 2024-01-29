const shortDesc = (name, desc, language, stars, forks) => {
  return `<svg
    width="500" height="195"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" rx="12" ry="12" fill="#24283b" />

    <text x="10" y="25" font-size="18" fill="#9aa5ce">{</text>

    <text x="30" y="50" font-size="15" fill="#7aa2f7">name</text>
    <text x="77" y="50" font-size="18" fill="#7dcfff">:</text>
    <text x="87" y="50" font-size="15" fill="#9ece6a">"${name}"</text>

    <text x="30" y="76" font-size="15" fill="#7aa2f7">description</text>
    <text x="122" y="76" font-size="18" fill="#7dcfff">:</text>
    <text x="132" y="76" font-size="15" fill="#9ece6a">"${desc}"</text>

    <text x="30" y="102" font-size="15" fill="#7aa2f7">language</text>
    <text x="105" y="102" font-size="18" fill="#7dcfff">:</text>
    <text x="115" y="102" font-size="15" fill="#9ece6a">"${language}"</text>

    <text x="30" y="128" font-size="15" fill="#7aa2f7">stars</text>
    <text x="72" y="128" font-size="18" fill="#7dcfff">:</text>
    <text x="82" y="129" font-size="15" fill="#ff9e64">${stars}</text>

    <text x="30" y="154" font-size="15" fill="#7aa2f7">forks</text>
    <text x="72" y="154" font-size="18" fill="#7dcfff">:</text>
    <text x="82" y="155" font-size="15" fill="#ff9e64">${forks}</text>

    <text x="10" y="180" font-size="18" fill="#9aa5ce">}</text>
</svg>`;
};

const longDesc = (name, desc_part1, desc_part2, language, stars, forks) => {
  return `<svg
    width="500" height="195"
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" rx="12" ry="12" fill="#24283b" />

    <text x="10" y="25" font-size="18" fill="#9aa5ce">{</text>

    <text x="30" y="47" font-size="15" fill="#7aa2f7">name</text>
    <text x="77" y="47" font-size="18" fill="#7dcfff">:</text>
    <text x="87" y="47" font-size="15" fill="#9ece6a">"${name}"</text>

    <text x="30" y="70" font-size="15" fill="#7aa2f7">description</text>
    <text x="122" y="70" font-size="18" fill="#7dcfff">:</text>
    <text x="132" y="70" font-size="15" fill="#9ece6a">"${desc_part1}</text>
    <text x="30" y="90" font-size="15" fill="#9ece6a">${desc_part2}"</text>

    <text x="30" y="113" font-size="15" fill="#7aa2f7">language</text>
    <text x="105" y="113" font-size="18" fill="#7dcfff">:</text>
    <text x="115" y="113" font-size="15" fill="#9ece6a">"${language}"</text>

    <text x="30" y="136" font-size="15" fill="#7aa2f7">stars</text>
    <text x="72" y="136" font-size="18" fill="#7dcfff">:</text>
    <text x="84" y="137" font-size="15" fill="#ff9e64">${stars}</text>

    <text x="30" y="159" font-size="15" fill="#7aa2f7">forks</text>
    <text x="72" y="159" font-size="18" fill="#7dcfff">:</text>
    <text x="84" y="160" font-size="15" fill="#ff9e64">${forks}</text>

    <text x="10" y="180" font-size="18" fill="#9aa5ce">}</text>
</svg>`;
};

const readmeContent = (cards) => {
  return `## Hey, welcome to my GitHub!
My name is Fábio and I'm a Software Developer, currently working with Python and trying to contribute as much as I can to open-source projects.

Reach me on my socials:
[Linkedin](https://www.linkedin.com/in/fabio-barkoski/) - [Matrix](https://matrix.to/#/@fabiovb:matrix.org)
##
<h3 align="center">Recent Projects:</h3>
<a href="${cards[0].url}"><img src="${cards[0].location}" height="160"/></a>
&nbsp&nbsp&nbsp
<a href="${cards[1].url}"><img src="${cards[1].location}" height="160"/></a>`;
};

export { shortDesc, longDesc, readmeContent };
