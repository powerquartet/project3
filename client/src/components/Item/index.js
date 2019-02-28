import React, { PureComponent } from "react";
import { DragSource } from "react-dnd";
import PropTypes from 'prop-types';

const Types = {
    ITEM: "portion"
};

const itemSource = {
    beginDrag(props) {
        return props;
    },

    isDragging(props, monitor) {
        return monitor.getItem().id === props.id;
    },

    endDrag(props) {
        return props.id
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Item extends PureComponent {

    static propTypes = {
        isDragging: PropTypes.bool.isRequired,
        connectDragSource: PropTypes.func.isRequired,
    }

    render() {
        const { isDragging, connectDragSource } = this.props;
        const src = JSON.stringify(this.props.src);

        return connectDragSource(
            this.props.size === 1 ?
                <div className="outer-item">
                    {!isDragging && <div className="item" style={{ "background": `url(${src})` }}>
                        {this.props.showDelete ? <button className="item-button" onClick={() => (this.props.handleClick(this.props, this.props.meal))}>x</button> : ""}
                    </div>}
                    {isDragging && <div className="item" style={{ "background": `url(${src})`, "opacity": "0.3" }}></div>}
                </div>
                :
                this.props.size === 0.5 ?
                    <div className="outer-item">
                        {!isDragging && <div className="half-item" style={{ "background": `url(${src})` }}>
                            {this.props.showDelete ? <button className="item-button" onClick={() => (this.props.handleClick(this.props, this.props.meal))}>x</button> : ""}
                        </div>}
                        {isDragging && <div className="half-item" style={{ "background": `url(${src})`, "opacity": "0.3" }}></div>}
                    </div >
                    :
                    <div></div>
        )
    }
}

export default DragSource(Types.ITEM, itemSource, collect)(Item)