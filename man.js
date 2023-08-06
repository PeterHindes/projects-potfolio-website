const converter = new showdown.Converter();

async function getReadmeFiles(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url);
    const repos = await response.json();
    const promises = [];
    for (const repo of repos) {
        if (!repo.fork) {
            const readmeUrl = `https://api.github.com/repos/${username}/${repo.name}/contents/README.md`;
            const promise = fetch(readmeUrl).then(async (readmeResponse) => {
                if (readmeResponse.status === 200) {
                    const readmeContent = await readmeResponse.json();
                    const content = atob(readmeContent.content);
                    return content;
                }
            });
            promises.push(promise);
        }
    }
    const readmeContents = await Promise.all(promises);
    return readmeContents.filter(content => content !== undefined);
}

document.getElementById("md-cont").innerText="Loading from Github..."
getReadmeFiles("PeterHindes").then((readmeContents) => {
    document.getElementById("md-cont").innerText=""
    const grid = document.getElementById("md-cont");
    for (const content of readmeContents) {
        const html = converter.makeHtml(content);
        const div = document.createElement('div');
        div.innerHTML = html;
        document.getElementById("md-cont").appendChild(div);
    }
});
