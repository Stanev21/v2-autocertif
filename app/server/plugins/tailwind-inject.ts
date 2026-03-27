export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head.unshift(`
<style>
@font-face {
  font-family: 'NewEdgeRounded';
  src: url('/fonts/NewEdgeRounded-Light.woff2') format('woff2');
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'NewEdgeRounded';
  src: url('/fonts/NewEdgeRounded-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
</style>
<script src="https://cdn.tailwindcss.com"></script>
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        burgundy: '#0B1426',
        'burgundy-deep': '#060D1A',
        'burgundy-light': '#132040',
        forest: '#002827',
        'forest-deep': '#001a19',
        lime: '#a3e635',
        coral: '#3B82F6',
        'coral-dark': '#2563EB',
        'coral-light': '#60A5FA',
        'grey-light': '#f5f5f0',
      },
      fontFamily: {
        heading: ['"NewEdgeRounded"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'pill': '9999px',
      },
    },
  },
}
</script>`)
  })
})
