function calculate() {
    const aircraft = document.getElementById("aircraft").value;
    const totalBags = parseInt(document.getElementById("totalBags").value, 10);
    const totalWeight = parseFloat(document.getElementById("totalWeight").value);

    let holds;

    switch (aircraft) {
        case 'jet2B738':
            holds = calculateJet2B738(totalBags, totalWeight);
            break;
        case 'jet2A321':
            holds = calculateJet2A321(totalBags, totalWeight);
            break;
        case 'easyjetA319':
            holds = calculateEasyJetA319(totalBags, totalWeight);
            break;
        case 'easyjetA320':
            holds = calculateEasyJetA320(totalBags, totalWeight);
            break;
        case 'easyjetA321':
            holds = calculateEasyJetA321(totalBags, totalWeight);
            break;
        case 'transaviaB738':
            holds = calculateTransaviaB738(totalBags, totalWeight);
            break;
        case 'transaviaA320':
            holds = calculateTransaviaA320(totalBags, totalWeight);
            break;
        case 'transaviaA321':
            holds = calculateTransaviaA321(totalBags, totalWeight);
            break;
        case 'eurowingsA319':
            holds = calculateEurowingsA319(totalBags, totalWeight);
            break;
        case 'eurowingsA320':
            holds = calculateEurowingsA320(totalBags, totalWeight);
            break;
        case 'smartwingsB738':
            holds = calculateSmartWingsB738(totalBags, totalWeight);
            break;
        case 'NorwegianB738':
            holds = calculateNorwegianB738(totalBags, totalWeight);
            break;
        default:
            alert("Please select a valid aircraft.");
            return;
    }

    // Display results and hide empty holds
    document.getElementById("hold1Result").innerText = holds.hold1.bags > 0 ? `Hold 1: ${holds.hold1.bags} bags, ${holds.hold1.weight} kg` : '';
    document.getElementById("hold2Result").innerText = holds.hold2.bags > 0 ? `Hold 2: ${holds.hold2.bags} bags, ${holds.hold2.weight} kg` : '';
    document.getElementById("hold3Result").innerText = holds.hold3.bags > 0 ? `Hold 3: ${holds.hold3.bags} bags, ${holds.hold3.weight} kg` : '';
    document.getElementById("hold4Result").innerText = holds.hold4.bags > 0 ? `Hold 4: ${holds.hold4.bags} bags, ${holds.hold4.weight} kg` : '';
    document.getElementById("hold5Result").innerText = holds.hold5.bags > 0 ? `Hold 5: ${holds.hold5.bags} bags, ${holds.hold5.weight} kg` : '';
}
