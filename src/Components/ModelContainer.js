import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import 'aframe';
import $ from 'jquery';
//import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
export default class ModelContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: "",
            mtl:"",
            modal:false
        };
        this.onClose = this.onClose.bind(this);
        this.load3dModel = this.load3dModel.bind(this);
    }

    load3dModel(item){
        this.setState({
            obj: item.obj,
            mtl:item.mtl,
            modal:true
        });
        $('.a-canvas').css("position", "relative");
    }
    onClose(evt){
        this.setState({
            modal: false
        });
        $('body').removeClass('a-body');
        $('html').removeClass('a-html');
    }
    render() {
        return (
            <div className="model-conatiner p-3" id={"container"+this.props.index}>
               <h2> {this.props.items.name} </h2>
            <ul>
                {this.props.items.models.map((item, k) => {
                    return (
                        <a href="#" key={k} onClick={() => this.load3dModel(item)}><li  className="col-md-3 model-item m-3" >
                           <img src={item.thumb} className="model-img"/>
                           {item.name}
                        </li></a>
                    ) 
                })}
                </ul>
                <Modal isOpen={this.state.modal} toggle={() => this.onClose()} className={this.props.className}>
                    <ModalHeader toggle={() => this.onClose()}>3D View</ModalHeader>
                    <ModalBody>
                    <div className="popup3d">
                        <Scene>
                            <Entity obj-model={{ obj: this.state.obj, mtl: this.state.mtl }} />
                        </Scene>
                        </div>
                </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.onClose()}>Close</Button>
                    </ModalFooter>
                </Modal>
                
            </div>
        )
    }
}
