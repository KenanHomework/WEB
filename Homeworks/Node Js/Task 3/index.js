import { log } from "console";
import { mkdir } from "node:fs/promises";
import os from "os";

const platform = os.platform();
const arch = os.arch();
const username = os.userInfo().username;

const file_name = `${platform}_${arch}_tempdir_${username}`;

try {
  await mkdir(file_name);
} catch (error) {
  log("Temp Directory already exist!");
}
