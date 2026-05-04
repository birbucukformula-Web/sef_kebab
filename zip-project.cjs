/**
 * zip-project.cjs
 * Packages the sef-kebap-v4 project into sef-kebap-v4.zip
 * Usage: node zip-project.cjs
 * Requires: npm install archiver (already in devDependencies)
 */

const archiver = require('archiver')
const fs       = require('fs')
const path     = require('path')

const OUTPUT  = 'sef-kebap-v4.zip'
const EXCLUDE = ['node_modules', '.git', 'dist', OUTPUT]

const out     = fs.createWriteStream(path.join(__dirname, OUTPUT))
const archive = archiver('zip', { zlib: { level: 9 } })

out.on('close', () => {
  const kb = (archive.pointer() / 1024).toFixed(1)
  console.log(`\n✅  ${OUTPUT} oluşturuldu!`)
  console.log(`📦  Boyut : ${kb} KB`)
  console.log(`📁  Konum : ${path.join(__dirname, OUTPUT)}\n`)
})

archive.on('warning', err => { if (err.code !== 'ENOENT') throw err })
archive.on('error',   err => { throw err })

archive.pipe(out)

archive.glob('**/*', {
  cwd: __dirname,
  ignore: EXCLUDE.map(e => `${e}/**`).concat(EXCLUDE),
  dot: true,
})

console.log(`\n🔄  Paketleniyor: ${OUTPUT}`)
console.log(`🚫  Hariç : ${EXCLUDE.join(', ')}\n`)

archive.finalize()
