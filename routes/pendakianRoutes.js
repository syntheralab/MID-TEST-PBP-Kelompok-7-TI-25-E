const express = require("express");
const router = express.Router();
const pendakian = require("../data/pendakian");

// GET semua catatan pendakian
router.get("/", (req, res) => {
  if (pendakian.length === 0) {
    return res.status(404).json({ pesan: "Belum ada catatan pendakian" });
  }
  res.json(pendakian);
});

// GET dengan parameter: cari berdasarkan id
router.get("/:id", (req, res) => {
  const item = pendakian.find((p) => p.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ pesan: "Catatan tidak ditemukan" });
  res.json(item);
});

// GET pencarian: /pendakian/cari/gunung?nama=ciremai
router.get("/cari/gunung", (req, res) => {
  const nama = (req.query.nama || "").toLowerCase();
  const hasil = pendakian.filter((p) => p.namaGunung.toLowerCase().includes(nama));
  res.json(hasil);
});

// POST tambah catatan
router.post("/", (req, res) => {
  const { namaGunung, lokasi, ketinggianMdpl, lamaPendakianJam, tingkatKesulitan } = req.body;
  if (!namaGunung || !ketinggianMdpl) {
    return res.status(400).json({ pesan: "namaGunung dan ketinggianMdpl wajib diisi" });
  }
  const baru = {
    id: pendakian.length + 1,
    namaGunung, lokasi, ketinggianMdpl, lamaPendakianJam, tingkatKesulitan,
    selesai: false,
  };
  pendakian.push(baru);
  res.status(201).json(baru);
});

// PUT ubah catatan
router.put("/:id", (req, res) => {
  const item = pendakian.find((p) => p.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ pesan: "Catatan tidak ditemukan" });
  Object.assign(item, req.body);
  res.json(item);
});

// DELETE hapus catatan
router.delete("/:id", (req, res) => {
  const index = pendakian.findIndex((p) => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ pesan: "Catatan tidak ditemukan" });
  const dihapus = pendakian.splice(index, 1);
  res.json({ pesan: "Berhasil dihapus", data: dihapus[0] });
});

module.exports = router;