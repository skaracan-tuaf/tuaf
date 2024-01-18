// 
* Satıştan sonra stok azalt. Sıfır olanları gösterme veya Stokta yok etiketi yap.
* Ürün Ekle sayfasındaki combobox'taki gibi diğerlerini düzelt. 
    Kategori Ekle/Düzenle, SSS, Ayarlar
* Kategoriler index'inde toplam satış ve toplam kazanç sütunu oluştur
* Öznitelikleri kapat
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
* Gizlilik Sözleşmesi, Mesafeli Satış Sözleşmesi, İade Sözleşmesi, Üyelik Sözleşmesi,
* Üye Aydınlatma Metni, Ticari Elektronik İleti İzni gibi sözleşle ekleme sayfası yap.
* Sık Sorulan Sorular sayfasında Üst Başlık kısmından seçin yapılmışsa Başlık kısmını kapat.
* İletişim sayfası statik yapılabilir.
* Favoriye ekleme olayını çerezler ile yap.
* Sipariş Takip Sayfası yap. 
* Arama olayını kodla.
* Resim eklerken crop yapılabilsin.
* Bildirim butonunu kodla. Arama butonunu kapat.
//
    
@php
    $monthlySales = DB::table('order_items')
        ->join('orders', 'order_items.order_id', '=', 'orders.id')
        ->select(DB::raw('SUM(order_items.quantity) as total_quantity'), DB::raw('MONTH(orders.created_at) as month'))
        ->groupBy(DB::raw('MONTH(orders.created_at)'))
        ->pluck('total_quantity', 'month')
        ->toArray();
@endphp

<script>
    var monthlySales = @json(array_values($monthlySales));
    var optionsProfileVisit = {
        annotations: {
            position: "back",
        },
        dataLabels: {
            enabled: false,
        },
        chart: {
            type: "bar",
            height: 300,
        },
        fill: {
            opacity: 1,
        },
        plotOptions: {},
        series: [
            {
                name: "satış",
                data: monthlySales,
            },
        ],
        colors: "#435ebe",
        xaxis: {
            categories: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık",
            ],
        },
    };
</script>

<script>
        var salesByCategory = @json($mostSoldProducts);
        var categoryLabels = salesByCategory.map(item => item.category_name);
        var salesData = salesByCategory.map(item => item.total_sales);

        var optionsVisitorsProfile = {
            series: salesData,
            labels: categoryLabels,
            colors: ["#435ebe", "#55c6e8", "#5dc34a", "#f9c851", "#ff5b51"],
            chart: {
                type: "donut",
                width: "100%",
                height: "350px",
            },
            legend: {
                position: "bottom",
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "30%",
                    },
                },
            },
        };
</script>
