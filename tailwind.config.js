module.exports = {
  content: [
      './resources/**/*.{php,jsx,vue,js}'
  ],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
