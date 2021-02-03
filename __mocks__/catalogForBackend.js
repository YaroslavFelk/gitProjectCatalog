export const stocks = {
  "id": "7226",
  "name": "Тест",
  "slug": "product-test",
  "attributes_filter_list": {
    "pa_seat-depth": "checkbox",
    "pa_color": "checkbox",
    "pa_overall-width": "range",
    "pa_seat-width": "checkbox",
    "pa_armrest-width": "checkbox",
    "pa_legs-height": "checkbox",
    "pa_seat-height": "range"
  },
  "subcategory": [],
  "parent": [],
  "items": [
    {
      "id": "171734",
      "name": "Scott (тест)",
      "slug": "scott-test",
      "subtitle": "Диван-кровать, 246/150 см, шагающая еврокнижка, угловой",
      "collection": {
        "name": "Scott",
        "count": "23"
      },
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
      "default_attributes": [
        {
          "taxonomy_slug": "pa_seat-width",
          "taxonomy_name": "Ширина сиденья",
          "term_slug": "140-sm",
          "term_name": "140 см"
        },
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "07-3",
          "term_name": "Premier 07"
        }
      ],
      "default_variation_id": "171735",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_armrest-width",
          "taxonomy_name": "Ширина подлокотника",
          "term_slug": "12-sm",
          "term_name": "12 см"
        },
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_additional-functions",
          "taxonomy_name": "Дополнительно",
          "term_slug": "belevoj-jashhik",
          "term_name": "Бельевой ящик"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "13-sm",
          "term_name": "13 см"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_sleeping-area",
          "taxonomy_name": "Спальное место",
          "term_slug": "140-x-234-sm",
          "term_name": "140 x 234 см"
        },
        {
          "taxonomy_slug": "pa_seat-depth",
          "taxonomy_name": "Глубина сиденья",
          "term_slug": "60-sm",
          "term_name": "60 см"
        },
        {
          "taxonomy_slug": "pa_seat-height",
          "taxonomy_name": "Высота сиденья",
          "term_slug": "44-sm",
          "term_name": "44 см"
        },
        {
          "taxonomy_slug": "pa_folding-mechanism",
          "taxonomy_name": "Раскладной механизм",
          "term_slug": "shagajushhaja-evroknizhka",
          "term_name": "Шагающая еврокнижка"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "009-3",
              "term_name": "Zizi 009",
              "color": {
                "slug": "brown",
                "hex": "#99604e"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "25-4",
              "term_name": "Premier 25",
              "color": {
                "slug": "grey",
                "hex": "#aeb8b8"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "21-4",
              "term_name": "Premier 21",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "18-5",
              "term_name": "Premier 18",
              "color": {
                "slug": "green",
                "hex": "#63a583"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "color": {
                "slug": "red",
                "hex": "#b33A3A"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "07-3",
              "term_name": "Premier 07",
              "color": {
                "slug": "beige",
                "hex": "#eed9bd"
              }
            }
          ]
        },
        {
          "taxonomy_slug": "pa_seat-width",
          "taxonomy_name": "Ширина сиденья",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "190-sm",
              "term_name": "190 см"
            },
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "180-sm",
              "term_name": "180 см"
            },
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "175-sm",
              "term_name": "175 см"
            },
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "160-sm",
              "term_name": "160 см"
            },
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "140-sm",
              "term_name": "140 см"
            },
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        }
      ],
      "variations": {
        "171735": {
          "id": "171735",
          "price": "98100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/2_30000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/2_30000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "150-sm",
              "term_name": "150 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "07-3",
              "term_name": "Premier 07",
              "details": {
                "id": 142825,
                "name": "07",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            }
          ]
        },
        "171736": {
          "id": "171736",
          "price": "98100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/2_60000-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/2_60000-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "140-sm",
              "term_name": "140 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "18-5",
              "term_name": "Premier 18",
              "details": {
                "id": 142855,
                "name": "18",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            }
          ]
        },
        "171737": {
          "id": "171737",
          "price": "98100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/2_40000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/2_40000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "160-sm",
              "term_name": "160 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "009-3",
              "term_name": "Zizi 009",
              "details": {
                "id": 143172,
                "name": "009",
                "collection": {
                  "id": "4748",
                  "slug": "zizi",
                  "name": "Zizi",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7511",
                  "slug": "brown",
                  "name": "Коричневый"
                }
              }
            }
          ]
        },
        "171738": {
          "id": "171738",
          "price": "98100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/2_20000-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/2_20000-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "175-sm",
              "term_name": "175 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "25-4",
              "term_name": "Premier 25",
              "details": {
                "id": 142869,
                "name": "25",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            }
          ]
        },
        "171739": {
          "id": "171739",
          "price": "98100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/2_50000-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/2_50000-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "180-sm",
              "term_name": "180 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "21-4",
              "term_name": "Premier 21",
              "details": {
                "id": 142858,
                "name": "21",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            }
          ]
        },
        "171740": {
          "id": "171740",
          "price": "98100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/2_10000-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/2_10000-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_seat-width",
              "taxonomy_name": "Ширина сиденья",
              "term_slug": "190-sm",
              "term_name": "190 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "details": {
                "id": 142835,
                "name": "14",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": "171741",
      "name": "Halston (Тест)",
      "slug": "halston-test",
      "subtitle": "Кресло",
      "collection": {
        "name": "Halston",
        "count": "9"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "term_slug": "82-sm",
          "term_name": "82 см"
        },
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "05-2",
          "term_name": "Velutto 05"
        }
      ],
      "default_variation_id": "171751",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_armrest-width",
          "taxonomy_name": "Ширина подлокотника",
          "term_slug": "11-sm",
          "term_name": "11 см"
        },
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "8-sm",
          "term_name": "8 см"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_seat-depth",
          "taxonomy_name": "Глубина сиденья",
          "term_slug": "62-sm",
          "term_name": "62 см"
        },
        {
          "taxonomy_slug": "pa_seat-height",
          "taxonomy_name": "Высота сиденья",
          "term_slug": "44-sm",
          "term_name": "44 см"
        },
        {
          "taxonomy_slug": "pa_folding-mechanism",
          "taxonomy_name": "Раскладной механизм",
          "term_slug": "bez-mehanizma",
          "term_name": "Без механизма"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "018-2",
              "term_name": "Zizi 018",
              "color": {
                "slug": "purple",
                "hex": "#745582"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "57-2",
              "term_name": "Velvet Lux 57",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "37-2",
              "term_name": "Velvet Lux 37",
              "color": {
                "slug": "pink",
                "hex": "#ffd2f9"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "color": {
                "slug": "green",
                "hex": "#63a583"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "32-2",
              "term_name": "Velutto 32",
              "color": {
                "slug": "grey",
                "hex": "#aeb8b8"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "28-2",
              "term_name": "Velutto 28",
              "color": {
                "slug": "yellow",
                "hex": "#fcdf87"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "color": {
                "slug": "beige",
                "hex": "#eed9bd"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "color": {
                "slug": "red",
                "hex": "#b33A3A"
              }
            }
          ]
        },
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            }
          ]
        }
      ],
      "variations": {
        "171742": {
          "id": "171742",
          "price": "27500",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "018-2",
              "term_name": "Zizi 018",
              "details": {
                "id": 143179,
                "name": "018",
                "collection": {
                  "id": "4748",
                  "slug": "zizi",
                  "name": "Zizi",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            }
          ]
        },
        "171743": {
          "id": "171743",
          "price": "31700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            }
          ]
        },
        "171744": {
          "id": "171744",
          "price": "31700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "28-2",
              "term_name": "Velutto 28",
              "details": {
                "id": 142991,
                "name": "28",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            }
          ]
        },
        "171745": {
          "id": "171745",
          "price": "31700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "details": {
                "id": 143003,
                "name": "33",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            }
          ]
        },
        "171746": {
          "id": "171746",
          "price": "31700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "details": {
                "id": 142835,
                "name": "14",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            }
          ]
        },
        "171747": {
          "id": "171747",
          "price": "31700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0006--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "37-2",
              "term_name": "Velvet Lux 37",
              "details": {
                "id": 143034,
                "name": "37",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            }
          ]
        },
        "171748": {
          "id": "171748",
          "price": "31700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "32-2",
              "term_name": "Velutto 32",
              "details": {
                "id": 142999,
                "name": "32",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            }
          ]
        },
        "171749": {
          "id": "171749",
          "price": "31700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0007.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0007--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "57-2",
              "term_name": "Velvet Lux 57",
              "details": {
                "id": 143042,
                "name": "57",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            }
          ]
        },
        "171750": {
          "id": "171750",
          "price": "31700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_96_2_0001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "018-2",
              "term_name": "Zizi 018",
              "details": {
                "id": 143179,
                "name": "018",
                "collection": {
                  "id": "4748",
                  "slug": "zizi",
                  "name": "Zizi",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "118-sm",
              "term_name": "118 см"
            }
          ]
        },
        "171751": {
          "id": "171751",
          "price": "27500",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            }
          ]
        },
        "171752": {
          "id": "171752",
          "price": "27500",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "28-2",
              "term_name": "Velutto 28",
              "details": {
                "id": 142991,
                "name": "28",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            }
          ]
        },
        "171753": {
          "id": "171753",
          "price": "27500",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "details": {
                "id": 143003,
                "name": "33",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            }
          ]
        },
        "171754": {
          "id": "171754",
          "price": "27500",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "details": {
                "id": 142835,
                "name": "14",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            }
          ]
        },
        "171755": {
          "id": "171755",
          "price": "27500",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0006--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "37-2",
              "term_name": "Velvet Lux 37",
              "details": {
                "id": 143034,
                "name": "37",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            }
          ]
        },
        "171756": {
          "id": "171756",
          "price": "27500",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "32-2",
              "term_name": "Velutto 32",
              "details": {
                "id": 142999,
                "name": "32",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            }
          ]
        },
        "171757": {
          "id": "171757",
          "price": "27500",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0007.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/HAL_MT_60_2_0007--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "82-sm",
              "term_name": "82 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "57-2",
              "term_name": "Velvet Lux 57",
              "details": {
                "id": 143042,
                "name": "57",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": "171758",
      "name": "Raf (Тест)",
      "slug": "raf-test",
      "subtitle": "Диван, двухместный, без механизма",
      "collection": {
        "name": "Raf",
        "count": "18"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "13-sm",
          "term_name": "13 см"
        },
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "term_slug": "170-sm",
          "term_name": "170 см"
        },
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "14-3",
          "term_name": "Velutto 14"
        }
      ],
      "default_variation_id": "171773",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_armrest-width",
          "taxonomy_name": "Ширина подлокотника",
          "term_slug": "17-sm",
          "term_name": "17 см"
        },
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_seat-depth",
          "taxonomy_name": "Глубина сиденья",
          "term_slug": "56-sm",
          "term_name": "56 см"
        },
        {
          "taxonomy_slug": "pa_seat-height",
          "taxonomy_name": "Высота сиденья",
          "term_slug": "44-sm",
          "term_name": "44 см"
        },
        {
          "taxonomy_slug": "pa_folding-mechanism",
          "taxonomy_name": "Раскладной механизм",
          "term_slug": "bez-mehanizma",
          "term_name": "Без механизма"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "dusty-rose",
              "term_name": "Virginia Dusty Rose",
              "color": {
                "slug": "orange",
                "hex": "#c7784c"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "color": {
                "slug": "yellow",
                "hex": "#fcdf87"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "48-2",
              "term_name": "Velutto 48",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-3",
              "term_name": "Velutto 14",
              "color": {
                "slug": "green",
                "hex": "#63a583"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "12-4",
              "term_name": "Velutto 12",
              "color": {
                "slug": "grey",
                "hex": "#aeb8b8"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "color": {
                "slug": "pink",
                "hex": "#ffd2f9"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "color": {
                "slug": "beige",
                "hex": "#eed9bd"
              }
            }
          ]
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            }
          ]
        },
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        }
      ],
      "variations": {
        "171759": {
          "id": "171759",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010006--w_300.jpg"
          },
          "stock": 1,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            }
          ]
        },
        "171760": {
          "id": "171760",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171761": {
          "id": "171761",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-3",
              "term_name": "Velutto 14",
              "details": {
                "id": 142970,
                "name": "14",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171762": {
          "id": "171762",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "12-4",
              "term_name": "Velutto 12",
              "details": {
                "id": 142966,
                "name": "12",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171763": {
          "id": "171763",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "48-2",
              "term_name": "Velutto 48",
              "details": {
                "id": 143015,
                "name": "48",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171764": {
          "id": "171764",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0006--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171765": {
          "id": "171765",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-3",
              "term_name": "Velutto 14",
              "details": {
                "id": 142970,
                "name": "14",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171766": {
          "id": "171766",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "12-4",
              "term_name": "Velutto 12",
              "details": {
                "id": 142966,
                "name": "12",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171767": {
          "id": "171767",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "48-2",
              "term_name": "Velutto 48",
              "details": {
                "id": 143015,
                "name": "48",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171768": {
          "id": "171768",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010006--w_300.jpg"
          },
          "stock": 1,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171769": {
          "id": "171769",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-3",
              "term_name": "Velutto 14",
              "details": {
                "id": 142970,
                "name": "14",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            }
          ]
        },
        "171770": {
          "id": "171770",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "12-4",
              "term_name": "Velutto 12",
              "details": {
                "id": 142966,
                "name": "12",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171771": {
          "id": "171771",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "48-2",
              "term_name": "Velutto 48",
              "details": {
                "id": 143015,
                "name": "48",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171772": {
          "id": "171772",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0006--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171773": {
          "id": "171773",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-3",
              "term_name": "Velutto 14",
              "details": {
                "id": 142970,
                "name": "14",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171774": {
          "id": "171774",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "12-4",
              "term_name": "Velutto 12",
              "details": {
                "id": 142966,
                "name": "12",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            }
          ]
        },
        "171775": {
          "id": "171775",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "48-2",
              "term_name": "Velutto 48",
              "details": {
                "id": 143015,
                "name": "48",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171776": {
          "id": "171776",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010006--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171777": {
          "id": "171777",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-3",
              "term_name": "Velutto 14",
              "details": {
                "id": 142970,
                "name": "14",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171778": {
          "id": "171778",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171779": {
          "id": "171779",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "48-2",
              "term_name": "Velutto 48",
              "details": {
                "id": 143015,
                "name": "48",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171780": {
          "id": "171780",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0006--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171781": {
          "id": "171781",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-3",
              "term_name": "Velutto 14",
              "details": {
                "id": 142970,
                "name": "14",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171782": {
          "id": "171782",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "12-4",
              "term_name": "Velutto 12",
              "details": {
                "id": 142966,
                "name": "12",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171783": {
          "id": "171783",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "48-2",
              "term_name": "Velutto 48",
              "details": {
                "id": 143015,
                "name": "48",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171784": {
          "id": "171784",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "details": {
                "id": 142962,
                "name": "11",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171785": {
          "id": "171785",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "dusty-rose",
              "term_name": "Virginia Dusty Rose",
              "details": {
                "id": 143134,
                "name": "Dusty Rose",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7516",
                  "slug": "orange",
                  "name": "Оранжевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171786": {
          "id": "171786",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_116_1_0001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171787": {
          "id": "171787",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "dusty-rose",
              "term_name": "Virginia Dusty Rose",
              "details": {
                "id": 143134,
                "name": "Dusty Rose",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7516",
                  "slug": "orange",
                  "name": "Оранжевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171788": {
          "id": "171788",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "details": {
                "id": 142962,
                "name": "11",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171789": {
          "id": "171789",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_136_1_0001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171790": {
          "id": "171790",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "details": {
                "id": 142962,
                "name": "11",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171791": {
          "id": "171791",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "dusty-rose",
              "term_name": "Virginia Dusty Rose",
              "details": {
                "id": 143134,
                "name": "Dusty Rose",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7516",
                  "slug": "orange",
                  "name": "Оранжевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171792": {
          "id": "171792",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/RAF_ST_156_1_0001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "13-sm",
              "term_name": "13 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171793": {
          "id": "171793",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "details": {
                "id": 142962,
                "name": "11",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171794": {
          "id": "171794",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "dusty-rose",
              "term_name": "Virginia Dusty Rose",
              "details": {
                "id": 143134,
                "name": "Dusty Rose",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7516",
                  "slug": "orange",
                  "name": "Оранжевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171795": {
          "id": "171795",
          "price": "42700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_116_Viev010001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "150-sm",
              "term_name": "150 см"
            }
          ]
        },
        "171796": {
          "id": "171796",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171797": {
          "id": "171797",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "dusty-rose",
              "term_name": "Virginia Dusty Rose",
              "details": {
                "id": 143134,
                "name": "Dusty Rose",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7516",
                  "slug": "orange",
                  "name": "Оранжевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171798": {
          "id": "171798",
          "price": "48200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_136_Viev010002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "details": {
                "id": 142962,
                "name": "11",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "170-sm",
              "term_name": "170 см"
            }
          ]
        },
        "171799": {
          "id": "171799",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "details": {
                "id": 142962,
                "name": "11",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        },
        "171800": {
          "id": "171800",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/MT_156_Viev010000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "dusty-rose",
              "term_name": "Virginia Dusty Rose",
              "details": {
                "id": 143134,
                "name": "Dusty Rose",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7516",
                  "slug": "orange",
                  "name": "Оранжевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_legs-height",
              "taxonomy_name": "Высота опор",
              "term_slug": "8-sm",
              "term_name": "8 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "190-sm",
              "term_name": "190 см"
            }
          ]
        }
      }
    },
    {
      "id": "171801",
      "name": "Arden (Тест)",
      "slug": "arden-test",
      "subtitle": "Скамья-банкетка",
      "collection": {
        "name": "Arden",
        "count": "10"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "23-2",
          "term_name": "Breeze 23"
        }
      ],
      "default_variation_id": "171806",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "8-sm",
          "term_name": "8 см"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "32-2",
              "term_name": "Velutto 32",
              "color": {
                "slug": "grey",
                "hex": "#aeb8b8"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-5",
              "term_name": "Velutto 15",
              "color": {
                "slug": "purple",
                "hex": "#745582"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "color": {
                "slug": "beige",
                "hex": "#eed9bd"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-2",
              "term_name": "Miss 83",
              "color": {
                "slug": "yellow",
                "hex": "#fcdf87"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "mint",
              "term_name": "Marseille Mint",
              "color": {
                "slug": "green",
                "hex": "#63a583"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "23-2",
              "term_name": "Breeze 23",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            }
          ]
        }
      ],
      "variations": {
        "171802": {
          "id": "171802",
          "price": "20900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "05-2",
              "term_name": "Velutto 05",
              "details": {
                "id": 142957,
                "name": "05",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            }
          ]
        },
        "171803": {
          "id": "171803",
          "price": "20900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-2",
              "term_name": "Miss 83",
              "details": {
                "id": 142760,
                "name": "83",
                "collection": {
                  "id": "4765",
                  "slug": "miss",
                  "name": "Miss",
                  "gallery": 0
                },
                "category": {
                  "name": 4,
                  "rate": 30
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            }
          ]
        },
        "171804": {
          "id": "171804",
          "price": "20900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "mint",
              "term_name": "Marseille Mint",
              "details": {
                "id": 142715,
                "name": "Mint",
                "collection": {
                  "id": "4757",
                  "slug": "marseille",
                  "name": "Marseille",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            }
          ]
        },
        "171805": {
          "id": "171805",
          "price": "20900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "32-2",
              "term_name": "Velutto 32",
              "details": {
                "id": 142999,
                "name": "32",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            }
          ]
        },
        "171806": {
          "id": "171806",
          "price": "20900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "23-2",
              "term_name": "Breeze 23",
              "details": {
                "id": 142423,
                "name": "23",
                "collection": {
                  "id": "4744",
                  "slug": "breeze",
                  "name": "Breeze",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            }
          ]
        },
        "171807": {
          "id": "171807",
          "price": "20900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/ARD_1_0005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-5",
              "term_name": "Velutto 15",
              "details": {
                "id": 142974,
                "name": "15",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            }
          ]
        },
        "180121": {
          "id": "180121",
          "price": "20900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DNT_KMD_2_cam_2_0006.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DNT_KMD_2_cam_2_0006--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "23-2",
              "term_name": "Breeze 23",
              "details": {
                "id": 142423,
                "name": "23",
                "collection": {
                  "id": "4744",
                  "slug": "breeze",
                  "name": "Breeze",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            }
          ]
        },
        "180122": {
          "id": "180122",
          "price": "20900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DNT_KMD_2_cam_2_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DNT_KMD_2_cam_2_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "23-2",
              "term_name": "Breeze 23",
              "details": {
                "id": 142423,
                "name": "23",
                "collection": {
                  "id": "4744",
                  "slug": "breeze",
                  "name": "Breeze",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": "171808",
      "name": "Jonah (Тест)",
      "slug": "jonah-test",
      "subtitle": "Диван, трехместный, без механизма",
      "collection": {
        "name": "Jonah",
        "count": "4"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "term_slug": "200-sm",
          "term_name": "200 см"
        },
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "11-4",
          "term_name": "Velutto 11"
        }
      ],
      "default_variation_id": "171812",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_armrest-width",
          "taxonomy_name": "Ширина подлокотника",
          "term_slug": "14-sm",
          "term_name": "14 см"
        },
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "19-sm",
          "term_name": "19 см"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_seat-depth",
          "taxonomy_name": "Глубина сиденья",
          "term_slug": "60-sm",
          "term_name": "60 см"
        },
        {
          "taxonomy_slug": "pa_seat-height",
          "taxonomy_name": "Высота сиденья",
          "term_slug": "45-sm",
          "term_name": "45 см"
        },
        {
          "taxonomy_slug": "pa_folding-mechanism",
          "taxonomy_name": "Раскладной механизм",
          "term_slug": "bez-mehanizma",
          "term_name": "Без механизма"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "ocean",
              "term_name": "Virginia Ocean",
              "color": {
                "slug": "green",
                "hex": "#63a583"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "29-3",
              "term_name": "Velvet Lux 29",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "color": {
                "slug": "pink",
                "hex": "#ffd2f9"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "07-3",
              "term_name": "Premier 07",
              "color": {
                "slug": "beige",
                "hex": "#eed9bd"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-2",
              "term_name": "Miss 83",
              "color": {
                "slug": "yellow",
                "hex": "#fcdf87"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "025-2",
              "term_name": "Lama 025",
              "color": {
                "slug": "grey",
                "hex": "#aeb8b8"
              }
            }
          ]
        },
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "200-sm",
              "term_name": "200 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "215-sm",
              "term_name": "215 см"
            }
          ]
        }
      ],
      "variations": {
        "171809": {
          "id": "171809",
          "price": "77000",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "200-sm",
              "term_name": "200 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "07-3",
              "term_name": "Premier 07",
              "details": {
                "id": 142825,
                "name": "07",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            }
          ]
        },
        "171810": {
          "id": "171810",
          "price": "82800",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "29-3",
              "term_name": "Velvet Lux 29",
              "details": {
                "id": 143026,
                "name": "29",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "215-sm",
              "term_name": "215 см"
            }
          ]
        },
        "171811": {
          "id": "171811",
          "price": "77000",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-2",
              "term_name": "Miss 83",
              "details": {
                "id": 142760,
                "name": "83",
                "collection": {
                  "id": "4765",
                  "slug": "miss",
                  "name": "Miss",
                  "gallery": 0
                },
                "category": {
                  "name": 4,
                  "rate": 30
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "200-sm",
              "term_name": "200 см"
            }
          ]
        },
        "171812": {
          "id": "171812",
          "price": "77000",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0001--w_300.jpg"
          },
          "stock": 1,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "details": {
                "id": 142962,
                "name": "11",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "200-sm",
              "term_name": "200 см"
            }
          ]
        },
        "171813": {
          "id": "171813",
          "price": "77000",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "025-2",
              "term_name": "Lama 025",
              "details": {
                "id": 142574,
                "name": "025",
                "collection": {
                  "id": "3777",
                  "slug": "lama",
                  "name": "Lama",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "200-sm",
              "term_name": "200 см"
            }
          ]
        },
        "171814": {
          "id": "171814",
          "price": "77000",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "ocean",
              "term_name": "Virginia Ocean",
              "details": {
                "id": 143150,
                "name": "Ocean",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "200-sm",
              "term_name": "200 см"
            }
          ]
        },
        "171815": {
          "id": "171815",
          "price": "82800",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "07-3",
              "term_name": "Premier 07",
              "details": {
                "id": 142825,
                "name": "07",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "215-sm",
              "term_name": "215 см"
            }
          ]
        },
        "171816": {
          "id": "171816",
          "price": "82800",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0003.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0003--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-2",
              "term_name": "Miss 83",
              "details": {
                "id": 142760,
                "name": "83",
                "collection": {
                  "id": "4765",
                  "slug": "miss",
                  "name": "Miss",
                  "gallery": 0
                },
                "category": {
                  "name": 4,
                  "rate": 30
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "215-sm",
              "term_name": "215 см"
            }
          ]
        },
        "171817": {
          "id": "171817",
          "price": "82800",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0001.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0001--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "11-4",
              "term_name": "Velutto 11",
              "details": {
                "id": 142962,
                "name": "11",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "215-sm",
              "term_name": "215 см"
            }
          ]
        },
        "171818": {
          "id": "171818",
          "price": "82800",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0000.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0000--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "025-2",
              "term_name": "Lama 025",
              "details": {
                "id": 142574,
                "name": "025",
                "collection": {
                  "id": "3777",
                  "slug": "lama",
                  "name": "Lama",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "215-sm",
              "term_name": "215 см"
            }
          ]
        },
        "171819": {
          "id": "171819",
          "price": "82800",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0005.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_190_1_0005--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "ocean",
              "term_name": "Virginia Ocean",
              "details": {
                "id": 143150,
                "name": "Ocean",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "215-sm",
              "term_name": "215 см"
            }
          ]
        },
        "171820": {
          "id": "171820",
          "price": "77000",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0004.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/JON_175_1_0004--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "29-3",
              "term_name": "Velvet Lux 29",
              "details": {
                "id": 143026,
                "name": "29",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "200-sm",
              "term_name": "200 см"
            }
          ]
        }
      }
    },
    {
      "id": "171821",
      "name": "Dublin (Кроссейл)",
      "slug": "dublin-kkrossejl",
      "subtitle": "Кресло",
      "collection": {
        "name": "Dublin",
        "count": "5"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "term_slug": "76-sm",
          "term_name": "76 см"
        },
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "025-2",
          "term_name": "Lama 025"
        }
      ],
      "default_variation_id": "171827",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_armrest-width",
          "taxonomy_name": "Ширина подлокотника",
          "term_slug": "8-sm",
          "term_name": "8 см"
        },
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "16-5-sm",
          "term_name": "16,5 см"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_seat-depth",
          "taxonomy_name": "Глубина сиденья",
          "term_slug": "50-sm",
          "term_name": "50 см"
        },
        {
          "taxonomy_slug": "pa_seat-height",
          "taxonomy_name": "Высота сиденья",
          "term_slug": "49-sm",
          "term_name": "49 см"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "23-4",
              "term_name": "Verona 23",
              "color": {
                "slug": "red",
                "hex": "#b33A3A"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "37-2",
              "term_name": "Velvet Lux 37",
              "color": {
                "slug": "pink",
                "hex": "#ffd2f9"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "28-2",
              "term_name": "Velutto 28",
              "color": {
                "slug": "yellow",
                "hex": "#fcdf87"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "21-4",
              "term_name": "Premier 21",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "21-3",
              "term_name": "Miss 21",
              "color": {
                "slug": "purple",
                "hex": "#745582"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "cream-2",
              "term_name": "Liberty Cream",
              "color": {
                "slug": "beige",
                "hex": "#eed9bd"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "025-2",
              "term_name": "Lama 025",
              "color": {
                "slug": "grey",
                "hex": "#aeb8b8"
              }
            }
          ]
        },
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "112-sm",
              "term_name": "112 см"
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "76-sm",
              "term_name": "76 см"
            }
          ]
        }
      ],
      "variations": {
        "171822": {
          "id": "171822",
          "price": "22100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_020000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_020000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "76-sm",
              "term_name": "76 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "cream-2",
              "term_name": "Liberty Cream",
              "details": {
                "id": 142638,
                "name": "Cream",
                "collection": {
                  "id": "4750",
                  "slug": "liberty",
                  "name": "Liberty",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            }
          ]
        },
        "171823": {
          "id": "171823",
          "price": "30700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_050000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_050000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "21-3",
              "term_name": "Miss 21",
              "details": {
                "id": 142748,
                "name": "21",
                "collection": {
                  "id": "4765",
                  "slug": "miss",
                  "name": "Miss",
                  "gallery": 0
                },
                "category": {
                  "name": 4,
                  "rate": 30
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "112-sm",
              "term_name": "112 см"
            }
          ]
        },
        "171824": {
          "id": "171824",
          "price": "22100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_030000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_030000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "28-2",
              "term_name": "Velutto 28",
              "details": {
                "id": 142991,
                "name": "28",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "76-sm",
              "term_name": "76 см"
            }
          ]
        },
        "171825": {
          "id": "171825",
          "price": "22100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_040000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_040000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "23-4",
              "term_name": "Verona 23",
              "details": {
                "id": 143077,
                "name": "23",
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
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "76-sm",
              "term_name": "76 см"
            }
          ]
        },
        "171826": {
          "id": "171826",
          "price": "22100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_080000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_080000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "37-2",
              "term_name": "Velvet Lux 37",
              "details": {
                "id": 143034,
                "name": "37",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "76-sm",
              "term_name": "76 см"
            }
          ]
        },
        "171827": {
          "id": "171827",
          "price": "22100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_010000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_010000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "025-2",
              "term_name": "Lama 025",
              "details": {
                "id": 142574,
                "name": "025",
                "collection": {
                  "id": "3777",
                  "slug": "lama",
                  "name": "Lama",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "76-sm",
              "term_name": "76 см"
            }
          ]
        },
        "171828": {
          "id": "171828",
          "price": "22100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_060000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_060000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "21-4",
              "term_name": "Premier 21",
              "details": {
                "id": 142858,
                "name": "21",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "76-sm",
              "term_name": "76 см"
            }
          ]
        },
        "171829": {
          "id": "171829",
          "price": "22100",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_050000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_60_2_050000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "21-3",
              "term_name": "Miss 21",
              "details": {
                "id": 142748,
                "name": "21",
                "collection": {
                  "id": "4765",
                  "slug": "miss",
                  "name": "Miss",
                  "gallery": 0
                },
                "category": {
                  "name": 4,
                  "rate": 30
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "76-sm",
              "term_name": "76 см"
            }
          ]
        },
        "171830": {
          "id": "171830",
          "price": "30700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_020000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_020000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "cream-2",
              "term_name": "Liberty Cream",
              "details": {
                "id": 142638,
                "name": "Cream",
                "collection": {
                  "id": "4750",
                  "slug": "liberty",
                  "name": "Liberty",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "112-sm",
              "term_name": "112 см"
            }
          ]
        },
        "171831": {
          "id": "171831",
          "price": "30700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_030000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_030000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "28-2",
              "term_name": "Velutto 28",
              "details": {
                "id": 142991,
                "name": "28",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "112-sm",
              "term_name": "112 см"
            }
          ]
        },
        "171832": {
          "id": "171832",
          "price": "30700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_040000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_040000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "23-4",
              "term_name": "Verona 23",
              "details": {
                "id": 143077,
                "name": "23",
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
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "112-sm",
              "term_name": "112 см"
            }
          ]
        },
        "171833": {
          "id": "171833",
          "price": "30700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_080000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_080000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "37-2",
              "term_name": "Velvet Lux 37",
              "details": {
                "id": 143034,
                "name": "37",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "112-sm",
              "term_name": "112 см"
            }
          ]
        },
        "171834": {
          "id": "171834",
          "price": "30700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_010000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_010000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "025-2",
              "term_name": "Lama 025",
              "details": {
                "id": 142574,
                "name": "025",
                "collection": {
                  "id": "3777",
                  "slug": "lama",
                  "name": "Lama",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "112-sm",
              "term_name": "112 см"
            }
          ]
        },
        "171835": {
          "id": "171835",
          "price": "30700",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_060000-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/DUB_96_2_060000-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "21-4",
              "term_name": "Premier 21",
              "details": {
                "id": 142858,
                "name": "21",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_overall-width",
              "taxonomy_name": "Габаритная ширина",
              "term_slug": "112-sm",
              "term_name": "112 см"
            }
          ]
        }
      }
    },
    {
      "id": "171851",
      "name": "Miami Lux (Кроссейл)",
      "slug": "miami-lux-krossejl",
      "subtitle": "Диван, двухместный, без механизма",
      "collection": {
        "name": "Miami Lux",
        "count": "4"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "018-2",
          "term_name": "Zizi 018"
        }
      ],
      "default_variation_id": "171852",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_armrest-width",
          "taxonomy_name": "Ширина подлокотника",
          "term_slug": "12-sm",
          "term_name": "12 см"
        },
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "17-sm",
          "term_name": "17 см"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_seat-depth",
          "taxonomy_name": "Глубина сиденья",
          "term_slug": "50-sm",
          "term_name": "50 см"
        },
        {
          "taxonomy_slug": "pa_seat-height",
          "taxonomy_name": "Высота сиденья",
          "term_slug": "42-sm",
          "term_name": "42 см"
        },
        {
          "taxonomy_slug": "pa_seat-width",
          "taxonomy_name": "Ширина сиденья",
          "term_slug": "140-sm",
          "term_name": "140 см"
        },
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "term_slug": "203-sm",
          "term_name": "203 см"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "018-2",
              "term_name": "Zizi 018",
              "color": {
                "slug": "purple",
                "hex": "#745582"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "07-3",
              "term_name": "Premier 07",
              "color": {
                "slug": "beige",
                "hex": "#eed9bd"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "16-4",
              "term_name": "Miss 16",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            }
          ]
        }
      ],
      "variations": {
        "171852": {
          "id": "171852",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/div-dvyx-mia-lux-fiol-a-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/div-dvyx-mia-lux-fiol-a-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "018-2",
              "term_name": "Zizi 018",
              "details": {
                "id": 143179,
                "name": "018",
                "collection": {
                  "id": "4748",
                  "slug": "zizi",
                  "name": "Zizi",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            }
          ]
        },
        "171853": {
          "id": "171853",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/div-dvyx-mia-lux-ser-a.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/div-dvyx-mia-lux-ser-a--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "07-3",
              "term_name": "Premier 07",
              "details": {
                "id": 142825,
                "name": "07",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7507",
                  "slug": "beige",
                  "name": "Бежевый"
                }
              }
            }
          ]
        },
        "171854": {
          "id": "171854",
          "price": "53900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/div-dvyx-mia-lux-gol-a-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/div-dvyx-mia-lux-gol-a-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "16-4",
              "term_name": "Miss 16",
              "details": {
                "id": 142744,
                "name": "16",
                "collection": {
                  "id": "4765",
                  "slug": "miss",
                  "name": "Miss",
                  "gallery": 0
                },
                "category": {
                  "name": 4,
                  "rate": 30
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": "171855",
      "name": "Morti (Апсейл)",
      "slug": "morti-apsejl",
      "subtitle": "Пуф",
      "collection": {
        "name": "Morti",
        "count": "14"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_pouf-dimensions",
          "taxonomy_name": "Габариты пуфа",
          "term_slug": "134x44-sm",
          "term_name": "134x44 см"
        },
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "33-2",
          "term_name": "Velutto 33"
        }
      ],
      "default_variation_id": "171858",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "8-sm",
          "term_name": "8 см"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "15-5",
              "term_name": "Velutto 15",
              "color": {
                "slug": "purple",
                "hex": "#745582"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "color": {
                "slug": "red",
                "hex": "#b33A3A"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "715-2",
              "term_name": "Enzo 715",
              "color": {
                "slug": "yellow",
                "hex": "#fcdf87"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "25-3",
              "term_name": "Breeze 25",
              "color": {
                "slug": "grey",
                "hex": "#aeb8b8"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "17-2",
              "term_name": "Bella 17",
              "color": {
                "slug": "green",
                "hex": "#63a583"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "azure",
              "term_name": "Virginia Azure",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "color": {
                "slug": "yellow",
                "hex": "#fcdf87"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "color": {
                "slug": "green",
                "hex": "#63a583"
              }
            }
          ]
        },
        {
          "taxonomy_slug": "pa_pouf-dimensions",
          "taxonomy_name": "Габариты пуфа",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        }
      ],
      "variations": {
        "171856": {
          "id": "171856",
          "price": "27600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-5",
              "term_name": "Velutto 15",
              "details": {
                "id": 142974,
                "name": "15",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        },
        "171857": {
          "id": "171857",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            }
          ]
        },
        "171858": {
          "id": "171858",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "details": {
                "id": 143003,
                "name": "33",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            }
          ]
        },
        "171859": {
          "id": "171859",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "17-2",
              "term_name": "Bella 17",
              "details": {
                "id": 142327,
                "name": "17",
                "collection": {
                  "id": "4760",
                  "slug": "bella",
                  "name": "Bella",
                  "gallery": [
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2.jpeg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_100.jpeg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_150.jpeg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_300.jpeg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_400.jpeg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_500.jpeg"
                    },
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20.jpg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_100.jpg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_150.jpg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_300.jpg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_400.jpg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_500.jpg"
                    }
                  ]
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            }
          ]
        },
        "171860": {
          "id": "171860",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "details": {
                "id": 142835,
                "name": "14",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            }
          ]
        },
        "171861": {
          "id": "171861",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "715-2",
              "term_name": "Enzo 715",
              "details": {
                "id": 142509,
                "name": "715",
                "collection": {
                  "id": "4763",
                  "slug": "enzo",
                  "name": "Enzo",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            }
          ]
        },
        "171862": {
          "id": "171862",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "25-3",
              "term_name": "Breeze 25",
              "details": {
                "id": 142427,
                "name": "25",
                "collection": {
                  "id": "4744",
                  "slug": "breeze",
                  "name": "Breeze",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            }
          ]
        },
        "171863": {
          "id": "171863",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "azure",
              "term_name": "Virginia Azure",
              "details": {
                "id": 143122,
                "name": "Azure",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            }
          ]
        },
        "171864": {
          "id": "171864",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-5",
              "term_name": "Velutto 15",
              "details": {
                "id": 142974,
                "name": "15",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "134x44-sm",
              "term_name": "134x44 см"
            }
          ]
        },
        "171865": {
          "id": "171865",
          "price": "16600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            }
          ]
        },
        "171866": {
          "id": "171866",
          "price": "16600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "details": {
                "id": 143003,
                "name": "33",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            }
          ]
        },
        "171867": {
          "id": "171867",
          "price": "16600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "17-2",
              "term_name": "Bella 17",
              "details": {
                "id": 142327,
                "name": "17",
                "collection": {
                  "id": "4760",
                  "slug": "bella",
                  "name": "Bella",
                  "gallery": [
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2.jpeg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_100.jpeg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_150.jpeg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_300.jpeg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_400.jpeg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_500.jpeg"
                    },
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20.jpg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_100.jpg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_150.jpg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_300.jpg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_400.jpg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_500.jpg"
                    }
                  ]
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            }
          ]
        },
        "171868": {
          "id": "171868",
          "price": "16600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "details": {
                "id": 142835,
                "name": "14",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            }
          ]
        },
        "171869": {
          "id": "171869",
          "price": "16600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "715-2",
              "term_name": "Enzo 715",
              "details": {
                "id": 142509,
                "name": "715",
                "collection": {
                  "id": "4763",
                  "slug": "enzo",
                  "name": "Enzo",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            }
          ]
        },
        "171870": {
          "id": "171870",
          "price": "16600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "25-3",
              "term_name": "Breeze 25",
              "details": {
                "id": 142427,
                "name": "25",
                "collection": {
                  "id": "4744",
                  "slug": "breeze",
                  "name": "Breeze",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            }
          ]
        },
        "171871": {
          "id": "171871",
          "price": "16600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "azure",
              "term_name": "Virginia Azure",
              "details": {
                "id": 143122,
                "name": "Azure",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            }
          ]
        },
        "171872": {
          "id": "171872",
          "price": "16600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-5",
              "term_name": "Velutto 15",
              "details": {
                "id": 142974,
                "name": "15",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x44-sm",
              "term_name": "64x44 см"
            }
          ]
        },
        "171873": {
          "id": "171873",
          "price": "19300",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            }
          ]
        },
        "171874": {
          "id": "171874",
          "price": "19300",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "details": {
                "id": 143003,
                "name": "33",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            }
          ]
        },
        "171875": {
          "id": "171875",
          "price": "19300",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "17-2",
              "term_name": "Bella 17",
              "details": {
                "id": 142327,
                "name": "17",
                "collection": {
                  "id": "4760",
                  "slug": "bella",
                  "name": "Bella",
                  "gallery": [
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2.jpeg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_100.jpeg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_150.jpeg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_300.jpeg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_400.jpeg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_500.jpeg"
                    },
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20.jpg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_100.jpg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_150.jpg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_300.jpg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_400.jpg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_500.jpg"
                    }
                  ]
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            }
          ]
        },
        "171876": {
          "id": "171876",
          "price": "19300",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "details": {
                "id": 142835,
                "name": "14",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            }
          ]
        },
        "171877": {
          "id": "171877",
          "price": "19300",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "715-2",
              "term_name": "Enzo 715",
              "details": {
                "id": 142509,
                "name": "715",
                "collection": {
                  "id": "4763",
                  "slug": "enzo",
                  "name": "Enzo",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            }
          ]
        },
        "171878": {
          "id": "171878",
          "price": "19300",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "25-3",
              "term_name": "Breeze 25",
              "details": {
                "id": 142427,
                "name": "25",
                "collection": {
                  "id": "4744",
                  "slug": "breeze",
                  "name": "Breeze",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            }
          ]
        },
        "171879": {
          "id": "171879",
          "price": "19300",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "azure",
              "term_name": "Virginia Azure",
              "details": {
                "id": 143122,
                "name": "Azure",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            }
          ]
        },
        "171880": {
          "id": "171880",
          "price": "19300",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-5",
              "term_name": "Velutto 15",
              "details": {
                "id": 142974,
                "name": "15",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "64x64-sm",
              "term_name": "64x64 см"
            }
          ]
        },
        "171881": {
          "id": "171881",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            }
          ]
        },
        "171882": {
          "id": "171882",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "details": {
                "id": 143003,
                "name": "33",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            }
          ]
        },
        "171883": {
          "id": "171883",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "17-2",
              "term_name": "Bella 17",
              "details": {
                "id": 142327,
                "name": "17",
                "collection": {
                  "id": "4760",
                  "slug": "bella",
                  "name": "Bella",
                  "gallery": [
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2.jpeg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_100.jpeg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_150.jpeg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_300.jpeg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_400.jpeg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_500.jpeg"
                    },
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20.jpg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_100.jpg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_150.jpg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_300.jpg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_400.jpg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_500.jpg"
                    }
                  ]
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            }
          ]
        },
        "171884": {
          "id": "171884",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "details": {
                "id": 142835,
                "name": "14",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            }
          ]
        },
        "171885": {
          "id": "171885",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "715-2",
              "term_name": "Enzo 715",
              "details": {
                "id": 142509,
                "name": "715",
                "collection": {
                  "id": "4763",
                  "slug": "enzo",
                  "name": "Enzo",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            }
          ]
        },
        "171886": {
          "id": "171886",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "25-3",
              "term_name": "Breeze 25",
              "details": {
                "id": 142427,
                "name": "25",
                "collection": {
                  "id": "4744",
                  "slug": "breeze",
                  "name": "Breeze",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            }
          ]
        },
        "171887": {
          "id": "171887",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "azure",
              "term_name": "Virginia Azure",
              "details": {
                "id": 143122,
                "name": "Azure",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            }
          ]
        },
        "171888": {
          "id": "171888",
          "price": "23200",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0001-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-5",
              "term_name": "Velutto 15",
              "details": {
                "id": 142974,
                "name": "15",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7513",
                  "slug": "purple",
                  "name": "Фиолетовый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x64-sm",
              "term_name": "94x64 см"
            }
          ]
        },
        "171889": {
          "id": "171889",
          "price": "27600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0008-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        },
        "171890": {
          "id": "171890",
          "price": "27600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0003-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "33-2",
              "term_name": "Velutto 33",
              "details": {
                "id": 143003,
                "name": "33",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        },
        "171891": {
          "id": "171891",
          "price": "27600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0010-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "17-2",
              "term_name": "Bella 17",
              "details": {
                "id": 142327,
                "name": "17",
                "collection": {
                  "id": "4760",
                  "slug": "bella",
                  "name": "Bella",
                  "gallery": [
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2.jpeg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_100.jpeg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_150.jpeg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_300.jpeg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_400.jpeg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/vento_2--w_500.jpeg"
                    },
                    {
                      "original": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20.jpg",
                      "w100": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_100.jpg",
                      "w150": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_150.jpg",
                      "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_300.jpg",
                      "w400": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_400.jpg",
                      "w500": "http://130.193.62.187/wp-content/uploads/2020/11/Vento-зеленый-угловой_premier-20--w_500.jpg"
                    }
                  ]
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7514",
                  "slug": "green",
                  "name": "Зелёный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        },
        "171892": {
          "id": "171892",
          "price": "27600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0004-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "14-2",
              "term_name": "Premier 14",
              "details": {
                "id": 142835,
                "name": "14",
                "collection": {
                  "id": "4754",
                  "slug": "premier",
                  "name": "Premier",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7508",
                  "slug": "red",
                  "name": "Красный"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        },
        "171893": {
          "id": "171893",
          "price": "27600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0007-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "715-2",
              "term_name": "Enzo 715",
              "details": {
                "id": 142509,
                "name": "715",
                "collection": {
                  "id": "4763",
                  "slug": "enzo",
                  "name": "Enzo",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        },
        "171894": {
          "id": "171894",
          "price": "27600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0002-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "25-3",
              "term_name": "Breeze 25",
              "details": {
                "id": 142427,
                "name": "25",
                "collection": {
                  "id": "4744",
                  "slug": "breeze",
                  "name": "Breeze",
                  "gallery": 0
                },
                "category": {
                  "name": 1,
                  "rate": 0
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        },
        "171895": {
          "id": "171895",
          "price": "27600",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/Morti_rear_Viev0005-1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "azure",
              "term_name": "Virginia Azure",
              "details": {
                "id": 143122,
                "name": "Azure",
                "collection": {
                  "id": "4759",
                  "slug": "virginia",
                  "name": "Virginia",
                  "gallery": 0
                },
                "category": {
                  "name": 3,
                  "rate": 20
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            },
            {
              "taxonomy_slug": "pa_pouf-dimensions",
              "taxonomy_name": "Габариты пуфа",
              "term_slug": "94x94-sm",
              "term_name": "94x94 см"
            }
          ]
        }
      }
    },
    {
      "id": "171896",
      "name": "Tribeca (Апсейл)",
      "slug": "tribeca-apsejl",
      "subtitle": "Кресло",
      "collection": {
        "name": "Tribeca",
        "count": "4"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_fabric",
          "taxonomy_name": "Ткань",
          "term_slug": "43-2",
          "term_name": "Velutto 43"
        }
      ],
      "default_variation_id": "171899",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_armrest-width",
          "taxonomy_name": "Ширина подлокотника",
          "term_slug": "22-sm",
          "term_name": "22 см"
        },
        {
          "taxonomy_slug": "pa_frame-material",
          "taxonomy_name": "Материал каркаса",
          "term_slug": "berezovaja-fanera",
          "term_name": "Березовая фанера"
        },
        {
          "taxonomy_slug": "pa_legs-material",
          "taxonomy_name": "Материал опор",
          "term_slug": "massiv-duba",
          "term_name": "Массив дуба"
        },
        {
          "taxonomy_slug": "pa_legs-height",
          "taxonomy_name": "Высота опор",
          "term_slug": "15-sm",
          "term_name": "15 см"
        },
        {
          "taxonomy_slug": "pa_manufacturer",
          "taxonomy_name": "Производитель",
          "term_slug": "sk-design-sankt-peterburg",
          "term_name": "SK Design, Санкт-Петербург"
        },
        {
          "taxonomy_slug": "pa_seat-depth",
          "taxonomy_name": "Глубина сиденья",
          "term_slug": "55-sm",
          "term_name": "55 см"
        },
        {
          "taxonomy_slug": "pa_seat-height",
          "taxonomy_name": "Высота сиденья",
          "term_slug": "50-sm",
          "term_name": "50 см"
        },
        {
          "taxonomy_slug": "pa_overall-width",
          "taxonomy_name": "Габаритная ширина",
          "term_slug": "50-sm",
          "term_name": "50 см"
        },
        {
          "taxonomy_slug": "pa_upholstery-material",
          "taxonomy_name": "Материал обивки",
          "term_slug": "tkan",
          "term_name": "Ткань"
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
              "term_slug": "45-2",
              "term_name": "Velvet Lux 45",
              "color": {
                "slug": "grey",
                "hex": "#aeb8b8"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "color": {
                "slug": "yellow",
                "hex": "#fcdf87"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "37-2",
              "term_name": "Velvet Lux 37",
              "color": {
                "slug": "pink",
                "hex": "#ffd2f9"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "43-2",
              "term_name": "Velutto 43",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "29-3",
              "term_name": "Velvet Lux 29",
              "color": {
                "slug": "blue",
                "hex": "#6e93d6"
              }
            },
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-3",
              "term_name": "Manhattan 15",
              "color": {
                "slug": "orange",
                "hex": "#c7784c"
              }
            }
          ]
        }
      ],
      "variations": {
        "171897": {
          "id": "171897",
          "price": "37400",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_1-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_1-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "29-3",
              "term_name": "Velvet Lux 29",
              "details": {
                "id": 143026,
                "name": "29",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            }
          ]
        },
        "171898": {
          "id": "171898",
          "price": "37400",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_3-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_3-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "83-3",
              "term_name": "Velvet Lux 83",
              "details": {
                "id": 143054,
                "name": "83",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7512",
                  "slug": "yellow",
                  "name": "Жёлтый"
                }
              }
            }
          ]
        },
        "171899": {
          "id": "171899",
          "price": "37400",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_2-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_2-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "43-2",
              "term_name": "Velutto 43",
              "details": {
                "id": 143011,
                "name": "43",
                "collection": {
                  "id": "4747",
                  "slug": "velutto",
                  "name": "Velutto",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7509",
                  "slug": "blue",
                  "name": "Синий"
                }
              }
            }
          ]
        },
        "171900": {
          "id": "171900",
          "price": "37400",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_6-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_6-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "15-3",
              "term_name": "Manhattan 15",
              "details": {
                "id": 142679,
                "name": "15",
                "collection": {
                  "id": "4764",
                  "slug": "manhattan",
                  "name": "Manhattan",
                  "gallery": 0
                },
                "category": {
                  "name": 4,
                  "rate": 30
                },
                "image": [],
                "color": {
                  "id": "7516",
                  "slug": "orange",
                  "name": "Оранжевый"
                }
              }
            }
          ]
        },
        "171901": {
          "id": "171901",
          "price": "37400",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_5-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_5-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "37-2",
              "term_name": "Velvet Lux 37",
              "details": {
                "id": 143034,
                "name": "37",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7515",
                  "slug": "pink",
                  "name": "Розовый"
                }
              }
            }
          ]
        },
        "171902": {
          "id": "171902",
          "price": "37400",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_4-2.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/11/TRI_ST_50_2_4-2--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_fabric",
              "taxonomy_name": "Ткань",
              "term_slug": "45-2",
              "term_name": "Velvet Lux 45",
              "details": {
                "id": 143038,
                "name": "45",
                "collection": {
                  "id": "4756",
                  "slug": "velvet-lux",
                  "name": "Velvet Lux",
                  "gallery": 0
                },
                "category": {
                  "name": 2,
                  "rate": 10
                },
                "image": [],
                "color": {
                  "id": "7510",
                  "slug": "grey",
                  "name": "Серый"
                }
              }
            }
          ]
        }
      }
    },
    {
      "id": "171933",
      "name": "Cubus MIX (Тест)",
      "slug": "cubus-mix-test",
      "subtitle": "Диван, трехместный, модульный",
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
          "stock": 0,
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
                "image": [],
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
    },
    {
      "id": "171990",
      "name": "Loft (Тест)",
      "slug": "loft-test",
      "subtitle": "Зеркало, прямоугольное, металл",
      "collection": {
        "name": "Loft",
        "count": "25"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_dimensions",
          "taxonomy_name": "Габариты (ш*г*в)",
          "term_slug": "44-x-64-x-4-sm",
          "term_name": "44 x 64 x 4 см"
        }
      ],
      "default_variation_id": "171998",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_frame-depth",
          "taxonomy_name": "Глубина рамы",
          "term_slug": "4-sm",
          "term_name": "4 см"
        }
      ],
      "variable_attributes": [
        {
          "taxonomy_slug": "pa_dimensions",
          "taxonomy_name": "Габариты (ш*г*в)",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_dimensions",
              "taxonomy_name": "Габариты (ш*г*в)",
              "term_slug": "44-x-64-x-4-sm",
              "term_name": "44 x 64 x 4 см"
            }
          ]
        }
      ],
      "variations": {
        "171998": {
          "id": "171998",
          "price": "5900",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/12/LFT-MIR-44-64-4-BL.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/12/LFT-MIR-44-64-4-BL--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_dimensions",
              "taxonomy_name": "Габариты (ш*г*в)",
              "term_slug": "44-x-64-x-4-sm",
              "term_name": "44 x 64 x 4 см"
            }
          ]
        }
      }
    },
    {
      "id": "172001",
      "name": "Loft (Тест)",
      "slug": "loft-test-2",
      "subtitle": "Зеркало, шестигранное, металл",
      "collection": {
        "name": "Loft",
        "count": "25"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_dimensions",
          "taxonomy_name": "Габариты (ш*г*в)",
          "term_slug": "85-x-60-x-4-sm",
          "term_name": "85 x 60 x 4 см"
        }
      ],
      "default_variation_id": "172002",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_frame-depth",
          "taxonomy_name": "Глубина рамы",
          "term_slug": "4-sm",
          "term_name": "4 см"
        }
      ],
      "variable_attributes": [
        {
          "taxonomy_slug": "pa_dimensions",
          "taxonomy_name": "Габариты (ш*г*в)",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_dimensions",
              "taxonomy_name": "Габариты (ш*г*в)",
              "term_slug": "85-x-60-x-4-sm",
              "term_name": "85 x 60 x 4 см"
            }
          ]
        }
      ],
      "variations": {
        "172002": {
          "id": "172002",
          "price": "8000",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/12/LFT-MIR-850-600-40-BL_1.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/12/LFT-MIR-850-600-40-BL_1--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_dimensions",
              "taxonomy_name": "Габариты (ш*г*в)",
              "term_slug": "85-x-60-x-4-sm",
              "term_name": "85 x 60 x 4 см"
            }
          ]
        }
      }
    },
    {
      "id": "172010",
      "name": "Scale Round(Тест)",
      "slug": "scale-round-test",
      "subtitle": "Стол, журнальный, эмаль ",
      "collection": {
        "name": "Scale",
        "count": "8"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_dimensions",
          "taxonomy_name": "Габариты (ш*г*в)",
          "term_slug": "50-x-50-x-47-sm",
          "term_name": "50 x 50 x 47 см"
        }
      ],
      "default_variation_id": "172011",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_countertop-material",
          "taxonomy_name": "Материал столешницы",
          "term_slug": "shponirovannyj-mdf-jemal",
          "term_name": "Шпонированный МДФ + Эмаль"
        }
      ],
      "variable_attributes": [
        {
          "taxonomy_slug": "pa_dimensions",
          "taxonomy_name": "Габариты (ш*г*в)",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_dimensions",
              "taxonomy_name": "Габариты (ш*г*в)",
              "term_slug": "50-x-50-x-47-sm",
              "term_name": "50 x 50 x 47 см"
            }
          ]
        }
      ],
      "variations": {
        "172011": {
          "id": "172011",
          "price": "8000",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/12/scale_round_002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/12/scale_round_002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_dimensions",
              "taxonomy_name": "Габариты (ш*г*в)",
              "term_slug": "50-x-50-x-47-sm",
              "term_name": "50 x 50 x 47 см"
            }
          ]
        }
      }
    },
    {
      "id": "172016",
      "name": "Scale Round(Тест)",
      "slug": "scale-round-test-2",
      "subtitle": "Стол, журнальный, с окантовкой ",
      "collection": {
        "name": "Scale",
        "count": "8"
      },
      "default_attributes": [
        {
          "taxonomy_slug": "pa_dimensions",
          "taxonomy_name": "Габариты (ш*г*в)",
          "term_slug": "50-x-50-x-47-sm",
          "term_name": "50 x 50 x 47 см"
        }
      ],
      "default_variation_id": "172018",
      "static_attributes": [
        {
          "taxonomy_slug": "pa_countertop-material",
          "taxonomy_name": "Материал столешницы",
          "term_slug": "shponirovannyj-mdf-jemal",
          "term_name": "Шпонированный МДФ + Эмаль"
        }
      ],
      "variable_attributes": [
        {
          "taxonomy_slug": "pa_dimensions",
          "taxonomy_name": "Габариты (ш*г*в)",
          "taxonomy_options": [
            {
              "taxonomy_slug": "pa_dimensions",
              "taxonomy_name": "Габариты (ш*г*в)",
              "term_slug": "50-x-50-x-47-sm",
              "term_name": "50 x 50 x 47 см"
            }
          ]
        }
      ],
      "variations": {
        "172018": {
          "id": "172018",
          "price": "8800",
          "general_image": {
            "original": "http://130.193.62.187/wp-content/uploads/2020/12/scale_round_cut_002.jpg",
            "w300": "http://130.193.62.187/wp-content/uploads/2020/12/scale_round_cut_002--w_300.jpg"
          },
          "stock": 0,
          "variation_attributes": [
            {
              "taxonomy_slug": "pa_dimensions",
              "taxonomy_name": "Габариты (ш*г*в)",
              "term_slug": "50-x-50-x-47-sm",
              "term_name": "50 x 50 x 47 см"
            }
          ]
        }
      }
    }
  ]
}