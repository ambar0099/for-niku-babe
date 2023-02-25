import React from "react";
import './sidebar.scss';
import { useDispatch, useSelector } from "react-redux";
import { updateWidget } from '../../state/actions'
import { ColorWidget } from "./colors";

const SideBar = () => {
    const state = useSelector(state => state.giftCard);
    const activeScreen = state.activeScreen;
    const dispatch = useDispatch();
    if (!activeScreen) return <h4>Loading</h4>
    const activeElement = state.activeElement;
    if (!activeElement) return <h4>Please select any element</h4>
    const elementProps = state.widget.initial_json[activeScreen].elements[activeElement];

    const handlePublish = () => {
        dispatch(updateWidget());
    }

    return (
        <>
            <div className="row">
                <div className="main h-100">
                    <div id="mySidenav" className="sidenav">
                        <div className='publish-widget-button' name="publish">
                            <button type='button'
                                onClick={handlePublish}>Publish widget</button>
                        </div>
                        <hr></hr>
                        {elementProps.text &&
                            <div>
                                {/* <FontWeight {...elementProps.style}/> */}
                            </div>
                        }
                        <ColorWidget {...elementProps.style}></ColorWidget>
                    </div>
                </div>
            </div>

        </>
    );
};
export default SideBar