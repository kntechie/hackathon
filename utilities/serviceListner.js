(function(){
    this.listenServices = function(jsonBodyParser, server){
        server.get('/test', jsonBodyParser, function(req, res){
            console.log('Get ' + req.url);
            res.send({'status': 'success'})
        });
		
		server.get('/rpc/retailer', jsonBodyParser, function(req, res){
            console.log('Get ' + req.url);
            res.send(
				{
  "retailsList": [
    {
      "retailName": "Media Market",
      "type": "Electonics",
      "item": "I-phone X 64 GB",
      "price": "400",
      "feedback": "NOK",
      "buyOption": "OK",
      "loanCheck": "true",
      "loanStatus": "OK"
    },
    {
      "retailName": "Fnac",
      "type": "Electonics",
      "item": "I-phone X 64 GB",
      "price": "350",
      "feedback": "OK",
      "buyOption": "OK",
      "loanCheck": "true",
      "loanStatus": "OK"
    },
    {
      "retailName": "Fnac",
      "type": "Electonics",
      "item": "I-phone X 128 GB",
      "price": "500",
      "feedback": "OK",
      "buyOption": "NOK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Media Market",
      "type": "Electonics",
      "item": "I-phone X 128 GB",
      "price": "550",
      "feedback": "NOK",
      "buyOption": "NOK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Super Dry Store",
      "type": "Accessories",
      "item": "Super dry T-shirt",
      "price": "70",
      "feedback": "NOK",
      "buyOption": "OK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Gallery Inno",
      "type": "Accessories",
      "item": "Super dry T-shirt",
      "price": "60",
      "feedback": "OK",
      "buyOption": "OK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Relhaize",
      "type": "Grocery",
      "item": "Apple Fruit",
      "price": "5",
      "feedback": "NOK",
      "buyOption": "OK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "CarreFive",
      "type": "Grocery",
      "item": "Apple Fruit",
      "price": "4.5",
      "feedback": "NOK",
      "buyOption": "OK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Belrupt",
      "type": "Grocery",
      "item": "Apple Fruit",
      "price": "4",
      "feedback": "OK",
      "buyOption": "OK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Media Market",
      "type": "Electonics",
      "item": "JBL speaker",
      "price": "600",
      "feedback": "OK",
      "buyOption": "NOK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Fnac",
      "type": "Electonics",
      "item": "JBL speaker",
      "price": "650",
      "feedback": "NOK",
      "buyOption": "NOK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Relhaize",
      "type": "Grocery",
      "item": "Joyvalle Milk 6 pack",
      "price": "10",
      "feedback": "NOK",
      "buyOption": "OK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "Belrupt",
      "type": "Grocery",
      "item": "Joyvalle Milk 6 pack",
      "price": "9.5",
      "feedback": "NOK",
      "buyOption": "OK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    },
    {
      "retailName": "CarreFive",
      "type": "Grocery",
      "item": "Joyvalle Milk 6 pack",
      "price": "9",
      "feedback": "OK",
      "buyOption": "OK",
      "loanCheck": "false",
      "loanStatus": "NOK"
    }
  ]
}
			)
        });
		
		server.post('/rpc/login', jsonBodyParser, function(req, res){
            console.log('POST ' + req.url);
            res.send({
  "firstName": "kumaran",
  "lastName": "Sundaramahalingam",
  "accounts": [
    {
      "accountNumber": "BE1234567812345678"
    },
    {
      "accountNumber": "BE1234567812345678"
    },
    {
      "accountNumber": "BE1234567812345678"
    }
  ],
  "months": [
    {
      "id": "0",
      "name": "January",
      "totalIncome": "2500",
      "amountSpent": "2300",
      "grocery": {
        "amountSpent": "1500",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 jan 2019",
                "purcahsedRetailer": "Relhaize",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "100",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "120",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Apple",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "80",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "10 jan 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "carrefive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 jan 2019",
                "purcahsedRetailer": "Belrupt",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "75",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "60",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "25 jan 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "90",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "Belrupt"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "20",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            }
          ]
        }
      },
      "books": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "15 jan 2019",
                "purcahsedRetailer": "Buy Books",
                "items": [
                  {
                    "name": "The Odyssey by Homer",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "28 jan 2019",
                "purcahsedRetailer": "Sahasra book shop",
                "items": [
                  {
                    "name": "In Search of Lost Time",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "140",
                      "retailer": "Buy Books"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "sports": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "20 jan 2019",
                "purcahsedRetailer": "Bowling India",
                "items": [
                  {
                    "name": "Bowling",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "35",
                      "retailer": "Bowling Australia"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "28 jan 2019",
                "purcahsedRetailer": "Golf India",
                "items": [
                  {
                    "name": "Golf",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "transport": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 jan 2019",
                "purcahsedRetailer": "Shell Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "98.5",
                      "retailer": "Batrat Petrol"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 jan 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "25 jan 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "30 jan 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "medical": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "13 jan 2019",
                "purcahsedRetailer": "KG Hospital",
                "items": [
                  {
                    "name": "Entire Body scan",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "27 jan 2019",
                "purcahsedRetailer": "Crochin Medicals",
                "items": [
                  {
                    "name": "Caugh syrup",
                    "amount": "25",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "23.5",
                      "retailer": "DD Medicals"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "31 jan 2019",
                "purcahsedRetailer": "DD Medicals",
                "items": [
                  {
                    "name": "Eye drops",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "entertainment": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "7 jan 2019",
                "purcahsedRetailer": "KG Cinemas",
                "items": [
                  {
                    "name": "Titanic",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "45",
                      "retailer": "Shanthi Cinemas"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "18 jan 2019",
                "purcahsedRetailer": "Shanthi Cinemas",
                "items": [
                  {
                    "name": "Machine Impossible",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "id": "1",
      "name": "February",
      "totalIncome": "2700",
      "amountSpent": "2000",
      "grocery": {
        "amountSpent": "1300",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 feb 2019",
                "purcahsedRetailer": "Relhaize",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "100",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "120",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Apple",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "80",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "10 feb 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "carrefive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 feb 2019",
                "purcahsedRetailer": "Belrupt",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "75",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "60",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "25 feb 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "90",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "Belrupt"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "books": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "15 feb 2019",
                "purcahsedRetailer": "Buy Books",
                "items": [
                  {
                    "name": "The Odyssey by Homer",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "28 feb 2019",
                "purcahsedRetailer": "Sahasra book shop",
                "items": [
                  {
                    "name": "In Search of Lost Time",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "140",
                      "retailer": "Buy Books"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "sports": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "20 feb 2019",
                "purcahsedRetailer": "Bowling India",
                "items": [
                  {
                    "name": "Bowling",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "35",
                      "retailer": "Bowling Australia"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "28 feb 2019",
                "purcahsedRetailer": "Golf India",
                "items": [
                  {
                    "name": "Golf",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "transport": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 feb 2019",
                "purcahsedRetailer": "Shell Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "98.5",
                      "retailer": "Batrat Petrol"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 feb 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "25 feb 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "30 feb 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "medical": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "13 feb 2019",
                "purcahsedRetailer": "KG Hospital",
                "items": [
                  {
                    "name": "Entire Body scan",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "27 feb 2019",
                "purcahsedRetailer": "Crochin Medicals",
                "items": [
                  {
                    "name": "Caugh syrup",
                    "amount": "25",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "23.5",
                      "retailer": "DD Medicals"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "31 feb 2019",
                "purcahsedRetailer": "DD Medicals",
                "items": [
                  {
                    "name": "Eye drops",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "entertainment": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "7 feb 2019",
                "purcahsedRetailer": "KG Cinemas",
                "items": [
                  {
                    "name": "Titanic",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "45",
                      "retailer": "Shanthi Cinemas"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "18 feb 2019",
                "purcahsedRetailer": "Shanthi Cinemas",
                "items": [
                  {
                    "name": "Machine Impossible",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "id": "2",
      "name": "March",
      "totalIncome": "3200",
      "amountSpent": "2500",
      "grocery": {
        "amountSpent": "1700",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 mar 2019",
                "purcahsedRetailer": "Relhaize",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "100",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "200",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "120",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Apple",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "80",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "10 mar 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "carrefive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 mar 2019",
                "purcahsedRetailer": "Belrupt",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "75",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "60",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "25 mar 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "90",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "Belrupt"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "20",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            }
          ]
        }
      },
      "books": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "15 mar 2019",
                "purcahsedRetailer": "Buy Books",
                "items": [
                  {
                    "name": "The Odyssey by Homer",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "28 mar 2019",
                "purcahsedRetailer": "Sahasra book shop",
                "items": [
                  {
                    "name": "In Search of Lost Time",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "140",
                      "retailer": "Buy Books"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "sports": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "20 mar 2019",
                "purcahsedRetailer": "Bowling India",
                "items": [
                  {
                    "name": "Bowling",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "35",
                      "retailer": "Bowling Australia"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "28 mar 2019",
                "purcahsedRetailer": "Golf India",
                "items": [
                  {
                    "name": "Golf",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "transport": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 mar 2019",
                "purcahsedRetailer": "Shell Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "98.5",
                      "retailer": "Batrat Petrol"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 mar 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "25 mar 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "30 mar 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "medical": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "13 mar 2019",
                "purcahsedRetailer": "KG Hospital",
                "items": [
                  {
                    "name": "Entire Body scan",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "27 mar 2019",
                "purcahsedRetailer": "Crochin Medicals",
                "items": [
                  {
                    "name": "Caugh syrup",
                    "amount": "25",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "23.5",
                      "retailer": "DD Medicals"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "31 mar 2019",
                "purcahsedRetailer": "DD Medicals",
                "items": [
                  {
                    "name": "Eye drops",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "entertainment": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "7 mar 2019",
                "purcahsedRetailer": "KG Cinemas",
                "items": [
                  {
                    "name": "Titanic",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "45",
                      "retailer": "Shanthi Cinemas"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "18 mar 2019",
                "purcahsedRetailer": "Shanthi Cinemas",
                "items": [
                  {
                    "name": "Machine Impossible",
                    "amount": "100",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "id": "3",
      "name": "April",
      "totalIncome": "3200",
      "amountSpent": "3000",
      "grocery": {
        "amountSpent": "1500",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 apr 2019",
                "purcahsedRetailer": "Relhaize",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "100",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "120",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Apple",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "80",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "10 apr 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "carrefive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 apr 2019",
                "purcahsedRetailer": "Belrupt",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "75",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "60",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "25 apr 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "90",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "Belrupt"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "40",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "20",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            }
          ]
        }
      },
      "books": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "15 apr 2019",
                "purcahsedRetailer": "Buy Books",
                "items": [
                  {
                    "name": "The Odyssey by Homer",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "28 apr 2019",
                "purcahsedRetailer": "Sahasra book shop",
                "items": [
                  {
                    "name": "In Search of Lost Time",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "140",
                      "retailer": "Buy Books"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "sports": {
        "amountSpent": "500",
        "details": {
          "days": [
            {
              "day": {
                "date": "20 apr 2019",
                "purcahsedRetailer": "Bowling India",
                "items": [
                  {
                    "name": "Bowling",
                    "amount": "350",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "300",
                      "retailer": "Bowling Australia"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "28 apr 2019",
                "purcahsedRetailer": "Golf India",
                "items": [
                  {
                    "name": "Golf",
                    "amount": "150",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "transport": {
        "amountSpent": "500",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 apr 2019",
                "purcahsedRetailer": "Shell Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "350",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "348.5",
                      "retailer": "Batrat Petrol"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 apr 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "100",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "25 apr 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "30 apr 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "medical": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "27 apr 2019",
                "purcahsedRetailer": "Crochin Medicals",
                "items": [
                  {
                    "name": "Caugh syrup",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "93.5",
                      "retailer": "DD Medicals"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "31 apr 2019",
                "purcahsedRetailer": "DD Medicals",
                "items": [
                  {
                    "name": "Eye drops",
                    "amount": "100",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "entertainment": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "7 apr 2019",
                "purcahsedRetailer": "KG Cinemas",
                "items": [
                  {
                    "name": "Titanic",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "45",
                      "retailer": "Shanthi Cinemas"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "18 apr 2019",
                "purcahsedRetailer": "Shanthi Cinemas",
                "items": [
                  {
                    "name": "Machine Impossible",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "id": "4",
      "name": "May",
      "totalIncome": "2700",
      "amountSpent": "2500",
      "grocery": {
        "amountSpent": "1000",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 may 2019",
                "purcahsedRetailer": "Relhaize",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "100",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "120",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Apple",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "80",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "10 may 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  },
                  {
                    "name": "Butter",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "carrefive"
                    }
                  },
                  {
                    "name": "Bread",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 may 2019",
                "purcahsedRetailer": "Belrupt",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "25",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "10",
                      "retailer": "CarreFive"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "5",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            },
            {
              "day": {
                "date": "17 may 2019",
                "purcahsedRetailer": "CarreFive",
                "items": [
                  {
                    "name": "Milk",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "40",
                      "retailer": "Belrupt"
                    }
                  },
                  {
                    "name": "Butter",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Bread",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Apple",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Carrot",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  },
                  {
                    "name": "Brocoli",
                    "amount": "10",
                    "feedback": "OK",
                    "improvements": {}
                  }
                ]
              }
            }
          ]
        }
      },
      "books": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 may 2019",
                "purcahsedRetailer": "Buy Books",
                "items": [
                  {
                    "name": "The Odyssey by Homer",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "16 may 2019",
                "purcahsedRetailer": "Sahasra book shop",
                "items": [
                  {
                    "name": "In Search of Lost Time",
                    "amount": "150",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "140",
                      "retailer": "Buy Books"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "sports": {
        "amountSpent": "100",
        "details": {
          "days": [
            {
              "day": {
                "date": "1 may 2019",
                "purcahsedRetailer": "Bowling India",
                "items": [
                  {
                    "name": "Bowling",
                    "amount": "50",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "35",
                      "retailer": "Bowling Australia"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "10 may 2019",
                "purcahsedRetailer": "Golf India",
                "items": [
                  {
                    "name": "Golf",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "transport": {
        "amountSpent": "200",
        "details": {
          "days": [
            {
              "day": {
                "date": "5 may 2019",
                "purcahsedRetailer": "Shell Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "100",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "98.5",
                      "retailer": "Batrat Petrol"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "10 may 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "50",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "13 may 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "17 may 2019",
                "purcahsedRetailer": "Batrat Petrol",
                "items": [
                  {
                    "name": "Petrol",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "medical": {
        "amountSpent": "500",
        "details": {
          "days": [
            {
              "day": {
                "date": "13 may 2019",
                "purcahsedRetailer": "KG Hospital",
                "items": [
                  {
                    "name": "Entire Body scan",
                    "amount": "450",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            },
            {
              "day": {
                "date": "14 may 2019",
                "purcahsedRetailer": "Crochin Medicals",
                "items": [
                  {
                    "name": "Caugh syrup",
                    "amount": "25",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "23.5",
                      "retailer": "DD Medicals"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "17 may 2019",
                "purcahsedRetailer": "DD Medicals",
                "items": [
                  {
                    "name": "Eye drops",
                    "amount": "25",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      },
      "entertainment": {
        "amountSpent": "500",
        "details": {
          "days": [
            {
              "day": {
                "date": "7 may 2019",
                "purcahsedRetailer": "KG Cinemas",
                "items": [
                  {
                    "name": "Titanic",
                    "amount": "250",
                    "feedback": "NOK",
                    "improvements": {
                      "amount": "200",
                      "retailer": "Shanthi Cinemas"
                    }
                  }
                ]
              }
            },
            {
              "day": {
                "date": "15 may 2019",
                "purcahsedRetailer": "Shanthi Cinemas",
                "items": [
                  {
                    "name": "Machine Impossible",
                    "amount": "250",
                    "feedback": "OK",
                    "improvements": ""
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ]
})
        });
    }
}).call(this);