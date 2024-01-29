import { writeFile, mkdirSync, existsSync } from "fs";
import { Octokit } from "octokit";
import { emojify } from "node-emoji";
import MarkdownIt from "markdown-it";

import { shortDesc, longDesc, readmeContent } from "./templates.js";

const getRepos = async () => {
  const octokit = new Octokit();
  const res = await octokit.request("GET /users/{username}/repos", {
    username: "fabiobarkoski",
    per_page: 5,
    type: "all",
    sort: "pushed",
    direction: "desc",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const result = res.data.filter((d) => !ignoreRepos.includes(d.name));
  return result.slice(0, 2);
};

const getContent = (value) => {
  if (value.description === null) {
    value.description = "";
  }
  if (value.description.length > 45) {
    const desc_part1 = value.description.slice(0, 44);
    const desc_part2 = value.description.slice(44);
    return longDesc(
      value.name,
      emojify(desc_part1),
      emojify(desc_part2),
      value.language,
      value.stargazers_count,
      value.forks_count,
    );
  }
  return shortDesc(
    value.name,
    emojify(value.description),
    value.language,
    value.stargazers_count,
    value.forks_count,
  );
};

const md = MarkdownIt({
  html: true,
});

const ignoreRepos = ["fabiobarkoski", "teste"];
const folder = "src/resources";
const metadata = [];

getRepos().then((repos, err) => {
  if (err) throw err;
  repos.forEach((value, index) => {
    const content = getContent(value);

    try {
      if (!existsSync(folder)) mkdirSync(folder);
      writeFile(`${folder}/${index + 1}.svg`, content, (err) => {
        if (err) throw err;
      });
    } catch (err) {
      throw err;
    }

    metadata.push({
      location: `src/resources/${index + 1}.svg`,
      url: value.html_url,
    });
  });
  if (metadata) {
    const readme = readmeContent(metadata);
    writeFile("README.md", readme, (err) => {
      if (err) {
        throw err;
      }
    });
  }
});
