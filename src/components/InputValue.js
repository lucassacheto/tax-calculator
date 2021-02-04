import React, { useState } from "react";

function InputValue(props){

    const [amount, setAmount] = useState("");
    const [showError, setShowError] = useState(false);

    function getAmount(event){        
        setAmount(event.target.value);
    }   

    function useValue(event){
        
        if(amount !== ""){
            let _base;    
            let _firstCalc;
            let _fedTax;
            let _multiplyAmount;
            let _taxAmount;
            let _total;

            switch (true) {
                
                case amount <= 49_020 && amount > 0 :
                    _base = 0;
                    _firstCalc = amount - _base;
                    if (_firstCalc === 0){_firstCalc = ""};
                    _fedTax = 15.00;
                    _multiplyAmount = (_firstCalc / 100) * _fedTax;
                    _taxAmount = 0;
                    _total = _multiplyAmount;
                    break;

                case amount > 49_020 && amount <= 98_040 :
                    _base = 49_020;
                    _firstCalc = amount - _base;
                    _fedTax = 20.50;
                    _multiplyAmount = (_firstCalc / 100) * _fedTax;
                    _taxAmount = 7_353;
                    _total = _multiplyAmount + _taxAmount;
                    break;

                case amount > 98_040 && amount <= 151_978:
                    _base = 98040;
                    _firstCalc = amount - _base;
                    _fedTax = 26.00;
                    _multiplyAmount = (_firstCalc / 100) * _fedTax;
                    _taxAmount = 17_402.10;
                    _total = _multiplyAmount + _taxAmount;
                    break;

                case amount > 151_978 && amount <= 216_511:
                    _base = 151_978;
                    _firstCalc = amount - _base;
                    _fedTax = 29.00;
                    _multiplyAmount = (_firstCalc / 100) * _fedTax;
                    _taxAmount = 31_425.98;
                    _total = _multiplyAmount + _taxAmount;
                    break;
                
                case amount > 216_511:
                    _base = 216_511;
                    _firstCalc = amount - _base;
                    _fedTax = 33.00;
                    _multiplyAmount = (_firstCalc / 100) * _fedTax;
                    _taxAmount = 50_140.55;
                    _total = _multiplyAmount + _taxAmount;
                    break;
                default:
                break;
            }
            
            props.setResults({
                taxIncome: amount,
                base: _base,
                firstCalc: _firstCalc,
                fedTax: _fedTax,
                multiplyAmount: _multiplyAmount,
                taxAmount: _taxAmount,
                total: _total,
                hasResult: true
            })
            setAmount("")
            event.preventDefault();
        }else{
            setShowError(true);
            event.preventDefault();
        }
    }

    return(        
        <form onSubmit={useValue}>
            <div className="boxInput">
                { showError && (
                    <div className="error">Please fill the form</div>
                )}
                <input type="number" value={amount} onChange={getAmount} placeholder="Enter your annual gross" />
                <button>submit</button>                
            </div>
        </form>
    )
}

export default InputValue;