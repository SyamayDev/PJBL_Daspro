# PSEUDOCODE PROGRAM WARUNG PAK DIN

## 1. DEKLARASI

```text
PROGRAM WarungPakDin

KONSTANTA
    MAX_PESANAN ← 100

TIPE DATA
    TPesanan = RECORD
        namaMenu : STRING
        harga    : LONGINT
        jumlah   : INTEGER
        subtotal : LONGINT
    END RECORD

VARIABEL
    pesanan : ARRAY[1..MAX_PESANAN] OF TPesanan

    jumlahPesanan : INTEGER
    totalItem     : INTEGER
    totalBelanja  : LONGINT

    pilihanUtama : INTEGER
    pilihanPesan : INTEGER
    pilihanMenu  : INTEGER
    jumlah       : INTEGER

    namaMenuDipilih  : STRING
    hargaMenuDipilih : LONGINT
    subtotalPesanan  : LONGINT

    namaPelanggan : STRING

    uangBayar : LONGINT
    kembalian : LONGINT

    i : INTEGER
```

---

# 2. PROSEDUR TAMPILKAN MENU UTAMA

```text
PROCEDURE TampilkanMenuUtama

BEGIN
    Bersihkan layar

    Tampilkan "=============================================="
    Tampilkan "              WARUNG PAK DIN"
    Tampilkan "         SISTEM PEMESANAN MAKANAN"
    Tampilkan "=============================================="

    Tampilkan "1. Mulai Pesanan"
    Tampilkan "2. Tentang Program"
    Tampilkan "3. Keluar"

    Tampilkan "=============================================="
    Input pilihanUtama
END
```

---

# 3. PROSEDUR TAMPILKAN DAFTAR MENU

```text
PROCEDURE TampilkanDaftarMenu

BEGIN
    Bersihkan layar

    Tampilkan daftar menu nomor 1 sampai 30
    beserta nama menu dan harga masing-masing

    Tampilkan "1. Nasi Goreng          Rp15.000"
    Tampilkan "2. Nasi Goreng Ayam     Rp20.000"
    Tampilkan "3. Nasi Goreng Seafood  Rp25.000"
    Tampilkan "4. Mie Goreng           Rp13.000"
    Tampilkan "5. Mie Goreng Ayam      Rp18.000"
    Tampilkan "6. Mie Goreng Seafood   Rp23.000"
    Tampilkan "7. Ayam Geprek          Rp18.000"
    Tampilkan "8. Ayam Penyet          Rp20.000"
    Tampilkan "9. Ayam Bakar           Rp22.000"
    Tampilkan "10. Ayam Goreng         Rp20.000"
    Tampilkan "11. Lele Goreng         Rp17.000"
    Tampilkan "12. Lele Bakar          Rp19.000"
    Tampilkan "13. Soto Ayam           Rp15.000"
    Tampilkan "14. Bakso               Rp15.000"
    Tampilkan "15. Indomie Goreng      Rp10.000"
    Tampilkan "16. Indomie Kuah        Rp10.000"
    Tampilkan "17. Indomie + Telur     Rp14.000"
    Tampilkan "18. Nasi Ayam Sambal    Rp18.000"
    Tampilkan "19. Nasi Telur          Rp12.000"
    Tampilkan "20. Nasi Campur         Rp20.000"

    Tampilkan "21. Es Teh              Rp 5.000"
    Tampilkan "22. Teh Hangat          Rp 4.000"
    Tampilkan "23. Es Jeruk            Rp 7.000"
    Tampilkan "24. Jeruk Hangat        Rp 6.000"
    Tampilkan "25. Es Kopi             Rp 8.000"
    Tampilkan "26. Kopi Hangat         Rp 7.000"
    Tampilkan "27. Es Milo             Rp 8.000"
    Tampilkan "28. Air Mineral         Rp 4.000"
    Tampilkan "29. Es Cincau            Rp 8.000"
    Tampilkan "30. Jus Jeruk           Rp10.000"

END
```

---

# 4. PROSEDUR MENENTUKAN MENU

```text
PROCEDURE TentukanMenu(nomor)

BEGIN
    namaMenuDipilih ← ""
    hargaMenuDipilih ← 0

    CASE nomor OF

        1:
            namaMenuDipilih ← "Nasi Goreng"
            hargaMenuDipilih ← 15000

        2:
            namaMenuDipilih ← "Nasi Goreng Ayam"
            hargaMenuDipilih ← 20000

        3:
            namaMenuDipilih ← "Nasi Goreng Seafood"
            hargaMenuDipilih ← 25000

        4:
            namaMenuDipilih ← "Mie Goreng"
            hargaMenuDipilih ← 13000

        5:
            namaMenuDipilih ← "Mie Goreng Ayam"
            hargaMenuDipilih ← 18000

        6:
            namaMenuDipilih ← "Mie Goreng Seafood"
            hargaMenuDipilih ← 23000

        7:
            namaMenuDipilih ← "Ayam Geprek"
            hargaMenuDipilih ← 18000

        8:
            namaMenuDipilih ← "Ayam Penyet"
            hargaMenuDipilih ← 20000

        9:
            namaMenuDipilih ← "Ayam Bakar"
            hargaMenuDipilih ← 22000

        10:
            namaMenuDipilih ← "Ayam Goreng"
            hargaMenuDipilih ← 20000

        11:
            namaMenuDipilih ← "Lele Goreng"
            hargaMenuDipilih ← 17000

        12:
            namaMenuDipilih ← "Lele Bakar"
            hargaMenuDipilih ← 19000

        13:
            namaMenuDipilih ← "Soto Ayam"
            hargaMenuDipilih ← 15000

        14:
            namaMenuDipilih ← "Bakso"
            hargaMenuDipilih ← 15000

        15:
            namaMenuDipilih ← "Indomie Goreng"
            hargaMenuDipilih ← 10000

        16:
            namaMenuDipilih ← "Indomie Kuah"
            hargaMenuDipilih ← 10000

        17:
            namaMenuDipilih ← "Indomie + Telur"
            hargaMenuDipilih ← 14000

        18:
            namaMenuDipilih ← "Nasi Ayam Sambal"
            hargaMenuDipilih ← 18000

        19:
            namaMenuDipilih ← "Nasi Telur"
            hargaMenuDipilih ← 12000

        20:
            namaMenuDipilih ← "Nasi Campur"
            hargaMenuDipilih ← 20000

        21:
            namaMenuDipilih ← "Es Teh"
            hargaMenuDipilih ← 5000

        22:
            namaMenuDipilih ← "Teh Hangat"
            hargaMenuDipilih ← 4000

        23:
            namaMenuDipilih ← "Es Jeruk"
            hargaMenuDipilih ← 7000

        24:
            namaMenuDipilih ← "Jeruk Hangat"
            hargaMenuDipilih ← 6000

        25:
            namaMenuDipilih ← "Es Kopi"
            hargaMenuDipilih ← 8000

        26:
            namaMenuDipilih ← "Kopi Hangat"
            hargaMenuDipilih ← 7000

        27:
            namaMenuDipilih ← "Es Milo"
            hargaMenuDipilih ← 8000

        28:
            namaMenuDipilih ← "Air Mineral"
            hargaMenuDipilih ← 4000

        29:
            namaMenuDipilih ← "Es Cincau"
            hargaMenuDipilih ← 8000

        30:
            namaMenuDipilih ← "Jus Jeruk"
            hargaMenuDipilih ← 10000

    END CASE
END
```

---

# 5. PROSEDUR TAMPILKAN PESANAN

```text
PROCEDURE TampilkanPesanan

BEGIN
    Bersihkan layar

    Tampilkan "PESANAN SEMENTARA"

    IF jumlahPesanan = 0 THEN
        Tampilkan "Belum ada pesanan."
    ELSE

        Tampilkan daftar pesanan

        FOR i ← 1 TO jumlahPesanan DO
            Tampilkan:
                nomor pesanan
                nama menu
                jumlah
                subtotal
        END FOR

        Tampilkan "Jumlah Jenis Pesanan : ", jumlahPesanan
        Tampilkan "Total Item           : ", totalItem
        Tampilkan "Total Belanja        : Rp", totalBelanja
    END IF

    Tampilkan "Tekan ENTER untuk kembali"
    Tunggu ENTER
END
```

---

# 6. PROSEDUR TAMBAH PESANAN

```text
PROCEDURE TambahPesanan

BEGIN

    IF jumlahPesanan >= MAX_PESANAN THEN

        Tampilkan "Pesanan sudah mencapai batas maksimal."
        Tunggu ENTER

    ELSE

        TampilkanDaftarMenu

        Input pilihanMenu

        IF pilihanMenu < 1 OR pilihanMenu > 30 THEN

            Tampilkan "Menu tidak tersedia!"
            Tampilkan "Silakan pilih nomor 1 sampai 30."
            Tunggu ENTER

        ELSE

            TentukanMenu(pilihanMenu)

            Tampilkan namaMenuDipilih
            Tampilkan hargaMenuDipilih

            Input jumlah

            IF jumlah <= 0 THEN

                Tampilkan "Jumlah pesanan tidak valid!"
                Tunggu ENTER

            ELSE

                subtotalPesanan ← hargaMenuDipilih × jumlah

                jumlahPesanan ← jumlahPesanan + 1

                pesanan[jumlahPesanan].namaMenu ← namaMenuDipilih
                pesanan[jumlahPesanan].harga ← hargaMenuDipilih
                pesanan[jumlahPesanan].jumlah ← jumlah
                pesanan[jumlahPesanan].subtotal ← subtotalPesanan

                totalBelanja ← totalBelanja + subtotalPesanan
                totalItem ← totalItem + jumlah

                Tampilkan "Pesanan berhasil ditambahkan!"
                Tampilkan nama menu
                Tampilkan jumlah
                Tampilkan subtotal
                Tampilkan total sementara

                Tunggu ENTER

            END IF

        END IF

    END IF

END
```

---

# 7. PROSEDUR EDIT PESANAN

```text
PROCEDURE EditPesanan

DEKLARASI
    nomorEdit : INTEGER
    jumlahKurang : INTEGER
    subtotalKurang : LONGINT

BEGIN

    Bersihkan layar

    IF jumlahPesanan = 0 THEN

        Tampilkan "Belum ada pesanan yang dapat diedit."
        Tunggu ENTER

    ELSE

        Tampilkan seluruh pesanan

        FOR i ← 1 TO jumlahPesanan DO
            Tampilkan nomor
            Tampilkan nama menu
            Tampilkan jumlah
            Tampilkan subtotal
        END FOR

        Input nomorEdit

        IF nomorEdit < 1 OR nomorEdit > jumlahPesanan THEN

            Tampilkan "Nomor pesanan tidak valid!"
            Tampilkan "Silakan pilih nomor pesanan yang tersedia."
            Tunggu ENTER

        ELSE

            Tampilkan nama menu yang dipilih
            Tampilkan jumlah saat ini

            Input jumlahKurang

            IF jumlahKurang <= 0 THEN

                Tampilkan "Jumlah tidak valid!"
                Tampilkan "Jumlah yang dikurangi harus lebih dari 0."
                Tunggu ENTER

            ELSE IF jumlahKurang > pesanan[nomorEdit].jumlah THEN

                Tampilkan "Jumlah tidak valid!"
                Tampilkan jumlah maksimum yang dapat dikurangi
                Tunggu ENTER

            ELSE

                subtotalKurang ←
                    pesanan[nomorEdit].harga × jumlahKurang

                pesanan[nomorEdit].jumlah ←
                    pesanan[nomorEdit].jumlah - jumlahKurang

                pesanan[nomorEdit].subtotal ←
                    pesanan[nomorEdit].harga ×
                    pesanan[nomorEdit].jumlah

                totalItem ← totalItem - jumlahKurang

                totalBelanja ← totalBelanja - subtotalKurang

                Tampilkan "Pesanan berhasil diedit!"
                Tampilkan menu
                Tampilkan jumlah yang dikurangi
                Tampilkan jumlah sekarang
                Tampilkan subtotal sekarang
                Tampilkan total sementara

                IF pesanan[nomorEdit].jumlah = 0 THEN

                    FOR i ← nomorEdit TO jumlahPesanan - 1 DO
                        pesanan[i] ← pesanan[i + 1]
                    END FOR

                    jumlahPesanan ← jumlahPesanan - 1

                    Tampilkan "Jumlah pesanan menjadi 0."
                    Tampilkan "Pesanan tersebut dihapus dari daftar."

                END IF

                Tunggu ENTER

            END IF

        END IF

    END IF

END
```

---

# 8. PROSEDUR BATALKAN PESANAN

```text
PROCEDURE BatalkanPesanan

DEKLARASI
    nomorBatal : INTEGER

BEGIN
    Bersihkan layar

    IF jumlahPesanan = 0 THEN
        Tampilkan "Belum ada pesanan yang dapat dibatalkan."
        Tunggu ENTER
    ELSE
        FOR i <- 1 TO jumlahPesanan DO
            Tampilkan nomor, nama menu, jumlah, subtotal
        END FOR

        INPUT nomorBatal

        IF nomorBatal < 1 OR nomorBatal > jumlahPesanan THEN
            Tampilkan "Nomor pesanan tidak valid."
        ELSE
            totalItem <- totalItem - pesanan[nomorBatal].jumlah
            totalBelanja <- totalBelanja - pesanan[nomorBatal].subtotal

            FOR i <- nomorBatal TO jumlahPesanan - 1 DO
                pesanan[i] <- pesanan[i + 1]
            END FOR

            jumlahPesanan <- jumlahPesanan - 1
            Tampilkan "Pesanan berhasil dibatalkan."
            Tampilkan jumlahPesanan, totalItem, totalBelanja
        END IF

        Tunggu ENTER
    END IF
END
```

---

# 9. PROSEDUR TENTANG PROGRAM

```text
PROCEDURE TentangProgram

DEKLARASI
    pilihanTentang : INTEGER
    selesaiTentang : BOOLEAN

BEGIN

    selesaiTentang ← FALSE

    REPEAT

        Bersihkan layar

        Tampilkan "TENTANG PROGRAM"
        Tampilkan "WARUNG PAK DIN"
        Tampilkan "Sistem Pemesanan Makanan"

        Tampilkan:
            "Program ini dibuat untuk membantu proses
             pemesanan makanan secara sederhana."

        Tampilkan konsep Dasar Pemrograman:
            - Input dan Output
            - Sequence
            - Selection
            - Repetition
            - Perhitungan

        Tampilkan "Bahasa Pemrograman: Pascal"

        Tampilkan "1. Kembali"
        Tampilkan "2. Keluar"

        Input pilihanTentang

        IF pilihanTentang = 1 THEN
            selesaiTentang ← TRUE

        ELSE IF pilihanTentang = 2 THEN

            Hentikan program

        ELSE

            Tampilkan "Pilihan tidak tersedia!"
            Tampilkan "Tekan ENTER untuk mencoba lagi..."
            Tunggu ENTER

        END IF

    UNTIL selesaiTentang = TRUE
END
```

---

# 10. PROSEDUR PEMBAYARAN

```text
PROCEDURE Pembayaran

DEKLARASI
    pembayaranSelesai : BOOLEAN

BEGIN

    pembayaranSelesai ← FALSE

    REPEAT

        Bersihkan layar

        Tampilkan "PEMBAYARAN"
        Tampilkan "Total Belanja : Rp", totalBelanja

        Input uangBayar

        IF uangBayar < totalBelanja THEN

            Tampilkan "UANG TIDAK MENCUKUPI"
            Tampilkan "Total      : Rp", totalBelanja
            Tampilkan "Dibayarkan : Rp", uangBayar
            Tampilkan "Kekurangan : Rp", totalBelanja - uangBayar

            Tampilkan "Silakan masukkan uang kembali."
            Tunggu ENTER

        ELSE

            kembalian ← uangBayar - totalBelanja

            pembayaranSelesai ← TRUE

        END IF

    UNTIL pembayaranSelesai = TRUE

END
```

---

# 11. PROSEDUR CETAK STRUK

```text
PROCEDURE CetakStruk

BEGIN

    Bersihkan layar

    Tampilkan "WARUNG PAK DIN"
    Tampilkan "STRUK PEMBAYARAN"

    Tampilkan "Pelanggan : ", namaPelanggan

    Tampilkan daftar pesanan

    FOR i ← 1 TO jumlahPesanan DO

        Tampilkan:
            nomor pesanan
            nama menu
            jumlah
            subtotal

    END FOR

    Tampilkan "Total Jenis Pesanan : ", jumlahPesanan
    Tampilkan "Total Item          : ", totalItem
    Tampilkan "Total Belanja       : Rp", totalBelanja
    Tampilkan "Pembayaran          : Rp", uangBayar
    Tampilkan "Kembalian           : Rp", kembalian

    Tampilkan "TERIMA KASIH SUDAH BERBELANJA"
    Tampilkan "DI WARUNG PAK DIN"

    Tampilkan "Tekan ENTER untuk kembali ke menu utama..."
    Tunggu ENTER

END
```

---

# 12. PROSEDUR MULAI PESANAN

```text
PROCEDURE MulaiPesanan

DEKLARASI
    selesaiPesanan : BOOLEAN
    selesaiProses  : BOOLEAN

BEGIN

    Bersihkan layar

    jumlahPesanan ← 0
    totalItem ← 0
    totalBelanja ← 0

    Tampilkan "MEMULAI PESANAN"

    Input namaPelanggan

    selesaiProses ← FALSE

    REPEAT

        selesaiPesanan ← FALSE

        REPEAT

            Bersihkan layar

            Tampilkan "PESANAN WARUNG PAK DIN"
            Tampilkan "Pelanggan : ", namaPelanggan
            Tampilkan "Total sementara : Rp", totalBelanja

            Tampilkan:
                1. Tambah Pesanan
                2. Lihat Pesanan
                3. Edit Pesanan
                4. Selesai Memesan
                5. Batalkan Pesanan

            Input pilihanPesan

            IF pilihanPesan = 1 THEN

                TambahPesanan

            ELSE IF pilihanPesan = 2 THEN

                TampilkanPesanan

            ELSE IF pilihanPesan = 3 THEN

                EditPesanan

            ELSE IF pilihanPesan = 5 THEN

                BatalkanPesanan

            ELSE IF pilihanPesan = 4 THEN

                IF jumlahPesanan = 0 THEN

                    Tampilkan "Anda belum memiliki pesanan."
                    Tampilkan "Silakan tambahkan pesanan terlebih dahulu."
                    Tunggu ENTER

                ELSE

                    selesaiPesanan ← TRUE

                END IF

            ELSE

                Tampilkan "Pilihan tidak tersedia!"
                Tampilkan "Silakan pilih 1 sampai 5."
                Tunggu ENTER

            END IF

        UNTIL selesaiPesanan = TRUE


        // MENAMPILKAN RINGKASAN PESANAN

        Bersihkan layar

        Tampilkan "RINGKASAN PESANAN"

        FOR i ← 1 TO jumlahPesanan DO

            Tampilkan:
                nomor
                nama menu
                jumlah
                subtotal

        END FOR

        Tampilkan "Total Item       : ", totalItem
        Tampilkan "Total Pembayaran : Rp", totalBelanja

        Tampilkan:
            1. Lanjut Pembayaran
            2. Kembali ke Pesanan

        Input pilihanPesan

        IF pilihanPesan = 1 THEN

            Pembayaran
            CetakStruk

            selesaiProses ← TRUE

        ELSE IF pilihanPesan = 2 THEN

            // Kembali ke menu kelola pesanan
            // Data pesanan tidak dihapus

        ELSE

            Tampilkan "Pilihan tidak tersedia!"
            Tampilkan "Silakan pilih 1 atau 2."
            Tampilkan "Tekan ENTER untuk kembali ke pesanan..."
            Tunggu ENTER

        END IF

    UNTIL selesaiProses = TRUE

END
```

---

# 13. PROGRAM UTAMA

```text
BEGIN

    REPEAT

        TampilkanMenuUtama

        CASE pilihanUtama OF

            1:
                MulaiPesanan

            2:
                TentangProgram

            3:
                Bersihkan layar

                Tampilkan "TERIMA KASIH"
                Tampilkan "Terima kasih telah menggunakan"
                Tampilkan "Sistem Pemesanan Warung Pak Din."
                Tampilkan "Sampai jumpa!"

                Tunggu ENTER

        ELSE

            Tampilkan "Pilihan tidak tersedia!"
            Tampilkan "Silakan pilih menu 1 sampai 3."
            Tampilkan "Tekan ENTER untuk mencoba lagi..."
            Tunggu ENTER

        END CASE

    UNTIL pilihanUtama = 3

END.
```
