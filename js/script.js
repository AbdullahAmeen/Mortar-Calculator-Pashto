function mortarcalculator() {

    let dropdownn = document.getElementById('ConcreteMarks').value
    
    let aggregateResult = "";
    let sandResult = "";
    let cementResult = "";
    let steelResult = "";

    switch (dropdownn) {
        case 'M5-1:5:10':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(10/16)).toFixed(2);
            sandResult = ((document.getElementById('moratrVolume').value*(5/16))).toFixed(2) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/16)*(1.52))/0.035).toFixed(2) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*115).toFixed(2);
            
            break;
        case 'M7.5-1:4:8':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(8/13)).toFixed(2) ;
            sandResult = ((document.getElementById('moratrVolume').value*(4/13))) .toFixed(2) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/13)*(1.52))/0.035).toFixed(2) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*115).toFixed(2);
            break;
            case 'M10-1:3:6':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(6/10)).toFixed(2);
            sandResult = ((document.getElementById('moratrVolume').value*(3/10))).toFixed(2) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/10)*(1.52))/0.035).toFixed(2) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*115).toFixed(2);
            break;
            case 'M15-1:2:4':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(4/7)).toFixed(2);
            sandResult = ((document.getElementById('moratrVolume').value*(2/7))).toFixed(2) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/7)*(1.52))/0.035).toFixed(2);
            steelResult = ((((document.getElementById('moratrVolume').value)))*115).toFixed(2);
            break;
            case 'M20-1:1.5:3':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(3/5.5)).toFixed(2) ;
            sandResult = ((document.getElementById('moratrVolume').value*(1.5/5.5))).toFixed(2);
            cementResult = ((document.getElementById('moratrVolume').value*(1/5.5)*(1.52))/0.035).toFixed(2) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*115).toFixed(2);
            break;
            case 'M25-1:1:2':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(2/4)).toFixed(2) ;
            sandResult = ((document.getElementById('moratrVolume').value*(1/4))).toFixed(2) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/4)*(1.52))/0.035).toFixed(2) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*115).toFixed(2);
            break;
            
    }
    document.getElementById("aggregateResult").innerHTML = aggregateResult;
    document.getElementById("sandResult").innerHTML = sandResult;
    document.getElementById("cementResult").innerHTML = cementResult;
    document.getElementById("steelResult").innerHTML = steelResult;

    // if (dropdownn==='M5-1:5:10') {
    //     return (document.getElementById('moratrVolume')*(1/16)*(1.52))/1.25
    //            (document.getElementById('moratrVolume')*(5/16))/1.25
    //            (document.getElementById('moratrVolume'))*(10/16)/(1.25)
    // }
}

function calculate() {
    var width = parseFloat(document.getElementById('a').value);
    var length = parseFloat(document.getElementById('b').value);
    var height = parseFloat(document.getElementById('c').value);

    var total = (width * length * height) * 1.3;
    document.getElementById('result').value = total.toFixed(2) +'  m3'  + ' (30٪ اضافه شول)' ;
    }