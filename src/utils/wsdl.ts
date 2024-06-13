import path from "path";
import fs from "fs";

// Directory where WSDL files are stored
const wsdlDirectory = path.join(__dirname, "..", "wsdl");

// Function to load WSDL files from directory
export function loadWsdl(fileName: string): string {
  const filePath = path.join(wsdlDirectory, fileName);
  return fs.readFileSync(filePath, "utf8");
}
