import React from 'react';
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib"

/**
 * This should match the arguments in __init__.py
 */
interface PythonArgs {
  label: string;
  initialValue?: string;
}

const CustomInput = (props: ComponentProps) => {
  React.useEffect(() => Streamlit.setFrameHeight());

  const args: PythonArgs = props.args;
  const [value, setValue] = React.useState<string>(args.initialValue ?? "");

  return (
    <div className='CustomInput'>
      <label>{args.label}</label>
      <input type="text" value={value} onChange={(e) => {
        setValue(e.currentTarget.value);
        Streamlit.setComponentValue(e.currentTarget.value);
      }} />
    </div>
  );
}

export default withStreamlitConnection(CustomInput);