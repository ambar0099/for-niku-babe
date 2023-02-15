const Util = {
    blockEdit: (event) => {
        event.preventDefault();
    },
    blockPropagation(event) {
        event.stopPropagation();
    }
}

export default Util;