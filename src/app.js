import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({

    el: "#app",
    data: {
      allRates: {},
      baseRate: "",
      startCurrency: "",
      endCurrency: "",
      euroAmount: 0,
      foreignAmount: 0
    },
    mounted(){
      this.getRates();
    },
    computed: {
      convertFromEuros: function() {
        const euroConversion = this.euroAmount * this.endCurrency
        return euroConversion.toFixed(2)
      },
      convertToEuros: function() {
        const foreignConversion = this.foreignAmount / this.startCurrency
        return foreignConversion.toFixed(2)
      }
    },
    methods: {
      getRates: function() {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => {
          this.allRates = data.rates
          this.baseRate = data.base
        })
      }
    }
  })
})
