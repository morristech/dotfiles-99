module.exports = {
  config: {
    fontSize: 12,
    fontFamily: 'Terminus',
    padding: '5px',

    base16: {
      scheme: 'solarized'
    },

    hyperStatusLine: {
      fontFamily: 'Terminus'
    },

    css: `
      .header_header {
        display: none;
      }
      .terms_terms {
        margin-top: 0;
      }
    `,

    showWindowControls: 'false',
    shell: '/bin/zsh',
    shellArgs: ['--login', '-c', 'tmux', '-2', '-u'],
    bell: false,
  },

  plugins: [ 'hypersixteen', 'hyperminimal' ],
};
