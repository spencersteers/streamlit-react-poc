import streamlit as st
from streamlit_custom_input import custom_input

result = custom_input(label="Custom Input Label", initial_value="")
st.write('Custom Input result = ', result);