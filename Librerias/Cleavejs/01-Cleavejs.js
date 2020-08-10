var cleave1 = new Cleave('.input-element1', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
});

var cleave2 = new Cleave('.input-element2', {
    date: true,
    delimiter: '-',
    datePattern: ['Y', 'm', 'd']
});

var cleave3 = new Cleave('.input-element3', {
    time: true,
    timePattern: ['h', 'm', 's']
});

var cleave = new Cleave('.input-element4', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand'
});

var cleave = new Cleave('.input-element5', {
    prefix: '051',
    delimiter: '-',
    blocks: [3, 3, 3, 3],
    uppercase: true
});