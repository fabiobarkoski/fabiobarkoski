import { writeFile } from "fs";
import { Octokit } from "octokit";

import { readmeContent } from "./templates.js";

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

const ignoreRepos = ["fabiobarkoski", "teste"];
const metadata = [];

getRepos().then((repos, err) => {
  if (err) throw err;
  repos.forEach((value) => {
    metadata.push({
      repoName: value.name,
      repoOwner: value.owner.login,
      repoUrl: value.html_url,
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
