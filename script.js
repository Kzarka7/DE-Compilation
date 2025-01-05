function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('.header');
    const interFace = document.querySelector('.interFace');
    sidebar.classList.toggle('hidden');
    header.classList.toggle('shifted');
    interFace.classList.toggle('shifted');
}

function calculate(type) {
    let result;

    if (type === "initialTemp") {
		
		let RT = Number(document.getElementById("Tm").value);
		let MT = Number(document.getElementById("T").value);
        let Mt = Number(document.getElementById("t").value);
        let Ck = Number(document.getElementById("k").value);

        result = RT + ((MT - RT) / Math.exp(Ck * Mt));
        document.getElementById("result").innerHTML = "Initial Temperature: " + String(result.toFixed(2));
		
    } else if (type === "roomTemp") {
		
		let IT = Number(document.getElementById("T0").value);
		let MT = Number(document.getElementById("T").value);
        let Mt = Number(document.getElementById("t").value);
        let Ck = Number(document.getElementById("k").value);
		
        result = ((MT - (IT * Math.exp(Ck * Mt))) / (1 - Math.exp(Ck * Mt)));
        document.getElementById("result").innerHTML = "Room Temperature: " + String(result.toFixed(2));
		
    } else if (type === "measuredTemp") {
		
		let IT = Number(document.getElementById("T0").value);
		let RT = Number(document.getElementById("Tm").value);
		let To = Number(document.getElementById("T1").value);
		let to = Number(document.getElementById("t1").value);
		let Mt = Number(document.getElementById("t").value);
		
		let c = IT - RT;
		let k = Math.log((To - RT) / c) / to;
		result = ((RT) + (c * Math.exp(k * Mt)))
		document.getElementById("result").innerHTML = "Measured Temperature: " + String(result.toFixed(2));
		
	} else if (type === "measuredTime") {
		
		let IT = Number(document.getElementById("T0").value);
		let RT = Number(document.getElementById("Tm").value);
		let To = Number(document.getElementById("T1").value);
		let to = Number(document.getElementById("t1").value);
		let MT = Number(document.getElementById("T").value);
		
		let c = IT - RT;
		let k = Math.log((To - RT) / c) / to;
		result = (1 / k) * (Math.log((MT - RT) / (IT - RT)));
		document.getElementById("result").innerHTML = "Measured Time: " + String(result.toFixed(2));
		
	} else if (type === "initialPop") {
			
		let CP = Number(document.getElementById("P1").value);
		let Ct = Number(document.getElementById("t1").value);
		let MP = Number(document.getElementById("P").value);
		let Mt = Number(document.getElementById("t").value);
			
		result = CP / Math.exp((1 / (Mt - Ct)) * Math.log(MP / CP) * Ct);
		document.getElementById("result").innerHTML = "Initial Population: " + String(result.toFixed(2));
	
	} else if (type === "measuredPop") {
		
		let IP = Number(document.getElementById("P0").value);
		let CP = Number(document.getElementById("P1").value);
		let Ct = Number(document.getElementById("t1").value);
		let Mt = Number(document.getElementById("t").value);
			
		let k = (Math.log(CP / IP)) / Ct;
		result = IP * Math.exp(k * Mt);
		document.getElementById("result").innerHTML = "Measured Population: " + String(result.toFixed(2));
		
	} else if (type === "measuredPopTime") {
		
		let IP = Number(document.getElementById("P0").value);
		let CP = Number(document.getElementById("P1").value);
		let Ct = Number(document.getElementById("t1").value);
		let MP = Number(document.getElementById("P").value);
			
		let k = (Math.log(CP / IP)) / Ct;
		let result = Math.log(MP / IP) / k;
		document.getElementById("result").innerHTML = "Measured Time: " + String(result.toFixed(2));
	
	} else if (type === "growthRate") {
		
		let IP = Number(document.getElementById("P0").value);
		let CP = Number(document.getElementById("P1").value);
		let Ct = Number(document.getElementById("t1").value);
		let Mt = Number(document.getElementById("t").value);
			
		let k = (Math.log(CP / IP)) / Ct;
		let result = (IP * k) * Math.exp(k * Mt);
		document.getElementById("result").innerHTML = "Growth Rate: " + String(result.toFixed(2));
		
	}
}