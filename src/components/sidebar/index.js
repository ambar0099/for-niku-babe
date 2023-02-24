import React, { useCallback, useEffect, useRef, useState } from "react";
import { HexColorPicker } from 'react-colorful';
import { Dropdown } from 'primereact/dropdown';
import Select from 'react-select';
import axios from 'axios';
import _ from 'lodash';
import { UploadFontModal } from "../../components/shared/font-upload-modal";

import './sidebar.scss';


const SideBar = (props) => {
    const selectedElementType = props?.selectedElement?.elementType;
    const selectedElementName = props?.selectedElement?.elementName;
    const googleFontAPIKey = 'AIzaSyAyeonv1NWYZkoc5CAgWe7x1R4F6m4rz2I';
    const selectedScreen = props?.selectedElement?.screen;
    const bgColorPickerPopover = useRef();
    const borderColorPickerPopover = useRef();
    const [color, setColor] = useState('#b7b6b6');
    const [borderColor, setBorderColor] = useState('#b7b6b6');
    const [isBgColorPickerOpen, bgColorPickerToggle] = useState(false);
    const [isBorderColorPickerOpen, borderColorPickerToggle] = useState(false);
    const [isFontModalHidden, setFontModal] = useState(true);
    const [fontSize, setFontSize] = useState(14);
    const [borderRadius, setBorderRadius] = useState(null);
    const [textBold, setTextBold] = useState('');
    const [textDecoration, setTextDecoration] = useState('none');
    const [fontStyle, setFontStyle] = useState('normal');
    const [googleFonts, setGoogleFonts] = useState([]);
    const [selectedFont, setSelectedFont] = useState(null);
    const [customFonts, setCustomFonts] = useState(null);
    const [screenObj, setScreenObj] = useState({});
    const bgColorPickerPopoverClose = useCallback(() => bgColorPickerToggle(false), []);
    const borderColorPickerPopoverClose = useCallback(() => borderColorPickerToggle(false), []);

    useEffect(() => {
        setScreenObj(_.cloneDeep(props.dbObject));
        getGoogleFonts();
    }, []);

    useEffect(() => {
        screenObj && props.updateValue({
            data: screenObj, screen: selectedScreen, id: selectedElementName, param: 'fontSize', val: `${fontSize}px`, selector: 'style'
        });
    }, [fontSize]);

    useEffect(() => {
        screenObj && props.updateValue({
            data: screenObj, screen: selectedScreen, id: selectedElementName, param: 'fontWeight', val: textBold, selector: 'style'
        });
    }, [textBold]);

    useEffect(() => {
        screenObj && props.updateValue({
            data: screenObj, screen: selectedScreen, id: selectedElementName, param: 'textDecoration', val: textDecoration, selector: 'style'
        });
    }, [textDecoration]);

    useEffect(() => {
        screenObj && props.updateValue({
            data: screenObj, screen: selectedScreen, id: selectedElementName, param: 'fontStyle', val: fontStyle, selector: 'style'
        });
    }, [fontStyle]);

    useEffect(() => {
        const selector = (selectedElementType === 'icon') ? 'icon' : 'style';
        const param = (selectedElementType === 'text' || selectedElementType === 'icon') ? 'color' : 'backgroundColor';
        screenObj && props.updateValue({
            data: screenObj, screen: selectedScreen, id: selectedElementName, param: param, val: color, selector: selector
        });
    }, [color]);

    useEffect(() => {
        if (selectedElementType === 'button') {
            screenObj && props.updateValue({
                data: screenObj, screen: selectedScreen, id: selectedElementName, param: 'border', val: `1px solid ${borderColor}`, selector: 'style'
            });
        } else {
            screenObj && props.updateValue({
                data: screenObj, id: 'containerColor', val: `1px solid ${borderColor}`
            });
        }
    }, [borderColor]);

    useEffect(() => {
        if (selectedElementType === 'button') {
            screenObj && props.updateValue({
                data: screenObj, screen: selectedScreen, id: selectedElementName, param: 'borderRadius', val: borderRadius, selector: 'style'
            });
        }
    }, [borderRadius]);

    useEffect(() => {
        if (selectedElementType === 'text') {
            let fontFound = false;
            setColor(props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.color);
            setTextBold(props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.fontWeight);
            setTextDecoration(props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.textDecoration);
            setFontSize(props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.fontSize?.split('px')[0]);
            setFontStyle(props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.fontStyle);
            setFontStyles(textBold, textDecoration, fontStyle);
            googleFonts.forEach(fontObj => {
                if (fontObj.family === props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.fontFamily) {
                    setSelectedFont(fontObj);
                    fontFound = true;
                }
            });
            if (!fontFound) {
                setSelectedFont(googleFonts[0]);
            }
        } else if (selectedElementType === 'button') {
            setColor(props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.backgroundColor);
            setBorderColor(props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.border?.split(' ')[2]);
        }
    }, [selectedElementName]);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

    const setFontStyles = (textBold, textDecoration, fontStyle) => {
        const boldButton = document.querySelector('#bold-btn');
        const italicButton = document.querySelector('#italic-btn');
        const underlineButton = document.querySelector('#underline-btn');
        if (textBold === 'bold') {
            if (boldButton) {
                boldButton.classList.add('font-style-buttons-click');
            }
        } else {
            if (boldButton) {
                boldButton.classList.remove('font-style-buttons-click');
            }
        }
        if (textDecoration === 'underline') {
            if (underlineButton) {
                underlineButton.classList.add('font-style-buttons-click');
            }
        } else {
            if (underlineButton) {
                underlineButton.classList.remove('font-style-buttons-click');
            }
        }
        if (fontStyle === 'italic') {
            if (italicButton) {
                italicButton.classList.add('font-style-buttons-click');
            }
        } else {
            if (italicButton) {
                italicButton.classList.remove('font-style-buttons-click');
            }
        }
    }

    const getGoogleFonts = () => {
        try {
            axios({
                method: 'get',
                url: `https://www.googleapis.com/webfonts/v1/webfonts?key=${googleFontAPIKey}`,
            }).then(data => {
                setGoogleFonts(data.data.items);
                setSelectedFont(data.data.items[0]);
            });
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    const handleCustomFontClick = () => {
        setFontModal(false);
    }

    const onHandleCloseEvent = () => {
        setFontModal(true);
    }

    const onFontSizeChange = (event) => {
        if (props.selectedElement) {
            setFontSize(event.target.value.replace(/[^0-9]/g, ''));
        }

    }

    const onFontStyleClick = (event) => {
        if (props.selectedElement) {
            let isStyleAdded = null;
            if (event.currentTarget.classList.contains('font-style-buttons-click')) {
                isStyleAdded = false;
                event.currentTarget.classList.remove('font-style-buttons-click');
            } else {
                isStyleAdded = true;
                event.currentTarget.classList.add('font-style-buttons-click');
            }
            switch (event.currentTarget.id) {
                case 'bold-btn':
                    if (isStyleAdded) {
                        setTextBold('bold');
                    } else {
                        setTextBold('300');
                    }
                    break;
                case 'underline-btn':
                    if (isStyleAdded) {
                        setTextDecoration('underline');
                    } else {
                        setTextDecoration('none');
                    }
                    break;
                case 'italic-btn':
                    if (isStyleAdded) {
                        setFontStyle('italic');
                    } else {
                        setFontStyle('normal');
                    }
                    break;
            }
        }
    }

    const onHandleSaveEvent = (filedata) => {
        // const token = `${`Bearer ` + props.widgetContext.session}`;
        // const blob = filedata.file;
        // const formData = new FormData();
        // formData.append("name", filedata.fontFamily);
        // formData.append("filename", blob);
        // try {
        //     axios({
        //         method: 'post',
        //         url: 'http://widgetapi.j-cos.me/api/fonts',
        //         data: formData,
        //         headers: {
        //             'Authorization': token, 'admin-id': adminId,
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     }).then(data => {
        //         setCustomFonts(data.data.data);
        // const sheet = window.document.styleSheets[0];
        // const latestFont = filedata;
        // sheet.insertRule(`@font-face {font-family: ${latestFont.filename};font-style: normal;font-weight: normal;src:url(${latestFont.filepath});}`, sheet.cssRules.length);
        //     });
        // } catch (error) {
        //     return [];
        // }
    }

    const BorderColorPickerOutSideClick = (ref, handler) => {
        useEffect(() => {
            let startedInside = false;
            let startedWhenMounted = false;
            const listener = (event) => {
                // Do nothing if `mousedown` or `touchstart` started inside ref element
                if (startedInside || !startedWhenMounted) return;
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) return;
                handler(event);
            };
            const validateEventStart = (event) => {
                startedWhenMounted = ref.current;
                startedInside = ref.current && ref.current.contains(event.target);
            };
            document.addEventListener('mousedown', validateEventStart);
            document.addEventListener('touchstart', validateEventStart);
            document.addEventListener('click', listener);
            return () => {
                document.removeEventListener('mousedown', validateEventStart);
                document.removeEventListener('touchstart', validateEventStart);
                document.removeEventListener('click', listener);
            };
        }, [ref, handler]);
    };

    const BgColorPickerOutSideClick = (ref, handler) => {
        useEffect(() => {
            let startedInside = false;
            let startedWhenMounted = false;
            const listener = (event) => {
                // Do nothing if `mousedown` or `touchstart` started inside ref element
                if (startedInside || !startedWhenMounted) return;
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) return;
                handler(event);
            };
            const validateEventStart = (event) => {
                startedWhenMounted = ref.current;
                startedInside = ref.current && ref.current.contains(event.target);
            };
            document.addEventListener('mousedown', validateEventStart);
            document.addEventListener('touchstart', validateEventStart);
            document.addEventListener('click', listener);
            return () => {
                document.removeEventListener('mousedown', validateEventStart);
                document.removeEventListener('touchstart', validateEventStart);
                document.removeEventListener('click', listener);
            };
        }, [ref, handler]);
    };

    BgColorPickerOutSideClick(bgColorPickerPopover, bgColorPickerPopoverClose);
    BorderColorPickerOutSideClick(borderColorPickerPopover, borderColorPickerPopoverClose);

    const colorChange = (event) => {
        setColor(event);
    }

    const borderColorChange = (event) => {
        setBorderColor(event);
    }

    const bgColorInputChange = (event) => {
        setColor(event.target.value);
    }

    const borderColorInputChange = (event) => {
        setBorderColor(event.target.value);
    }

    const onBorRadiusChange = (event) => {
        const borderRadiusValue = event.target.checked ? '2em' : '0em';
        setBorderRadius(borderRadiusValue);
    }

    const onGoogleFontChange = (font, fromGoogle = false) => {
        setSelectedFont(font.value);
        var sheet = window.document.styleSheets[0];
        const fontFamily = font.value.family || font.value.filename;
        if (fromGoogle) {
            sheet.insertRule(`@font-face {font-family: ${fontFamily};font-style: normal;font-weight: normal;src:url(${font.value.files.regular});}`, sheet.cssRules.length);
            setSelectedFont(font.value);
            screenObj && props.updateValue({
                data: screenObj, screen: selectedScreen, id: selectedElementName, param: 'fontFamily', val: fontFamily, selector: 'style'
            });
        }
    }

    const onContainerBorderRadiusChange = (event) => {
        const isChecked = event.target.checked;
        screenObj && props.updateValue({
            data: screenObj, screen: selectedScreen, id: 'containerBorder', param: 'fontFamily', val: isChecked, selector: 'style'
        });
    }

    return (
        <React.Fragment>
            <div className="container-fluid d-flex flex-column h-100 align-items-center px-0">
                <div className="row w-100">
                    <div className="main col-12 h-100">
                        <div id="mySidenav" className="sidenav">
                            <div className='publish-widget-button' name="publish">
                                <button type='button'
                                    onClick={() => { }}>Publish widget</button>
                                101101 {props?.selectedElement?.elementType}
                            </div>
                            <hr></hr>
                            {selectedElementType === 'text' &&
                                <div className='font-styles-wrapper' role='group'>
                                    <div className="mb-1">Font Styles</div>
                                    <span className='btn-group'>
                                        <button id='bold-btn' type='button' onClick={(event) => { onFontStyleClick(event); }}
                                            className='btn font-style-buttons'><b><i>B</i></b></button>
                                        <button id='italic-btn' type='button'
                                            onClick={(event) => { onFontStyleClick(event); }} className='btn font-style-buttons'><b><i>I</i></b></button>
                                        <button id='underline-btn' type='button'
                                            onClick={(event) => { onFontStyleClick(event); }} className='btn font-style-buttons'><b><i>U</i></b></button>
                                    </span>
                                    <hr></hr>
                                </div>
                            }
                            {selectedElementType === 'text' &&
                                <div className="font-size-wrapper w-100">
                                    <div className="mb-1">Font Size</div>
                                    <input type='number' value={fontSize} className="w-75 common-text-style" onChange={onFontSizeChange} />
                                    <hr></hr>
                                </div>}
                            {selectedElementType === 'text' &&
                                <div className="fonts-list-wrapper w-100 row">
                                    <div className="mb-1 col">Fonts:</div>
                                    <Dropdown optionLabel="family" filter filterBy="family"
                                        onChange={(e) => onGoogleFontChange(e, true)} value={selectedFont} options={googleFonts}
                                        placeholder="Select a Font" />
                                    <hr></hr>
                                </div>}
                            {selectedElementType === 'text' &&
                                <div className="custom-fonts-list-wrapper w-100 row">
                                    <span className="mb-1 col">Custom Fonts</span>
                                    <Select className="col" options={options} />
                                </div>}
                            {selectedElementType === 'text' &&
                                <div className="mt-3 custom-fonts">
                                    <button className="btn upload-font-btn btn-secondary" onClick={handleCustomFontClick}>Upload Custom Font</button>
                                    <UploadFontModal isHidden={isFontModalHidden}
                                        onHandleClose={onHandleCloseEvent}
                                        onHandleSave={onHandleSaveEvent}></UploadFontModal>
                                    <hr></hr>
                                </div>}
                            <div className="bg-color-picker-container">
                                <div>Color</div>
                                <div className="bg-color-picker-controls">
                                    <input className='color-input form-control mt-2 common-text-style' name='color-picker'
                                        value={color}
                                        onChange={bgColorInputChange}></input>
                                    <div className='picker'>
                                        <div
                                            className='color-picker mt-2'
                                            style={{ backgroundColor: color, border: '1px solid #5db0b9' }}
                                            onClick={() => bgColorPickerToggle(true)}
                                        />

                                        {isBgColorPickerOpen && (
                                            <div className='color-picker-popover' ref={bgColorPickerPopover}>
                                                <HexColorPicker color={color} onChange={colorChange} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="border-color-picker-container">
                                <div>Border Color</div>
                                <div className="border-color-picker-controls">
                                    <input className='color-input form-control mt-2' name='color-picker'
                                        value={borderColor} onChange={borderColorInputChange}></input>
                                    <div className='picker'>
                                        <div
                                            className='color-picker mt-2'
                                            style={{ backgroundColor: borderColor, border: '1px solid #5db0b9' }}
                                            onClick={() => borderColorPickerToggle(true)}
                                        />

                                        {isBorderColorPickerOpen && (
                                            <div className='color-picker-popover' ref={borderColorPickerPopover}>
                                                <HexColorPicker color={borderColor} onChange={borderColorChange} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="border-container">
                                <input type="checkbox" onChange={(event) => { onContainerBorderRadiusChange(event); }} className="change-border-checkbox" id="borderChange" />
                                <label className="change-border-label" htmlFor="borderChange">Make Container Border Round</label>
                            </div>
                            <hr></hr>
                            <div className="border-change-container">
                                <input type="checkbox" onChange={(event) => { onBorRadiusChange(event); }} className="change-border-radius-checkbox" id="borderRadiuChange" />
                                <label className="change-border-label" htmlFor="borderChange">Make Buttons Round</label>
                            </div>
                            <hr></hr>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default SideBar