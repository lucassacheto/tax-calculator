

function Results(props){
    function formatAmount(val) {        
        return new Intl.NumberFormat('en-CA', {style: "currency", currency: "CAD"}).format(val)
    };
    
    function getBack(){props.setResults({hasResult: false})}

    return (
        <div className="result">
            <button onClick={getBack}> back</button>

            <table className="resultsTable" border="0">
                <tbody>
                <tr>
                    <td>Enter your taxable income from line 26000 of your return</td>
                    <td>{ formatAmount(props.results.taxIncome) }</td>
                    <td>Line 63</td>
                </tr>                
                <tr>
                    <td>Base amount</td>
                    <td>- { formatAmount(props.results.base) }</td>
                    <td>Line 64</td>
                </tr>
                <tr>
                    <td>Line 63 minus line 64 (this amount cannot be negative)</td>
                    <td>= { formatAmount(props.results.firstCalc) }</td>
                    <td>Line 65</td>
                </tr>
                <tr>
                    <td>Federal tax rate</td>
                    <td>x {props.results.fedTax}%</td>
                    <td>Line 66</td>
                </tr>
                <tr>
                    <td>Multiply the amount on line 65 by the tax rate on line 66</td>
                    <td>= { formatAmount(props.results.multiplyAmount) }</td>
                    <td>Line 67</td>
                </tr>
                <tr>
                    <td>Tax on the amount from line 64</td>
                    <td>+ { formatAmount(props.results.taxAmount) }</td>
                    <td>Line 68</td>
                </tr>
                <tr>
                    <td>Add lines 67 and 68</td>
                    <td>= { formatAmount(props.results.total) }</td>
                    <td>Line 69</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Results;