// MERCATOR FILTERS is made by Xing in 2020 under the MIT License

const code = '(' + {{script.js}} +')()'

const mercator_filter_script = document.createElement('script')
mercator_filter_script.textContent = code
document.documentElement.appendChild(mercator_filter_script)
mercator_filter_script.remove()
