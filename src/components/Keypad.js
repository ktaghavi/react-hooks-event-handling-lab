function Keypad (){
    function onChange(event) {
    console.log("Entering password...")
    }
    return (
        <div>
            <input
                onChange={onChange} 
                type="password"
            />
        </div>
    )
}

export default Keypad;