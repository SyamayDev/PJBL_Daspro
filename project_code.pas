program WarungPakDin;

uses
    crt; 

const
    MAX_PESANAN = 100; 

type
    
    TPesanan = record
        namaMenu : string[40]; 
        harga    : longint;    
        jumlah   : integer;    
        subtotal : longint;    
    end;

var
    pesanan : array[1..MAX_PESANAN] of TPesanan; 

    
    jumlahPesanan : integer;
    totalItem     : integer;
    totalBelanja  : longint;

    
    pilihanUtama  : integer;
    pilihanPesan  : integer;
    pilihanMenu   : integer;
    jumlah        : integer;

    
    namaMenuDipilih : string[40];
    hargaMenuDipilih : longint;
    subtotalPesanan : longint;

    
    namaPelanggan : string[50];
    uangBayar : longint;
    kembalian : longint;

    
    i : integer;






procedure TampilkanMenuUtama;
begin
    clrscr; 

    writeln('==============================================');
    writeln('              WARUNG PAK DIN                 ');
    writeln('         SISTEM PEMESANAN MAKANAN            ');
    writeln('==============================================');
    writeln;
    writeln('1. Mulai Pesanan');
    writeln('2. Tentang Program');
    writeln('3. Keluar');
    writeln;
    writeln('==============================================');
    write('Pilih menu [1-3] : ');
    readln(pilihanUtama);
end;






procedure TampilkanDaftarMenu;
begin
    clrscr; 

    writeln('==============================================================');
    writeln('                  MENU WARUNG PAK DIN                        ');
    writeln('==============================================================');
    writeln;
    
    writeln(' 1. Nasi Goreng          Rp15.000');
    writeln(' 2. Nasi Goreng Ayam     Rp20.000');
    writeln(' 3. Nasi Goreng Seafood  Rp25.000');
    writeln(' 4. Mie Goreng           Rp13.000');
    writeln(' 5. Mie Goreng Ayam      Rp18.000');
    writeln(' 6. Mie Goreng Seafood   Rp23.000');
    writeln(' 7. Ayam Geprek          Rp18.000');
    writeln(' 8. Ayam Penyet          Rp20.000');
    writeln(' 9. Ayam Bakar           Rp22.000');
    writeln('10. Ayam Goreng          Rp20.000');
    writeln('11. Lele Goreng          Rp17.000');
    writeln('12. Lele Bakar           Rp19.000');
    writeln('13. Soto Ayam            Rp15.000');
    writeln('14. Bakso                Rp15.000');
    writeln('15. Indomie Goreng       Rp10.000');
    writeln('16. Indomie Kuah         Rp10.000');
    writeln('17. Indomie + Telur      Rp14.000');
    writeln('18. Nasi Ayam Sambal     Rp18.000');
    writeln('19. Nasi Telur           Rp12.000');
    writeln('20. Nasi Campur          Rp20.000');
    writeln;
    writeln('21. Es Teh               Rp 5.000');
    writeln('22. Teh Hangat           Rp 4.000');
    writeln('23. Es Jeruk             Rp 7.000');
    writeln('24. Jeruk Hangat         Rp 6.000');
    writeln('25. Es Kopi              Rp 8.000');
    writeln('26. Kopi Hangat          Rp 7.000');
    writeln('27. Es Milo              Rp 8.000');
    writeln('28. Air Mineral          Rp 4.000');
    writeln('29. Es Cincau             Rp 8.000');
    writeln('30. Jus Jeruk            Rp10.000');
    writeln;
    writeln('==============================================================');
end;






procedure TentukanMenu(nomor : integer);
begin
    
    namaMenuDipilih := '';
    hargaMenuDipilih := 0;

    
    case nomor of

        
        1:
        begin
            namaMenuDipilih := 'Nasi Goreng';
            hargaMenuDipilih := 15000;
        end;

        2:
        begin
            namaMenuDipilih := 'Nasi Goreng Ayam';
            hargaMenuDipilih := 20000;
        end;

        3:
        begin
            namaMenuDipilih := 'Nasi Goreng Seafood';
            hargaMenuDipilih := 25000;
        end;

        4:
        begin
            namaMenuDipilih := 'Mie Goreng';
            hargaMenuDipilih := 13000;
        end;

        5:
        begin
            namaMenuDipilih := 'Mie Goreng Ayam';
            hargaMenuDipilih := 18000;
        end;

        6:
        begin
            namaMenuDipilih := 'Mie Goreng Seafood';
            hargaMenuDipilih := 23000;
        end;

        7:
        begin
            namaMenuDipilih := 'Ayam Geprek';
            hargaMenuDipilih := 18000;
        end;

        8:
        begin
            namaMenuDipilih := 'Ayam Penyet';
            hargaMenuDipilih := 20000;
        end;

        9:
        begin
            namaMenuDipilih := 'Ayam Bakar';
            hargaMenuDipilih := 22000;
        end;

        10:
        begin
            namaMenuDipilih := 'Ayam Goreng';
            hargaMenuDipilih := 20000;
        end;

        11:
        begin
            namaMenuDipilih := 'Lele Goreng';
            hargaMenuDipilih := 17000;
        end;

        12:
        begin
            namaMenuDipilih := 'Lele Bakar';
            hargaMenuDipilih := 19000;
        end;

        13:
        begin
            namaMenuDipilih := 'Soto Ayam';
            hargaMenuDipilih := 15000;
        end;

        14:
        begin
            namaMenuDipilih := 'Bakso';
            hargaMenuDipilih := 15000;
        end;

        15:
        begin
            namaMenuDipilih := 'Indomie Goreng';
            hargaMenuDipilih := 10000;
        end;

        16:
        begin
            namaMenuDipilih := 'Indomie Kuah';
            hargaMenuDipilih := 10000;
        end;

        17:
        begin
            namaMenuDipilih := 'Indomie + Telur';
            hargaMenuDipilih := 14000;
        end;

        18:
        begin
            namaMenuDipilih := 'Nasi Ayam Sambal';
            hargaMenuDipilih := 18000;
        end;

        19:
        begin
            namaMenuDipilih := 'Nasi Telur';
            hargaMenuDipilih := 12000;
        end;

        20:
        begin
            namaMenuDipilih := 'Nasi Campur';
            hargaMenuDipilih := 20000;
        end;

        
        21:
        begin
            namaMenuDipilih := 'Es Teh';
            hargaMenuDipilih := 5000;
        end;

        22:
        begin
            namaMenuDipilih := 'Teh Hangat';
            hargaMenuDipilih := 4000;
        end;

        23:
        begin
            namaMenuDipilih := 'Es Jeruk';
            hargaMenuDipilih := 7000;
        end;

        24:
        begin
            namaMenuDipilih := 'Jeruk Hangat';
            hargaMenuDipilih := 6000;
        end;

        25:
        begin
            namaMenuDipilih := 'Es Kopi';
            hargaMenuDipilih := 8000;
        end;

        26:
        begin
            namaMenuDipilih := 'Kopi Hangat';
            hargaMenuDipilih := 7000;
        end;

        27:
        begin
            namaMenuDipilih := 'Es Milo';
            hargaMenuDipilih := 8000;
        end;

        28:
        begin
            namaMenuDipilih := 'Air Mineral';
            hargaMenuDipilih := 4000;
        end;

        29:
        begin
            namaMenuDipilih := 'Es Cincau';
            hargaMenuDipilih := 8000;
        end;

        30:
        begin
            namaMenuDipilih := 'Jus Jeruk';
            hargaMenuDipilih := 10000;
        end;

    end;
end;






procedure TampilkanPesanan;
begin
    clrscr; 

    writeln('==============================================================');
    writeln('                    PESANAN SEMENTARA                        ');
    writeln('==============================================================');

    
    if jumlahPesanan = 0 then
    begin
        writeln;
        writeln('Belum ada pesanan.');
    end
    else
    begin
        writeln;
        writeln('No  Menu                         Qty       Subtotal');
        writeln('--------------------------------------------------------------');

        
        for i := 1 to jumlahPesanan do
        begin
            writeln(i:2, '  ',
                    pesanan[i].namaMenu:28,
                    pesanan[i].jumlah:4,
                    '      Rp', pesanan[i].subtotal:8);
        end;

        writeln('--------------------------------------------------------------');
        writeln('Jumlah Jenis Pesanan : ', jumlahPesanan);
        writeln('Total Item           : ', totalItem);
        writeln('Total Belanja        : Rp', totalBelanja);
    end;

    writeln;
    writeln('==============================================================');
    writeln('Tekan ENTER untuk kembali...');
    readln;
end;






procedure TambahPesanan;
begin
    
    if jumlahPesanan >= MAX_PESANAN then
    begin
        writeln('Pesanan sudah mencapai batas maksimal.');
        readln;
    end
    else
    begin
        TampilkanDaftarMenu;

        writeln;
        
        write('Pilih nomor menu [1-30] : ');
        readln(pilihanMenu);

        
        
        if (pilihanMenu < 1) or (pilihanMenu > 30) then
        begin
            writeln;
            writeln('Menu tidak tersedia!');
            writeln('Silakan pilih nomor 1 sampai 30.');
            readln;
        end
        else
        begin
            TentukanMenu(pilihanMenu);

            writeln;
            writeln('Menu   : ', namaMenuDipilih);
            writeln('Harga  : Rp', hargaMenuDipilih);
            writeln;

            write('Jumlah pesanan : ');
            readln(jumlah);

            
            
            if jumlah <= 0 then
            begin
                writeln;
                writeln('Jumlah pesanan tidak valid!');
                readln;
            end
            else
            begin
                
                subtotalPesanan := hargaMenuDipilih * jumlah;

                
                jumlahPesanan := jumlahPesanan + 1;

                
                pesanan[jumlahPesanan].namaMenu := namaMenuDipilih;
                pesanan[jumlahPesanan].harga := hargaMenuDipilih;
                pesanan[jumlahPesanan].jumlah := jumlah;
                pesanan[jumlahPesanan].subtotal := subtotalPesanan;

                
                totalBelanja := totalBelanja + subtotalPesanan;
                totalItem := totalItem + jumlah;

                writeln;
                writeln('==========================================');
                writeln('Pesanan berhasil ditambahkan!');
                writeln('Menu     : ', namaMenuDipilih);
                writeln('Jumlah   : ', jumlah);
                writeln('Subtotal : Rp', subtotalPesanan);
                writeln('==========================================');
                writeln;
                writeln('Total sementara : Rp', totalBelanja);
                writeln;
                writeln('Tekan ENTER untuk melanjutkan...');
                readln;
            end;
        end;
    end;
end;





procedure EditPesanan;
var
    nomorEdit : integer;
    jumlahKurang : integer;
    subtotalKurang : longint;
begin
    clrscr; 

    writeln('==============================================================');
    writeln('                     EDIT PESANAN                            ');
    writeln('==============================================================');

    if jumlahPesanan = 0 then
    begin
        writeln;
        writeln('Belum ada pesanan yang dapat diedit.');
        writeln;
        writeln('Tekan ENTER untuk kembali...');
        readln;
    end
    else
    begin
        writeln;
        writeln('No  Menu                         Qty       Subtotal');
        writeln('--------------------------------------------------------------');

        for i := 1 to jumlahPesanan do
        begin
            writeln(i:2, '  ',
                    pesanan[i].namaMenu:28,
                    pesanan[i].jumlah:4,
                    '      Rp', pesanan[i].subtotal:8);
        end;

        writeln('--------------------------------------------------------------');
        writeln;

            
            write('Masukkan nomor pesanan yang ingin diedit : ');
        readln(nomorEdit);

        
        
        if (nomorEdit < 1) or (nomorEdit > jumlahPesanan) then
        begin
            writeln;
            writeln('Nomor pesanan tidak valid!');
            writeln('Silakan pilih nomor pesanan yang tersedia.');
            readln;
        end
        else
        begin
            writeln;
            writeln('Menu            : ', pesanan[nomorEdit].namaMenu);
            writeln('Jumlah saat ini  : ', pesanan[nomorEdit].jumlah);
            writeln;

            write('Jumlah yang ingin dikurangi : ');
            readln(jumlahKurang);

            
            
            if jumlahKurang <= 0 then
            begin
                writeln;
                writeln('Jumlah tidak valid!');
                writeln('Jumlah yang dikurangi harus lebih dari 0.');
                readln;
            end
            else if jumlahKurang > pesanan[nomorEdit].jumlah then
            begin
                writeln;
                writeln('Jumlah tidak valid!');
                writeln('Maksimal yang dapat dikurangi adalah ',
                        pesanan[nomorEdit].jumlah, '.');
                readln;
            end
            else
            begin
                
                
                subtotalKurang :=
                    pesanan[nomorEdit].harga * jumlahKurang;

                
                
                pesanan[nomorEdit].jumlah :=
                    pesanan[nomorEdit].jumlah - jumlahKurang;

                pesanan[nomorEdit].subtotal :=
                    pesanan[nomorEdit].harga *
                    pesanan[nomorEdit].jumlah;

                
                
                totalItem := totalItem - jumlahKurang;
                totalBelanja := totalBelanja - subtotalKurang;

                writeln;
                writeln('==============================================');
                writeln('Pesanan berhasil diedit!');
                writeln('==============================================');
                writeln('Menu           : ', pesanan[nomorEdit].namaMenu);
                writeln('Dikurangi      : ', jumlahKurang);
                writeln('Jumlah sekarang: ', pesanan[nomorEdit].jumlah);
                writeln('Subtotal       : Rp', pesanan[nomorEdit].subtotal);
                writeln('Total sementara: Rp', totalBelanja);
                writeln('==============================================');
                writeln;

                
                if pesanan[nomorEdit].jumlah = 0 then
                begin
                    
                    for i := nomorEdit to jumlahPesanan - 1 do
                    begin
                        pesanan[i] := pesanan[i + 1];
                    end;

                    
                    jumlahPesanan := jumlahPesanan - 1;

                    writeln('Jumlah pesanan menjadi 0.');
                    writeln('Pesanan tersebut dihapus dari daftar.');
                    writeln;
                end;

                writeln('Tekan ENTER untuk kembali...');
                readln;
            end;
        end;
    end;
end;





procedure BatalkanPesanan;
var
    nomorBatal : integer;
begin
    clrscr; 

    writeln('==============================================================');
    writeln('                    BATALKAN PESANAN                         ');
    writeln('==============================================================');

    
    if jumlahPesanan = 0 then
    begin
        writeln;
        writeln('Belum ada pesanan yang dapat dibatalkan.');
        writeln('Tekan ENTER untuk kembali...');
        readln;
    end
    else
    begin
        
        writeln;
        writeln('No  Menu                         Qty       Subtotal');
        writeln('--------------------------------------------------------------');
        for i := 1 to jumlahPesanan do
        begin
            writeln(i:2, '  ',
                    pesanan[i].namaMenu:28,
                    pesanan[i].jumlah:4,
                    '      Rp', pesanan[i].subtotal:8);
        end;
        writeln('--------------------------------------------------------------');

        write('Masukkan nomor pesanan yang dibatalkan : ');
        readln(nomorBatal);

        
        if (nomorBatal < 1) or (nomorBatal > jumlahPesanan) then
        begin
            writeln;
            writeln('Nomor pesanan tidak valid!');
            writeln('Pilih nomor 1 sampai ', jumlahPesanan, '.');
        end
        else
        begin
            
            
            totalItem := totalItem - pesanan[nomorBatal].jumlah;
            totalBelanja := totalBelanja - pesanan[nomorBatal].subtotal;

            writeln;
            writeln('Pesanan ', pesanan[nomorBatal].namaMenu, ' dibatalkan.');

            
            
            for i := nomorBatal to jumlahPesanan - 1 do
            begin
                pesanan[i] := pesanan[i + 1];
            end;

            
            
            jumlahPesanan := jumlahPesanan - 1;

            writeln('Jumlah jenis pesanan : ', jumlahPesanan);
            writeln('Total item           : ', totalItem);
            writeln('Total belanja        : Rp', totalBelanja);
        end;

        writeln;
        writeln('Tekan ENTER untuk kembali...');
        readln;
    end;
end;






procedure TentangProgram;
var
    pilihanTentang : integer;
    selesaiTentang : boolean;
begin
    
    selesaiTentang := false;

    repeat
        clrscr;

        writeln('==============================================');
        writeln('              TENTANG PROGRAM                ');
        writeln('==============================================');
        writeln;
        writeln('WARUNG PAK DIN');
        writeln('Sistem Pemesanan Makanan');
        writeln;
        writeln('Program ini dibuat untuk membantu proses');
        writeln('pemesanan makanan secara sederhana.');
        writeln;
        writeln('Program menerapkan konsep Dasar Pemrograman:');
        writeln('- Input dan Output');
        writeln('- Sequence');
        writeln('- Selection');
        writeln('- Repetition');
        writeln('- Perhitungan');
        writeln;
        writeln('Bahasa Pemrograman: Pascal');
        writeln;
        writeln('==============================================');
        writeln('1. Kembali');
        writeln('2. Keluar');
        writeln('==============================================');
        write('Pilih : ');
        readln(pilihanTentang);

        if pilihanTentang = 1 then
        begin
            selesaiTentang := true;
        end
        else if pilihanTentang = 2 then
        begin
            halt;
        end
        else
        begin
            writeln;
            writeln('Pilihan tidak tersedia!');
            writeln('Tekan ENTER untuk mencoba lagi...');
            readln;
        end;

    until selesaiTentang = true;
end;






procedure Pembayaran;
var
    pembayaranSelesai : boolean;
begin
    pembayaranSelesai := false; 

    repeat
        clrscr;

        writeln('==============================================');
        writeln('                PEMBAYARAN                  ');
        writeln('==============================================');
        writeln;
        writeln('Total Belanja : Rp', totalBelanja);
        writeln;

        
        write('Masukkan uang pembayaran : Rp');
        readln(uangBayar);

        
        if uangBayar < totalBelanja then
        begin
            writeln;
            writeln('==============================================');
            writeln('          UANG TIDAK MENCUKUPI              ');
            writeln('==============================================');
            writeln;
            writeln('Total       : Rp', totalBelanja);
            writeln('Dibayarkan  : Rp', uangBayar);
            writeln('Kekurangan  : Rp', totalBelanja - uangBayar);
            writeln;
            writeln('Silakan masukkan uang kembali.');
            writeln;
            writeln('Tekan ENTER untuk mencoba lagi...');
            readln;
        end
        else
        begin
            
            kembalian := uangBayar - totalBelanja;
            pembayaranSelesai := true;
        end;

    until pembayaranSelesai = true;
end;






procedure CetakStruk;
begin
    clrscr; 

    writeln('==============================================================');
    writeln('                       WARUNG PAK DIN                        ');
    writeln('                    STRUK PEMBAYARAN                         ');
    writeln('==============================================================');
    writeln;
    writeln('Pelanggan : ', namaPelanggan);
    writeln;
    writeln('--------------------------------------------------------------');
    writeln('No  Menu                         Qty       Subtotal');
    writeln('--------------------------------------------------------------');

    
    for i := 1 to jumlahPesanan do
    begin
        writeln(i:2, '  ',
                pesanan[i].namaMenu:28,
                pesanan[i].jumlah:4,
                '      Rp', pesanan[i].subtotal:8);
    end;

    writeln('--------------------------------------------------------------');
    
    writeln('Total Jenis Pesanan : ', jumlahPesanan);
    writeln('Total Item          : ', totalItem);
    writeln('Total Belanja       : Rp', totalBelanja);
    writeln('Pembayaran          : Rp', uangBayar);
    writeln('Kembalian           : Rp', kembalian);
    writeln('==============================================================');
    writeln;
    writeln('             TERIMA KASIH SUDAH BERBELANJA');
    writeln('                    DI WARUNG PAK DIN');
    writeln;
    writeln('==============================================================');
    writeln;
    writeln('Tekan ENTER untuk kembali ke menu utama...');
    readln;
end;






procedure MulaiPesanan;
var
    selesaiPesanan : boolean;
    selesaiProses  : boolean;
begin
    clrscr;

    
    jumlahPesanan := 0;
    totalItem := 0;
    totalBelanja := 0;

    writeln('==============================================');
    writeln('             MEMULAI PESANAN                ');
    writeln('==============================================');
    writeln;

    write('Nama pelanggan : ');
    readln(namaPelanggan);

    selesaiProses := false; 

    repeat
        selesaiPesanan := false; 

        
        repeat

            clrscr;

        writeln('==============================================');
        writeln('          PESANAN WARUNG PAK DIN             ');
        writeln('==============================================');
        writeln;
        writeln('Pelanggan : ', namaPelanggan);
        writeln('Total sementara : Rp', totalBelanja);
        writeln;

        writeln('1. Tambah Pesanan');
        writeln('2. Lihat Pesanan');
        writeln('3. Edit Pesanan');
        writeln('4. Selesai Memesan');
        writeln('5. Batalkan Pesanan');
        writeln;
            writeln('==============================================');
            write('Pilih : ');
            readln(pilihanPesan);

            if pilihanPesan = 1 then
            begin
                TambahPesanan;
            end
            else if pilihanPesan = 2 then
            begin
                TampilkanPesanan;
            end
            else if pilihanPesan = 3 then
            begin
                EditPesanan;
            end
            else if pilihanPesan = 5 then
            begin
                BatalkanPesanan;
            end
            else if pilihanPesan = 4 then
            begin
                if jumlahPesanan = 0 then
                begin
                    writeln;
                    writeln('Anda belum memiliki pesanan.');
                    writeln('Silakan tambahkan pesanan terlebih dahulu.');
                    writeln;
                    writeln('Tekan ENTER untuk kembali...');
                    readln;
                end
                else
                begin
                    selesaiPesanan := true;
                end;
            end
            else
            begin
                writeln;
                writeln('Pilihan tidak tersedia!');
                writeln('Silakan pilih 1 sampai 5.');
                readln;
            end;

        until selesaiPesanan = true;

        
        clrscr;

    writeln('==============================================');
    writeln('              RINGKASAN PESANAN              ');
    writeln('==============================================');
    writeln;

    
    for i := 1 to jumlahPesanan do
    begin
        writeln(i:2, '. ',
                pesanan[i].namaMenu:25,
                ' x',
                pesanan[i].jumlah:2,
                '   Rp',
                pesanan[i].subtotal:8);
    end;

    writeln;
    writeln('----------------------------------------------');
    writeln('Total Item       : ', totalItem);
    writeln('Total Pembayaran : Rp', totalBelanja);
    writeln('----------------------------------------------');
    writeln;
    writeln('1. Lanjut Pembayaran');
    writeln('2. Kembali ke Pesanan');
    writeln;
        write('Pilih : ');
        readln(pilihanPesan);

        if pilihanPesan = 1 then
        begin
            Pembayaran;
            CetakStruk;
            selesaiProses := true;
        end
        else if pilihanPesan = 2 then
        begin
            
        end
        else
        begin
            writeln;
            writeln('Pilihan tidak tersedia!');
            writeln('Silakan pilih 1 atau 2.');
            writeln('Tekan ENTER untuk kembali ke pesanan...');
            readln;
        end;

    until selesaiProses = true;
end;






begin

    repeat

        TampilkanMenuUtama;

        case pilihanUtama of

            1:
            begin
                MulaiPesanan;
            end;

            2:
            begin
                TentangProgram;
            end;

            3:
            begin
                clrscr;

                writeln('==============================================');
                writeln('           TERIMA KASIH                       ');
                writeln('==============================================');
                writeln;
                writeln('Terima kasih telah menggunakan');
                writeln('Sistem Pemesanan Warung Pak Din.');
                writeln;
                writeln('Sampai jumpa!');
                writeln;
                writeln('==============================================');

                readln;
            end;

        else
            begin
                writeln;
                writeln('Pilihan tidak tersedia!');
                writeln('Silakan pilih menu 1 sampai 3.');
                writeln;
                writeln('Tekan ENTER untuk mencoba lagi...');
                readln;
            end;

        end;

    until pilihanUtama = 3;

end.
