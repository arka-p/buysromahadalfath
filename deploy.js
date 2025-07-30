import { execSync } from 'node:child_process'
import { writeFileSync, rmSync, existsSync } from 'node:fs'

writeFileSync('dist/.nojekyll', '')

// Hapus folder .git jika ada
if (existsSync('dist/.git')) {
  rmSync('dist/.git', { recursive: true, force: true })
}

execSync('git init', { cwd: 'dist' })
execSync('git add .', { cwd: 'dist' })

try {
  execSync('git commit -m "Deploy"', { cwd: 'dist' })
} catch {
  console.log('⚠️ Tidak ada perubahan untuk di-commit. Lewati commit.')
}

execSync('git branch -M main', { cwd: 'dist' })
execSync('git remote add origin https://github.com/arka-p/buysromahadalfath.git', { cwd: 'dist' })
execSync('git push -f origin main:gh-pages', { cwd: 'dist' })

console.log('✅ Deploy ke GitHub Pages berhasil!')
