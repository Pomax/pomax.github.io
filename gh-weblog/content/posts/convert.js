import fs from "fs/promises";
const index = {};
const dir = await fs.readdir(`./metadata`);
import utils from "../../lib/utils.js";

for (const filename of dir) {
  if (filename === `.` || filename === `..`) continue;
  const content = (await fs.readFile(`./metadata/${filename}`)).toString(
    `utf-8`
  );
  try {
    // build up the index
    const data = JSON.parse(content);
    const { title, created, tags } = data;
    const id = filename.replace(`.json`, ``);
    index[id] = { title, created, tags };
    //and generate the redirect .html file
    const indexPath = `../../../pages/${created}/${utils.titleReplace(title)}`;
    await fs.mkdir(indexPath, { recursive: true });
    const html = `<title>${title}</title><meta http-equiv="refresh" content="0; url=../../../index.html?postid=${created}">`;
    await fs.writeFile(`${indexPath}/index.html`, html);
  } catch (e) {
    console.log(`ERROR:`, e);
    console.log(filename, content);
    process.exit(1);
  }
}

fs.writeFile(`index.json`, JSON.stringify(index, null, 2));
