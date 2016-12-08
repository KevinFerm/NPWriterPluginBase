import {Component} from 'substance'

class DevKitComponent extends Component {

    /**
     * Method called when component is disposed and removed from DOM
     */
    dispose() {
        // Perfect place to remove eventlisteners etc
    }

    /**
     * Constructor
     * @param args
     */
    constructor(...args) {
        super(...args)
    }


    /**
     *
     * @returns {{clickCount: number}}
     */
    getInitialState() {
        return {
            clickCount: 0
        }
    }



    /**
     * Render method is called whenever there's a change in state or props
     * @param $$
     * @returns {*}
     */
    render($$) {
        const el = $$('div')
        let template = require("./templates/DevKitComponent.pug")
        let locals = {
            label:"Devkit plugin loaded"
        }
        let html = template(locals)

        el.setInnerHTML(html)

        return el
    }
}
export default DevKitComponent