const stockItem = {
  "id": "171933",
  "name": "Cubus MIX (Тест)",
  "slug": "cubus-mix-test",
  "subtitle": "Диван, трехместный, модульный",
  // outlet
  "outlet": {
    'isOutlet': true,
    // размер скидки
    'discount': '20',
    // причина оутлета
    'damage': 'Коцик на левой пятке',
  },
  //выбор города
  'showrooms': [
    {
      id: 1,
      slug: 'magnit',
      name: 'Магнитогорская',
      count: 10,
      city: {
        slug: 'moscow',
        name: 'Москва',
      }
    },
    {
      id: 3,
      slug: 'baumanskay',
      name: 'Бауманская',
      count: 20,
      city: {
        slug: 'moscow',
        name: 'Москва',
      }
    },
  ],
  //Категория товара родительская
  'category': {
    slug: 'sofas',
    name: 'Диваны'
  },
  "collection": {
    "name": "Cubus",
    "count": "7"
  },
  "default_attributes": [
    {
      "taxonomy_slug": "pa_fabric",
      "taxonomy_name": "Ткань",
      "term_slug": "69-2",
      "term_name": "Verona 69"
    }
  ],
  "default_variation_id": "171951",
  "static_attributes": [
    {
      "taxonomy_slug": "pa_seat-width",
      "taxonomy_name": "Ширина сиденья",
      "term_slug": "240-sm",
      "term_name": "240 см"
    },
    {
      "taxonomy_slug": "pa_seat-depth",
      "taxonomy_name": "Глубина сиденья",
      "term_slug": "73-sm",
      "term_name": "73 см"
    },
    {
      "taxonomy_slug": "pa_dimensions",
      "taxonomy_name": "Габариты (ш*г*в)",
      "term_slug": "274-98-72-sm",
      "term_name": "274×98×72 см"
    }
  ],
  "variable_attributes": [
    {
      "taxonomy_slug": "pa_fabric",
      "taxonomy_name": "Ткань",
      "taxonomy_options": [
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "69-2",
          "term_name": "Verona 69",
          "color": {
            "slug": "pink",
            "hex": "#ffd2f9"
          }
        }
      ]
    }
  ],
  "variations": {
    "171951": {
      "id": "171951",
      "price": "65000",
      "general_image": {
        "original": "http://130.193.62.187/wp-content/uploads/2020/12/4-3-2.jpg",
        "w300": "http://130.193.62.187/wp-content/uploads/2020/12/4-3-2--w_300.jpg"
      },
      "variation_attributes": [
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "69-2",
          "term_name": "Verona 69",
          "details": {
            "id": 143108,
            "name": "69",
            "collection": {
              "id": "4761",
              "slug": "verona",
              "name": "Verona",
              "gallery": 0
            },
            "category": {
              "name": 3,
              "rate": 20
            },
            "image": {
              "w100": "http://130.193.62.187/wp-content/uploads/2020/10/DSC_4384--w_100.jpg"
            },
            "color": {
              "id": "7515",
              "slug": "pink",
              "name": "Розовый"
            }
          }
        }
      ]
    }
  }
}