module.exports = source => `export default ${ source.replace(/"\d+[^"]*"\s*:\s*"[^"]*"\s*,*\s*/gim,'') }`;
