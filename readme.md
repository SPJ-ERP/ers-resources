# ERP Resources

ERS (ERP Resources System) Repositori terpusat untuk shared assets yang digunakan oleh semua modul frontend ERP.

## Struktur Folder

Berikut adalah struktur folder yang tersedia di dalam repositori ini:

- css/
  Berisi file stylesheet global, variabel CSS (contohnya style.css), dan design tokens.
- fonts/
  Berisi file typography atau custom fonts yang dipakai secara global.
- icons/
  Berisi set icon yang digunakan dalam antarmuka UI aplikasi.
- image/
  Berisi gambar-gambar umum, logo perusahaan, dan asset brand lainnya.

## Cara Penggunaan di Modul Frontend

Setiap modul disarankan untuk menarik resources dari repositori ini agar aset tetap tersentralisasi dan konsisten.

Langkah-langkah umum:
1. Sediakan script bash (contoh: update-resources.sh) di masing-masing modul frontend.
2. Script tersebut akan melakukan clone repositori ini ke dalam folder spesifik (misalnya test-resources).
3. Jalankan script tersebut setiap kali ada pembaruan pada repositori resources ini untuk mendapatkan versi terbaru.

## Pengembangan dan Kontribusi

Apabila Anda menambahkan asset baru (misalnya gambar, variabel warna CSS baru, atau file font), pastikan untuk meletakkannya di dalam folder yang sesuai.
Hindari mengubah struktur utama kecuali jika diperlukan kordinasi dengan seluruh tim frontend.
