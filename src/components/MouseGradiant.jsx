import {Component, createRef} from "react";

export default class MouseGradiant extends Component {
    constructor(props) {
        super(props);
        this.divRef = createRef();
        this.onMouseMove = this.onMouseMove.bind(this);
        document.addEventListener('mousemove', (e) => {
            this.onMouseMove(e);
        });
    }

    onMouseMove(e) {
        if (this.divRef.current)
            this.divRef.current.style = 'background: radial-gradient(600px at ' + e.pageX + 'px ' + e.pageY + 'px, rgba(29, 78, 216, 0.15), transparent 80%);';
    }

    render() {
        return <>
            <div ref={this.divRef} className={'pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'}></div>
        </>
    }
}