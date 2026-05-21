const zlib = require('zlib');
const fs   = require('fs');
const path = require('path');

// ─── CRC32 ──────────────────────────────────────────────────────────────────
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}

function chunk(type, data) {
  const t = Buffer.from(type, 'ascii');
  const len = Buffer.allocUnsafe(4); len.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.allocUnsafe(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
  return Buffer.concat([len, t, data, crcBuf]);
}

function hex(h) {
  return { r: parseInt(h.slice(1,3),16), g: parseInt(h.slice(3,5),16), b: parseInt(h.slice(5,7),16) };
}

function lerp(a, b, t) { return Math.round(a + (b - a) * Math.min(1, Math.max(0, t))); }

function createGradientPNG(w, h, hex1, hex2) {
  const c1 = hex(hex1), c2 = hex(hex2);
  const rows = [];
  for (let y = 0; y < h; y++) {
    const row = Buffer.allocUnsafe(1 + w * 3);
    row[0] = 0;
    for (let x = 0; x < w; x++) {
      const t = (y / h) * 0.65 + (x / w) * 0.35;
      row[1 + x*3] = lerp(c1.r, c2.r, t);
      row[2 + x*3] = lerp(c1.g, c2.g, t);
      row[3 + x*3] = lerp(c1.b, c2.b, t);
    }
    rows.push(row);
  }
  const raw  = Buffer.concat(rows);
  const comp = zlib.deflateSync(raw, { level: 9 });
  const sig  = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.allocUnsafe(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8]=8; ihdr[9]=2; ihdr[10]=0; ihdr[11]=0; ihdr[12]=0;
  return Buffer.concat([sig, chunk('IHDR',ihdr), chunk('IDAT',comp), chunk('IEND',Buffer.alloc(0))]);
}

const W = 800, H = 450;

const images = [
  // ── Hero images ────────────────────────────────────────────────────────────
  { name:'cachorro-dor.png',              c1:'#1a2f3d', c2:'#2a5068' },
  { name:'vacinas-pet.png',               c1:'#1a3d2b', c2:'#1f5c3e' },
  { name:'gato-estresse.png',             c1:'#28204a', c2:'#3d3070' },
  { name:'vet-em-casa.png',               c1:'#18302a', c2:'#254d40' },
  { name:'rotina-pet.png',                c1:'#3a2516', c2:'#5c3a22' },
  { name:'passeio-granja-viana.png',      c1:'#1a3a1a', c2:'#2a5c2a' },
  { name:'pet-idoso.png',                 c1:'#2d1e1e', c2:'#4a2e2e' },
  { name:'filhote-casa.png',              c1:'#1a3830', c2:'#2a5848' },
  { name:'enriquecimento.png',            c1:'#1a2a4a', c2:'#2a3d70' },
  { name:'caminhada-cachorro.png',        c1:'#1a3d30', c2:'#1f6048' },
  { name:'guia-granja-viana.png',         c1:'#1a3a20', c2:'#2a5c30' },
  { name:'checklist-saude.png',           c1:'#1a2d3d', c2:'#1f4a5c' },
  // ── Complementary images ───────────────────────────────────────────────────
  { name:'complem-sinais-dor-cachorro.png',     c1:'#1f3545', c2:'#2d4e62' },
  { name:'complem-calendario-vacinas.png',       c1:'#1e3a28', c2:'#2c5238' },
  { name:'complem-espaco-gato.png',              c1:'#252040', c2:'#352e58' },
  { name:'complem-equipamento-caminhada.png',    c1:'#1c3828', c2:'#275540' },
  { name:'complem-filhote-preparacao.png',       c1:'#1e3530', c2:'#2c5248' },
  { name:'complem-brinquedos-enriquecimento.png',c1:'#1c2845', c2:'#293b65' },
  { name:'complem-cuidados-pet-senior.png',      c1:'#2a1e1e', c2:'#422e2e' },
  { name:'complem-alimentacao-rotina.png',       c1:'#362018', c2:'#523022' },
];

const outDir = path.join(__dirname, '../public/images/blog');
fs.mkdirSync(outDir, { recursive: true });

let total = 0;
for (const img of images) {
  const buf = createGradientPNG(W, H, img.c1, img.c2);
  fs.writeFileSync(path.join(outDir, img.name), buf);
  total += buf.length;
  console.log(`✓ ${img.name.padEnd(44)} ${(buf.length/1024).toFixed(1)} KB`);
}
console.log(`\nTotal: ${images.length} files — ${(total/1024).toFixed(0)} KB`);
