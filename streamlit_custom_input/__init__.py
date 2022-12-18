import os
import streamlit.components.v1 as components

_RELEASE = False

if not _RELEASE:
    _component_func = components.declare_component(
        "custom_input",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("custom_input", path=build_dir)

def custom_input(label:str, initial_value: str) -> str:
    component_value = _component_func(label=label, initialValue=initial_value)
    return component_value