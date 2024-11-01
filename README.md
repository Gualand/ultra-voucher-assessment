# Penjelasan Kode

## Question 1 - Anagram Logic

- Membuat fungsi bernama _**anagramFunc**_ yang menerima parameter berupa list array.
- Lalu membuat object kosong yang disimpan di variabel _**anagrams**_.
- Setelah itu melakukan looping array, dan membreakdown satu persatu kata di dalam array yang di looping tadi dengan cara memisah kata menjadi satu char, lalu mengurutkan, dan yang terakhir digabung kembali.
- Karena kita sudah membuat variabel _**anagrams**_ yang berupa object, maka kita bisa menjadikan hasil breakdown kata tadi untuk menjadikan suatu _key_.
- Lalu kita lakukan pengecekan, apakah sudah ada key didalam objek? jika belum akan mengeksekusi kode dalam _if_ untuk membuat array baru, selanjutnya memasukan kata yang sekarang sedang di looping ke dalam array yang tadi sudah dibuat. Namun jika sudah ada key yang sama, tidak perlu membuat array baru, langsung saja memasukan kata kedalam array yang sudah ada.

## Question 2 - SQL

- Membuat kolom _**Id**_, _**Name**_, dan _**Parent Name**_ yang berasal dari tabel utama atau _main table_
- Selanjutnya menggabungkan tabel _main_ dengan tabel _secondary_, di mana setiap baris dari tabel _main_ yang memiliki nilai _**parent_id**_ yang sama dengan nilai _**id**_ dari tabel _secondary_ akan dicocokkan. Jika tidak ada kecocokan, tetap tampilkan semua baris dari tabel _main_ dengan nilai dari tabel _secondary_ sebagai NULL.
