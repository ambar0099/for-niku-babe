import React, { useEffect, useState } from 'react';

const allowedExtension = ['.otf', '.ttf', '.svg', '.eot', '.woff', '.woff2'];

const PreviewFont = (file) => {

    const [filePath, setfilePath] = useState('');

    if(file && file.file) {
        var reader = new FileReader();
        reader.onload = function (e) { 
            const filePath = `
                @font-face {    
                    font-family: preview; src: url(${e.target.result})
                }
                .preview {
                    font-family: preview;
                }
            `;
            setfilePath(filePath);
        }
        reader.readAsDataURL(file.file);
    }

    return (
        <div>
            <style>{filePath ? filePath : 'No Preview Avaialble'}</style>
            <hr/>
            <h4 className="text-center">Preview Text</h4>
        </div>
    )
}

const UploadFont = (props) => {

    const [filename, setfilename] = useState('');
    const [file, setfile] = useState('');

    const validateForm = () => {
        props.checkFormValid((file && filename) ? true : false, filename, file);
    }

    useEffect(() => {
        validateForm();
    }, [filename, file])

    return(
        <form action='.'>
            <div>Font family name</div>
            <input type='text' className='custom-font-name common-text-style' onChange={(event) => setfilename(event.target.value)}></input>
            <input className='mt-4' type='file' accept={allowedExtension}
            onChange={(event) => setfile(event.target.files[0])}></input>

            <div className={`preview ${file ? 'd-block' : 'd-none'}`}>
                <PreviewFont file={file}></PreviewFont>
            </div>
        </form>
    )
}

UploadFont.defaultProps = {
    filename: '',
    file: null,
    checkFormValid: () => {}
}

export {
    UploadFont
}