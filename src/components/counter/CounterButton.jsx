
export default function CounterButton({by, IncrementMethod, DecrementMethod}) {
   
    return(
        <div className="Counter">
            <div>
                <button className="counterButton" onClick={ () => IncrementMethod(by)}>+{by}</button>
                <button className="counterButton" onClick={ () => DecrementMethod(by)}>-{by}</button>
            </div>
        </div>
    )
}

CounterButton.defaultProps = {
    by: 5
}