# PjBL Dasar Pemrograman: Warung Pak Din 2

Proyek kelompok ini mengembangkan program pemesanan makanan dan minuman menggunakan Pascal, disertai dokumentasi algoritma dan media interaktif untuk menjelaskan cara kerja program.

**Judul:** Pengembangan Sistem Pemesanan Makanan dan Minuman di Warung Pak Din 2  
**Kelompok:** Pria Sayang Mamah  
**Kelas:** A  
**Dosen:** Dr. Fuzy Yustika Manik, S.Kom., M.Kom.  
**Tahun akademik:** 2026

## Tujuan

Program membantu kasir mencatat beberapa menu dalam satu transaksi, menghitung subtotal setiap jenis pesanan, total item dan total belanja, memproses pembayaran, serta mencetak struk. Proyek menerapkan input, proses, output, variabel dan tipe data, operator, sequence, selection, dan repetition.

## Isi Repository

- [`project.pas`](project.pas): program kasir Pascal.
- [`pseudocode.md`](pseudocode.md): pseudocode yang mengikuti prosedur dan alur pada program Pascal.
- [`PJBL-Daspro.drawio`](PJBL-Daspro.drawio): flowchart editable untuk proses pemesanan.
- [`media-interaktif/`](media-interaktif/): materi presentasi interaktif berbasis HTML, CSS, dan JavaScript.
- [`index.html`](index.html): halaman awal GitHub Pages yang mengalihkan pengunjung ke media interaktif.

## Menjalankan Proyek

### Program Pascal

Pasang Free Pascal Compiler (FPC), lalu dari folder repository jalankan:

```sh
fpc project.pas
```

Di Windows, jalankan hasil kompilasi dengan:

```powershell
.\project.exe
```

Program menggunakan unit `crt` untuk membersihkan layar dan berjalan di terminal.

### Media Interaktif

Buka `media-interaktif/index.html` di browser. Untuk menerbitkan melalui GitHub Pages, atur repository agar menggunakan branch yang berisi proyek dan folder root sebagai sumber publikasi. Halaman root akan meneruskan pengunjung ke `media-interaktif/` menggunakan URL relatif.

## Alur Program

1. Tampilkan menu utama: mulai pesanan, tentang program, atau keluar.
2. Saat transaksi dimulai, set jumlah pesanan, total item, dan total belanja ke nol, lalu minta nama pelanggan.
3. Pengguna dapat menambah, melihat, atau mengurangi pesanan sampai memilih selesai. Setiap jenis pesanan disimpan sebagai record di array berkapasitas 100 jenis.
4. Untuk pesanan baru, program memvalidasi pilihan menu 1-30 dan jumlah positif, menghitung `harga × jumlah`, lalu memperbarui subtotal, total item, dan total belanja.
5. Untuk pengurangan, program memvalidasi nomor pesanan dan jumlah pengurangan. Jika jumlah suatu record menjadi nol, record itu dihapus dari array.
6. Tampilkan ringkasan. Pengguna dapat kembali mengubah pesanan atau melanjutkan pembayaran.
7. Ulangi input pembayaran sampai uang setidaknya sama dengan total belanja, hitung kembalian, lalu cetak semua baris pesanan dan ringkasan transaksi.

## Media Interaktif

Situs memuat Home, Masalah, Input Data, Proses, Algoritma, Flowchart, Source Code, Simulasi, Quiz, dan Kesimpulan. Penyaji berpindah seperti slideshow melalui tombol sebelumnya/berikutnya, tombol panah keyboard, atau menu materi di kontrol bawah. Kontrol juga menyediakan mode layar penuh.

Elemen pembelajaran dan interaksi:

- Accordion untuk membuka penjelasan masalah dan solusi.
- Baris tabel input yang dapat dipilih untuk menampilkan catatan validasi.
- Tabs untuk melihat proses matematis dan potongan source code Pascal.
- Stepper untuk menelusuri tahapan algoritma.
- Simulasi keranjang multi-menu, pengurangan jumlah, ringkasan, validasi pembayaran, dan struk.
- Latihan tebak output dengan pemeriksaan jawaban dan feedback.
- Quiz dengan indikator kemajuan, feedback per jawaban, dan nilai akhir.
- Animasi masuk bertahap yang menghormati pengaturan reduced motion perangkat.

## Skenario Pengujian

Berikut skenario yang disarankan untuk demonstrasi program dan simulasi. Isikan hasil aktual dan status setelah menjalankan program Pascal.

| No. | Skenario                                                              | Hasil yang diharapkan                                                                                     |
| --- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1   | Pesan 2 Nasi Goreng (Rp15.000) dan 1 Es Teh (Rp5.000), bayar Rp40.000 | Total 3 item, total belanja Rp35.000, kembalian Rp5.000; kedua menu tercetak.                             |
| 2   | Dengan total Rp35.000, bayar Rp30.000 lalu coba lagi Rp40.000         | Pembayaran pertama ditolak dengan kekurangan Rp5.000; pembayaran kedua diterima dengan kembalian Rp5.000. |
| 3   | Pilih nomor menu 0 atau 31                                            | Program menolak pilihan dan meminta menu 1 sampai 30.                                                     |
| 4   | Tambahkan menu dengan jumlah 0 atau negatif                           | Program menolak jumlah; record dan total tidak berubah.                                                   |
| 5   | Pesan 2 Nasi Goreng lalu kurangi 1                                    | Jumlah menjadi 1, subtotal menjadi Rp15.000, total item dan total belanja ikut berkurang.                 |
| 6   | Kurangi seluruh jumlah pada satu record                               | Record dihapus dari daftar dan jumlah jenis pesanan berkurang satu.                                       |
| 7   | Pilih selesai saat belum ada pesanan                                  | Program menolak menyelesaikan transaksi dan kembali ke menu kelola pesanan.                               |
| 8   | Penuhi 100 jenis pesanan lalu coba menambah satu lagi                 | Program menolak pesanan berikutnya karena batas `MAX_PESANAN`.                                            |

## Kesesuaian Pseudocode

Pseudocode menjelaskan prosedur `TampilkanMenuUtama`, `TentukanMenu`, `TampilkanPesanan`, `TambahPesanan`, `EditPesanan`, `TentangProgram`, `Pembayaran`, `CetakStruk`, `MulaiPesanan`, dan program utama. Variabel lokal prosedur dijelaskan pada deklarasi prosedurnya, mengikuti struktur scope pada Pascal.
