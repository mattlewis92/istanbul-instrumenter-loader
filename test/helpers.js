export function stripLocalPaths(source) { // eslint-disable-line import/prefer-default-export
  const replace = new RegExp(__dirname, 'g');
  return source.replace(replace, '');
}

export function stripWebpackHashes(source) {
  return source.replace(
    /"sources":\["webpack:\/\/\/webpack\/bootstrap \w+"/g,
    '"sources":["webpack:///webpack/bootstrap hash"',
  ).replace(
    /hash="\w+"/,
    'hash="hash"',
  );
}
