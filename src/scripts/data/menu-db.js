 const foodDB = {
    "Paket rosemary": {
      "img_url": "https://i0.wp.com/i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/248a8bab-c9d9-442c-a6a9-f4b0404a8211_Go-Biz_20221012_172708.jpeg",
      "price": "20.000",
    },
    "Toastie salmon": {
      "img_url": "https://img.taste.com.au/PcOCSwZO/taste/2016/11/pan-toasted-salmon-cheese-sandwiches-4230-1.jpeg",
      "price": "40.500",
    },
    "Bebek crepes": {
      "img_url": "https://cdn-cas.orami.co.id/parenting/images/dagingayambebekhero.width-800.jpegquality-80.jpg",
      "price": "15.000",
    },
    "Salad lengkeng": {
      "img_url": "https://www.transtv.co.id/js/ckfinder_old/userfiles/images/trans-tv-farah-quinn-salad-buah-kelengkeng.jpg",
      "price": "3.500",
    },
    "Kari kacang dan telur": {
      "img_url": "https://asset.kompas.com/crops/8koqb2Ml6B_QXHXUEyXO0esaI54=/3x0:700x465/750x500/data/photo/2021/07/05/60e2e35f66e85.jpg",
      "price": "15.500",
    },
    "Ikan teri dan roti": {
      "img_url": "https://st.depositphotos.com/1326558/4664/i/950/depositphotos_46646091-stock-photo-crostini-with-anchovies-olives-and.jpg",
      "price": "10.000",
    },
    "roket penne": {
      "img_url": "https://img.taste.com.au/MPDM5lNd/w643-h428-cfill-q90/taste/2016/11/chicken-chilli-and-rocket-penne-48191-1.jpeg",
      "price": "25.200",
    },
    "Sosis squash dan mint": {
      "img_url": "https://img.okezone.com/content/2015/08/26/298/1202933/resep-orange-mint-squash-segar-4kfIpCU7NZ.jpg",
      "price": "12.000",
    },
    "Salad yuzu": {
      "img_url": "https://ohmydish.com/wp-content/uploads/2019/11/Oriental-salad-with-yuzu-dressing.jpg",
      "price": "20.000",
    },
    "Kari terong": {
      "img_url": "https://www.palmia.co.id/media/recipe/medium/26dd71e6659901758dedf48a15f7368b.jpg",
      "price": "8.000",
    },
    "Napolitana": {
      "img_url": "https://img-global.cpcdn.com/recipes/415c17cf5e316984/680x482cq70/saus-napolitana-napolitana-sauce-foto-resep-utama.webp",
      "price": "18.000",
    },
    "Daging Sapi": {
      "img_url": "https://kbu-cdn.com/dk/wp-content/uploads/oseng-daging-sapi.jpg",
      "price": "20.000",
    },
    "Matzo farfel": {
      "img_url": "https://www.thespruceeats.com/thmb/nD4fC4G84jEZY0gCyjog6wPQBk0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/savory-simmered-matzo-farfel-2122192-hero-01-9654596c9ac14cf585954e480c8d58e6.jpg",
      "price": "18.500",
    },
    "Sup Kohlrabi": {
      "img_url": "https://st2.depositphotos.com/1006789/7441/i/450/depositphotos_74418539-stock-photo-kohlrabi-cream-soup.jpg",
      "price": "10.000",
    },
    "Tumis leek": {
      "img_url": "https://img.lovepik.com/photo/50124/9368_lovepik-leek-and-saut-ed-photo-image_wh860.jpg",
      "price": "12.000",
    },
};

const drinkDB = {
  "Es krim": {
    "img_url": "https://phinemo.com/wp-content/uploads/2017/10/21827164_1950253348523258_5391684502089105408_n.jpg",
    "price": "15.000",
  },
  "Sirup": {
    "img_url": "https://rakyatcirebon.disway.id/uploads/sites/61/2017/03/swiss-cafe-sediakan-sirup-tjampolay-scaled.jpg",
    "price": "10.000",
  },
  "Jus apel": {
    "img_url": "https://2.bp.blogspot.com/-j85aLJRlm2s/W02qabBq-9I/AAAAAAAAE4c/r3e64nHh2GcIQbuZIfMNH-8G1qboLrMDwCLcBGAs/s1600/jus%2Bapel.jpg",
    "price": "15.000",
  }, 
  "Jus jeruk": {
    "img_url": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/39a920b2-ffdc-407d-9799-8c587ee89271_d6ef52ef-b556-4f48-b093-abbdf0c918fe_Go-Biz_20191218_145208.jpeg?auto=format",
    "price": "15.000",
  },
  "Jus tomat": {
    "img_url": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/044dd589-ca8b-4afe-816d-845c7fa9591d_f68390e4-4e48-4b57-83d0-c822fa68f0c9_Go-Biz_20191218_143832.jpeg?auto=format",
    "price": "15.000",
  },
  "Minuman soda": {
    "img_url": "https://cdn.idntimes.com/content-images/community/2018/04/alcoholic-beverages-bar-beverage-605408-9cae7448be96f9496860c887e14258ae_600x400.jpg",
    "price": "10.000",
  },
  "Jus mangga": {
    "img_url": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/ed2f8f3c-c706-43c4-ad2f-15133783ed27_ea0901c5-fbff-4e2b-b17a-0a1429a41b77_Go-Biz_20191218_143726.jpeg?auto=format",
    "price": "15.000",
  },
  "Kopi espresso": {
    "img_url": "https://1.bp.blogspot.com/-VZGC7IYBwcc/XJm28l5YhHI/AAAAAAAABbk/EqnkGn7PVKAKw67hltEQFwUansGIfmskACPcBGAYYCw/s1600/Screenshot_1071-compressed.jpg",
    "price": "20.000",
  },
  "Coklat panas": {
    "img_url": "https://img.okezone.com/content/2016/06/09/298/1410163/fakta-di-balik-minuman-cokelat-panas-bHP2QHFjhC.jpg",
    "price": "9.000",
  },
  "Es teh": {
    "img_url": "https://images.solopos.com/2022/09/es-teh-res.jpg",
    "price": "7.000",
  },
  "Air": {
    "img_url": "https://raudhah.ac.id/wp-content/uploads/2020/03/DSC02011-Copy.jpg",
    "price": "3.000",
  },
  "Es kopi": {
    "img_url": "https://cdn-cas.orami.co.id/parenting/images/es-kopi.width-800.jpegquality-80.jpg",
    "price": "18.000",
  },
  "Jus alpukat": {
    "img_url": "https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/b8b3cdc8-2bf5-48d8-abd8-973081d49d16_3d73fd2c-3a8e-4cda-8c1b-43d8c32177b3_Go-Biz_20191218_143656.jpeg?auto=format",
    "price": "15.000",
  }, 
  "Teh manis": {
    "img_url": "https://img-global.cpcdn.com/recipes/703bca1286e35412/400x400cq70/photo.jpg",
    "price": "15.0000",
  }
}

export { foodDB, drinkDB };