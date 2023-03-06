import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch } from "react-redux";
import ACTION from "../../../state/actions";


const ColorWidget = ({ color, backgroundColor, borderColor }) => {
    const bgRef = useRef();
    const brRef = useRef();
    const dispatch = useDispatch();
    const [bgColor, setBgColor] = useState(backgroundColor);
    const [brColor, setBrColor] = useState(borderColor);
    const [isBgColorPickerOpen, bgColorPickerToggle] = useState(false);
    const [isBrColorPickerOpen, brColorPickerToggle] = useState(false);

    useEffect(() => {
        dispatch({
            type: ACTION.UPDATE_STYLE,
            payload: {
                backgroundColor: bgColor,
                borderColor: brColor
            }
        }, [bgColor, brColor, dispatch]);
    });

    const OutSideClick = (ref, handler) => {
        useEffect(() => {
            const handleClickOutSide = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    handler();
                }
            }
            document.addEventListener('click', handleClickOutSide, true);
            return () => {
                document.removeEventListener('click', handleClickOutSide, true);
            }
        }, [ref, handler]);
    }

    const onBgChange = (event) => setBgColor(event.target.value);
    const onBrChange = (event) => setBrColor(event.target.value);

    OutSideClick(bgRef, () => bgColorPickerToggle(false));
    OutSideClick(brRef, () => brColorPickerToggle(false));

    return (
        <>
            <div className="bg-color-picker-container">
                <div>Background Color</div>
                <div className="bg-color-picker-controls">
                    <input className='color-input form-control mt-2 common-text-style' name='color-picker'
                        value={bgColor}
                        onChange={onBgChange}></input>
                    <div className='picker'>
                        <div
                            className='color-picker mt-2'
                            style={{ backgroundColor: bgColor }}
                            onClick={() => { bgColorPickerToggle(true) }}
                        />

                        {isBgColorPickerOpen && (
                            <div className='color-picker-popover' ref={bgRef}>
                                <HexColorPicker color={bgColor} onChange={setBgColor} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="bg-color-picker-container">
                <div>Border Color</div>
                <div className="bg-color-picker-controls">
                    <input className='color-input form-control mt-2 common-text-style' name='color-picker'
                        value={brColor}
                        onChange={onBrChange}></input>
                    <div className='picker'>
                        <div
                            className='color-picker mt-2'
                            style={{ backgroundColor: brColor }}
                            onClick={() => { brColorPickerToggle(true) }}
                        />

                        {isBrColorPickerOpen && (
                            <div className='color-picker-popover' ref={brRef}>
                                <HexColorPicker color={brColor} onChange={setBrColor} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export {
    ColorWidget
}