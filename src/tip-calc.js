import { useState } from "react"

// Tip Component 
let Tip = () => {
    // Start Stats space Work
    let [bill, setBill] = useState(0)
    let [service, setService] = useState(0);
    let [frindService, setFrindService] = useState(0);
    // end Stats space Work


    // reset button function 
    let handelReset = () => {
        setBill(0);
        setService(0);
        setFrindService(0);
    }
    // reset button function



    return <div>
        <Price bill={bill} setBill={setBill} />
        <Service service={service} setService={setService} />
        <FrindService frindService={frindService} setFrindService={setFrindService} />
        <Total bill={bill} handelReset={handelReset} frindService={frindService} service={service} />
    </div>
}
// Tip Component 



// Price Component 
let Price = ({ bill, setBill }) => {


    return <>
        <p>How much was the bill?</p>
        <input type="number" name="" value={bill} onChange={(e) => { e.target.value === "" ? setBill(0) : setBill(Number(e.target.value)) }} />
    </>
}
// Price Component 





// Service Component 
let Service = ({ service, setService }) => {

    return <>
        <p>How did you like the service?</p>
        <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
        </select>
    </>
}
// Service Component 




// FrindService Component 
let FrindService = ({ frindService, setFrindService }) => {

    return <>

        <p>How did your friend like the service?</p>
        <select value={frindService} onChange={(e) => setFrindService(e.target.value)}>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was okay (5%)</option>
            <option value="10">It was good (10%)</option>
            <option value="20">Absolutely amazing! (20%)</option>
        </select>
    </>
}
// FrindService Component 




// Total Component 
let Total = ({ bill, handelReset, frindService, service }) => {
    let serviceTip = bill * (service / 100);
    let frindServiceTip = bill * (frindService / 100);
    let totalTip = serviceTip + frindServiceTip;
    return <>
        <p>You pay ${bill} (${bill} + ${totalTip} tip)</p>
        <button type="" onClick={handelReset}>reset</button>
    </>
}
// Total Component 


export default Tip;