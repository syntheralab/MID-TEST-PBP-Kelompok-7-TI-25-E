# Project UTS PBP - API Pencatat Pendakian Gunung

REST API sederhana untuk mencatat perjalanan pendakian gunung, dibuat dengan Node.js dan Express.
Data disimpan dalam array dan object literal.

**Kelompok 7 - TI 25 E**
1. Mega Sya'bani Agustina (20250040098)
2. Siti Maysa (20250040108)
3. Pasha Fauzan (20250040114)
4. Muhammad Ibnu Zarir (20250040122)

## Cara menjalankan
```bash
npm install
node app.js
```
Server berjalan di http://localhost:3000

## Daftar route
| Method | Endpoint | Fungsi |
|---|---|---|
| GET | /pendakian | Menampilkan semua data |
| GET | /pendakian/:id | Mencari data berdasarkan id |
| GET | /pendakian/cari/gunung?nama= | Mencari berdasarkan nama gunung |
| POST | /pendakian | Menambahkan data |
| PUT | /pendakian/:id | Mengubah data |
| DELETE | /pendakian/:id | Menghapus data |
| GET | /statistik | Statistik pendakian |

## Pengujian
Screenshot pengujian Postman ada di file PDF DOKUMENTASI & LAPORAN
