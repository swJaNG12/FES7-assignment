// ESM : import // 브라우저
// CommonJS : require() // node

// ESM : export 
// CommonJS : module.exports

// import autoprefixer from 'autoprefixer' 와 같다. 이것은 ESM 방식
const autoprefixer = require('autoprefixer');

// export {
//   plugin: [
//     autoprefixer
//   ]
// } 는 ESM 방식
module.exports = {
  plugins: [
    autoprefixer
  ]
}