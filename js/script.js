function mortarcalculator() {

    let dropdownn = document.getElementById('ConcreteMarks').value
    
    let aggregateResult = "";
    let sandResult = "";
    let cementResult = "";
    let steelResult = "";

    switch (dropdownn) {
        case 'M5-1:5:10':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(10/16)).toFixed(1);
            sandResult = ((document.getElementById('moratrVolume').value*(5/16))).toFixed(1) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/16)*(1.1))/0.035).toFixed(1) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*100).toFixed(1);
            waterResult = ((((document.getElementById('moratrVolume').value)))*150).toFixed(1);
            break;
        case 'M7.5-1:4:8':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(8/13)).toFixed(1) ;
            sandResult = ((document.getElementById('moratrVolume').value*(4/13))) .toFixed(1) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/13)*(1.1))/0.035).toFixed(1) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*100).toFixed(1);
            waterResult = ((((document.getElementById('moratrVolume').value)))*150).toFixed(1);
            break;
            case 'M10-1:3:6':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(6/10)).toFixed(1);
            sandResult = ((document.getElementById('moratrVolume').value*(3/10))).toFixed(1) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/10)*(1.1))/0.035).toFixed(1) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*100).toFixed(1);
            waterResult = ((((document.getElementById('moratrVolume').value)))*150).toFixed(1);
            break;
            case 'M15-1:2:4':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(4/7)).toFixed(1);
            sandResult = ((document.getElementById('moratrVolume').value*(2/7))).toFixed(1) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/7)*(1.1))/0.035).toFixed(1);
            steelResult = ((((document.getElementById('moratrVolume').value)))*100).toFixed(1);
            waterResult = ((((document.getElementById('moratrVolume').value)))*150).toFixed(1);
            break;
            case 'M20-1:1.5:3':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(3/5.5)).toFixed(1) ;
            sandResult = ((document.getElementById('moratrVolume').value*(1.5/5.5))).toFixed(1);
            cementResult = ((document.getElementById('moratrVolume').value*(1/5.5)*(1.1))/0.035).toFixed(1) ;
            steelResult = ((((document.getElementById('moratrVolume').value)))*100).toFixed(1);
            waterResult = ((((document.getElementById('moratrVolume').value)))*150).toFixed(1);
            break;
            case 'M25-1:1:2':
            aggregateResult = ((document.getElementById('moratrVolume').value)*(2/4)).toFixed(1) ;
            sandResult = ((document.getElementById('moratrVolume').value*(1/4))).toFixed(1) ;
            cementResult = ((document.getElementById('moratrVolume').value*(1/4)*(1.1))/0.035).toFixed(1);
            steelResult = ((((document.getElementById('moratrVolume').value)))*100).toFixed(1);
            waterResult = ((((document.getElementById('moratrVolume').value)))*150).toFixed(1);
            break;
            
    }
    document.getElementById("aggregateResult").innerHTML = aggregateResult;
    document.getElementById("sandResult").innerHTML = sandResult;
    document.getElementById("cementResult").innerHTML = cementResult;
    document.getElementById("steelResult").innerHTML = steelResult;
    document.getElementById("waterResult").innerHTML = waterResult;

    // if (dropdownn==='M5-1:5:10') {
    //     return (document.getElementById('moratrVolume')*(1/16)*(1.52))/1.1
    //            (document.getElementById('moratrVolume')*(5/16))/1.1
    //            (document.getElementById('moratrVolume'))*(10/16)/(1.1)
    // }
}

function calculate() {
    var width = parseFloat(document.getElementById('a').value);
    var length = parseFloat(document.getElementById('b').value);
    var height = parseFloat(document.getElementById('c').value);

    var resultEl = document.getElementById('result');

    // Validate inputs: ensure values are numbers and greater than zero
    if (isNaN(width) || isNaN(length) || isNaN(height) || width <= 0 || length <= 0 || height <= 0) {
        resultEl.value = 'مهربانی وکړی د کانکریتو عرض، طول او لوړوالی په مثبت نمبر اضافه کړی';
        resultEl.classList.add('error-message');
        return;
    }

    resultEl.classList.remove('error-message');
    var total = (width * length * height) * 1.2; // adding 20% wastage factor
    resultEl.innerHTML = total.toFixed(2) + '  m3'  + ' ( <b class="factor"> شل</b> فیصده اضافه شول )';

    // populate the moratrVolume input with computed volume so material calculator can use it
    var moratrEl = document.getElementById('moratrVolume');
    if (moratrEl) moratrEl.value = total.toFixed(2);
}

function calculateMaterials() {
    var selectedMark = document.getElementById('ConcreteMarks').value;
    var moratrVal = parseFloat(document.getElementById('moratrVolume').value);
    var errEl = document.getElementById('materialsError');

    if (!selectedMark) {
        if (errEl) { errEl.innerText = 'مهرباني وکړئ د کانکریټ مارک انتخاب کړئ'; errEl.style.display = 'block'; }
        return;
    }
    if (isNaN(moratrVal) || moratrVal <= 0) {
        if (errEl) { errEl.innerText = 'مهرباني وکړئ لومړی ساحه محاسبه کړئ او یاد وچو موادو حجم ارایه کړئ'; errEl.style.display = 'block'; }
        return;
    }

    // clear inline error
    if (errEl) { errEl.innerText = ''; errEl.style.display = 'none'; }

    // compute and show materials
    mortarcalculator();
    var mortarDiv = document.querySelector('.mortarItems');
    if (mortarDiv) mortarDiv.style.display = 'block';
}