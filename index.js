module.exports = string => `
  <h1> ${ string } </h1>
  <style>
    h1 {
      font-size: 72px;
      background: -webkit-linear-gradient(#eee, #333);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  </style>
`;