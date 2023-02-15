import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HexColorPicker } from 'react-colorful';
import './sidebar.scss';
import Select from 'react-select'
import { UploadFontModal } from "../../components/shared/font-upload-modal";
// import {axios} from 'axios;'
import _ from 'lodash';


const SideBar = (props) => {
    const selectedElementType = props?.selectedElement?.elementType;
    const selectedElementName = props?.selectedElement?.elementName;
    const selectedScreen = props?.selectedElement?.screen;
    const navigate = useNavigate();
    const bgColorPickerPopover = useRef();
    const borderColorPickerPopover = useRef();
    const [color, setColor] = useState('#b7b6b6');
    const [borderColor, setBorderColor] = useState('#b7b6b6');
    const [isBgColorPickerOpen, bgColorPickerToggle] = useState(false);
    const [isBorderColorPickerOpen, borderColorPickerToggle] = useState(false);
    const bgColorPickerPopoverClose = useCallback(() => bgColorPickerToggle(false), []);
    const borderColorPickerPopoverClose = useCallback(() => borderColorPickerToggle(false), []);
    const [isFontModalHidden, setFontModal] = useState(true);
    const [fontSize, setFontSize] = useState(14);
    const [textBold, setTextBold] = useState('');
    const [textDecoration, setTextDecoration] = useState('none');
    const [fontStyle, setFontStyle] = useState('normal');
    const [screenObj, setScreenObj] = useState({});

    useEffect(() => {
        setScreenObj(_.cloneDeep(props.dbObject));
    }, []);


    const onGoogleFontSelectClick = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

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
        const param = selectedElementType === 'text' ? 'color' : 'backgroundColor';
        screenObj && props.updateValue({
            data: screenObj, screen: selectedScreen, id: selectedElementName, param: param, val: color, selector: 'style'
        });
    }, [color]);

    useEffect(() => {
        console.log(9999, selectedElementType);
        if (selectedElementType) {
            const color = props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.color ?
                props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.color :
                props?.dbObject[selectedScreen]?.elements[selectedElementName]?.style?.backgroundColor;
            setColor(color);
        }
    }, [selectedElementType]);

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
        //         const sheet = window.document.styleSheets[0];
        //         const latestFont = data.data.data[data.data.data.length - 1];
        //         sheet.insertRule(`@font-face {font-family: ${latestFont.filename};font-style: normal;font-weight: normal;src:url(${latestFont.filepath});}`, sheet.cssRules.length);
        //     });
        // } catch (error) {
        //     console.log('errorerrorerrorerrorerror');
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

    const filterFunction = () => {
        const input = document.getElementById("myInput");
        const filter = input.value.toUpperCase();
        const div = document.getElementById("myDropdown");
        const a = div.getElementsByTagName("a");
        for (let i = 0; i < a.length; i++) {
            let txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    const navigateClick = () => {
        navigate('/coupons');
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
                            {selectedElementType !== 'button' &&
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
                            {selectedElementType !== 'button' &&
                                <div className="font-size-wrapper w-100">
                                    <div className="mb-1">Font Size</div>
                                    <input type='number' value={fontSize} className="w-75 common-text-style" onChange={onFontSizeChange} />
                                    <hr></hr>
                                </div>}
                            {selectedElementType !== 'button' &&
                                <div className="fonts-list-wrapper w-100 row">
                                    <div className="mb-1 col">Fonts</div>
                                    {/* <button onClick={onGoogleFontSelectClick} className="dropbtn">Select Fonts</button>
                            <div id="myDropdown" className="dropdown-content">
                                <input type="text" placeholder="Search" onKeyUp={filterFunction} />
                                <a href="#about">home</a>
                                <a href="#base">contact</a>
                            </div> */}
                                    <Select className="col" options={options} />
                                    <hr></hr>
                                </div>}
                            {selectedElementType !== 'button' &&
                                <div className="custom-fonts-list-wrapper w-100 row">
                                    <span className="mb-1 col">Custom Fonts</span>
                                    <Select className="col" options={options} />
                                </div>}
                            {selectedElementType !== 'button' &&
                                <div className="mt-3 custom-fonts">
                                    <button className="btn upload-font-btn btn-secondary" onClick={handleCustomFontClick}>Upload Custom Font</button>
                                    <UploadFontModal isHidden={isFontModalHidden}
                                        onHandleClose={onHandleCloseEvent}
                                        onHandleSave={onHandleSaveEvent}></UploadFontModal>
                                    <hr></hr>
                                </div>}
                            <div className="bg-color-picker-container">
                                <div>Background Color</div>
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
                                <input type="checkbox" onChange={(event) => { }} className="change-border-checkbox" id="borderChange" />
                                <label className="change-border-label" htmlFor="borderChange">Change container border</label>
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