/* eslint-disable react/prop-types */

const NumberInput = ({value ,onChange , ...rest}) => {

    const handleChange =(e)=>{
      const  value = e.target.valueAsNumber || 0 
       onChange(value)
    }
    return (
           <input
               value={value}
               min={0}
               type="number"
               onChange={handleChange}
               {...rest}
           />
    );
};

export default NumberInput;