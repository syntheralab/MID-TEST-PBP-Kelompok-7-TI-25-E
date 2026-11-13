const express = require("express");
const router = express.Router();
const pendakian = require("../data/pendakian");

router.get("/", (req, res) => {
  let totalKetinggian = 0;
  let totalJam = 0;
  let jumlahSelesai = 0;

  for (const p of pendakian) {
    if (p.selesai) {
      totalKetinggian += p.ketinggianMdpl;
      totalJam += p.lamaPendakianJam;
      jumlahSelesai++;
    }
  }

  res.json({
    totalGunung: pendakian.length,
    gunungSelesai: jumlahSelesai,
    totalKetinggianMdpl: totalKetinggian,
    rataRataLamaJam: jumlahSelesai > 0 ? totalJam / jumlahSelesai : 0,
  });
});

module.exports = router;