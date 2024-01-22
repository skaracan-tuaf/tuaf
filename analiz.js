// https://www.ideasoft.com.tr/konu/ incele
* Satıştan sonra stok azalt. Sıfır olanları gösterme veya Stokta yok etiketi yap.
* Öznitelikleri aç. Variant olarak ekle
* Kupon oluştur
* Müşteri ekle
* İstatistikleri kapat
* Profil sayfası ile veritabanını bağla
* Ziyaretçi trafiğini yap.
* Sosyal medyaları ekle.
* Müşteriler adres ekleyip güncellesin
* Sipariş oluşturuldu ekranını düzelt.
* Eğer müşteri oturum açmışsa ürüne yorum eklerken sadece yorum bölümü görünsün
* Eğer müşteri oturum açmışsa ödeme bölümünde müşterinin adresi otomatik gelsin
* Bütün sözleşmeler footer'da Bilgilendirme başlığı altında sıralansın.
* Eklenen sözleşmenin sağ alttaki butonları alt alta geliyor. Yan yana getir.
* SSS bölümünde eklenen sorular için güncelle ve sil butonu ya.
* İletişim sayfası statik yapılabilir. Harita için.
* Sipariş Takip Sayfası yap. 
* Arama olayını kodla.
* Bildirim butonunu kodla.
* Yorumlar ve Mesajlar ajax isteği ile gönderilsin. Gönder butonuna spinner ekle. From temizlensin. Gönderildi bildirimi verilsin.
* Sidebar'da okunmamış mesaj sayısı gibi Yorum ve Sipariş'ler için de yap.
* Değerlendirmelerde Ürün adı ve resmini ayrı sütun olarak yap.
* Ürün fiyarı ondalık girilebilsin. <input type="number" step="0.01"> $table->float("price", 8,2);
* Out Of Stock olayını yap.
* Markayı sil, SKU otomatik oluşsun.
* 
//
    variants
foreignId product_id
string title
enum selection
boolean status

    variant_values
foreignId variant_id
string value
integer stock
