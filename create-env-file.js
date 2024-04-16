import fs from "fs";

const filename = ".env";

const content = `
AUTH0_DOMAIN=1
AUTH0_CLIENT_ID=2
CALLBACK_URL=3
`;


fs.access(filename, fs.F_OK, (err) => {
  if (err) {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(".env file was created", content);
    });
  }
});
